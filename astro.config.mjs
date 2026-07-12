import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';

// 배포 도메인. 커스텀 도메인 연결 후 그대로 두면 됩니다.
export default defineConfig({
  site: 'https://holorado.me',
  integrations: [sitemap()],
  markdown: {
    gfm: false, // 내장 GFM 끄고 아래서 직접 설정
    remarkPlugins: [[remarkGfm, { singleTilde: false }]],
  },
});
