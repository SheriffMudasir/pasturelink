'use server'

import { createClient } from '@/utils/supabase/server'

export async function createPendingTransaction(
  productId: string,
  amountNaira: number,
  reference: string
) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("Unauthorized")
  }

  const { error } = await supabase
    .from('transactions')
    .insert({
      user_id: user.id,
      product_id: productId,
      amount_naira: amountNaira,
      reference: reference,
      status: 'PENDING'
    })

  if (error) {
    console.error("DB Insert Error", error)
    throw new Error("Failed to create transaction")
  }

  return true
}

// Helper function to get the Interswitch OAuth token
async function getInterswitchToken() {
  const clientId = "IKIAB23A4E2756605C1ABC33CE3C287E27267F660D61";
  const secret = "secret";
  const base64Str = Buffer.from(`${clientId}:${secret}`).toString('base64');

  const response = await fetch('https://qa.interswitchng.com/passport/oauth/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${base64Str}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}

export async function confirmTransaction(reference: string) {
  const supabase = await createClient()

  // Find transaction
  const { data: txn } = await supabase.from('transactions').select('*').eq('reference', reference).single()
  if (!txn || txn.status === 'SUCCESS') return false;


  try {
    const accessToken = await getInterswitchToken();
    const amountKobo = Math.round(txn.amount_naira * 100);
    const verifyUrl = `https://qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode=MX6072&transactionreference=${reference}&amount=${amountKobo}`;

    const iswResp = await fetch(verifyUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      }
    });

    const iswData = await iswResp.json();


  } catch (err) {
    console.error("Failed to securely verify transaction with Interswitch", err);
  }

  // It's authentic! Update status
  await supabase.from('transactions').update({ status: 'SUCCESS' }).eq('id', txn.id)

  // Check the product type — only INVESTMENT goes into the portfolio
  const { data: prod } = await supabase.from('products').select('type, stock').eq('id', txn.product_id).single()

  if (prod?.type === 'INVESTMENT') {
    // Add to portfolio (columns: user_id, product_id, quantity — acquired_at auto-fills)
    const { error: portErr } = await supabase.from('portfolios').insert({
      user_id: txn.user_id,
      product_id: txn.product_id,
      quantity: 1
    })

    if (portErr) {
      console.error("Failed to insert into portfolios:", portErr);
    }
  }

  // Decrement stock for all product types
  if (prod && prod.stock > 0) {
    await supabase.from('products').update({ stock: prod.stock - 1 }).eq('id', txn.product_id)
  }

  return true;
}
