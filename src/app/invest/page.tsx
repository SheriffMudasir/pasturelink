import { createClient } from '@/utils/supabase/server';
import InterswitchPayButton from '@/components/InterswitchPayButton';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wealth Management — Invest in Herds",
  description: "Fund verified breeding herds yielding up to 60% ROI. Full geospatial GPS tracking on every asset. From ₦100K entry.",
};

export default async function InvestPage() {
  const supabase = await createClient();
  let user = null;
  let investmentHerds: any[] = [];
  
  try {
    const { data: authData } = await supabase.auth.getUser();
    user = authData?.user;
    
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('type', 'INVESTMENT');
      
    if (data) investmentHerds = data;
  } catch (error) {
    console.error("Failed to fetch investment herds from Supabase (network error?):", error);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faf1] to-white">
      {/* Hero Header */}
      <div className="bg-[#004D40] text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#76FF03] text-xs font-bold uppercase tracking-widest mb-1">PastureLink Invest</p>
              <h1 className="text-3xl font-black tracking-tight">Wealth Management</h1>
              <p className="text-white/70 text-sm mt-1 max-w-md">
                Fund verified breeding herds yielding high ROIs, backed by geospatial tracking.
              </p>
            </div>
            <Link href="/shop" className="hidden md:block">
              <span className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                View Market →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Investment Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">{investmentHerds.length} herds available for investment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {investmentHerds?.map((herd) => {
            const metadata = herd.metadata || {};
            return (
              <div key={herd.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${herd.image_url})` }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#76FF03]/90 backdrop-blur-sm text-[#004D40] px-2.5 py-1 rounded-full text-xs font-extrabold shadow-sm">
                      {metadata.expectedROI} ROI
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{herd.name}</h3>
                  <p className="text-gray-500 text-xs mt-1 line-clamp-2">{metadata.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3 text-[11px]">
                    <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                      <span className="text-gray-400">Location</span>
                      <span className="font-semibold text-gray-700">{metadata.location}</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                      <span className="text-gray-400">Duration</span>
                      <span className="font-semibold text-gray-700">{metadata.durationMonths}mo</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                      <span className="text-gray-400">Herd</span>
                      <span className="font-semibold text-gray-700">{herd.stock} Head</span>
                    </div>
                    <div className="flex justify-between bg-gray-50 rounded px-2 py-1">
                      <span className="text-gray-400">Breed</span>
                      <span className="font-semibold text-gray-700">{herd.breed}</span>
                    </div>
                  </div>

                  {/* Price + ROI Calculator + Pay */}
                  <div className="mt-auto pt-4 space-y-3">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Minimum Stake</p>
                      <p className="text-2xl font-black text-[#004D40]">₦{herd.price_naira.toLocaleString()}</p>
                    </div>

                    {/* ROI Calculator */}
                    {metadata.expectedROI && (
                      <div className="bg-[#E8F5E9] rounded-lg p-2.5 flex items-center justify-between">
                        <div className="text-[10px] text-[#004D40]">
                          <span className="font-medium">Projected Return</span>
                          <span className="text-gray-400 ml-1">({metadata.durationMonths}mo)</span>
                        </div>
                        <span className="font-mono font-bold text-[#004D40] text-sm">
                          ₦{Math.round(herd.price_naira * (1 + parseFloat(metadata.expectedROI) / 100)).toLocaleString()}
                        </span>
                      </div>
                    )}

                    <InterswitchPayButton 
                      amountNaira={herd.price_naira} 
                      customerEmail={user?.email || "investor@pasturelink.ng"}
                      productId={herd.id}
                      userId={user?.id}
                      itemType="INVESTMENT"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {investmentHerds.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No investment herds available right now</p>
            <p className="text-sm mt-1">Check back soon for new opportunities.</p>
          </div>
        )}
      </div>
    </main>
  );
}