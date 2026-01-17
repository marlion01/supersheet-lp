import type { Locale, LocalizedContent, CTAUrls, SEOMeta } from '~/types';

export const defaultLocale: Locale = 'ja';
export const supportedLocales: Locale[] = ['ja', 'en', 'zh', 'ko'];

// Utility function to get localized content
export function getLocalizedText(content: LocalizedContent, locale: Locale = defaultLocale): string {
  return content[locale] || content[defaultLocale];
}

// CTA URLs configuration
export const ctaUrls: CTAUrls = {
  ja: 'https://docs.google.com/forms/d/e/1FAIpQLSfTsLsTruZYoEW4LAxmoUsmncRqDg-tLLnKkxgI-D4cX9KFPA/viewform?usp=publish-editor',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLScIJBM_jWnXbLbt-ICUP86RMKBj3ZK35bVt6d2OFsCeieZcFw/viewform?usp=header',
  zh: 'https://docs.google.com/forms/d/e/1FAIpQLScIJBM_jWnXbLbt-ICUP86RMKBj3ZK35bVt6d2OFsCeieZcFw/viewform?usp=header',
  ko: 'https://docs.google.com/forms/d/e/1FAIpQLScIJBM_jWnXbLbt-ICUP86RMKBj3ZK35bVt6d2OFsCeieZcFw/viewform?usp=header'
};

// Navigation items
export const navItems = {
  home: {
    ja: 'ホーム',
    en: 'Home',
    zh: '首页',
    ko: '홈'
  },
  features: {
    ja: '機能',
    en: 'Features',
    zh: '功能',
    ko: '기능'
  },
  pricing: {
    ja: '料金',
    en: 'Pricing',
    zh: '定价',
    ko: '가격'
  },
  about: {
    ja: 'について',
    en: 'About',
    zh: '关于',
    ko: '소개'
  }
};

// SEO Meta configuration
export const seoMeta: SEOMeta = {
  title: {
    ja: 'SuperSheet - 次世代ハイブリッド表計算プラットフォーム',
    en: 'SuperSheet - The Next-Gen Hybrid Spreadsheet Platform',
    zh: 'SuperSheet - 下一代混合电子表格平台',
    ko: 'SuperSheet - 차세대 하이브리드 스프레드시트 플랫폼'
  },
  description: {
    ja: 'Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。ローカルの爆速とクラウドの堅牢性を両立した次世代の表計算プラットフォーム。',
    en: 'The flexibility of Excel, organization of Notion, and automation of Zapier. All in one. A next-gen hybrid spreadsheet combining local speed with cloud robustness.',
    zh: 'Excel的灵活性、Notion的组织能力和Zapier的自动化功能，全部整合在一个平台中。结合本地高速和云端稳健性的下一代混合电子表格平台。',
    ko: 'Excel의 유연성, Notion의 정리 능력, Zapier의 자동화를 하나로. 로컬 속도와 클라우드 안정성을 결합한 차세대 하이브리드 스프레드시트 플랫폼.'
  },
  keywords: {
    ja: 'スプレッドシート, Excel, Notion, Zapier, 自動化, データ処理, ローカルファースト, クラウド同期',
    en: 'spreadsheet, Excel, Notion, Zapier, automation, data processing, local-first, cloud sync',
    zh: '电子表格, Excel, Notion, Zapier, 自动化, 数据处理, 本地优先, 云同步',
    ko: '스프레드시트, Excel, Notion, Zapier, 자동화, 데이터 처리, 로컬 퍼스트, 클라우드 동기화'
  }
};

// Hero section content
export const heroContent = {
  headline: {
    ja: 'Excelの自由度、Notionの整理力、Zapierの自動化をこれ1つで。',
    en: 'The flexibility of Excel, organization of Notion, and automation of Zapier. All in one.',
    zh: 'Excel的灵活性、Notion的组织能力和Zapier的自动化功能，全部整合在一个平台中。',
    ko: 'Excel의 유연성, Notion의 정리 능력, Zapier의 자동화를 하나로.'
  },
  subheadline: {
    ja: 'ローカルの「爆速」とクラウドの「堅牢性」を両立した、次世代のハイブリッド表計算プラットフォーム。',
    en: 'A next-gen hybrid spreadsheet combining local speed with cloud robustness.',
    zh: '结合本地高速和云端稳健性的下一代混合电子表格平台。',
    ko: '로컬의 "초고속"과 클라우드의 "안정성"을 겸비한 차세대 하이브리드 스프레드시트 플랫폼.'
  },
  cta: {
    ja: 'ウェイティングリストに登録',
    en: 'Join the Waitlist',
    zh: '加入候补名单',
    ko: '대기 명단에 등록'
  }
};

