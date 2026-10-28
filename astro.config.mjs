import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Pages carrying a robots noindex must never be handed to crawlers through the sitemap.
// scripts/check-noindex-sitemap.mjs fails the build if these two lists ever disagree.
const NO_INDEXED = ["/id/guides/wanlian-fluid-vs-ca-fire/", "/id/guides/wanlian-fluid-vs-forede/", "/id/guides/wanlian-fluid-vs-mueller/"];

export default defineConfig({
  site: 'https://wanlian911.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !NO_INDEXED.includes(new URL(page).pathname),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ru: 'ru',
          fr: 'fr',
          ar: 'ar',
          pt: 'pt',
          de: 'de',
          tr: 'tr',
          id: 'id'
        }
      }
    })
  ],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
