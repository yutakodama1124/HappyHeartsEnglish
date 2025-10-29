import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Hearts English | 英語ボランティア団体",
  description: "英語を通して笑顔を広げ、子どもたちの未来を応援しています。絵本制作やイベント開催を通じて、楽しく英語を学べる環境を提供するボランティア団体です。",
  openGraph: {
    title: "Happy Hearts English",
    description: "英語を通して笑顔を広げ、子どもたちの未来を応援しています",
    url: "https://happy-hearts-english-7zxur78dv-yutakodama1124s-projects.vercel.app",
    siteName: "Happy Hearts English",
    images: [
      {
        url: "/images/HHECHARACTER.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Hearts English",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Hearts English",
    description: "英語を通して笑顔を広げ、子どもたちの未来を応援しています",
    images: ["/images/HHECHARACTER.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}