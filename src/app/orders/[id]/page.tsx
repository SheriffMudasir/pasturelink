import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Order Details",
  description: "View full receipt and delivery details for your livestock order.",
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: order } = await supabase
    .from('transactions')
    .select('*, products(*)')
    .eq('id', id)
    .single();

  if (!order) return notFound();

  const product = order.products;
  const metadata = product?.metadata || {};

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faf1] to-white">
      {/* Header */}
      <div className="bg-[#004D40] text-white px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/orders" className="text-white/60 hover:text-white text-xs font-medium transition-colors">
            ← Back to Orders
          </Link>
          <h1 className="text-3xl font-black tracking-tight mt-2">Order Receipt</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {/* Status Banner */}
        <div className={`rounded-2xl p-5 flex items-center gap-4 ${
          order.status === 'SUCCESS' 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-yellow-50 border border-yellow-200'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
            order.status === 'SUCCESS' ? 'bg-green-500' : 'bg-yellow-500'
          }`}>
            {order.status === 'SUCCESS' ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )}
          </div>
          <div>
            <p className={`font-bold text-sm ${order.status === 'SUCCESS' ? 'text-green-800' : 'text-yellow-800'}`}>
              {order.status === 'SUCCESS' ? 'Payment Confirmed' : 'Payment Pending'}
            </p>
            <p className={`text-xs mt-0.5 ${order.status === 'SUCCESS' ? 'text-green-600' : 'text-yellow-600'}`}>
              {order.status === 'SUCCESS' 
                ? 'Your order has been verified and is being processed.' 
                : 'We are still verifying your payment.'}
            </p>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex gap-4 p-5">
            <div
              className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${product?.image_url})` }}
            />
            <div className="flex-grow">
              <h2 className="font-bold text-gray-900 text-lg">{product?.name || 'Livestock'}</h2>
              <p className="text-gray-400 text-xs">{product?.breed}</p>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">{metadata.description}</p>
              <div className="flex gap-1.5 mt-2">
                {metadata.weight && <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[10px] font-medium">{metadata.weight}</span>}
                {metadata.age && <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[10px] font-medium">{metadata.age}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Receipt Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h3 className="font-bold text-gray-900 text-sm">Transaction Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Order Reference</span>
              <span className="font-mono font-bold text-[#004D40] text-xs">{order.reference}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-bold text-[#004D40]">₦{Number(order.amount_naira).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Status</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                order.status === 'SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {order.status === 'SUCCESS' ? 'Confirmed' : order.status}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-700 text-xs">
                {new Date(order.created_at).toLocaleDateString('en-NG', {
                  year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        {order.status === 'SUCCESS' && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="font-bold text-amber-800 text-sm mb-2">📦 Delivery Information</p>
            <ul className="space-y-1.5 text-xs text-amber-700 list-disc list-inside">
              <li>Our team will contact you within <strong>24 hours</strong> to arrange delivery.</li>
              <li>You&apos;ll receive a confirmation SMS/email with logistics details.</li>
              <li>All animals come with a verified health certificate.</li>
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/shop" className="flex-1">
            <Button className="w-full bg-[#004D40] hover:bg-[#002420] text-white">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/orders" className="flex-1">
            <Button variant="outline" className="w-full border-[#004D40] text-[#004D40] hover:bg-[#E8F5E9]">
              All Orders
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
