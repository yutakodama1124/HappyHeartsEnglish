import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { HeartTrail } from "@/components/ui/HeartTrail";
import "./globals.css";

const mPlus = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-rounded"
});

export const metadata: Metadata = {
  title: "Happy Hearts English | 英語ボランティア団体",
  description: "英語を通して笑顔を広げ、子どもたちの未来を応援しています。絵本制作やイベント開催を通じて、楽しく英語を学べる環境を提供するボランティア団体です。",
  openGraph: {
    title: "Happy Hearts English",
    description: "英語を通して笑顔を広げ、子どもたちの未来を応援しています",
    url: "https://happy-hearts-english.vercel.app",
    siteName: "Happy Hearts English",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mPlus.className}>
        <HeartTrail />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}