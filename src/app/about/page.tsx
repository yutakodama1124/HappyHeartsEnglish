import AboutClient from "./AboutClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Happy Hearts Englishについて。広尾学園小石川高校の生徒が立ち上げた英語ボランティア団体の成り立ち、リーダーシップ、メンバーをご紹介します。",
  path: "/about",
  keywords: ["団体紹介", "高校生 ボランティア団体", "英語教育 団体"],
});

export default function AboutPage() {
  return <AboutClient />;
}
