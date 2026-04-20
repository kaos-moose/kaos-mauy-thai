# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Kaos Muay Thai** — Muay Thai & Krav Maga academy opening in Helena, MT. Built with Next.js 16 (App Router, TypeScript, Tailwind CSS v4). Deployed to AWS Amplify.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build (must pass before any deploy)
- `npm run lint` — ESLint across all files
- `npm run start` — serve the production build locally

## Architecture

- **Page** — `src/app/page.tsx` composes all 8 section components in funnel order. Do not reorder sections without a conversion reason.
- **Sections** — `src/components/sections/` — one file per landing page section. Static content is colocated in each file; extract to `src/data/` only if shared across sections.
- **Shared UI** — `src/components/ui/Button.tsx` is the single CTA button. All CTAs link to `#contact-form`. Keep button text consistent: "Claim Your Spot".
- **Layout** — `src/components/layout/Header.tsx` (sticky, links to `#contact-form`) and `Footer.tsx`. Imported in `src/app/layout.tsx`.
- **Form** — `ContactFormSection.tsx` is a `"use client"` component; POSTs to `/api/contact`. The API route at `src/app/api/contact/route.ts` currently logs only — wire up AWS SES or Resend for real email delivery.
- **Fonts** — Anton (headings) + Inter (body) via `next/font/google`, exposed as CSS variables `--font-display` and `--font-body`. Apply headings with `style={{ fontFamily: "var(--font-display)" }}`.
- **Styles** — Tailwind v4 (no `tailwind.config.js`). Accent color is `red-600`. Dark backgrounds use `neutral-950` / `neutral-900`.
- **Images** — use `next/image` for all images. Hero background is currently a CSS gradient; swap in a real image/video once available.

## AWS Amplify Deployment

- `next.config.ts` uses `output: "standalone"` — required for Amplify SSR.
- `amplify.yml` at root defines the build spec. Amplify reads `.next/` as the artifact directory.
- Environment variables go in the Amplify Console — never in committed files.
- `main` branch triggers automatic deploy — only merge production-ready code.

## Standards

- Mobile-first responsive design
- Lighthouse targets: Performance ≥90, Accessibility ≥95, SEO ≥95
- All images via `next/image` — no raw `<img>` tags; all must have descriptive `alt` text
- No client-side JS (`"use client"`) for content that can be statically rendered
- Accent color is always `red-600` — do not introduce additional accent colors

## Mistakes to Avoid

_Add lessons learned here as the project progresses._
