import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Happy Hearts Englishについて。広尾学園小石川高校の生徒が立ち上げた英語ボランティア団体の成り立ち、リーダーシップ、メンバーをご紹介します。",
  alternates: {
    canonical: "https://happy-hearts-english.vercel.app/about",
  },
  openGraph: {
    title: "About | Happy Hearts English",
    description:
      "Happy Hearts Englishについて。広尾学園小石川高校の生徒が立ち上げた英語ボランティア団体の成り立ち、リーダーシップ、メンバーをご紹介します。",
    url: "https://happy-hearts-english.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
