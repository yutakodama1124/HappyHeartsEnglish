import NewsClient from "./NewsClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "News",
  description:
    "Happy Hearts Englishの最新ニュース。公式ウェブサイトの公開、活動レポート、イベント案内など最新情報をお届けします。",
  path: "/news",
  keywords: ["活動レポート", "イベント案内", "ボランティアニュース"],
});

export default function NewsPage() {
  return <NewsClient />;
}
