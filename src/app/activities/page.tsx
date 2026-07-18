import ActivitiesClient from "./ActivitiesClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "活動内容｜英語絵本・児童館イベント・地域連携",
  description:
    "Happy Hearts Englishの活動内容。手づくり英語絵本、児童館での英語ゲーム・読み聞かせ、教育団体や地域施設との連携を通して、文京区の幼児・小学生が英語を楽しく体験できる場をつくっています。",
  path: "/activities",
  keywords: ["英語絵本 手作り", "文京区 子ども 英語 イベント", "児童館 英語 ボランティア", "英語読み聞かせ", "小学生 英語ゲーム"],
});

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
