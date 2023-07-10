import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  resolve: {
    alias: {
      '~': new URL('./src', import.meta.url),
    },
  },
});
