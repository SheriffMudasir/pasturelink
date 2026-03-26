import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastContainer from "@/components/Toast";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PastureLink — Premium Livestock & Agricultural Investment",
    template: "%s | PastureLink",
  },
  description: "Nigeria's fintech-enabled agricultural platform connecting urban capital with rural livestock. Buy premium animals or invest in verified herds with GPS tracking.",
  keywords: ["livestock", "investment", "agriculture", "fintech", "Nigeria", "cattle", "Kwara", "GPS tracking"],
  openGraph: {
    title: "PastureLink — Premium Livestock & Agricultural Investment",
    description: "Buy premium livestock or invest in verified breeding herds with real-time GPS proof of life.",
    siteName: "PastureLink",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <ToastContainer />
        <Script src="https://newwebpay.qa.interswitchng.com/inline-checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
