"use client"; // makes this a client-only component
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 md:gap-8 py-3 md:py-4 shadow-lg bg-[#E8F5E9] fixed top-0 left-0 w-full z-50">
      <Link href="/" className="text-[#004D40] text-sm md:text-lg font-bold hover:underline">Home</Link>
      <Link href="/shop" className="text-[#004D40] text-sm md:text-lg font-bold hover:underline">Marketplace</Link>
      <Link href="/invest" className="text-[#004D40] text-sm md:text-lg font-bold hover:underline">Wealth</Link>
    </nav>
  );
}
