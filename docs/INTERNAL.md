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
    kind: "venture",      // "venture" | "experiment"
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

## Known Limitations

- Content is static (no CMS). Adding ventures/projects requires a code change and redeploy.
- Contact form depends on Formspree — rate limits apply on the free tier.
- The remaining `postcss` moderate audit warning is internal to Next.js and not actionable without downgrading.
