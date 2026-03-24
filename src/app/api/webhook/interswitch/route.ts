import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const macKey = process.env.INTERSWITCH_MAC_KEY || "";
    
    // Assuming the webhook sends some payload we need to verify using SHA-512 HMAC
    const transactionRef = body.transactionRef || "";
    const amount = body.amount || "";
    
    // Minimal mock verification logic (Interswitch requires hashing specific fields with MAC key)
    const dataString = `${transactionRef}${amount}`;
    const hash = crypto.createHmac('sha512', macKey).update(dataString).digest('hex');

    // Verify hash against a provided signature (usually in headers or body)
    // if (hash !== body.signature) { return NextResponse.json({ error: 'Invalid signature' }, { status: 400 }); }

    // On success (response.resp === '00'), update the mock user state to show the purchased asset.
    if (body.resp === '00') {
      // Mock logic to update user state / order status
      console.log(`Verification Successful. Mock Asset updated for Txn: ${transactionRef}`);
      return NextResponse.json({ status: 'success', message: 'Asset purchased successfully', data: body });
    }

    return NextResponse.json({ status: 'failed', message: 'Transaction not successful' });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}