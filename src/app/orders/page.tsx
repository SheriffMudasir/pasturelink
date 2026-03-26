import { createClient } from '@/utils/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Orders",
  description: "Track all your livestock marketplace purchases and order statuses.",
};

export default async function MyOrdersPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch all marketplace transactions joined with products
  const { data: orders } = await supabase
    .from('transactions')
    .select('*, products(*)')
    .eq('user_id', user?.id || '')
    .order('created_at', { ascending: false });

  // Filter to only MARKETPLACE orders (not investments)
  const marketOrders = orders?.filter((o: any) => o.products?.type === 'MARKETPLACE') || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faf1] to-white">
      {/* Header */}
      <div className="bg-[#004D40] text-white px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#76FF03] text-xs font-bold uppercase tracking-widest mb-1">PastureLink Market</p>
              <h1 className="text-3xl font-black tracking-tight">My Orders</h1>
              <p className="text-white/70 text-sm mt-1">Track all your livestock purchases</p>
            </div>
            <Link href="/shop">
              <span className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                Back to Market →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-4">
        {marketOrders.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No orders yet</p>
            <p className="text-sm mt-1 mb-6">Your marketplace purchases will appear here.</p>
            <Link href="/shop">
              <Button className="bg-[#004D40] hover:bg-[#002420] text-white px-8">
                Browse Market
              </Button>
            </Link>
          </div>
        ) : (
          marketOrders.map((order: any) => {
            const product = order.products;
            return (
              <Link key={order.id} href={`/orders/${order.id}`} className="block">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#004D40]/20 transition-all p-5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div
                      className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url(${product?.image_url})` }}
                    />

                    {/* Order Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">{product?.name || 'Livestock'}</h3>
                          <p className="text-gray-400 text-xs mt-0.5">{product?.breed}</p>
                        </div>
                        <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          order.status === 'SUCCESS' 
                            ? 'bg-green-100 text-green-700' 
                            : order.status === 'PENDING'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {order.status === 'SUCCESS' ? 'Confirmed' : order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#004D40] font-bold text-sm">₦{Number(order.amount_naira).toLocaleString()}</span>
                        <div className="flex items-center gap-1 text-gray-300">
                          <span className="text-[10px] font-mono">{order.reference}</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </main>
  );
}
