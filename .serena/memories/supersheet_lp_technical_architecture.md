# SuperSheet LP - Technical Architecture & Implementation Guide

## Technology Stack
- **Framework**: Astro v4.15.12 (Static Site Generator)
- **Language**: TypeScript 5.6.3 with strict mode
- **Runtime**: Bun >=1.0.0 (primary), Node.js 18+ (fallback)
- **Styling**: Tailwind CSS 3.4.13 with custom design system
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: Bun (lockfile: bun.lockb)

## Project Architecture

### Directory Structure
```
/Users/hori-masa/programming/supersheet/lp/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment
├── public/
│   ├── favicon.svg             # Brand favicon
│   └── robots.txt              # SEO crawler instructions
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation + i18n switcher
│   │   ├── Hero.astro          # Main CTA section
│   │   ├── Features.astro      # Product features showcase
│   │   └── Footer.astro        # Footer + secondary CTA
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML structure
│   ├── pages/
│   │   ├── index.astro         # Japanese homepage (/)
│   │   └── en/
│   │       └── index.astro     # English homepage (/en/)
│   ├── styles/
│   │   └── global.css          # Tailwind + custom CSS
│   ├── types/
│   │   └── index.ts            # TypeScript definitions
│   └── utils/
│       └── i18n.ts             # Internationalization helpers
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies & scripts
├── tailwind.config.mjs         # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Development guide
```

## Internationalization (i18n) Implementation

### Astro i18n Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,  // Japanese at root /
    },
    fallback: {
      en: 'ja'  // Fallback to Japanese
    }
  }
})
```

### Content Management System
```typescript
// src/utils/i18n.ts
export interface LocalizedContent {
  ja: string;
  en: string;
}

export const heroContent = {
  headline: {
    ja: 'Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。',
    en: 'The flexibility of Excel, organization of Notion, and automation of Zapier. All in one.'
  }
}

export function getLocalizedText(content: LocalizedContent, locale: Locale = 'ja'): string {
  return content[locale] || content['ja'];
}
```

### URL Structure & Routing
- **Japanese (default)**: `/` → `src/pages/index.astro`
- **English**: `/en/` → `src/pages/en/index.astro`
- **Language Switching**: Automatic URL transformation with hreflang attributes

## Component Architecture

### Layout System
```astro
<!-- src/layouts/Layout.astro -->
- HTML5 semantic structure
- Dynamic lang attribute based on locale
- SEO meta tags with i18n support
- Accessibility features (skip links, focus management)
- Performance optimizations (preload, compression)
```

### Component Props Pattern
```typescript
interface Props {
  locale?: Locale;  // Auto-detected from URL if not provided
  className?: string;
}

const currentLocale = Astro.props.locale || getLocaleFromUrl(Astro.url);
```

### State Management
- **No client-side state**: Pure static generation
- **Locale detection**: Server-side URL parsing
- **Content selection**: Build-time locale resolution

## Performance Optimizations

### Build Configuration
```javascript
// astro.config.mjs optimizations
build: {
  inlineStylesheets: 'auto',  // Inline critical CSS
}

vite: {
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',  // Cache busting
      }
    }
  }
}
```

### CSS Strategy
- **Critical CSS**: Inlined automatically by Astro
- **Tailwind Purging**: Unused styles removed in production
- **Font Loading**: Preconnect to Google Fonts with display=swap

### JavaScript Strategy
- **Minimal JS**: Only for interactive elements (mobile menu, scroll animations)
- **Progressive Enhancement**: Works without JavaScript
- **Performance API**: IntersectionObserver for scroll animations

## Accessibility Implementation

### WCAG 2.1 AA Compliance
```astro
<!-- Semantic HTML Structure -->
<header role="banner">
<nav role="navigation">
<main id="main-content">
<footer role="contentinfo">

<!-- Skip Links -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Focus Management -->
*:focus-visible {
  @apply ring-2 ring-primary-500 ring-offset-2 rounded-sm;
}
```

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for interactive elements
- **Heading Hierarchy**: Proper h1-h6 structure
- **Alt Text**: Meaningful image descriptions
- **Form Labels**: Associated with inputs via for/id

### Motor Accessibility
- **Large Touch Targets**: Minimum 44px for mobile
- **Keyboard Navigation**: Full tab order support
- **Reduced Motion**: Respects prefers-reduced-motion
- **Focus Indicators**: Visible focus states

## SEO Implementation

### Meta Tags Strategy
```astro
<!-- Dynamic meta tags per locale -->
<title>{pageTitle}</title>
<meta name="description" content={pageDescription} />
<meta name="keywords" content={pageKeywords} />

<!-- Open Graph -->
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={pageDescription} />
<meta property="og:locale" content={currentLocale === 'ja' ? 'ja_JP' : 'en_US'} />

<!-- Alternate Languages -->
<link rel="alternate" hreflang="ja" href="/" />
<link rel="alternate" hreflang="en" href="/en/" />
<link rel="alternate" hreflang="x-default" href="/" />
```

### Structured Data
```javascript
// JSON-LD for rich snippets
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SuperSheet",
  "applicationCategory": "Spreadsheet Software",
  "operatingSystem": "Cross-platform"
}
```

## Deployment Pipeline

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
- Setup Bun (latest)
- Setup Node.js 20 (backup)
- bun install
- bun run build
- Deploy to GitHub Pages
```

### Build Process
1. **TypeScript Compilation**: Strict type checking
2. **Astro Build**: Static site generation with i18n routing
3. **Tailwind Processing**: CSS purging and optimization
4. **Asset Optimization**: Image compression, cache busting
5. **GitHub Pages Deploy**: Automatic deployment to pages environment

## Development Workflow

### Local Development
```bash
bun install           # Install dependencies
bun run dev          # Start dev server (localhost:4321)
bun run check        # TypeScript type checking
bun run build        # Production build
bun run preview      # Preview production build
```

### Code Quality
- **TypeScript**: Strict mode with custom types
- **Prettier**: Code formatting (integrated with VS Code)
- **ESLint**: JavaScript/TypeScript linting
- **Accessibility**: axe-core integration for testing

## Security Considerations

### Static Site Security
- **No Server**: Eliminates server-side vulnerabilities
- **HTTPS**: Forced HTTPS via GitHub Pages
- **Content Security**: No user-generated content
- **External Links**: noopener, noreferrer on external CTAs

### Privacy Compliance
- **No Tracking**: No analytics scripts implemented
- **External Forms**: Google Forms for data collection
- **Cookie-Free**: No cookies used by the site
- **GDPR Ready**: Minimal data collection pattern