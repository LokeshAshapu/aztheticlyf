# Aztheticlyf — Aesthetic Gift Studio

A premium brand website for Aztheticlyf, built with Next.js (App Router), TypeScript and
Tailwind CSS v4. Art-directed in the studio's lilac-and-cream palette, with hand-drawn
editorial plate artwork, scroll reveals, a WhatsApp-first enquiry flow and marketing
placeholders ready for GA4 and Meta Pixel.

## Brand reference

All brand facts were sourced from the public Instagram profile `@aztheticlyf`
("Aztheticlyf — Aesthetic Gift Studio") as of November 2026:

- Korean stationery · accessories · gifts
- 10,000+ happy customers
- Wholesale · retail · reselling
- +91 7871501939 · worldwide shipping
- Anti-tarnish jewellery via sister label `@tara.luxe.in`
- Based in Chennai, Tamil Nadu, India
- Highlights: Saree hamper, orders, reviews, anti-tarnish, delivery, wholesale, products,
  business, return gifts, scoops

No prices, customer quotes, founding dates, awards or measurements were invented. The
enquiry form hands off to WhatsApp because the brand sells made-to-order hampers with no
published price list, and there are no verified testimonials on the profile to quote.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run start      # serve the production build
```

## Structure

```
app/
  layout.tsx        fonts, metadata, JSON-LD, analytics placeholders
  page.tsx          home page composition (sections A–I)
  opengraph-image.tsx
  icon.svg
  robots.ts / sitemap.ts
content/site.ts     single source of truth for all brand copy and data
components/
  art/Plate.tsx     editorial plate artwork + photo slot (pass `src` to use a real photo)
  site/*            Nav, Hero, Marquee, About, Collections, Featured, WhyUs, Wholesale,
                    Gallery, Contact, Footer, HeroArt, Wordmark
  ui/*              Reveal, Magnetic, Cta, SectionLabel, Stamp
```

## Adding real photographs

Every visual is a `Plate` component. Drop the studio's photography into `public/photos/` and
pass `src="/photos/hamper-01.jpg"` to the relevant `Plate` — the framing, hover zoom and
accessibility attributes stay the same. When at least one real photo is provided, replace
the matching plate in `content/site.ts` via a small `image` field or directly on the component.

## Marketing configuration

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — canonical URL for SEO/sitemap/OG
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 (blank = disabled)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel (blank = disabled)
- `NEXT_PUBLIC_FORM_ENDPOINT` — optional form backend (Formspree, Basin, a serverless route).
  When empty, the enquiry form opens WhatsApp with the message pre-filled.

## Extending the site

- New collection/product: add an entry to `collections` in `content/site.ts`.
- New feature/campaign hamper: add to `features`.
- New gallery post: add to `gallery` (each variant maps to a Plate artwork; reuse `src` for real photos).
- New page (campaign landing): create `app/<slug>/page.tsx` and compose from the same sections;
  the layout already provides Nav, Footer and analytics.
