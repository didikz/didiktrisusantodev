# didiktrisusanto.dev

Personal portfolio of Didik Tri Susanto — backend-focused product engineer. Plain [Astro](https://astro.build/) 7, static HTML, vanilla CSS (Warm ink). Live at [didiktrisusanto.dev](https://didiktrisusanto.dev).

## Requirements

- Node.js `>=22.23.4` (see `.nvmrc`)
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

## Deploy

Production and PR previews use **Cloudflare Pages Git integration** (no GitHub Actions).

- **Production:** pushes to `main` deploy to [didiktrisusanto.dev](https://didiktrisusanto.dev).
- **PR previews:** each pull request gets a unique `*.pages.dev` URL (hash + branch alias). Cloudflare comments the link on the PR. Previews are public and send `X-Robots-Tag: noindex`.
- **Build settings** (Pages dashboard): build command `npm run build`, output directory `dist`, Node `>=22.23.4` (from `.nvmrc`).

Confirm previews are enabled under the Pages project → Settings → Builds & deployments. Optional: lock previews behind Cloudflare Access in Settings → General.

## Stack

- Astro 7 (static output, no UI framework)
- `@astrojs/sitemap`
- Cloudflare Pages (+ `functions/` for live blog RSS)
