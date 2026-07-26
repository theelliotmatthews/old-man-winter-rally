# Old Man Winter Rally

High-converting rebuild of [oldmanwinterrally.com](https://www.oldmanwinterrally.com/) using SvelteKit, Tailwind CSS v4, Lenis, and GSAP.

## Stack

- SvelteKit 2 + Svelte 5 runes
- Tailwind CSS v4
- `@sveltejs/adapter-vercel`
- Meta Pixel (`PUBLIC_META_PIXEL_ID`)
- Klaviyo lead capture via `/api/register`

## Local

```bash
nvm use 22
npm install
cp .env.example .env
npm run dev
```

## Env

```
PUBLIC_META_PIXEL_ID=1820792774830166
KLAVIYO_API_KEY=pk_...
KLAVIYO_LIST_ID=...
PUBLIC_MAPTILER_API_KEY=...
```

## Conversion structure

Homepage follows CRE / Making Websites Win funnel order: plain-language hero, proof, day flow, course chooser, benefits, weather risk reversal, gallery, FAQ objections, location, and dual CTA (buy + email/SMS capture).
