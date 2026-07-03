---
title: Hello, world
description: The first post, and a tour of what markdown can do on this site.
date: 2026-07-03
---

This site is built with [Astro](https://astro.build/), and every post is a plain
markdown file in `src/content/blog/`. This first post doubles as a style test for
everything markdown can render here.

## Headings and text

Regular paragraphs render in a quiet sans-serif. **Bold**, *italic*, and
[links](https://astro.build/) all work as expected, and headings pick up the
display serif.

> Pull quotes get the editorial treatment — big, serif, and italic, with a rule
> down the left side.

## Code

Inline code like `getCollection('blog')` gets a subtle background. Fenced blocks
are syntax-highlighted at build time with Shiki, and switch themes with dark mode:

```ts
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => !data.draft);
const latest = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())[0];
```

## Lists and tables

Things agaves need:

- Sun, and plenty of it
- Sharp drainage
- Patience measured in years

| Agave | Years to mature |
| --- | --- |
| Espadín | 6–8 |
| Tobalá | 10–15 |
| Tepeztate | 25+ |

---

That's the whole toolkit. New post = new `.md` file with a title and a date.
