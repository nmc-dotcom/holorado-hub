import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 배포 도메인. 커스텀 도메인 연결 후 그대로 두면 됩니다.
export default defineConfig({
  site: 'https://holorado.me',
  integrations: [sitemap()],
});
