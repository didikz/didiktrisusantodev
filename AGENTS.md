# AGENTS.md

Personal portfolio. Plain Astro 7. No React/Vue/Svelte. No tests. No lint/formatter. Vanilla CSS + `.astro`. Tab indent. Node `>=22.12.0` (see `.nvmrc`).

## Commands

- `npm run dev` — dev server
- `npm run build` — build → `dist/`
- `npm run preview` — preview build
- No lint/typecheck/test scripts. Type check: `astro check` only.

## Work collection

- Markdown in `src/content/work/`, schema `src/content.config.ts` (`title`, `publishDate`, `img`, `description`, `tags`; `img_alt` optional).
- Add project = new `.md` there. Detail page auto via `src/pages/work/[...slug].astro`.
- List page: `src/pages/work.astro` (sort `publishDate` desc). Nested dirs OK → slug path.
- Stubs (`bloom-box`, `h20`, …) = theme placeholders, not real work. `/work` = `noindex`.

## Gotchas

- Stack logos: `public/assets/stack/` (local SVGs). No CDN.
- Never hand-edit `.astro/` or `dist/` (generated, gitignored).
- Theme: `theme-dark` on `<html>` via inline script `MainHead.astro`; toggle `ThemeToggle.astro`; tokens `src/styles/global.css`.
- Icons: paths `IconPaths.ts` → `Icon.astro`.
- `astro.config.mjs` `site: 'https://didiktrisusanto.dev'`; OG/canonical from `Astro.site` in `MainHead.astro`.
- Analytics: Umami in `BaseLayout.astro`.
