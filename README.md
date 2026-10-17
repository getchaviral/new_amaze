# Amaze Expo — amazexpo.com redesign

A production Next.js build of the **amazexpo.com Redesign** design canvas
(6 artboards + an SEO/Google Business Profile spec).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site + sitemap.xml + robots.txt + OG image
npm start
```

## Routes

| Route | Artboard |
| --- | --- |
| `/` | 1 · Home — hero, proof strip, AI booth generator, 8 agent steps, 11-skill accordion, render-vs-reality slider, comparison, process, plans, FAQ |
| `/why-choose-us` | 2 · Why Choose Us — counters, timeline tabs, challenge, six reasons, three verticals, team, commitments |
| `/services` | 3 · Our Services — AI Platform / Managed toggle, monthly–annual pricing, three-question plan quiz, organiser section |
| `/sectors` | 4 · Industry we Serve — 20 sectors filterable by group, sector-page template, upcoming-shows table |
| `/sectors/[slug]` | 20 static sector pages (the SEO artboard asks for `/sectors/<slug>`) |
| `/projects` | 5 · Projects — type filter, Royal Canin case study, 11 project cards, time-lapse and testimonial slots |
| `/contact` | 6 · Contact — four enquiry types driving a conditional brief form, direct contact, three offices |

## Design system

Defined once in `src/app/globals.css` as Tailwind v4 `@theme` tokens, matching
the canvas: crimson `#B22234`, gold `#D4A037`, ink `#111827`, cream `#FAF8F3`,
Inter.

Two additions worth knowing:

- **`.media`** — the prototype's dashed gold photo boxes are rebuilt as a
  designed surface: warm hatched field, corner registration ticks and a
  caption chip naming the photograph to supply. `.media-dark` is the ink
  variant.
- **`<Pending />` / `<Marked />`** (`src/components/ui/pending.tsx`) — every
  fact the client still has to confirm (`⟨PRICE⟩`, `⟨CLIENT 1⟩`,
  `⟨FULL ADDRESS⟩`) renders as a gold chip. Nothing is invented; every pending
  value is greppable with `grep -r "⟨" src/`.

## Artwork

`src/components/art/booth.tsx` draws a 6 × 3.6 m booth as a front elevation in
two states — **wire** (the AI concept) and **built** (the finished booth).
Because both share one coordinate system, the render-vs-reality slider on the
home page lines up exactly: dragging literally resolves the concept into the
build. Replace both with real concept/built photography at the same camera
angle.

## SEO work already done

From the SEO artboard's "what we found on the live site" list:

- ✅ Unique `<title>` and meta description on every route (`SEO_PAGES` in `src/lib/site.ts`)
- ✅ `sitemap.xml` — real XML (`src/app/sitemap.ts`); the live site returns the homepage HTML
- ✅ `robots.txt` — `src/app/robots.ts`
- ✅ Canonical + Open Graph + Twitter on every route
- ✅ `Organization` on every page, `LocalBusiness` on `/contact`, `SoftwareApplication` + `Offer` on `/services`, `FAQPage` on `/` and `/services`, `BreadcrumbList` on sector pages, `Event` on `/sectors`
- ✅ 301 redirects for the old `/category/surfacing` and `/category/camping` (`next.config.ts`)
- ✅ Static HTML per route (no client-side-rendered SPA)
- ✅ OG image generated at build (`src/app/opengraph-image.tsx`)
- ✅ Skip link, `aria-expanded` disclosures, 44px targets, labelled form fields

## Before launch

The contact form is client-side only — wire `src/components/contact/contact-form.tsx`
to your inbox or CRM. The demo calendar slot in the same component is a stub
for the scheduling widget.

Facts still pending client confirmation are listed in `PENDING.md`.
