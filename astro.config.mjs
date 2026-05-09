// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://weighsone.github.io',
  base: '/nataliechapmanpianostudio-site',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
