# itstemo.github.io

Personal site of Temo Ojeda — data, software, and agaves. Built with [Astro](https://astro.build/) in TypeScript. Minimal, editorial, paper-colored, with dark mode.

Live at [itstemo.github.io](https://itstemo.github.io).

## Development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
```

## Writing a blog post

Add a markdown file to `src/content/blog/`:

```md
---
title: My post title
description: Optional one-line summary shown on the blog index.
date: 2026-07-03
---

Post body in full markdown — headings, code blocks, tables, images, quotes.
```

The filename becomes the URL slug (`my-post.md` → `/blog/my-post/`). Set `draft: true` in the frontmatter to keep a post out of the build. Frontmatter is validated at build time by the schema in `src/content.config.ts`.

## Deployment

Pushes to `master` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo settings under **Pages**, set the source to **GitHub Actions** (instead of deploy-from-branch).

## Structure

```
src/
  content/blog/     markdown posts
  content.config.ts blog collection schema
  layouts/Base.astro shared shell: head, theme toggle, header
  pages/            index, about, contact, blog index, blog/[slug]
  styles/global.css design tokens, typography, dark mode
```
