# PastureLink 🌿🐂

> **Nigeria's fintech-enabled agricultural marketplace formalizing the ₦30 Trillion livestock trade.**

Built for the **Interswitch × Enyata Buildathon 2026** by Team PastureLink.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://pasturelink.vercel.app/)
[![Try It Out](https://img.shields.io/badge/Try--It--Out-blue?style=for-the-badge)](https://pasturelink.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3FCF8E?style=flat-square&logo=supabase)](https://supabase.com/)
[![Interswitch](https://img.shields.io/badge/Interswitch-Payments-blue?style=flat-square)](https://www.interswitchgroup.com/)

---

## 🚀 The Problem

Nigeria's livestock market is valued at over **₦30 Trillion**, yet it remains largely informal — plagued by opaque pricing, zero traceability, and no institutional-grade investment pathway. Urban investors have no way to participate in this massive asset class, and buyers lack trust in remote livestock purchases.

## 💡 Our Solution

**PastureLink** bridges urban capital with rural agriculture through a dual-sided fintech platform:

| Channel | Description |
|---|---|
| **🛒 Marketplace (B2C)** | Direct purchase of premium, verified livestock — rams, bulls, goats, heifers — with health certificates and doorstep delivery. |
| **📈 Wealth Management (B2B/B2C)** | Fund entire breeding herds remotely with projected ROIs up to 60%, secured by real-time geospatial **Proof of Life** GPS tracking. |

---

## 🛠️ Core Features

- **Interswitch Webpay Integration** — Institutional-grade secure payment checkout using Interswitch's inline checkout API with OAuth 2.0 server-side verification.
- **Proof of Life Dashboard** — Live geospatial tracking of livestock assets via GPS collars, powered by Mapbox & React Map GL.
- **Dual Revenue UX** — Distinct, optimized funnels for retail buyers (`/shop`) and remote investors (`/invest`).
- **ROI Calculator** — Each investment card shows projected returns based on expected ROI and duration.
- **Order Management** — Full order history with detailed receipt view per transaction.
- **Toast Notifications** — Modern slide-up notification system replacing browser alerts.
- **Loading Skeletons** — Shimmer-animated placeholders for a seamless perceived performance.
- **Dark Mode** — Full dark theme toggle with localStorage persistence.
- **Row Level Security** — Supabase RLS policies enforcing data isolation per authenticated user.
- **Modern Design System** — DM Sans + Space Grotesk typography, responsive 3-column grids, hover micro-animations, and premium card aesthetics.

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Server Actions, Turbopack) |
| **Styling** | Tailwind CSS v4, shadcn/ui |
| **Database** | Supabase (PostgreSQL + Auth + RLS) |
| **Payments** | Interswitch Inline Checkout + OAuth 2.0 Server Verification |
| **Geospatial** | Mapbox GL JS, React Map GL |
| **Typography** | DM Sans (body), Space Grotesk (headings) via Google Fonts |
| **Deployment** | Vercel |

---

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SheriffMudasir/pasturesense-mvp.git
cd pasturesense-mvp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase and Interswitch credentials

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
INTERSWITCH_CLIENT_ID=your_client_id
INTERSWITCH_SECRET_KEY=your_secret_key
INTERSWITCH_MAC_KEY=your_mac_key
NEXT_PUBLIC_MERCHANT_CODE=your_merchant_code
NEXT_PUBLIC_PAY_ITEM_ID=Default_Payable
INTERSWITCH_DATA_REF=your_data_ref
INTERSWITCH_TILL_ALIAS=your_till_alias
NEXT_PUBLIC_ENVIRONMENT=test
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

### Test Credentials (Interswitch Sandbox)

| Field | Value |
|---|---|
| Card Number | `5061 0502 5475 6707 864` |
| Expiry | `06/26` |
| CVV | `111` |
| OTP | `123456` |

---

## 📁 Project Structure

```
pasturesense-mvp/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── shop/page.tsx         # Livestock marketplace
│   │   ├── invest/page.tsx       # Herd investment portal
│   │   ├── dashboard/page.tsx    # Investor portfolio + GPS map
│   │   ├── orders/page.tsx       # Order history
│   │   ├── orders/[id]/page.tsx  # Order detail receipt
│   │   ├── login/page.tsx        # Authentication
│   │   ├── register/page.tsx     # User registration
│   │   ├── order-confirmation/   # Post-payment confirmation
│   │   ├── api/auth/interswitch/ # OAuth token endpoint
│   │   ├── api/webhook/interswitch/ # Payment webhook handler
│   │   └── actions/payment.ts    # Server actions for transactions
│   ├── components/
│   │   ├── InterswitchPayButton.tsx # Payment integration
│   │   ├── MapWrapper.tsx        # Mapbox GPS visualization
│   │   ├── Navbar.tsx            # Global navigation bar
│   │   ├── Footer.tsx            # Site footer
│   │   ├── Toast.tsx             # Notification system
│   │   ├── AnimatedCounter.tsx   # Animated dashboard stats
│   │   ├── DarkModeToggle.tsx    # Theme switcher
│   │   └── ProductCard.tsx       # Marketplace product card
│   └── utils/supabase/           # Supabase client utilities
├── public/                       # Static assets
└── README.md
```

---

## 🏆 Interswitch Integration Highlights

- ✅ **Inline Checkout** — Webpay modal triggered client-side with dynamic amount and customer data.
- ✅ **OAuth 2.0 Server Auth** — Secure server-side token exchange via `/api/auth/interswitch`.
- ✅ **SHA-512 HMAC Webhook** — Cryptographic signature validation on `/api/webhook/interswitch`.
- ✅ **Atomic Fulfillment** — `createPendingTransaction` → `confirmTransaction` two-phase commit ensuring no double-spend.
- ✅ **Dual Payment Flows** — Marketplace purchases route to order history; investments route to portfolio dashboard.

---

## 👥 Team Contributions

### Sheriff Olalekan Mudasir — Team Lead & Full-Stack Developer
**GitHub:** [@SheriffMudasir](https://github.com/SheriffMudasir)

| Area | Contributions |
|---|---|
| **Backend & API** | Designed and built the full backend architecture: Supabase schema, server actions (`payment.ts`), Interswitch OAuth route, webhook handler with HMAC validation, and atomic transaction fulfillment logic. |
| **Payment Integration** | Implemented the complete Interswitch Webpay integration — inline checkout, server-side OAuth 2.0 token exchange, and two-phase commit (pending → confirmed) transaction flow. |
| **Database & Security** | Set up the Supabase PostgreSQL database, designed the `products`, `transactions`, and `portfolios` tables, seeded all marketplace and investment data, and enabled Row Level Security (RLS) policies. |
| **Frontend Architecture** | Built the Next.js 16 App Router structure, server components for all pages, loading skeletons, animated counters, dark mode system, and the global toast notification system. |
| **Geospatial** | Integrated Mapbox GL for the Proof of Life GPS tracking dashboard with dynamic marker rendering from product metadata. |
| **Project Management** | Led sprint planning, code reviews, and final submission coordination. |

### Fatimah Sharafudeen — Frontend Developer & UI/UX Designer
**GitHub:** [@bintsharaf](https://github.com/bintsharaf)

| Area | Contributions |
|---|---|
| **UI/UX Design** | Designed the visual identity and user experience for the platform — color palette (#004D40 deep teal, #76FF03 lime accent), typography selection (DM Sans + Space Grotesk), and overall layout direction. |
| **Responsive Design** | Implemented and tested responsive layouts across mobile, tablet, and desktop breakpoints. Ensured the navbar, product grids, and footer collapse properly on all screen sizes. |
| **Component Styling** | Styled the product cards, investment cards, hero sections, and feature cards with modern hover effects, micro-animations, and premium aesthetics using Tailwind CSS v4. |
| **Landing Page** | Designed and built the homepage hero section with trust badges, feature cards, and stats bar to create a compelling first impression. |
| **Navigation & Footer** | Implemented the global navbar with active state highlighting and the footer with contact info, social links, and legal disclaimers. |

---

## 📄 License

This project was built for the **Interswitch × Enyata Buildathon 2026**. All rights reserved.

---

_Built with ❤️ for Interswitch & Enyata._
