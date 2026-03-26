import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

// Use standard supabase-js client to interact with DB directly in API route
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);
    
    // Security Check: hash the payload and compare against the Interswitch signature header
    const signatureHeader = req.headers.get('x-interswitch-signature');
    const macKey = process.env.INTERSWITCH_MAC_KEY || "";
    const hash = crypto.createHmac('sha512', macKey).update(rawBody).digest('hex');

    if (signatureHeader && hash !== signatureHeader) {
      console.error('Invalid Interswitch signature detected.')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const transactionRef = body.transactionRef || body.transactionReference || "";
    const amount = body.amount || 0;
    
    if (!transactionRef) {
      return NextResponse.json({ error: 'Missing transaction reference' }, { status: 400 });
    }

    // Extract details from the database using our short transaction reference
    const { data: pendingTxn, error: fetchErr } = await supabase
      .from('transactions')
      .select('*')
      .eq('reference', transactionRef)
      .single();

    if (fetchErr || !pendingTxn) {
      console.error("Unknown transaction reference", transactionRef);
      return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
    }

    const userId = pendingTxn.user_id;
    const productId = pendingTxn.product_id;

    const respCode = body.resp || body.responseCode;
    
    // If successful payment
    if (respCode === '00' || respCode === '90000') {
      
      // 1. Update Transaction record
      const { error: txnErr } = await supabase
        .from('transactions')
        .update({ status: 'SUCCESS' })
        .eq('id', pendingTxn.id);
        
      if (txnErr) { 
         console.error("Error updating transaction:", txnErr);
      }

      // 2. Insert into User Portfolio
      const { error: portErr } = await supabase
        .from('portfolios')
        .insert({
          user_id: userId,
          product_id: productId,
          quantity: 1
        });

      if (portErr) console.error("Error inserting portfolio:", portErr);

      // 3. Decrement Product Stock
      const { data: product } = await supabase
        .from('products')
        .select('stock')
        .eq('id', productId)
        .single();
        
      if (product && product.stock > 0) {
        await supabase
          .from('products')
          .update({ stock: product.stock - 1 })
          .eq('id', productId);
      }


      return NextResponse.json({ status: 'success' }, { status: 200 });
    }

    // If failed, record the failure
    if (pendingTxn.id) {
      await supabase
        .from('transactions')
        .update({ status: 'FAILED' })
        .eq('id', pendingTxn.id);
    }

    return NextResponse.json({ status: 'failed', message: 'Transaction not successful' });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}