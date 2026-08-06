# didiktrisusanto.dev

Personal portfolio of Didik Tri Susanto — backend-focused product engineer. Plain [Astro](https://astro.build/) 7, static HTML, vanilla CSS (Warm ink). Live at [didiktrisusanto.dev](https://didiktrisusanto.dev).

## Requirements

- Node.js `>=22.12.0` (see `.nvmrc`)
- npm 9+

## Setup

```bash
npm install
npm run dev
```

Astro prints URL (default `http://localhost:4321`).

## Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Dev server |
| `npm run build` | Static site → `dist/` |
| `npm run preview` | Preview build |

Test `/api/posts` locally: `npm run build` then `npx wrangler pages dev dist` (`astro dev` = static only).

## Stack

- Astro 7 (static output, no UI framework)
- `@astrojs/sitemap`
- Cloudflare Pages (+ `functions/` for live blog RSS)
