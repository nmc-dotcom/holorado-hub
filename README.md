# 홀로라도 허브 (holorado-hub)

`holorado.me` 루트에 올라갈 **라이프스타일 콘텐츠 허브**입니다.
Astro + 마크다운 블로그, 따뜻한 미니멀 디자인, "홀로라도 ___ ME!!" 룰렛 히어로,
sitemap/robots/ads.txt, 그리고 **비활성 상태의 AdSense 광고 슬롯**이 포함되어 있습니다.

## 🚀 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 사이트 생성
```

## ✍️ 글 추가하는 법

`src/content/blog/` 에 `.md` 파일 하나 = 글 하나. 파일명이 URL이 됩니다
(`my-post.md` → `/blog/my-post`). 상단에 아래 형식만 지키면 됩니다:

```markdown
---
title: "제목"
description: "검색결과·카드에 보일 한 줄 설명"
pubDate: 2026-07-10
category: "1인가구"   # 1인가구 | 요리 | 생산성 | AI
heroEmoji: "🍳"
draft: false          # true면 목록에 안 뜸 (초안)
---

여기부터 본문 (## 소제목, **강조**, 표, 인용 등 마크다운)
```

카테고리를 늘리려면 `src/consts.ts`의 `CATEGORIES`에 추가하세요.

## 🧰 도구 추가하는 법

`src/consts.ts`의 `TOOLS` 배열에 항목을 추가하면 홈·도구 페이지에 자동 노출됩니다.
새 도구는 서브도메인(`xxx.holorado.me`)에 배포하고 여기에 링크만 걸면 됩니다.

## 🎨 디자인 수정

색·폰트·둥근 정도 등 모든 토큰은 `src/styles/global.css` 상단 `:root`에 있습니다.
(딥그린 `--green`, 테라코타 `--terracotta`, 크림 `--cream`)

## 💰 AdSense 광고 켜는 법 (승인 후에만!)

승인 전에는 **광고 유닛을 켜지 마세요** (지금 상태 그대로 심사받는 게 유리).
`<head>`의 AdSense 로더 스크립트는 이미 들어있어 계정 인증·심사에 사용됩니다.

승인되면 `src/consts.ts` 에서:

1. `ADSENSE.enabled = true` 로 변경
2. AdSense에서 발급받은 광고 슬롯 ID를 `slots.inArticle`, `slots.footer`에 입력
3. 커밋 → 배포하면 **모든 글에 광고가 일괄 적용**됩니다.

> 원칙: 광고보다 콘텐츠가 확실히 우위여야 합니다. 글 하나당 광고는 1~2개 선에서.

## ☁️ Cloudflare Pages 배포 (중요: 다운타임 없는 교체 순서)

현재 `holorado.me` 루트는 기존 `opdf`(PDF 도구) 프로젝트를 서빙 중입니다.
아래 순서로 하면 교체 중에도 사이트가 안 끊깁니다.

1. 이 폴더를 **새 GitHub 레포**(`holorado-hub`)에 올린다.
2. Cloudflare **Workers & Pages → Create → Pages → GitHub 연결** → 이 레포 선택
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Framework preset:** Astro
3. 먼저 임시 주소(`xxx.pages.dev`)에서 사이트가 잘 뜨는지 **검증**한다.
4. 검증 끝나면 이 프로젝트의 **Custom domains에 `holorado.me`(apex) 추가**.
   (기존 opdf 프로젝트에서 `holorado.me`를 먼저 제거 → 이 프로젝트에 추가)
5. `pdf.holorado.me`는 **기존 opdf 프로젝트에 그대로 둔다** (도구는 그대로).

## 🔎 배포 후 필수 — Google Search Console

1. [Search Console](https://search.google.com/search-console)에 `holorado.me` 등록
2. **Sitemaps**에 `sitemap-index.xml` 제출
3. 색인 상태를 지켜보며, 글을 꾸준히 추가한다.

신규 사이트의 AdSense 승인은 **콘텐츠 + 색인 + 시간**이 함께 필요합니다.
글을 몇 개 더 쌓고 색인이 잡힌 뒤(보통 2~3주+), AdSense에서 재검토를 요청하세요.
