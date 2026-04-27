import type { Metadata } from "next";

export const siteConfig = {
  name: "Happy Hearts English",
  description:
    "英語を通して笑顔を広げ、子どもたちの未来を応援するボランティア団体 Happy Hearts English の公式サイトです。英語絵本制作、子ども向け英語イベント、国際交流活動を通じて、楽しく英語を学べる環境を提供しています。",
  url: "https://happyheartsenglish.org",
  ogImage: "/opengraph-image.png",
  locale: "ja_JP",
  keywords: [
    "Happy Hearts English",
    "英語ボランティア",
    "英語ボランティア団体",
    "子ども 英語",
    "子ども向け英語イベント",
    "英語教育",
    "英語絵本",
    "学生団体",
    "広尾学園小石川",
    "絵本制作",
    "国際交流",
    "高校生 ボランティア",
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

export const happyHeartsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      sameAs: [siteConfig.url],
      areaServed: "JP",
      knowsAbout: [
        "English education",
        "Volunteer activities",
        "Children's events",
        "Picture book creation",
        "International exchange",
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
