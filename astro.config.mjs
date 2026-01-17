import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://supersheet-team.github.io',
  // base: '/lp', // Commented out for development
  
  // i18n Configuration
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'ja'
    }
  },

  // Integrations
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja',
          en: 'en',
        },
      },
    }),
  ],

  // Build configuration for GitHub Pages
  output: 'static',
  
  // Optimizations
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});