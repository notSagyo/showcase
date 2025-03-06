import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import tunnel from 'astro-tunnel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tunnel()],
  vite: { plugins: [tailwindcss()] },
  output: 'static',
  adapter: vercel(),
});
