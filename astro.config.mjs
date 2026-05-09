// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://new.nataliechapmanpianostudio.co.nz',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
