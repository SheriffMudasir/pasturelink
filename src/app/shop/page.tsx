import { createClient } from '@/utils/supabase/server';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Livestock Marketplace",
  description: "Buy premium, verified livestock directly from trusted Kwara herders. Rams, bulls, goats, heifers — all health certified.",
};

export default async function ShopPage() {
  const supabase = await createClient();
  let user = null;
  let marketplaceProducts: any[] = [];
  
  try {
    const { data: authData } = await supabase.auth.getUser();
    user = authData?.user;
    
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('type', 'MARKETPLACE');
      
    if (data) marketplaceProducts = data;
  } catch (error) {
    console.error("Failed to fetch products from Supabase (network error?):", error);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faf1] to-white">
      {/* Hero Header */}
      <div className="bg-[#004D40] text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#76FF03] text-xs font-bold uppercase tracking-widest mb-1">PastureLink Market</p>
              <h1 className="text-3xl font-black tracking-tight">Livestock Marketplace</h1>
              <p className="text-white/70 text-sm mt-1 max-w-md">
                Purchase premium, verified livestock directly from trusted Kwara herders.
              </p>
            </div>
            <Link href="/invest" className="hidden md:block">
              <span className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                View Investments →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">{marketplaceProducts.length} animals available</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {marketplaceProducts?.map((product) => (
            <ProductCard key={product.id} product={product} userId={user?.id} userEmail={user?.email} />
          ))}
        </div>

        {marketplaceProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No livestock available right now</p>
            <p className="text-sm mt-1">Check back soon for new arrivals.</p>
          </div>
        )}
      </div>
    </main>
  );
}