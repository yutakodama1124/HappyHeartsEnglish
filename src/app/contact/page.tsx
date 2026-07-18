import ContactClient from "./ContactClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "お問い合わせ｜ボランティア参加・児童館イベント連携の相談",
  description:
    "Happy Hearts Englishへのお問い合わせ。文京区での子ども向け英語イベント、児童館・地域施設との連携、英語絵本制作、学生ボランティア参加、教育団体とのパートナーシップ相談を受け付けています。",
  path: "/contact",
  keywords: ["お問い合わせ", "ボランティア参加", "イベント連携", "児童館 英語イベント 相談", "文京区 教育ボランティア"],
});

export default function ContactPage() {
  return <ContactClient />;
}
