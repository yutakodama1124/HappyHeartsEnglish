import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { HeartTrail } from "@/components/ui/HeartTrail";
import { googleSiteVerification, happyHeartsJsonLd, siteConfig } from "@/lib/site";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main-content">
          本文へスキップ
        </a>
        <HeartTrail />
        <SmoothScroll>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="min-h-screen pt-20 sm:pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(happyHeartsJsonLd),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
