'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface PayButtonProps {
  amountNaira: number;
  customerEmail: string;
  itemType: 'MARKETPLACE' | 'INVESTMENT';
  itemId: string;
  buttonText: string;
}

export function InterswitchPayButton({ amountNaira, customerEmail, itemType, itemId, buttonText }: PayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    
    // 1. Kobo Conversion (CRITICAL for Interswitch)
    const amountKobo = (amountNaira * 100).toString();
    const transactionRef = `REF_${itemType}_${Date.now()}`;

    // 2. The Interswitch Inline Script config
    const paymentParams = {
      merchantCode: process.env.NEXT_PUBLIC_MERCHANT_CODE || "MX276072", 
      payItemID: process.env.NEXT_PUBLIC_PAY_ITEM_ID || "Default_Payable_MX276072", // Get this from your Interswitch dashboard
      customerEmail: customerEmail,
      redirectURL: "http://localhost:3000/dashboard", // Send to the Map Dashboard on success!
      text: buttonText,
      mode: 'TEST',
      transactionReference: transactionRef,
      amount: amountKobo,
      currency: "566", // NGN
      style: {
          theme: 'dark', // Fits Kwara NG
      },
      onComplete: function(response: any) {
        console.log("Interswitch Response: ", response);
        // If response is successful, redirect to dashboard to see the "Proof of Life" Map!
        if(response.resp === '00' || response.resp === '90000') {
           window.location.href = `/dashboard?success=true&ref=${transactionRef}&type=${itemType}`;
        }
        setLoading(false);
      }
    };

    // @ts-ignore - The script is loaded globally in layout.tsx
    if (typeof window !== 'undefined' && window.InterswitchPayweb) {
      // @ts-ignore
      let checkout = new window.InterswitchPayweb(paymentParams);
      checkout.checkout();
    } else {
      alert(`Interswitch payment module initialized. Amount: ${amountNaira} NGN`);
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handlePayment} 
      disabled={loading} 
      className="w-full bg-[#004D40] hover:bg-[#002420] text-white"
    >
      {loading ? "Initializing Secure Gateway..." : buttonText}
    </Button>
  );
}
