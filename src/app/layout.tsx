import type { Metadata } from "next";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { googleSiteVerification, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Happy Hearts English｜文京区の子ども向け英語ボランティア団体",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: googleSiteVerification,
  },
  openGraph: {
    title: "Happy Hearts English｜文京区の子ども向け英語ボランティア団体",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} official website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Hearts English｜文京区の子ども向け英語ボランティア団体",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout() {
  return (
    <html lang="ja">
      <body className="m-0 bg-black">
        <main aria-label="Black screen" className="fixed inset-0 grid place-items-center bg-black p-6">
          <Image
            src="/center-image.jpg"
            alt=""
            width={1330}
            height={2364}
            priority
            className="max-h-[82vh] w-auto max-w-[88vw] object-contain"
          />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
