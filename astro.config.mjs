import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://supersheet-team.github.io',
  base: '/lp',
  
  // i18n Configuration
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'ja',
      zh: 'ja',
      ko: 'ja'
    }
  },

  // Integrations
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    // sitemap({
    //   i18n: {
    //     defaultLocale: 'ja',
    //     locales: {
    //       ja: 'ja-JP',
    //       en: 'en-US', 
    //       zh: 'zh-CN',
    //       ko: 'ko-KR',
    //     },
    //   },
    //   filter: (page) => {
    //     // Include all pages except any that might be problematic
    //     return !page.includes('undefined');
    //   },
    // }),
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