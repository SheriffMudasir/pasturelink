export default function InvestLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faf1] to-white">
      <div className="bg-[#004D40] text-white px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="skeleton h-3 w-32 mb-2 !bg-white/10" />
          <div className="skeleton h-8 w-64 mb-2 !bg-white/10" />
          <div className="skeleton h-4 w-80 !bg-white/10" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="skeleton h-4 w-52 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="skeleton h-48 w-full !rounded-none" />
              <div className="p-4 space-y-3">
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-3 w-full" />
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="skeleton h-6 w-full" />
                  <div className="skeleton h-6 w-full" />
                  <div className="skeleton h-6 w-full" />
                  <div className="skeleton h-6 w-full" />
                </div>
                <div className="skeleton h-3 w-24 mt-2" />
                <div className="skeleton h-8 w-1/2" />
                <div className="skeleton h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
