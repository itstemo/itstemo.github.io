import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://itstemo.github.io',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
});
