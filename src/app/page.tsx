import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl sm:pt-5 font-black text-[#004D40] tracking-tight">Kwara NG</h1>
          <p className="text-xl text-[#004D40]/80 font-medium max-w-2xl mx-auto">
            The fintech-enabled agricultural platform bridging urban capital with rural agriculture. Securely powered by Interswitch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {/* Shop Card */}
          <Card className="overflow-hidden shadow-xl border-t-8 border-t-[#004D40] hover:scale-105 transition-transform bg-white">
            <CardHeader className="text-center pb-2 pt-8">
              <CardTitle className="text-3xl font-black text-[#004D40]">Marketplace</CardTitle>
              <CardDescription className="text-lg text-gray-500 font-medium mt-2">B2C Retail Arm</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6 pb-8">
              <p className="text-gray-600">Buy premium, verified livestock directly for events, processing, or consumption.</p>
              <Link href="/shop" className="block">
                <Button className="w-full bg-[#004D40] hover:bg-[#002420] text-white text-lg py-6">Enter Marketplace</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Invest Card */}
          <Card className="overflow-hidden shadow-xl border-t-8 border-t-[#76FF03] hover:scale-105 transition-transform bg-white">
             <CardHeader className="text-center pb-2 pt-8">
              <CardTitle className="text-3xl font-black text-[#004D40]">Wealth</CardTitle>
              <CardDescription className="text-lg text-gray-500 font-medium mt-2">B2B/B2C Investment</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6 pb-8">
              <p className="text-gray-600">Fund entire breeding herds remotely with guaranteed ROIs and GPS Proof of Life.</p>
              <Link href="/invest" className="block">
                <Button className="w-full bg-white text-[#004D40] border-2 border-[#004D40] hover:bg-[#E8F5E9] text-lg py-6">Fund a Herd</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
