'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { createPendingTransaction, confirmTransaction } from '@/app/actions/payment';
import { showToast } from '@/components/Toast';

interface PayButtonProps {
  amountNaira: number;
  customerEmail: string;
  productId: string;
  userId?: string;
  itemType?: 'MARKETPLACE' | 'INVESTMENT';
}

export default function InterswitchPayButton({ amountNaira, customerEmail, productId, userId = "UNKNOWN", itemType = "MARKETPLACE" }: PayButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setIsProcessing(true);

    if (userId === "UNKNOWN" || !userId) {
      showToast("Please log in before making a purchase.", "error");
      window.location.href = '/login';
      return;
    }

    const amountKobo = (amountNaira * 100).toString();
    const trxRef = `KW_${Date.now()}`;
    
    try {
      await createPendingTransaction(productId, amountNaira, trxRef);
    } catch (err) {
      showToast("Failed to initialize secure transaction.", "error");
      setIsProcessing(false);
      return;
    }

    const paymentParams = {
      merchant_code: "MX6072",
      pay_item_id: "9405967",
      cust_email: customerEmail,
      site_redirect_url: window.location.origin + (itemType === 'INVESTMENT' ? '/dashboard' : '/orders'),
      txn_ref: trxRef,
      amount: amountKobo,
      currency: "566",
      mode: 'TEST',
      onComplete: async function (response: any) {

        
        if (response.resp === '00' || response.resp === '90000') {
          setIsProcessing(true);
          const success = await confirmTransaction(trxRef);
          
          if (success) {
            if (itemType === 'INVESTMENT') {
              showToast("Investment verified! Redirecting to portfolio...", "success");
              router.push(`/dashboard?ref=${trxRef}&status=success`);
            } else {
              showToast("Order confirmed! Redirecting to order details...", "success");
              router.push(`/order-confirmation?ref=${trxRef}`);
            }
          } else {
            showToast("Server verification failed. Please contact support.", "error");
            setIsProcessing(false);
          }
        } else {
          showToast(`Payment failed: ${response.desc || "Unknown error"}`, "error");
          setIsProcessing(false);
        }
      }
    };

    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.webpayCheckout) {
        // @ts-ignore
        window.webpayCheckout(paymentParams);
      } else {
        showToast("Payment module loading. Please wait a moment and retry.", "info");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error triggering Interswitch Modal", error);
      showToast("Failed to initialize payment gateway.", "error");
      setIsProcessing(false);
    }
  };

  return (
    <Button 
      onClick={handleCheckout} 
      disabled={isProcessing}
      className="w-full bg-[#004D40] hover:bg-[#002420] text-white"
    >
      {isProcessing ? "Connecting to Interswitch..." : `Pay ₦${amountNaira.toLocaleString()}`}
    </Button>
  );
}
