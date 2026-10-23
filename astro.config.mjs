import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wanlian911.com',
  integrations: [
    tailwind(),
    sitemap({
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
