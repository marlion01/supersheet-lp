// Language types
export type Locale = 'ja' | 'en';

// Content types for bilingual support
export interface LocalizedContent {
  ja: string;
  en: string;
}

export interface LocalizedRichContent {
  ja: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  en: {
    headline: string;
    subheadline: string;
    cta: string;
  };
}

// Component props types
export interface BaseComponentProps {
  locale?: Locale;
  className?: string;
}

// Feature item type
export interface FeatureItem {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon?: string;
}

// CTA URLs
export interface CTAUrls {
  ja: string;
  en: string;
}

// SEO Meta types
export interface SEOMeta {
  title: LocalizedContent;
  description: LocalizedContent;
  keywords: LocalizedContent;
  ogImage?: string;
}