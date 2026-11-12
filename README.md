# CINEBOOK – Advanced Movie Ticket Booking Ecosystem
> **"Your Movies. Your Seats. Your Experience."**

CINEBOOK is a modern, full-stack, responsive cinema ticket booking platform built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**. It matches the functional depth and aesthetic fidelity of premier cinema platforms like BookMyShow, PVR INOX, and Fandango, while offering a custom dark-first cinematic design system and server-side atomic seat locking.

---

## 🌟 Ecosystem Architecture

CINEBOOK comprises three integrated portals:

1. **Customer-Facing Web Application**
   - **Cinematic Homepage**: Dynamic Hero Carousel with trailer modal, Now Showing, Coming Soon, Trending Theatres, Genre Discovery, and Promotional Banners.
   - **Movie Discovery (`/movies`)**: Instant search by title/director/actor, multi-facet filtering (Genre, Language, Format, Status), and sorting (Popularity, Rating, Release Date).
   - **Movie Details (`/movies/[slug]`)**: High-res backdrop header, trailer player, cast/crew avatars, audience reviews, interactive 7-day date picker, and theatre showtimes grouped by time-of-day (Morning, Afternoon, Evening, Night).
   - **City Selection**: Persistent location selector across 10 top metropolitan cities (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, etc.) with auto-detect simulation.
   - **Multiplex Directory (`/cinemas`)**: Find cinemas by city with format badges (IMAX Laser, 4DX, Dolby Atmos) and amenities (LUXE Recliner, Valet Parking, Gourmet Food).
   - **Interactive Cinema Seating (`/booking/[showId]`)**:
     * Curved cinema screen visual with illumination effect ("All Eyes This Way").
     * Tiered seating layout: VIP Recliners, Prime Premium, Classic Regular, and Accessible seats.
     * Real-time seat status indicators: Green (Available), Blue (Selected), Red (Booked), Yellow (Locked).
     * Atomic server-side 5-minute locking with live countdown timer and anti-double booking protection.
   - **Checkout & Pricing (`/checkout`)**:
     * Strict backend price verification (Base price + seat offsets + convenience fees + 18% GST).
     * Interactive coupon codes: `CINEFIRST` (20% off) and `BLOCKBUSTER` (15% off).
     * Razorpay checkout supporting UPI (GPay/PhonePe), Credit/Debit Cards, and Net Banking.
   - **Digital Ticket Pass (`/booking/confirmation/[id]`)**:
     * Dynamic QR code pass generated with `qrcode`.
     * Print pass, download ticket, and native share options.
     * Celebratory confetti animation on payment confirmation.
   - **User Accounts (`/my-bookings`, `/wishlist`, `/offers`)**:
     * Past, upcoming, and cancelled booking management.
     * 1-click cancellation with atomic seat release.

2. **Super Admin Platform Console (`/admin`)**
   - Live KPI overview: Gross Platform Revenue, Confirmed Bookings count, Active Movies, and Partner Screens.
   - Box office movie performance breakdown.
   - Live transactions feed with customer emails, seat numbers, and payment status.
   - Real "Add New Movie" catalogue modal with instant database publication.
   - "Schedule Show" modal across multiplex screens and showtimes.

3. **Theatre Partner & Gate Validator Portal (`/theatre-partner`)**
   - Dedicated management view for cinema operators.
   - Live auditorium occupancy rates and box office revenue metrics.
   - **Entrance Gate QR Ticket Scanner / Validator**:
     * Enter or scan ticket codes (e.g. `CB-202611-98745`).
     * Instant audio-visual pass/fail validation preventing duplicate admittance or admitting cancelled tickets.

---

## 🎨 Brand Identity & Design System

- **Primary Background**: `#101014`
- **Secondary Background**: `#181820`
- **Card Background**: `#24242D`
- **Primary Accent**: `#F43F5E` (Rose neon cinema glow)
- **Secondary Accent**: `#8B5CF6` (Violet / IMAX purple)
- **Seat Colors**:
  - Green (`#22C55E`): Available
  - Blue (`#3B82F6`): Selected
  - Yellow (`#EAB308`): Temporarily Locked
  - Red (`#EF4444`): Booked / Confirmed

---

## 🚀 Quick Evaluation Demo Accounts

You can log in with any email/password, or use the **1-Click Role Switcher** inside the Sign In modal:

| Role | Name | Email | Password |
|---|---|---|---|
| **Customer** | Alex Mercer | `alex@cinebook.com` | `password123` |
| **Cinema Manager** | Marcus Vance | `theatre@cinebook.com` | `password123` |
| **Super Admin** | Sarah Connor | `admin@cinebook.com` | `password123` |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS, Lucide React icons, Framer Motion
- **Database & ORM**: SQLite / PostgreSQL with Prisma ORM
- **Authentication**: Session JWT cookies, bcryptjs password hashing, Role-Based Access Control
- **Payments**: Razorpay backend order creation, HMAC-SHA256 signature verification, and automated test sandbox
- **Passes & QR**: Dynamic QR code generation via `qrcode` and `canvas-confetti`

---

## 🧪 Running the Platform

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Sync & Seed Database**:
   ```bash
   npx prisma db push
   node prisma/seed.js
   ```

3. **Run Production Server**:
   ```bash
   npm run build
   npm run start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run Integration Tests**:
   ```bash
   node tests/integration.test.js
   ```
