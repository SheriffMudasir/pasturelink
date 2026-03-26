'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from '@/components/DarkModeToggle';

const navLinks = [
  { href: '/shop', label: 'Market' },
  { href: '/invest', label: 'Invest' },
  { href: '/orders', label: 'My Orders' },
  { href: '/dashboard', label: 'Portfolio' },
];

export default function Navbar() {
  const pathname = usePathname();

  // Hide navbar on landing page, login, register
  if (pathname === '/' || pathname === '/login' || pathname === '/register') {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 bg-[#004D40] rounded-lg flex items-center justify-center">
            <span className="text-[#76FF03] font-black text-xs">P</span>
          </div>
          <span className="font-mono font-bold text-[#004D40] dark:text-[#76FF03] text-base hidden sm:block">
            PastureLink
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#004D40] text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-[#004D40] dark:hover:text-[#76FF03] hover:bg-[#E8F5E9] dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 shrink-0">
          <DarkModeToggle />
          <form action="/login" method="get">
            <button
              type="submit"
              className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors px-3 py-1.5"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
