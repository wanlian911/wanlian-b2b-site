import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wanlian911.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