// Features content
export const featuresContent = [
  {
    id: 'local-first',
    title: {
      ja: 'Local-First & 爆速',
      en: 'Local-First & Blazing Fast',
      zh: '本地优先 & 极速',
      ko: '로컬 우선 & 초고속'
    },
    description: {
      ja: '100万行でもサクサク動作。TauriとSQLiteにより、オフラインでも完全に動作します。',
      en: 'Blazing fast even with 1 million rows. Powered by Tauri & SQLite, fully functional offline.',
      zh: '即使是100万行数据也能流畅运行。基于Tauri和SQLite，离线状态下也能完全正常工作。',
      ko: '100만 행도 빠르게 처리. Tauri와 SQLite로 오프라인에서도 완전히 작동합니다.'
    }
  },
  {
    id: 'real-time-sync',
    title: {
      ja: 'リアルタイム同期 & セキュリティ',
      en: 'Real-time Sync & Security',
      zh: '实时同步 & 安全性',
      ko: '실시간 동기화 & 보안'
    },
    description: {
      ja: 'Go言語とgRPCによる堅牢な同期。RLS（行レベルセキュリティ）で組織データを守ります。',
      en: 'Robust sync with Go & gRPC. Protect organization data with Row Level Security (RLS).',
      zh: '基于Go语言和gRPC的强大同步功能。通过行级安全(RLS)保护组织数据。',
      ko: 'Go 언어와 gRPC로 강력한 동기화. RLS(행 레벨 보안)로 조직 데이터를 보호합니다.'
    }
  },
  {
    id: 'ai-automation',
    title: {
      ja: 'AI & 自動化',
      en: 'AI & Automation',
      zh: 'AI & 自动化',
      ko: 'AI & 자동화'
    },
    description: {
      ja: 'PDFや画像を投げるだけで構造化データへ。AIがあなたのデータ入力を自動化します。',
      en: 'Turn PDFs and images into structured data instantly. AI automates your data entry.',
      zh: '只需拖放PDF和图片即可转换为结构化数据。AI自动化您的数据输入。',
      ko: 'PDF와 이미지만 끌어다 놓으면 구조화된 데이터로. AI가 데이터 입력을 자동화합니다.'
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

// Get alternative locale (cycles through ja -> en -> zh -> ko -> ja)
export function getAlternativeLocale(currentLocale: Locale): Locale {
  switch (currentLocale) {
    case 'ja': return 'en';
    case 'en': return 'zh';
    case 'zh': return 'ko';
    case 'ko': return 'ja';
    default: return 'en';
  }
}

// Pricing content
export const pricingContent = {
  title: {
    ja: '料金プラン',
    en: 'Pricing',
    zh: '定价方案',
    ko: '요금 플랜'
  },
  subtitle: {
    ja: 'あなたのデータは、あなたのもの。ローカルでの利用は永久に無料です。',
    en: 'Your data, your rules. Local use is free forever.',
    zh: '您的数据，您做主。本地使用永久免费。',
    ko: '당신의 데이터는 당신의 것입니다. 로컬 사용은 영구 무료입니다.'
  },
  cta: {
    ja: 'ウェイティングリストに登録',
    en: 'Join the Waitlist',
    zh: '加入候补名单',
    ko: '대기 명단에 등록'
  },
  note: {
    ja: '※ すべての価格は税込みです。クレジットカードやPayPalでお支払いいただけます。',
    en: '* All prices include tax. We accept credit cards and PayPal.',
    zh: '* 所有价格均含税。我们接受信用卡和PayPal付款。',
    ko: '* 모든 가격은 세금 포함입니다. 신용카드와 PayPal로 결제 가능합니다.'
  },
  plans: [
    {
      id: 'starter',
      name: {
        ja: 'Starter',
        en: 'Starter',
        zh: 'Starter',
        ko: 'Starter'
      },
      subtitle: {
        ja: '個人のための最強の表計算',
        en: 'The Ultimate Personal Spreadsheet',
        zh: '个人专用的终极电子表格',
        ko: '개인을 위한 최고의 스프레드시트'
      },
      description: {
        ja: 'ローカルPCのパワーを最大限に活用。',
        en: 'Maximize your local machine\'s power.',
        zh: '最大化您本地设备的性能。',
        ko: '로컬 PC의 성능을 최대한 활용하세요.'
      },
      price: {
        ja: '¥0',
        en: '$0',
        zh: '¥0',
        ko: '₩0'
      },
      period: {
        ja: '永久無料',
        en: 'Free Forever',
        zh: '永久免费',
        ko: '영구 무료'
      },
      features: [
        {
          ja: '行数制限なし（100万行以上も可能）',
          en: 'Unlimited rows (1M+ rows supported)',
          zh: '无行数限制（支持100万+行）',
          ko: '행 수 제한 없음 (100만 행 이상 지원)'
        },
        {
          ja: 'ローカル保存（SQLite）',
          en: 'Local storage (SQLite)',
          zh: '本地存储（SQLite）',
          ko: '로컬 저장 (SQLite)'
        },
        {
          ja: '完全オフライン動作',
          en: 'Fully offline capable',
          zh: '完全离线功能',
          ko: '완전한 오프라인 작동'
        },
        {
          ja: '基本関数・マクロ',
          en: 'Standard formulas & macros',
          zh: '标准公式和宏',
          ko: '기본 수식 및 매크로'
        },
        {
          ja: 'ローカルOCR読み込み',
          en: 'Local OCR import',
          zh: '本地OCR导入',
          ko: '로컬 OCR 가져오기'
        }
      ],
      recommended: false
    },
    {
      id: 'pro',
      name: {
        ja: 'Pro',
        en: 'Pro',
        zh: 'Pro',
        ko: 'Pro'
      },
      subtitle: {
        ja: 'デバイスを超えた同期と自動化',
        en: 'Sync & Automate Across Devices',
        zh: '跨设备同步与自动化',
        ko: '디바이스 간 동기화 및 자동화'
      },
      description: {
        ja: '複数のデバイスで作業するプロフェッショナルへ。',
        en: 'For professionals working anywhere.',
        zh: '为随时随地工作的专业人士而设。',
        ko: '어디서나 작업하는 전문가를 위해.'
      },
      price: {
        ja: '¥1,200',
        en: '$10',
        zh: '¥80',
        ko: '₩12,000'
      },
      period: {
        ja: '/ 月（予価）',
        en: '/ mo (Estimated)',
        zh: '/ 月（预估）',
        ko: '/ 월 (예상)'
      },
      features: [
        {
          ja: 'Starterの全機能',
          en: 'Everything in Starter',
          zh: 'Starter版全部功能',
          ko: 'Starter 모든 기능'
        },
        {
          ja: 'クラウド同期（PC、タブレット、スマホ）',
          en: 'Real-time sync across PC, mobile, and web',
          zh: '跨PC、移动设备和网页的实时同步',
          ko: '클라우드 동기화 (PC, 태블릿, 스마트폰)'
        },
        {
          ja: 'AIアシスタント（月間クレジット付）',
          en: 'AI analyst (monthly credits included)',
          zh: 'AI助手（含月度积分）',
          ko: 'AI 어시스턴트 (월간 크레딧 포함)'
        },
        {
          ja: 'API連携（外部サービス連携）',
          en: 'API integrations (auto-fetch data)',
          zh: 'API集成（自动获取数据）',
          ko: 'API 연동 (자동 데이터 가져오기)'
        }
      ],
      recommended: true
    },
    {
      id: 'team',
      name: {
        ja: 'Team',
        en: 'Team',
        zh: 'Team',
        ko: 'Team'
      },
      subtitle: {
        ja: '組織のための堅牢なセキュリティ',
        en: 'Security & Control for Organizations',
        zh: '为组织提供安全与控制',
        ko: '조직을 위한 보안 및 제어'
      },
      description: {
        ja: 'データベースレベルの権限管理で、安全な共有を実現。',
        en: 'Database-level permission enforcement.',
        zh: '通过数据库级权限管理实现安全共享。',
        ko: '데이터베이스 레벨 권한 관리로 안전한 공유 구현.'
      },
      price: {
        ja: '¥2,500',
        en: '$20',
        zh: '¥160',
        ko: '₩25,000'
      },
      period: {
        ja: '/ ユーザー / 月（予価）',
        en: '/ user / mo (Estimated)',
        zh: '/ 用户 / 月（预估）',
        ko: '/ 사용자 / 월 (예상)'
      },
      features: [
        {
          ja: 'Proの全機能',
          en: 'Everything in Pro',
          zh: 'Pro版全部功能',
          ko: 'Pro 모든 기능'
        },
        {
          ja: '行レベルセキュリティ（RLS）',
          en: 'Row level security (RLS)',
          zh: '行级安全(RLS)',
          ko: '행 레벨 보안 (RLS)'
        },
        {
          ja: '共有ワークスペース',
          en: 'Shared workspaces',
          zh: '共享工作区',
          ko: '공유 워크스페이스'
        },
        {
          ja: 'リアルタイム共同編集',
          en: 'Real-time collaboration',
          zh: '实时协作编辑',
          ko: '실시간 공동 편집'
        },
        {
          ja: '監査ログ',
          en: 'Audit logs',
          zh: '审计日志',
          ko: '감사 로그'
        },
        {
          ja: '優先サポート',
          en: 'Priority support',
          zh: '优先技术支持',
          ko: '우선 지원'
        }
      ],
      recommended: false
    }
  ]
};