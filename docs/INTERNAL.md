# Internal Documentation — GJO.dev Portfolio

Developer reference for maintaining and extending this codebase.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4.3 |
| UI Components | Shadcn/ui |
| Icons | React Icons, Font Awesome |
| Images | next/image with sharp |
| Contact Form | Formspree |
| Analytics | Vercel Analytics + Speed Insights |
| Hosting | Vercel |

---

## Project Structure

```
app/                        # App Router
  layout.tsx                # Root layout — metadata, Navbar, Footer, Analytics
  not-found.tsx             # Global 404 page
  globals.css               # Global styles
  page.tsx                  # Home
  about/page.tsx
  contact/page.tsx
  portfolio/
    page.tsx                # Project grid with filter
    [slug]/page.tsx         # Project detail
  services/
    page.tsx
    [slug]/page.tsx
  ventures/
    page.tsx
    [slug]/page.tsx
  favicon.ico               # Auto-served by App Router
  favicon-16x16.png
  apple-touch-icon.png

components/
  home/                     # Page-specific sections
    HeroHeader.tsx
    HeroCarousel.tsx
    HeroServices.tsx
    HomeStudioSection.tsx
  layout/
    Navbar.tsx
    Footer.tsx              # Includes version badge
  ui/                       # Shared primitives
  ventures/

data/                       # Static data layer (no DB)
  projects.ts               # Project[] type + helper functions
  services.ts
  ventures.ts               # Venture[] type

public/
  images/
    projects/               # Project card images (600x400 recommended)
    icons/                  # Tech stack SVG icons
    gg-logo.png             # Site logo
    portfolio-img.png       # README preview
```

---

## Data Layer

All content is driven by TypeScript data files in `data/`. No database or CMS.

### Adding a new venture

In `data/ventures.ts`, add a `Venture` object:

```ts
{
    slug: "my-venture",           // URL: /ventures/my-venture
    title: "My Venture",
    tagline: "One-liner.",
    description: "Longer description shown on detail page.",
    tech: ["Next.js", "TypeScript"],
    live: "https://example.com",  // optional
    repo: null,                   // null = private, string = public URL
    role: "Founder · Lead Developer",
    stage: "Active development",
    highlight: true,              // shows on home page featured section
}
```

### Project categories

| Category | Use for |
|---|---|
| `Web Development` | Personal/venture web projects |
| `Client Work` | Client-built sites |
| `Experiment` | Side experiments and demos |

Categories are derived dynamically via `getAllCategories()` — adding a new `category` value to any project automatically adds it to the portfolio filter.

### Adding a new project

In `data/projects.ts`, add a `Project` object:

```ts
{
    slug: "my-project",
    title: "My Project",
    image: "/images/projects/my-project.png",  // 600x400px recommended
    category: "Web Development",               // or "Experiment"
    description: "Short card description.",
    longDescription: "Full detail page description.",
    tech: ["Next.js", "TypeScript"],
    date: "2026-01-01",
    live: "https://example.com",
    repo: null,
    kind: "venture",      // "venture" | "experiment" | "client"
    featured: true,
}
```

---

## Versioning

Version is defined in `package.json` and displayed in `components/layout/Footer.tsx`.

When bumping the version:
1. Update `package.json` → `"version"`
2. Update the version badge string in `Footer.tsx`
3. Add a new section to `CHANGELOG.md`

Follow [Semantic Versioning](https://semver.org/):
- `PATCH` (0.x.**x**) — bug fixes, copy changes, minor style tweaks
- `MINOR` (0.**x**.0) — new features, new ventures/projects, new pages
- `MAJOR` (**x**.0.0) — full redesigns or breaking structural changes

---

## Image Guidelines

- Project images: place in `public/images/projects/`
- Recommended size: **1200×630px** (matches OG image ratio), minimum **600×400px**
- Format: `.png` or `.webp`
- Always use `next/image` with a `sizes` prop when using `fill`

---

## Metadata

Root metadata is in `app/layout.tsx`. Page-level metadata exports override the root template:

```ts
export const metadata: Metadata = {
    title: 'Page Title',  // becomes "Page Title | GJO Studio"
    description: '...',
}
```

`metadataBase` is set to `https://gjo.dev` — all relative image paths in OG metadata resolve against this.

---

## Linting

```bash
npm run lint        # ESLint via eslint-config-next
```

---

## Deployment

Deployed automatically to Vercel on push to `master`. Preview deployments are generated for all branches.

Branch strategy:
- `master` — production
- `staging` — pre-production review
- `dev` — active development

---

## SEO

- **Sitemap**: auto-generated at `app/sitemap.ts` — includes all static + dynamic routes with priority and changeFrequency. Rebuilds on every deployment.
- **robots.txt**: `app/robots.ts` — blocks `/_next/` and `/api/`, points to sitemap.
- **JSON-LD**: root layout injects `Person` + `WebSite` schemas. Update names/links in `app/layout.tsx` if identity details change.
- **Metadata**: every page exports metadata. Client pages (`portfolio`, `contact`) use a `layout.tsx` wrapper since `'use client'` pages can't export metadata directly.
- **Canonical URLs**: all pages include `alternates.canonical`. Update if the domain changes.
- **Google Search Console**: add `verification.google` to root metadata in `app/layout.tsx` once the site is verified.

## Security

Security headers are set in `next.config.ts` via the `headers()` function and apply globally to all routes:

| Header | Value | Purpose |
|---|---|---|
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Force HTTPS |
| `Permissions-Policy` | camera, mic, geolocation disabled | Limit browser feature access |
| `Content-Security-Policy` | See `next.config.ts` | Restrict resource origins |

**CSP notes**: `unsafe-inline` is required for Next.js hydration scripts and Tailwind inline styles. `unsafe-eval` is required for Next.js dev mode. For a stricter production CSP, consider implementing nonce-based CSP via Next.js middleware.

**No API routes** — this site has no server-side API surface. Contact form is handled entirely client-side via Formspree.

## Known Limitations

- Content is static (no CMS). Adding ventures/projects requires a code change and redeploy.
- Contact form depends on Formspree — rate limits apply on the free tier.
- The remaining `postcss` moderate audit warning is internal to Next.js and not actionable without downgrading.
