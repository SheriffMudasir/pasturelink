# Kwara NG 🌿🐂

The fintech-enabled agricultural marketplace formalizing Nigeria's livestock trade. Built for the **Interswitch x Enyata Hackathon**.

## 🚀 The Vision

Kwara NG bridges urban capital with rural agriculture. We provide a dual-sided platform aimed at formalizing a ₦30 Trillion livestock market:

1. **Marketplace (B2C Retail):** Direct purchase of premium, verified livestock for events, processing, or consumption.
2. **Wealth Management (B2B/B2C Investment):** Fund entire breeding herds remotely with guaranteed ROIs, secured by geospatial "Proof of Life".

## 🛠️ Core Features

- **Interswitch Webpay Integration:** Institutional-grade secure payment checkout using Interswitch's inline script.
- **Proof of Life Dashboard:** Live geospatial tracking of livestock via IoT Collars (Simulated), powered by Mapbox & React Map GL.
- **Dual Revenue UX:** Distinct funnels for retail buyers (/shop) and remote investors (/invest).
- **Modern Architecture:** Serverless architecture optimized for ultra-fast load times.

## ⚙️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui + Framer Motion
- **Payments:** Interswitch Inline Checkout API
- **Map / Geospatial:** Mapbox GL & React-Map-GL
- **Icons:** Lucide React

## 🔑 Environment Variables

Create a .env file at the root of the project with the following parameters:

`nv
INTERSWITCH_CLIENT_ID=your_client_id
INTERSWITCH_SECRET_KEY=your_secret_key
INTERSWITCH_MAC_KEY=your_mac_key
NEXT_PUBLIC_MERCHANT_CODE=your_marchat_code
NEXT_PUBLIC_PAY_ITEM_ID=Default_Payable
INTERSWITCH_DATA_REF=your_data_ref
INTERSWITCH_TILL_ALIAS=
NEXT_PUBLIC_ENVIRONMENT=test
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
`

## 🏁 Getting Started

1. Navigate into the application directory:
   `ash
cd pasturesense-mvp
`
2. Install dependencies:
   `ash
npm install
`
3. Run the development server:
   `ash
npm run dev
`
4. Open [http://localhost:3000](http://localhost:3000) and view the marketplace!

## 🏆 Hackathon Achievements Check

- [x] Used Webpay Inline Checkout for smooth frontend processing.
- [x] Built Server-Side Passport Auth Route (/api/auth/interswitch).
- [x] Built Server-Side SHA-512 HMAC Webhook Validation (/api/webhook/interswitch).
- [x] Converted standard e-commerce to a compelling Fintech/Agritech narrative.

---

_Built with ❤️ for Interswitch & Enyata._
