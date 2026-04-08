import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News",
  description:
    "Happy Hearts Englishの最新ニュース。公式ウェブサイトの公開、活動レポート、イベント案内など最新情報をお届けします。",
  alternates: {
    canonical: "https://happy-hearts-english.vercel.app/news",
  },
  openGraph: {
    title: "News | Happy Hearts English",
    description:
      "Happy Hearts Englishの最新ニュース、活動レポート、イベント案内をチェック。",
    url: "https://happy-hearts-english.vercel.app/news",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
