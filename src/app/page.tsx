import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafdf7] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76FF03]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004D40]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      {/* Top Nav */}
      <nav className="relative z-10 max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#004D40] rounded-lg flex items-center justify-center">
            <span className="text-[#76FF03] font-black text-sm">P</span>
          </div>
          <span className="font-mono font-bold text-[#004D40] text-lg">PastureLink</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <span className="text-[#004D40] text-sm font-semibold hover:text-[#004D40]/70 transition-colors px-4 py-2">
              Sign In
            </span>
          </Link>
          <Link href="/register">
            <span className="bg-[#004D40] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#002420] transition-colors">
              Get Started
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#004D40]/5 border border-[#004D40]/10 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-[#76FF03] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#004D40]">Powered by Interswitch • Live GPS Tracking</span>
            </div>

            <h1 className="font-mono text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight">
              Invest in <span className="text-[#004D40]">livestock</span>,<br />
              from anywhere.
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Nigeria&apos;s first fintech platform connecting urban capital with verified rural herds. Buy animals or fund breeding programs with real-time GPS proof of life.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/shop">
                <span className="inline-flex items-center gap-2 bg-[#004D40] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#002420] transition-all hover:shadow-lg hover:shadow-[#004D40]/20 text-sm">
                  Browse Market
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
              <Link href="/invest">
                <span className="inline-flex items-center gap-2 bg-white text-[#004D40] font-semibold px-7 py-3.5 rounded-xl border-2 border-[#004D40]/15 hover:border-[#004D40]/40 transition-all text-sm">
                  Start Investing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#76FF03]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Verified Herders
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#76FF03]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                GPS Tracked
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#76FF03]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Insured Assets
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {/* Marketplace Card */}
            <Link href="/shop" className="block group">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#004D40]/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#004D40] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-mono font-bold text-lg text-gray-900">Marketplace</h3>
                      <span className="text-[#004D40] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Browse →</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Buy premium, verified livestock directly — rams, bulls, goats, heifers. Delivered to your doorstep.</p>
                    <div className="flex gap-2 mt-3">
                      <span className="bg-[#E8F5E9] text-[#004D40] text-[10px] font-bold px-2 py-0.5 rounded-full">14 Animals</span>
                      <span className="bg-[#E8F5E9] text-[#004D40] text-[10px] font-bold px-2 py-0.5 rounded-full">From ₦45K</span>
                      <span className="bg-[#E8F5E9] text-[#004D40] text-[10px] font-bold px-2 py-0.5 rounded-full">Health Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Investment Card */}
            <Link href="/invest" className="block group">
              <div className="bg-[#004D40] rounded-2xl p-6 border border-[#004D40] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#76FF03]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-mono font-bold text-lg text-white">Wealth Management</h3>
                      <span className="text-[#76FF03] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Invest →</span>
                    </div>
                    <p className="text-white/60 text-sm mt-1">Fund verified breeding herds with guaranteed ROIs. Full geospatial proof-of-life tracking on every asset.</p>
                    <div className="flex gap-2 mt-3">
                      <span className="bg-white/10 text-[#76FF03] text-[10px] font-bold px-2 py-0.5 rounded-full">Up to 60% ROI</span>
                      <span className="bg-white/10 text-[#76FF03] text-[10px] font-bold px-2 py-0.5 rounded-full">GPS Tracked</span>
                      <span className="bg-white/10 text-[#76FF03] text-[10px] font-bold px-2 py-0.5 rounded-full">From ₦100K</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Dashboard Card */}
            <Link href="/dashboard" className="block group">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#004D40]/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#004D40]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-mono font-bold text-lg text-gray-900">My Portfolio</h3>
                      <span className="text-[#004D40] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">View →</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Track your assets in real-time. View GPS locations, ROI performance, and manage your herd investments.</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-t border-gray-100 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-mono text-3xl font-bold text-[#004D40]">17+</p>
            <p className="text-gray-400 text-xs font-medium mt-1">Listed Assets</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-[#004D40]">60%</p>
            <p className="text-gray-400 text-xs font-medium mt-1">Max ROI</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-[#004D40]">24/7</p>
            <p className="text-gray-400 text-xs font-medium mt-1">GPS Tracking</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-[#004D40]">100%</p>
            <p className="text-gray-400 text-xs font-medium mt-1">Verified Herders</p>
          </div>
        </div>
      </section>
    </main>
  );
}
