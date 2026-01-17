import type { Locale, LocalizedContent, CTAUrls, SEOMeta } from '~/types';

export const defaultLocale: Locale = 'ja';
export const supportedLocales: Locale[] = ['ja', 'en'];

// Utility function to get localized content
export function getLocalizedText(content: LocalizedContent, locale: Locale = defaultLocale): string {
  return content[locale] || content[defaultLocale];
}

// CTA URLs configuration
export const ctaUrls: CTAUrls = {
  ja: 'https://docs.google.com/forms/d/e/1FAIpQLSfTsLsTruZYoEW4LAxmoUsmncRqDg-tLLnKkxgI-D4cX9KFPA/viewform?usp=publish-editor',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLScIJBM_jWnXbLbt-ICUP86RMKBj3ZK35bVt6d2OFsCeieZcFw/viewform?usp=header'
};

// Navigation items
export const navItems = {
  home: {
    ja: 'ホーム',
    en: 'Home'
  },
  features: {
    ja: '機能',
    en: 'Features'
  },
  pricing: {
    ja: '料金',
    en: 'Pricing'
  },
  about: {
    ja: 'について',
    en: 'About'
  }
};

// SEO Meta configuration
export const seoMeta: SEOMeta = {
  title: {
    ja: 'SuperSheet - 次世代ハイブリッド表計算プラットフォーム',
    en: 'SuperSheet - The Next-Gen Hybrid Spreadsheet Platform'
  },
  description: {
    ja: 'Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。ローカルの爆速とクラウドの堅牢性を両立した次世代の表計算プラットフォーム。',
    en: 'The flexibility of Excel, organization of Notion, and automation of Zapier. All in one. A next-gen hybrid spreadsheet combining local speed with cloud robustness.'
  },
  keywords: {
    ja: 'スプレッドシート, Excel, Notion, Zapier, 自動化, データ処理, ローカルファースト, クラウド同期',
    en: 'spreadsheet, Excel, Notion, Zapier, automation, data processing, local-first, cloud sync'
  }
};

// Hero section content
export const heroContent = {
  headline: {
    ja: 'Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。',
    en: 'The flexibility of Excel, organization of Notion, and automation of Zapier. All in one.'
  },
  subheadline: {
    ja: 'ローカルの「爆速」とクラウドの「堅牢性」を両立した、次世代のハイブリッド表計算プラットフォーム。',
    en: 'A next-gen hybrid spreadsheet combining local speed with cloud robustness.'
  },
  cta: {
    ja: 'ウェイティングリストに登録',
    en: 'Join the Waitlist'
  }
};

// Features content
export const featuresContent = [
  {
    id: 'local-first',
    title: {
      ja: 'Local-First & 爆速',
      en: 'Local-First & Blazing Fast'
    },
    description: {
      ja: '100万行でもサクサク動作。TauriとSQLiteにより、オフラインでも完全に動作します。',
      en: 'Blazing fast even with 1 million rows. Powered by Tauri & SQLite, fully functional offline.'
    }
  },
  {
    id: 'real-time-sync',
    title: {
      ja: 'リアルタイム同期 & セキュリティ',
      en: 'Real-time Sync & Security'
    },
    description: {
      ja: 'Go言語とgRPCによる堅牢な同期。RLS（行レベルセキュリティ）で組織データを守ります。',
      en: 'Robust sync with Go & gRPC. Protect organization data with Row Level Security (RLS).'
    }
  },
  {
    id: 'ai-automation',
    title: {
      ja: 'AI & 自動化',
      en: 'AI & Automation'
    },
    description: {
      ja: 'PDFや画像を投げるだけで構造化データへ。AIがあなたのデータ入力を自動化します。',
      en: 'Turn PDFs and images into structured data instantly. AI automates your data entry.'
    }
  }
];

// Utility function to get current locale from URL
export function getLocaleFromUrl(url: URL): Locale {
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const possibleLocale = pathSegments[0];
  
  if (supportedLocales.includes(possibleLocale as Locale)) {
    return possibleLocale as Locale;
  }
  
  return defaultLocale;
}

