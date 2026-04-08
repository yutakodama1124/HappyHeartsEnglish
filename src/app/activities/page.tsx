import type { Metadata } from "next";
import ActivitiesClient from "./ActivitiesClient";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Happy Hearts Englishの活動紹介。英語絵本の制作、子ども向けイベントの企画開催、他団体との連携など、英語を楽しく学べる体験づくりに取り組んでいます。",
  alternates: {
    canonical: "https://happy-hearts-english.vercel.app/activities",
  },
  openGraph: {
    title: "Activities | Happy Hearts English",
    description:
      "英語絵本制作、子ども向けイベント開催、他団体との連携 — Happy Hearts Englishの活動をご覧ください。",
    url: "https://happy-hearts-english.vercel.app/activities",
  },
};

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
