import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import tunnel from 'astro-tunnel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), tunnel()],
  output: 'static',
  adapter: vercel(),
});
