import { investmentHerds } from '@/lib/mockData';
import { InterswitchPayButton } from '@/components/InterswitchPayButton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 pt-12">
          <h1 className="text-5xl font-black text-[#004D40] tracking-tight">Wealth Management</h1>
          <p className="text-xl text-[#004D40]/80 font-medium max-w-2xl mx-auto">
            Fund verified breeding herds yielding high ROIs, backed by geospatial Tracking directly via PastureLink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investmentHerds.map((herd) => (
            <Card key={herd.id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow bg-white flex flex-col">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${herd.image})` }}
              />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-[#004D40]">{herd.name}</CardTitle>
                  <span className="bg-[#76FF03]/20 text-[#004D40] px-3 py-1 rounded-full text-sm font-bold border border-[#76FF03]">
                    {herd.expectedROI} ROI
                  </span>
                </div>
                <CardDescription className="text-gray-500 font-medium mt-2">{herd.description}</CardDescription>
                
                <div className="grid grid-cols-2 gap-y-2 mt-4 text-sm font-semibold text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <div>Location: <span className="text-[#004D40]">{herd.location}</span></div>
                  <div>Duration: <span className="text-[#004D40]">{herd.durationMonths} Months</span></div>
                  <div>Herd Size: <span className="text-[#004D40]">{herd.totalAnimals} Head</span></div>
                  <div>Breed: <span className="text-[#004D40]">{herd.breed}</span></div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end mt-4">
                 <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Minimum Stake</p>
                 <p className="text-4xl font-black text-[#004D40]">₦{herd.minimumStakeNaira.toLocaleString()}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <InterswitchPayButton 
                  amountNaira={herd.minimumStakeNaira} 
                  customerEmail="investor@kwara.ng"
                  itemType="INVESTMENT"
                  itemId={herd.id}
                  buttonText="Fund this Herd via Interswitch"
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}