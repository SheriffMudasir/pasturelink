import { createClient } from '@/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const params = await searchParams;
  const reference = params.ref || '';

  const supabase = await createClient();

  // Look up the transaction + product details
  const { data: txn } = await supabase
    .from('transactions')
    .select('*, products(*)')
    .eq('reference', reference)
    .single();

  const product = txn?.products;

  return (
    <main className="min-h-screen bg-[#E8F5E9] flex items-center justify-center p-6">
      <Card className="max-w-lg w-full shadow-lg border-0 overflow-hidden">
        {/* Success Banner */}
        <div className="bg-[#004D40] text-white text-center py-8 px-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#76FF03]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Order Placed Successfully!</h1>
          <p className="text-white/80 mt-2 text-sm">
            Your livestock purchase has been confirmed.
          </p>
        </div>

        <CardContent className="p-6 space-y-5">
          {/* Order Details */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#004D40]">Order Details</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Reference</span>
                <span className="font-mono font-bold text-[#004D40]">{reference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Animal</span>
                <span className="font-semibold">{product?.name || 'Livestock'}</span>
              </div>
              {product?.breed && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Breed</span>
                  <span className="font-semibold">{product.breed}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-bold text-[#004D40]">
                  ₦{Number(txn?.amount_naira || 0).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-bold">
                  Confirmed
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#004D40]">Delivery Information</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              <p className="font-semibold mb-1">📦 What happens next?</p>
              <ul className="space-y-1 list-disc list-inside text-amber-700">
                <li>Our team will contact you within <strong>24 hours</strong> to arrange delivery or pickup.</li>
                <li>You&apos;ll receive a confirmation SMS/email with logistics details.</li>
                <li>All animals come with a verified health certificate.</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center text-sm text-gray-500 pt-2">
            <p>Questions? Contact us at <strong className="text-[#004D40]">support@pasturelink.ng</strong></p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Link href="/shop" className="flex-1">
              <Button className="w-full bg-[#004D40] hover:bg-[#002420] text-white">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/orders" className="flex-1">
              <Button variant="outline" className="w-full border-[#004D40] text-[#004D40] hover:bg-[#E8F5E9]">
                View My Orders
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
