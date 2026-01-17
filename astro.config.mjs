// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. あなたのGitHub PagesのURL（https://<user>.github.io）
  site: 'https://marlion01.github.io',
  
  // 2. リポジトリ名（例：/supersheet-lp）※先頭にスラッシュ必須
  base: '/supersheet-lp',

  integrations: [tailwind()],
});