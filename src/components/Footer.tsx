import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002420] text-white/60 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-[#004D40] rounded-lg flex items-center justify-center">
                <span className="text-[#76FF03] font-black text-xs">P</span>
              </div>
              <span className="font-mono font-bold text-white text-base">
                PastureLink
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              Nigeria&apos;s fintech-enabled agricultural platform bridging urban capital with rural livestock.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/shop" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/invest" className="hover:text-white transition-colors">Investments</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/orders" className="hover:text-white transition-colors">My Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-default">About Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">How It Works</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Careers</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Blog</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>support@pasturelink.ng</li>
              <li>+234 810 230 1860</li>
              <li>Abuja, Nigeria</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {/* Twitter/X */}
              <a href="#" className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[10px]">© 2026 PastureLink. All rights reserved. Payments secured by Interswitch.</p>
          <div className="flex gap-4 text-[10px]">
            <span className="hover:text-white cursor-default">Privacy Policy</span>
            <span className="hover:text-white cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
