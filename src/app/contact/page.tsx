import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Happy Hearts Englishへのお問い合わせ。ボランティア参加、パートナーシップ、イベント連携など、お気軽にご連絡ください。",
  alternates: {
    canonical: "https://happy-hearts-english.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Happy Hearts English",
    description:
      "ボランティア参加やパートナーシップのご相談はこちら。Happy Hearts Englishへお気軽にご連絡ください。",
    url: "https://happy-hearts-english.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
