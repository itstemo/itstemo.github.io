# itstemo.github.io

Personal site of Temo Ojeda. Astro 7, TypeScript strict, static output, deployed to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `master`.

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — type-checks content and builds to `./dist`

## Architecture

- `src/layouts/Base.astro` — the only layout. Head, fonts, theme toggle, and the site header (pass `header={false}` to hide it, as the home page does).
- `src/pages/` — file-based routes: `index`, `about`, `contact`, `blog/index`, `blog/[slug]`.
- `src/content/blog/*.md` — blog posts. Schema in `src/content.config.ts` (title, optional description, date, draft flag). Filename = URL slug.
- `src/styles/global.css` — all design tokens and shared styles.

## Design rules

- Minimal, editorial. Paper background, display serif (Instrument Serif) for headings and the name, Inter for body text. Fonts are self-hosted via `@fontsource` packages — no external font requests.
- Dark mode uses CSS `light-dark()` with `color-scheme`. It follows the system by default; the toggle sets `data-theme` on `<html>` and persists to localStorage. Any new color must be defined as a `light-dark()` token in `:root` — never hardcode a hex value in a component.
- Nav links use the `.link` class (animated underline via `::after` scaleX). Prose links use plain underlines.
- No client-side JavaScript beyond the two small inline theme scripts in `Base.astro`. Keep it that way — no frameworks, no islands, unless explicitly requested.
- Dates render with `timeZone: 'UTC'` to avoid off-by-one-day drift; keep that when touching date formatting.
