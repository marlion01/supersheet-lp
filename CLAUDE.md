# SuperSheet LP Development Prompt

あなたは世界最高峰のフロントエンドエンジニアであり、UI/UXデザイナーです。
以下の仕様とコンテンツに基づき、「次世代ハイブリッド表計算プラットフォーム SuperSheet」のランディングページ（LP）のプロジェクトスキャフォールディングと主要コンポーネントのコードを作成してください。

## 1. Project Overview
- **Product Name:** SuperSheet
- **Catchphrase:** The Next-Gen Hybrid Spreadsheet Platform (Excel x Notion x Zapier)
- **Core Value:**
    - **Local-First:** SQLite + Tauriによる爆速な起動とオフライン編集。
    - **Cloud-Native:** Go + gRPCによる堅牢な同期とセキュリティ。
    - **Strict Security:** 組織利用に耐えるDBレベル(RLS)の権限管理。
- **Goal:** ユーザーに「待機リスト（Mailing List）」へ登録してもらうこと。

## 2. Technical Stack (Strict)
- **Framework:** Astro (Latest v5 or v4 stable)
- **Language:** TypeScript
- **Runtime:** Bun
- **Styling:** Tailwind CSS (Mobile First responsive design)
- **Deployment:** GitHub Pages (Static Site Generation - SSG)
- **Package Manager:** bun

## 3. Key Requirements
### A. Internationalization (i18n)
- **Support:** English (`en`) and Japanese (`ja`).
- **Implementation:** Use Astro's native i18n routing (`i18n` configuration in `astro.config.mjs`).
- **Default Locale:** `ja`
- **Routing:** `/` (ja), `/en` (en).
- **Component:** Implement a Language Picker component in the header/footer.

### B. Web Accessibility (a11y)
- **Standard:** WCAG 2.1 AA compliant.
- **Requirements:**
    - Correct semantic HTML tags (`main`, `section`, `nav`, `footer`).
    - Color contrast ratios optimized for readability.
    - Keyboard navigation support (focus states).
    - `aria-label` where necessary.
    - `prefers-reduced-motion` support for animations.

### C. Conversion Optimization (CTA)
- **Action:** "Join the Waitlist" / "事前登録する"
- **Mechanism:** A clear Call-to-Action button linking to a Google Form.
- **Placement:** Hero section (prominent) and Footer.
- **URL Placeholder:**  - JA: `https://docs.google.com/forms/d/e/1FAIpQLSfTsLsTruZYoEW4LAxmoUsmncRqDg-tLLnKkxgI-D4cX9KFPA/viewform?usp=publish-editor`
                        - EN: `https://docs.google.com/forms/d/e/1FAIpQLScIJBM_jWnXbLbt-ICUP86RMKBj3ZK35bVt6d2OFsCeieZcFw/viewform?usp=header`

## 4. Content Structure & Copywriting (Bilingual)
Please use the following draft content for the text in the components.

### Hero Section
- **Headline:**
    - (JA) Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。
    - (EN) The flexibility of Excel, organization of Notion, and automation of Zapier. All in one.
- **Sub-headline:**
    - (JA) ローカルの「爆速」とクラウドの「堅牢性」を両立した、次世代のハイブリッド表計算プラットフォーム。
    - (EN) A next-gen hybrid spreadsheet combining local speed with cloud robustness.
- **CTA Button:**
    - (JA) ウェイティングリストに登録
    - (EN) Join the Waitlist

### Features Section
1. **Local-First & Blazing Fast**
    - (JA) 100万行でもサクサク動作。TauriとSQLiteにより、オフラインでも完全に動作します。
    - (EN) Blazing fast even with 1 million rows. Powered by Tauri & SQLite, fully functional offline.
2. **Real-time Sync & Security**
    - (JA) Go言語とgRPCによる堅牢な同期。RLS（行レベルセキュリティ）で組織データを守ります。
    - (EN) Robust sync with Go & gRPC. Protect organization data with Row Level Security (RLS).
3. **AI & Automation**
    - (JA) PDFや画像を投げるだけで構造化データへ。AIがあなたのデータ入力を自動化します。
    - (EN) Turn PDFs and images into structured data instantly. AI automates your data entry.

## 5. Implementation Tasks

Please generate the following files and code:

1.  **`package.json`**: Minimal setup with necessary dependencies (`astro`, `tailwindcss`, `typescript`).
2.  **`astro.config.mjs`**: Configuration including tailwind integration, sitemap, and **i18n setup**.
3.  **`src/layouts/Layout.astro`**: The base layout with HTML `lang` attribute switching, accessible skip-links, and meta tags for SEO.
4.  **`src/components/Header.astro`**: Contains Logo, Language Switcher, and Nav links.
5.  **`src/components/Hero.astro`**: High-impact section with the main CTA button.
6.  **`src/pages/index.astro`**: The Japanese Landing Page assembly.
7.  **`src/pages/en/index.astro`**: The English Landing Page assembly (reusing components with props or translation files).

## 6. Design Guidelines
- **Color Palette:**
    - Primary: Deep Indigo (Trust & Tech)
    - Accent: Vivid Green or Blue (Action)
    - Background: Clean White / Light Gray (SaaS look)
- **Typography:** Sans-serif, modern, readable (e.g., Inter, Noto Sans JP).
- **Vibe:** Professional, Fast, Developer-friendly.

Start by setting up the project structure and configuration.