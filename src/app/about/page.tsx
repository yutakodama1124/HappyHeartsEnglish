import AboutClient from "./AboutClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "団体について｜高校生が届ける文京区の子ども向け英語ボランティア",
  description:
    "Happy Hearts Englishの団体紹介。広尾学園小石川高校の高校生が中心となり、文京区の児童館・地域施設で英語絵本、読み聞かせ、英語ゲームを届けるボランティア活動の成り立ち、共同代表、メンバー、運営体制を紹介します。",
  path: "/about",
  keywords: ["団体紹介", "高校生 ボランティア 英語", "文京区 学生団体", "広尾学園小石川 ボランティア", "子ども 英語 学生団体"],
});

export default function AboutPage() {
  return <AboutClient />;
}
