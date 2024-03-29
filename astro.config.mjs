import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import tunnel from 'astro-tunnel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), react(), tunnel()],
  adapter: vercel(),
});
