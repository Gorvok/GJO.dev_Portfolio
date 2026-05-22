# Changelog

All notable changes to GJO.dev Portfolio are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [0.2.3] — 2026-05-22

### Added
- `app/sitemap.ts` — auto-generated sitemap covering all static + dynamic routes with priority and changeFrequency
- `app/robots.ts` — proper robots.txt pointing to sitemap, blocking `/_next/` and `/api/`
- `app/portfolio/layout.tsx` — metadata for client-side portfolio page (OG, Twitter, keywords, canonical)
- `app/contact/layout.tsx` — metadata for client-side contact page
- JSON-LD structured data in root layout (`Person` + `WebSite` schemas for Google rich results)
- Full OG + Twitter card metadata on all static pages (about, ventures, services, portfolio, contact)
- Keywords added to all pages
- Canonical URLs on all pages and dynamic routes
- Dynamic routes now generate per-project/venture/service OG images and keywords
- HTTP security headers in `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security` (HSTS), `Permissions-Policy`, `Content-Security-Policy`
- LCP `priority` prop added to first image in portfolio grid

### Fixed
- Removed stray `verification: { google: undefined }` from root layout metadata

---

## [0.2.2] — 2026-05-22

### Added
- Portfolio search bar — filters by title, description, and tech stack in real time
- Year filter chips — dynamically generated from project dates, toggleable
- Default sort by most recent first across all projects
- `getAllYears()` and `getProjectsSortedByDate()` helpers in `data/projects.ts`
- **Reliable Medical Training** added as a client project (React, TypeScript, Tailwind CSS, Vite) — launched 2026-05-16
- New `Client Work` category for client-built sites
- Updated Jayobe to reflect PWA status and planned native mobile app

### Fixed
- Removed manual `useMemo` from portfolio page — React Compiler handles memoization automatically (lint error resolved)

---

## [0.2.1] — 2026-05-22

### Added
- **Reliable Medical Training** added as a client project — CPR & First Aid training site built with React, TypeScript, Tailwind CSS, and Vite
- New `Client Work` project category for client-built sites (distinct from ventures and experiments)

---

## [0.2.0] — 2026-05-22

### Added
- Custom `404 Not Found` page (`app/not-found.tsx`) with terminal aesthetic, animated background blobs, and branded CTAs
- **Jayobe** added as a venture (`data/ventures.ts`) — local job discovery platform launching in Michigan
- **Jayobe** added as a project (`data/projects.ts`) with full tech stack, description, and project image
- Project image for Jayobe (`public/images/projects/jayobe-img.png`)

### Fixed
- `metadataBase` missing from root layout — social OG/Twitter images now resolve correctly
- `sizes` prop missing on all `fill` Next.js Image components in portfolio pages (improves LCP)
- `favicon-16x16.png` 404 — removed redundant manual `icons` block from metadata; App Router auto-serves from `app/`
- `data-scroll-behavior="smooth"` added to `<html>` element to suppress Next.js route transition warning
- Removed unused `Image` import in `app/about/page.tsx` (lint warning)

### Changed
- Bumped **Next.js** `16.0.3` → `16.2.6` (addresses 20+ CVEs including DoS, cache poisoning, CSRF bypass, XSS, SSRF)
- Bumped **React / React DOM** `19.2.0` → `19.2.6`
- Bumped **Tailwind CSS** `4.1.17` → `4.3.0`
- Bumped **@tailwindcss/postcss** `4.1.17` → `4.3.0`
- Bumped **react-icons** `5.5.0` → `5.6.0`
- Bumped **@fortawesome/*** `7.1.0` → `7.2.0`, react-fontawesome `3.1.0` → `3.3.1`
- Bumped **eslint-config-next** to match Next.js `16.2.6`
- Bumped **@types/react** `19.2.6` → `19.2.15`
- Removed legacy `src/` directory (JSX/CSS from pre-migration; replaced by App Router structure)
- Footer now displays version badge (`v0.2.0`)

---

## [0.1.0] — 2025-11-19

### Added
- Initial portfolio site built with Next.js 16 App Router + TypeScript
- Pages: Home, About, Ventures, Portfolio, Services, Contact
- Dynamic routes for ventures, projects, and services (`/[slug]`)
- Ventures: LumoraVerse, GJO Dev Studio, NautiTrail, Secrts, Portfolio Projects
- Projects: Spotify Autosave App, Tiny Farm Web Game, LumoraVerse Platform, NautiTrail, Secrts
- Animated hero with typewriter effect, tech stack carousel, and background blobs
- Contact form via Formspree
- Vercel Analytics + Speed Insights integration
- Responsive navbar with mobile drawer and scroll effects
- Dark theme with green/sky/purple gradient system
- SEO metadata with Open Graph and Twitter card support
- Deployed to Vercel at [gjo.dev](https://gjo.dev)
