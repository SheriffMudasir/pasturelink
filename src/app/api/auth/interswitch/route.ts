import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const clientId = process.env.INTERSWITCH_CLIENT_ID;
    const secretKey = process.env.INTERSWITCH_SECRET_KEY;

    if (!clientId || !secretKey) {
      return NextResponse.json({ error: 'Missing Interswitch credentials' }, { status: 500 });
    }

    // Implementing the Node.js Buffer logic for Passport Auth
    const encoded = Buffer.from(`${clientId}:${secretKey}`).toString('base64');

    // Fetch token from: https://qa.interswitchng.com/passport/config/v1/token
    const response = await fetch('https://qa.interswitchng.com/passport/config/v1/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encoded}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials'
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Interswitch auth error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}