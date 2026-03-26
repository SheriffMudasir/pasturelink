import { createClient } from '@/utils/supabase/server';
import { MapWrapper } from '@/components/MapWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Investor Portfolio",
  description: "Monitor your premium livestock assets in real-time with GPS proof-of-life tracking.",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Fetch portfolio joined with products
  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*, products(*)')
    .eq('user_id', user?.id || '');

  let totalAssets = 0;
  let activeHerdsCount = 0;
  const mapMarkers: any[] = [];

  if (portfolios) {
    portfolios.forEach((portfolio: any) => {
      const product = portfolio.products;
      if (product) {
        totalAssets += Number(product.price_naira) * portfolio.quantity;
        if (product.type === 'INVESTMENT') {
           activeHerdsCount += 1;
           const coords = product.metadata?.coordinates;
           if (coords && coords.lng && coords.lat) {
             mapMarkers.push({
                id: portfolio.id,
                lng: coords.lng,
                lat: coords.lat,
                name: product.name
             });
           }
        }
      }
    });
  }

  return (
    <main className="min-h-screen bg-[#E8F5E9] dark:bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#004D40] dark:text-[#76FF03]">Investor Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Monitor your premium livestock assets in real-time.
          </p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-sm border-0 border-l-4 border-l-[#004D40] dark:bg-gray-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                Total Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-[#004D40] dark:text-white">
                <AnimatedCounter target={totalAssets} prefix="₦" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 border-l-4 border-l-[#76FF03] dark:bg-gray-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                Active Herds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-[#004D40] dark:text-[#76FF03]">
                <AnimatedCounter target={activeHerdsCount} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proof of Life Map Section */}
        <Card className="shadow-sm border-0 overflow-hidden dark:bg-gray-900">
          <CardHeader className="bg-white dark:bg-gray-900 border-b border-gray-50 dark:border-gray-800 pb-4">
            <CardTitle className="text-xl font-bold text-[#004D40] dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#76FF03] animate-pulse"></span>
              Proof of Life - Geospatial Tracking
            </CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Live tracking of your assets based on real GPS collars
            </p>
          </CardHeader>
          <div className="h-[500px] w-full relative bg-gray-100 dark:bg-gray-800">
            {mapMarkers.length > 0 ? (
              <MapWrapper markers={mapMarkers} />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-gray-500 p-8 space-y-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-[#004D40] dark:text-white">Your portfolio is empty</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                    You haven't made any investments yet. Choose an option below to get started.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/shop">
                    <Button className="bg-[#004D40] hover:bg-[#002420] text-white px-8">
                      Go to Market
                    </Button>
                  </Link>
                  <Link href="/invest">
                    <Button className="bg-white text-[#004D40] border-2 border-[#004D40] hover:bg-[#E8F5E9] px-8">
                      Go to Investment
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Action Buttons — always visible */}
        <div className="flex flex-wrap gap-4 justify-center pt-2 pb-8">
          <Link href="/shop">
            <Button className="bg-[#004D40] hover:bg-[#002420] text-white px-8 py-3 text-base">
              Go to Market
            </Button>
          </Link>
          <Link href="/invest">
            <Button className="bg-white text-[#004D40] border-2 border-[#004D40] hover:bg-[#E8F5E9] px-8 py-3 text-base">
              Go to Investment
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}
