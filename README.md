
# WeDesign+ — wedesign.one

A top‑class, production‑ready website for **WeDesign+**, built with **Next.js 14 + TypeScript + Tailwind CSS** and optimized for **Vercel**.

> Tagline: *Designing inclusive public spaces through participatory AI*

## Tech stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS (dark, glassmorphism, gradient accents)
- No server DB; demo contact endpoint logs to server (replace with your CRM)
- Ready for one‑click Vercel deploy

## Local development

```bash
pnpm i # or npm i / yarn
pnpm dev # or npm run dev
```

## Deploy to Vercel

1. Push to GitHub.
2. Import the repo into Vercel.
3. Framework preset: **Next.js** (detected automatically).
4. Environment: Node 18+. No additional env vars are required.

## Project structure

```
app/                # App Router pages
  (site)/           # Site routes (home, product, how-it-works, research, team, contact)
  api/contact/      # Demo API route
components/         # UI components
lib/                # Constants and helpers
public/             # Static assets (video, icons, OG image)
```

## Content

All product statements are drawn from your attached materials (pilot numbers, criteria, ethical safeguards, team, etc.). Update the copy easily in `app/(site)/**` and `lib/utils.ts`.

## Customization

- Colors: tweak `tailwind.config.ts > theme.extend.colors.brand`
- Typography: we use `Inter` via `next/font`
- OG image: replace `/public/og.png`
- Logo: replace `components/Logo.tsx` and `/public/favicon.svg`

## Contact form

The demo form posts to `/api/contact` and logs submissions to the server console. Replace this with your email/CRM provider (e.g., Resend, Sendgrid) for production.

---

© 2025 WeDesign+.
