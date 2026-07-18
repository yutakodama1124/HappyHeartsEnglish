import type { Metadata } from "next";

export const siteConfig = {
  name: "Happy Hearts English",
  description:
    "Happy Hearts Englishは、東京都文京区を拠点に活動する高校生主体の子ども向け英語ボランティア団体です。手づくり英語絵本、児童館での英語イベント、地域団体との連携を通して、幼児・小学生が英語を楽しい体験として受け取れる時間をつくっています。",
  url: "https://happyheartsenglish.org",
  ogImage: "/opengraph-image.png",
  locale: "ja_JP",
  email: "englishhappyhearts@gmail.com",
  instagramUrl: "https://www.instagram.com/happy.hearts.english/",
  addressLocality: "文京区",
  addressRegion: "東京都",
  keywords: [
    "Happy Hearts English",
    "文京区 子ども 英語 イベント",
    "児童館 英語 ボランティア",
    "高校生 ボランティア 英語",
    "学生団体 英語",
    "子ども向け英語イベント",
    "小学生 英語 イベント 文京区",
    "幼児 英語 アクティビティ",
    "英語絵本 手作り",
    "英語読み聞かせ ボランティア",
    "子ども 英語 遊び",
    "地域連携 教育 ボランティア",
    "文京区 児童館 イベント",
    "広尾学園小石川",
  ],
} as const;

export const googleSiteVerification = "google8e0e59ee9d2b4aa4";

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} official website preview`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: `/${string}` }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function buildNewsArticleJsonLd(input: {
  title: string;
  description: string;
  path: `/${string}`;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: "ja-JP",
    mainEntityOfPage: `${siteConfig.url}${input.path}`,
    image: `${siteConfig.url}${input.image ?? siteConfig.ogImage}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    },
  };
}

export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const happyHeartsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NonprofitOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      email: siteConfig.email,
      foundingDate: "2025",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "東京都文京区",
        },
        {
          "@type": "Country",
          name: "Japan",
        },
      ],
      memberOf: "広尾学園小石川高校",
      numberOfEmployees: 20,
      slogan: "英語を、子どもたちの楽しい記憶に。",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: "JP",
      },
      sameAs: [siteConfig.url, siteConfig.instagramUrl],
      knowsAbout: [
        "English education",
        "Volunteer activities",
        "Children's events",
        "Picture book creation",
        "International exchange",
        "English storytelling",
        "Children's community programs",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "子ども向け英語イベント",
            description: "児童館や地域施設で、英語ゲーム、読み聞かせ、工作を組み合わせた子ども向け英語体験を企画します。",
            areaServed: "東京都文京区",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "CreativeWork",
            name: "手づくり英語絵本",
            description: "高校生メンバーが物語、英語表現、イラストを考え、子どもたちが英語に親しめる絵本を制作します。",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "ja-JP",
      description: siteConfig.description,
    },
  ],
} as const;
