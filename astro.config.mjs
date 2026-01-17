// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. あなたのGitHub PagesのURL（https://<user>.github.io）
  site: 'https://marlion01.github.io',
  
  // 2. リポジトリ名（例：/supersheet-lp）※先頭にスラッシュ必須
  base: '/supersheet-lp',

  // i18n設定を追加
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

  // 静的サイト生成を明示
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
});