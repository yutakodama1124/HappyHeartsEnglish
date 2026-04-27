import ContactClient from "./ContactClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Happy Hearts Englishへのお問い合わせ。ボランティア参加、パートナーシップ、イベント連携など、お気軽にご連絡ください。",
  path: "/contact",
  keywords: ["お問い合わせ", "ボランティア参加", "イベント連携"],
});

export default function ContactPage() {
  return <ContactClient />;
}
