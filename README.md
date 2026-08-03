# Kris Hapgood RN - Website

Premium multi-page website for Kris Hapgood, RN, BSN - international speaker, best-selling author of *The Gifts of Pain*, founder of Essential Health Solutions, Inc., and LifeWave X39 advocate.

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- next/image + next/font

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding photos of Kris

Drop optimized images (preferably `.webp`) into `public/images/`, then pass the `src` prop to `PhotoOfKris`:

```tsx
<PhotoOfKris
  src="/images/kris-hero.webp"
  label="hero portrait"
  alt="Kris Hapgood, RN"
/>
```

Suggested filenames:

| File | Use |
|------|-----|
| `kris-hero.webp` | Homepage hero |
| `kris-about.webp` | About page |
| `kris-speaking.webp` | Work With Kris / About |
| `kris-lifestyle.webp` | Secondary portraits |

Look for `// TODO: Replace with actual photo of Kris` comments in the codebase.

## Updating links

| Constant | File | Purpose |
|----------|------|---------|
| `BOOKING_URL` | `src/lib/utils.ts` | LeadConnector discovery call |
| `X39_PURCHASE_URL` | `src/lib/utils.ts` | Merchant / affiliate link (placeholder) |

## Pages

- `/` - Snap-scroll homepage (6 sections + dot nav)
- `/about` - Full bio
- `/fire-framework` - F.I.R.E. Framework™ deep dive
- `/x39` - LifeWave X39 education
- `/work-with-kris` - Speaking, coaching, workshops
- `/contact` - Form + booking widget embed
- `/impact` - Testimonials, book, media, podcasts

## Design system

- Cream backgrounds, deep teal primary, warm gold accents, soft sage
- `DnaBackground` - subtle scientific DNA line art (no busy photo backgrounds)
- Display font: Cormorant Garamond · Body: DM Sans
