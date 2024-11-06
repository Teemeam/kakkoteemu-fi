// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
  base: '/film',
  resolve: {
    alias: {
      '~': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
  server: {
    port: 3000,
  },
});
