# CBSS Tutoring Services

The marketing site for **Charles Best Tutoring Services** — a student-run, non-profit peer tutoring organization at Dr. Charles Best Secondary School in Coquitlam, BC.

Built with Next.js 15 (App Router), TypeScript (strict), Tailwind CSS v4, shadcn-style primitives, Framer Motion, Lucide React, and `next-themes`. No database, no auth, no CMS — pure static marketing.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_GITHUB_USERNAME%2Fcbss-tutoring)

> Replace `YOUR_GITHUB_USERNAME` in the badge above after pushing this repo.

---

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository.
3. Click **Deploy** — no environment variables and no build-command overrides are required for the MVP.

Vercel will auto-detect Next.js, install dependencies, and run `next build`.

---

## How to edit content

**All copy, programs, tutor profiles, FAQs, newsletter issues, and document lists live in one file:**

```
lib/content.ts
```

Edit that file and the changes flow into every page. Examples:

| Want to change… | Edit this export in `lib/content.ts` |
|---|---|
| Mission text on the homepage | `homeMission` |
| Stats band numbers | `stats` |
| Program descriptions | `programs` |
| Tutor roster | `tutors` |
| FAQ list | `faqs` |
| Newsletter issues | `newsletterIssues` |
| Governing document list | `governingDocs` |
| Practice exam links | `practiceExams` |
| Contact channels | `contact.channels` |
| Land acknowledgment + email + Instagram | `site` |

**Navigation structure** lives in `lib/nav.ts` (`primaryNav` for the header, `footerNav` for the footer).

The membership application form URL is at the top of `app/membership/page.tsx` — update `APPLICATION_FORM_URL` to point at the live Google Form.

---

## Replace the OG image

`public/og-image.png` is referenced by the metadata in `app/layout.tsx`. A placeholder note lives at `public/og-image.png.README`. Drop a 1200 × 630 PNG into `/public` to enable social previews. See the README in that directory for spec details.

The site favicon is `app/icon.svg` — replace it with a branded SVG (or add `app/icon.png` / `app/apple-icon.png` per the [Next.js metadata docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)).

---

## Project structure

```
cbss-tutoring/
├─ app/
│  ├─ layout.tsx              # root layout — fonts, metadata, header, footer
│  ├─ page.tsx                # Home
│  ├─ globals.css             # Tailwind v4 @theme tokens + base styles
│  ├─ icon.svg                # site favicon
│  ├─ not-found.tsx           # custom 404
│  ├─ sitemap.ts              # /sitemap.xml
│  ├─ robots.ts               # /robots.txt
│  ├─ about/
│  │  ├─ page.tsx
│  │  ├─ team/page.tsx + team-grid.tsx
│  │  └─ newsletter/page.tsx
│  ├─ resources/
│  │  ├─ page.tsx
│  │  ├─ governing-documents/page.tsx
│  │  └─ practice-exams/page.tsx
│  ├─ services/
│  │  ├─ page.tsx
│  │  ├─ peer-tutoring/page.tsx
│  │  └─ tutor-registry/page.tsx + registry-client.tsx
│  ├─ membership/page.tsx
│  └─ contact/page.tsx + contact-form.tsx
├─ components/
│  ├─ ui/                     # shadcn-style primitives (Button, Card, Sheet,
│  │                          #   Accordion, Dialog, Input, Textarea, Label)
│  ├─ site/                   # header, footer, hero, program-card, stat-tile,
│  │                          #   tutor-card, faq, cta-banner, land-acknowledgment,
│  │                          #   section-header, theme-toggle
│  ├─ motion/                 # fade-in, stagger
│  └─ providers.tsx           # next-themes ThemeProvider
├─ lib/
│  ├─ nav.ts                  # nav structure + site URL
│  ├─ content.ts              # ALL page content
│  └─ utils.ts                # cn() helper
└─ public/
   └─ images/
```

---

## Design system

- **Typography** — Fraunces (display, variable opsz), Inter (UI), JetBrains Mono (metadata). Self-hosted via `next/font`.
- **Color** — OKLCH tokens defined in `app/globals.css`. Light + dark via `next-themes`. Toggle in the header.
- **Spacing** — `max-w-6xl` container, `py-20 md:py-28 lg:py-32` section rhythm, `gap-6` for cards.
- **Motion** — Framer Motion fade-up entrances (600 ms, custom cubic-bezier `[0.22, 1, 0.36, 1]`), 80 ms stagger, hover lifts. `prefers-reduced-motion` disables all transforms.

---

## Accessibility

- Skip-to-content link at the top of every page.
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). One `<h1>` per page.
- All interactive elements keyboard-navigable with `:focus-visible` rings.
- Color contrast verified ≥ 4.5:1 for body text.
- Form fields have associated `<Label>` elements.
- `prefers-reduced-motion` short-circuits animations.

---

## License & credit

Made by students at Dr. Charles Best Secondary School, Coquitlam, BC.

Land acknowledgment in `lib/content.ts` (`site.landAcknowledgment`) is reproduced verbatim throughout the site.
