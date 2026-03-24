import { MapWrapper } from '@/components/MapWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#004D40]">Investor Portfolio</h1>
          <p className="text-gray-600 mt-2">
            Monitor your premium livestock assets in real-time.
          </p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-sm border-0 border-l-4 border-l-[#004D40]">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Total Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-[#004D40]">₦1,500,000</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 border-l-4 border-l-[#76FF03]">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                Active Herds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-[#004D40]">1</div>
            </CardContent>
          </Card>
        </div>

        {/* Proof of Life Map Section */}
        <Card className="shadow-sm border-0 overflow-hidden">
          <CardHeader className="bg-white border-b border-gray-50 pb-4">
            <CardTitle className="text-xl font-bold text-[#004D40] flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#76FF03] animate-pulse"></span>
              Proof of Life - Geospatial Tracking
            </CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              Live tracking of your asset (IoT Collar #KWA-8842 - Aminci Simulation)
            </p>
          </CardHeader>
          <div className="h-[500px] w-full relative bg-gray-100">
            <MapWrapper />
          </div>
        </Card>
        
      </div>
    </main>
  );
}
