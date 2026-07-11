---
title: Hola, mundo
description: El primer post, y un recorrido por lo que markdown puede hacer en este sitio.
date: 2026-07-03
---

Este sitio está construido con [Astro](https://astro.build/), y cada post es un archivo
markdown simple en `src/content/blog/`. Este primer post también sirve como prueba de
estilo para todo lo que markdown puede renderizar aquí.

## Encabezados y texto

El texto largo se lee en una serif de estilo libro. **Negrita**, *cursiva*, y
[enlaces](https://astro.build/) funcionan como se espera, y los encabezados cambian a
una sans pesada que da estructura.

> Las citas destacadas reciben el tratamiento editorial — serif, cursiva, con una
> línea al lado izquierdo.

## Código

El código en línea como `getCollection('blog')` recibe un fondo sutil. Los bloques
con delimitadores se resaltan en tiempo de compilación con Shiki, y cambian de tema
con el modo oscuro:

```ts
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', ({ data }) => !data.draft);
const latest = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())[0];
```

## Listas y tablas

Cosas que los agaves necesitan:

- Sol, y en abundancia
- Drenaje afilado
- Paciencia medida en años

| Agave | Años para madurar |
| --- | --- |
| Espadín | 6–8 |
| Tobalá | 10–15 |
| Tepeztate | 25+ |

---

Ese es todo el kit de herramientas. Post nuevo = archivo `.md` nuevo con un título y una fecha.
