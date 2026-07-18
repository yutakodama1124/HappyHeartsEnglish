import NewsClient from "./NewsClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "ニュース｜活動報告・メディア掲載・イベントのお知らせ",
  description:
    "Happy Hearts Englishのニュースページ。文京区での子ども向け英語イベントの活動報告、児童館・地域連携の様子、メディア掲載、公式サイト更新、今後のイベント案内をお届けします。",
  path: "/news",
  keywords: ["活動レポート", "イベント案内", "英語ボランティア ニュース", "文京区 メディア掲載", "子ども英語 活動報告"],
});

export default function NewsPage() {
  return <NewsClient />;
}
