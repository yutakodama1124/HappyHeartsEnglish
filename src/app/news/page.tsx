"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsDetailPage() {

  return (
    <div className="bg-[#fffcfd]">
      <Section accentText="Journal / 01" className="pt-40">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-12 pl-0 hover:pl-2 transition-all text-[#4a3b43]/40">
            ← Back to Journey
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl mb-16 border-[12px] border-white bg-white">
            <Image
              src="/images/HHEWEBSITE.png"
              alt="Website Launch"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <Calendar size={18} className="text-[#fb6f92]" />
              <span className="text-sm font-black text-[#fb6f92] tracking-widest">2025.11.01</span>
              <div className="h-px w-12 bg-[#fb6f92]/20" />
              <span className="text-[10px] font-black uppercase text-[#4a3b43]/30 tracking-[0.2em]">Release</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-[#4a3b43] mb-12 leading-tight tracking-tighter">
              Websiteを<br />公開しました！
            </h1>

            <div className="prose prose-pink prose-lg max-w-none text-[#4a3b43]/70 font-medium leading-loose">
              <p className="mb-10 text-xl text-[#4a3b43]">
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
            </div>

            <div className="mt-24 pt-16 border-t border-[#4a3b43]/5 flex justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="px-12">
                  お問い合わせ <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </Section>
    </div>
  );
}