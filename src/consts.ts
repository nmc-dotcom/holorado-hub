// ─────────────────────────────────────────────
// 홀로라도 사이트 전역 설정
// ─────────────────────────────────────────────
export const SITE = {
  name: '홀로라도',
  tagline: '혼자라도, 잘 살고 있습니다',
  description:
    '홀로라도는 1인가구 생활, 요리, 생산성과 AI 활용 팁을 담는 라이프스타일 공간입니다. 혼자여도 잘 사는 데 도움이 되는 이야기와, 쓸모 있는 무료 도구를 나눕니다.',
  url: 'https://holorado.me',
  locale: 'ko_KR',
};

// ─── AdSense ───────────────────────────────────
// 광고 게재 승인 전에는 ADS_ENABLED = false 로 둡니다.
// (승인 심사 중에는 광고 유닛이 뜨지 않는 편이 유리)
// 승인되면 true 로만 바꾸면 모든 글/페이지에 광고가 일괄 적용됩니다.
export const ADSENSE = {
  client: 'ca-pub-8393858767155749',
  enabled: false, // ← 승인 후 true 로 변경
  // 승인 후 AdSense에서 발급받은 광고 슬롯 ID를 여기에 채웁니다.
  slots: {
    inArticle: '', // 본문 중간 광고 슬롯 ID
    footer: '',    // 하단 광고 슬롯 ID
  },
};

// ─── 도구 목록 (서브도메인) ──────────────────────
export const TOOLS = [
  {
    name: 'OptiPDF',
    desc: 'PDF 용량을 브라우저에서 바로 줄이는 무료 도구. 파일이 서버로 전송되지 않아 안전합니다.',
    url: 'https://pdf.holorado.me',
    emoji: '📄',
    status: 'live', // 'live' | 'soon'
  },
  {
    name: '준비 중',
    desc: '쓸모 있는 도구를 계속 만들어 더할 예정이에요.',
    url: '#',
    emoji: '🧰',
    status: 'soon',
  },
];

// ─── 카테고리 ─────────────────────────────────
export const CATEGORIES: Record<string, { label: string; color: string }> = {
  '1인가구': { label: '1인가구', color: 'var(--green)' },
  '요리': { label: '요리', color: 'var(--terracotta)' },
  '생산성': { label: '생산성', color: 'var(--green)' },
  'AI': { label: 'AI 활용', color: 'var(--terracotta)' },
};
