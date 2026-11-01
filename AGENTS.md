# AGENTS.md

Portfolio. Plain Astro 7. No React/Vue/Svelte. No tests. No lint/formatter. Vanilla CSS + `.astro`. Tab indent. Node `>=24.22.1` (see `.nvmrc`).

## Commands

- `npm run dev` — dev server
- `npm run build` — build → `dist/`
- `npm run preview` — preview build
- No lint/typecheck/test. Type check: `astro check` only.

## Work collection

- Schema still in `src/content.config.ts`, but stub markdown and `/work` routes are removed (ponytail cleanup).
- To revive: add markdown under `src/content/work/`, restore `src/pages/work.astro` + `src/pages/work/[...slug].astro`, and stock/preview imagery.

## Deploy

- Cloudflare Pages Git: `main` → production; PRs → preview `*.pages.dev` URLs (dashboard comments on the PR).
- Build: `npm run build` → `dist/`. No Actions workflow for deploy.
- Preview URLs are public + `noindex` by default; Access policy is optional in the Pages dashboard.

## Gotchas

- Stack logos: `public/assets/stack/` (local SVGs). No CDN.
- Never hand-edit `.astro/` or `dist/` (generated, gitignored).
- Theme: `theme-dark` on `<html>` via inline script `MainHead.astro`; toggle `ThemeToggle.astro`; tokens `src/styles/global.css`.
- Icons: paths `IconPaths.ts` → `Icon.astro`.
- `astro.config.mjs` `site: 'https://didiktrisusanto.dev'`; OG/canonical from `Astro.site` in `MainHead.astro`.
- Analytics: Umami in `BaseLayout.astro`.
