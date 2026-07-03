# itstemo.github.io

Personal site of Temo Ojeda. Astro 7, TypeScript strict, static output, deployed to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `master`.

## Commands

- `npm run dev` — dev server at localhost:4321
- `npm run build` — type-checks content and builds to `./dist`

## Architecture

- `src/layouts/Base.astro` — the only layout. Head, fonts, and the site header (nav + theme toggle, always top-right on every page; pass `wordmark={false}` to hide the wordmark, as the home page does).
- `src/pages/` — file-based routes: `index`, `about`, `contact`, `blog/index`, `blog/[slug]`.
- `src/content/blog/*.md` — blog posts. Schema in `src/content.config.ts` (title, optional description, date, draft flag). Filename = URL slug.
- `src/styles/global.css` — all design tokens and shared styles.

## Design rules

- Minimal, editorial. Paper background, full-width poster layout (`--edge` token controls page margins). Hybrid typography with three fonts, each with one job: Instrument Serif (`--font-display`) for identity — the name, wordmark, and page titles; heavy Inter (`--font-body`, weight 800) for article structure — post titles, subheads, dates, nav; Newsreader (`--font-serif`) for long-form reading — post bodies, descriptions, the tagline. Fonts are self-hosted via `@fontsource` packages — no external font requests.
- Dark mode uses CSS `light-dark()` with `color-scheme`. It follows the system by default; the toggle sets `data-theme` on `<html>` and persists to localStorage. Any new color must be defined as a `light-dark()` token in `:root` — never hardcode a hex value in a component. The toggle briefly adds `.theme-transition` to `<html>` so colors cross-fade (0.45s); new color properties usually belong in that transition list in `global.css`.
- Nav links use the `.link` class (animated underline via `::after` scaleX). Prose links use plain underlines.
- No client-side JavaScript beyond the two small inline theme scripts in `Base.astro`. Keep it that way — no frameworks, no islands, unless explicitly requested.
- Dates render with `timeZone: 'UTC'` to avoid off-by-one-day drift; keep that when touching date formatting.

## Workflow

- Every change ships as a PR: branch `temo/<slug>` off freshly pulled `master`, push, `gh pr create`. Temo merges PRs himself, often immediately — never merge for him.
- Because PRs merge fast: before pushing a follow-up commit, check the PR is still open (`gh pr view <n> --json state`). If it already merged, cherry-pick onto a new branch off updated `master` instead — pushing to a merged branch strands the commit.
- CI builds every PR (`.github/workflows/ci.yml`); merging to `master` auto-deploys to GitHub Pages (`deploy.yml`). Both build on Node 24 — keep CI, deploy, and `package.json` engines in sync when bumping, and bump action majors (`checkout`, `setup-node`, `deploy-pages`, `withastro/action`) when GitHub deprecates a runtime.
- Before opening a PR: `npm run build` locally, and verify visually with the dev server (`.claude/launch.json` has an `astro-dev` config) — check light and dark mode, desktop and mobile widths. Restart the dev server after switching git branches; it gets confused by files changing underneath it.
- Design decisions Temo has already made (don't relitigate): no email on the contact page (GitHub and X only); no temo.me domain; home name caps at 8.5rem; nav lives top-right on every page.
