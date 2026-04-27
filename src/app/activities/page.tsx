import ActivitiesClient from "./ActivitiesClient";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Activities",
  description:
    "Happy Hearts Englishの活動紹介。英語絵本の制作、子ども向けイベントの企画開催、他団体との連携など、英語を楽しく学べる体験づくりに取り組んでいます。",
  path: "/activities",
  keywords: ["英語絵本制作", "子ども向け英語イベント", "国際交流 活動"],
});

export default function ActivitiesPage() {
  return <ActivitiesClient />;
}
