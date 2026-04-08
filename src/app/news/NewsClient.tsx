"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsClient() {
  const newsItems = [
    {
      id: "tv-feature-fumikomu",
      date: "2026.04.09",
      category: "Media",
      title: "「あらぶんちょ!チャンネル」で私たちの活動が紹介されました！",
      media: (
        <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl mb-12 md:mb-16 border-[8px] md:border-[12px] border-white bg-white">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/vsN2aTPiTTA" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      ),
      content: (
        <>
          <p className="mb-8 md:mb-10 text-lg md:text-xl text-[#4a3b43]">
            文京区の地域ネットワーク番組「あらぶんちょ!チャンネル」の『イイコト!SDGs!!』にて、私たちが参加した「ふみこむフェスタ」の様子が放送されました。
          </p>
          <p>
            イベントでの子どもたちとの触れ合いや、私たちが大切にしている「遊び×学び」の空間づくりについて取材していただいています。ぜひ動画でご覧ください！
          </p>
        </>
      )
    },
    {
      id: "website-launch",
      date: "2025.11.01",
      category: "Release",
      title: "Websiteを公開しました！",
      media: (
        <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl mb-12 md:mb-16 border-[8px] md:border-[12px] border-white bg-white">
          <Image
            src="/images/HHEWEBSITE.png"
            alt="Website Launch"
            fill
            className="object-cover"
          />
        </div>
      ),
      content: (
        <>
          <p className="mb-8 md:mb-10 text-lg md:text-xl text-[#4a3b43]">
            この度、Happy Hearts Englishの公式ウェブサイトを公開しました。
          </p>
          <div className="bg-[#fff0f5] p-10 rounded-[3rem] my-12 border border-[#fb6f92]/5 relative">
            <p className="text-sm font-black text-[#fb6f92] mb-4 uppercase tracking-[0.3em] opacity-40">Student Project</p>
            <p className="text-lg">
              作成してくれたのは、私たちの団体メンバーである広尾学園小石川高校の学生です。
              彼らの情熱と努力により、私たちの想いが詰まったサイトが完成しました。
            </p>
          </div>
          <p>
            今後はこのサイトを通じて、活動報告やイベント案内、ボランティア募集情報などを定期的に発信していきます。
            ぜひブックマークして、私たちの歩みをチェックしてください。
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#fffcfd]">
      <Section accentText="Journal / 01" className="pt-32 md:pt-40">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-12 pl-0 hover:pl-2 transition-all text-[#4a3b43]/40">
            ← Back to Journey
          </Button>
        </Link>

        <div className="space-y-32">
          {newsItems.map((item) => (
            <article key={item.id} className="max-w-4xl mx-auto border-b border-[#4a3b43]/5 pb-32 last:border-0">
              {item.media}

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <Calendar size={18} className="text-[#fb6f92]" />
                  <span className="text-sm font-black text-[#fb6f92] tracking-widest">{item.date}</span>
                  <div className="h-px w-12 bg-[#fb6f92]/20" />
                  <span className="text-[10px] font-black uppercase text-[#4a3b43]/30 tracking-[0.2em]">{item.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#4a3b43] mb-8 md:mb-12 leading-tight tracking-tighter">
                  {item.title}
                </h1>

                <div className="prose prose-pink prose-base md:prose-lg max-w-none text-[#4a3b43]/70 font-medium leading-loose">
                  {item.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-[#4a3b43]/5 flex justify-center max-w-4xl mx-auto">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="px-12">
              お問い合わせ <ArrowRight className="ml-3" size={20} />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}