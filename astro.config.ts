import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itstemo.github.io',
  build: {
    // Ship the CSS in the HTML instead of as a render-blocking request. While
    // that request is in flight the browser paints a bare canvas coloured from
    // the OS alone, which is a white flash for anyone reading in dark mode on a
    // light OS. Inlined, the first paint already knows the theme. The stylesheet
    // is ~2kB gzipped, so this is cheaper than the extra round trip anyway.
    inlineStylesheets: 'always',
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
});
