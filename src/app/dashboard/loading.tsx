export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="skeleton h-8 w-56 mb-2" />
          <div className="skeleton h-4 w-80" />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-[#004D40]">
            <div className="skeleton h-3 w-24 mb-3" />
            <div className="skeleton h-10 w-40" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-[#76FF03]">
            <div className="skeleton h-3 w-24 mb-3" />
            <div className="skeleton h-10 w-20" />
          </div>
        </div>

        {/* Map Skeleton */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b">
            <div className="skeleton h-6 w-72 mb-2" />
            <div className="skeleton h-3 w-64" />
          </div>
          <div className="skeleton h-[500px] w-full !rounded-none" />
        </div>
      </div>
    </main>
  );
}