// Utility function to build localized URLs
export function buildLocalizedUrl(path: string, locale: Locale, base: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (locale === defaultLocale) {
    return `${base}/${cleanPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  }
  
  return `${base}/${locale}/${cleanPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || `/${locale}`;
}

// Get alternative locale
export function getAlternativeLocale(currentLocale: Locale): Locale {
  return currentLocale === 'ja' ? 'en' : 'ja';
}

// Pricing content
export const pricingContent = {
  title: {
    ja: '料金プラン',
    en: 'Pricing'
  },
  subtitle: {
    ja: 'あなたのデータは、あなたのもの。ローカルでの利用は永久に無料です。',
    en: 'Your data, your rules. Local use is free forever.'
  },
  plans: [
    {
      id: 'starter',
      name: {
        ja: 'Starter',
        en: 'Starter'
      },
      subtitle: {
        ja: '個人のための最強の表計算',
        en: 'The Ultimate Personal Spreadsheet'
      },
      description: {
        ja: 'ローカルPCのパワーを最大限に活用。',
        en: 'Maximize your local machine\'s power.'
      },
      price: {
        ja: '¥0',
        en: '$0'
      },
      period: {
        ja: '永久無料',
        en: 'Free Forever'
      },
      features: [
        {
          ja: '行数制限なし（100万行以上も可能）',
          en: 'Unlimited rows (1M+ rows supported)'
        },
        {
          ja: 'ローカル保存（SQLite）',
          en: 'Local storage (SQLite)'
        },
        {
          ja: '完全オフライン動作',
          en: 'Fully offline capable'
        },
        {
          ja: '基本関数・マクロ',
          en: 'Standard formulas & macros'
        },
        {
          ja: 'ローカルOCR読み込み',
          en: 'Local OCR import'
        }
      ],
      recommended: false
    },
    {
      id: 'pro',
      name: {
        ja: 'Pro',
        en: 'Pro'
      },
      subtitle: {
        ja: 'デバイスを超えた同期と自動化',
        en: 'Sync & Automate Across Devices'
      },
      description: {
        ja: '複数のデバイスで作業するプロフェッショナルへ。',
        en: 'For professionals working anywhere.'
      },
      price: {
        ja: '¥1,200',
        en: '$10'
      },
      period: {
        ja: '/ 月（予価）',
        en: '/ mo (Estimated)'
      },
      features: [
        {
          ja: 'Starterの全機能',
          en: 'Everything in Starter'
        },
        {
          ja: 'クラウド同期（PC、タブレット、スマホ）',
          en: 'Real-time sync across PC, mobile, and web'
        },
        {
          ja: 'AIアシスタント（月間クレジット付）',
          en: 'AI analyst (monthly credits included)'
        },
        {
          ja: 'API連携（外部サービス連携）',
          en: 'API integrations (auto-fetch data)'
        }
      ],
      recommended: true
    },
    {
      id: 'team',
      name: {
        ja: 'Team',
        en: 'Team'
      },
      subtitle: {
        ja: '組織のための堅牢なセキュリティ',
        en: 'Security & Control for Organizations'
      },
      description: {
        ja: 'データベースレベルの権限管理で、安全な共有を実現。',
        en: 'Database-level permission enforcement.'
      },
      price: {
        ja: '¥2,500',
        en: '$20'
      },
      period: {
        ja: '/ ユーザー / 月（予価）',
        en: '/ user / mo (Estimated)'
      },
      features: [
        {
          ja: 'Proの全機能',
          en: 'Everything in Pro'
        },
        {
          ja: '行レベルセキュリティ（RLS）',
          en: 'Row level security (RLS)'
        },
        {
          ja: '共有ワークスペース',
          en: 'Shared workspaces'
        },
        {
          ja: 'リアルタイム共同編集',
          en: 'Real-time collaboration'
        },
        {
          ja: '監査ログ',
          en: 'Audit logs'
        },
        {
          ja: '優先サポート',
          en: 'Priority support'
        }
      ],
      recommended: false
    }
  ],
  cta: {
    ja: 'ベータ版に参加',
    en: 'Join Beta'
  },
  note: {
    ja: '※ 価格は予価です。正式リリース時に変更される可能性があります。',
    en: '* Prices are estimates and may change before official release.'
  }
};