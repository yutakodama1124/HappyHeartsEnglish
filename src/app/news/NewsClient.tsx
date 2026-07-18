"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";
import { CrayonTitle } from "@/components/ui/CrayonTitle";
import { buildBreadcrumbJsonLd, buildNewsArticleJsonLd } from "@/lib/site";

export default function NewsClient() {
  const newsItems = [
    {
      id: "tv-feature-fumikomu",
      date: "2026-04-09",
      dateLabel: "2026.04.09",
      category: "Media",
      title: "「あらぶんちょ!チャンネル」で私たちの活動が紹介されました！",
      description:
        "文京区の地域ネットワーク番組「あらぶんちょ!チャンネル」にて、Happy Hearts English が参加した地域イベントと子ども向け英語ボランティア活動の様子が紹介されました。",
      media: <YouTubeFacade videoId="vsN2aTPiTTA" title="あらぶんちょ!チャンネルで紹介されたHappy Hearts Englishの活動" />,
      content: (
        <>
          <p className="mb-5 text-base leading-7 text-[var(--foreground)]/74 sm:mb-6 sm:text-lg sm:leading-8">
            文京区の地域ネットワーク番組「あらぶんちょ!チャンネル」の『イイコト!SDGs!!』にて、
            私たちが参加した「ふみこむフェスタ」の様子が放送されました。
          </p>
          <p className="text-base leading-7 text-[var(--foreground)]/74 sm:text-lg sm:leading-8">
            子どもたちとのふれあいや、「遊び × 学び」の空間づくりについて取材していただいています。ぜひ動画でご覧ください。
          </p>
          <p className="mt-5 text-base leading-7 text-[var(--foreground)]/74 sm:mt-6 sm:text-lg sm:leading-8">
            Happy Hearts Englishでは、文京区の子どもたちが英語を身近に感じられるよう、英語絵本の読み聞かせやゲーム形式のアクティビティを行っています。
            地域番組で紹介いただいたことをきっかけに、より多くの施設や団体と連携し、英語にふれる入口を広げていきます。
          </p>
        </>
      ),
    },
    {
      id: "website-launch",
      date: "2025-11-01",
      dateLabel: "2025.11.01",
      category: "Release",
      title: "Websiteを公開しました！",
      description:
        "Happy Hearts English の公式ウェブサイトを公開し、活動報告やイベント案内を発信する準備が整いました。",
      media: (
        <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-white/70 bg-white shadow-[var(--shadow-card)]">
          <Image
            src="/images/HHEWEBSITE.png"
            alt="Happy Hearts English の公式サイト公開イメージ"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      ),
      content: (
        <>
          <p className="mb-5 text-base leading-7 text-[var(--foreground)]/74 sm:mb-6 sm:text-lg sm:leading-8">
            この度、Happy Hearts Englishの公式ウェブサイトを公開しました。
          </p>
          <div className="soft-panel my-8 rounded-[var(--radius-md)] p-6">
            <p className="mt-3 text-base leading-7 text-[var(--foreground)]/74 sm:text-lg sm:leading-8">
              作成してくれたのは、団体メンバーである広尾学園小石川高校の学生たちです。
              彼らの情熱と努力によって、私たちの想いが伝わる場所が形になりました。
            </p>
          </div>
          <p className="text-base leading-7 text-[var(--foreground)]/74 sm:text-lg sm:leading-8">
            今後はこのサイトを通じて、活動報告やイベント案内、ボランティア募集情報を定期的に発信していきます。
          </p>
          <p className="mt-5 text-base leading-7 text-[var(--foreground)]/74 sm:mt-6 sm:text-lg sm:leading-8">
            児童館での英語イベント、手づくり英語絵本、地域団体との連携、学生メンバーの活動記録などを残すことで、
            Happy Hearts Englishを初めて知った方にも、私たちがどんな思いで活動しているか伝わる場所にしていきます。
          </p>
        </>
      ),
    },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "ニュース", path: "/news" },
  ]);

  const newsJsonLd = newsItems.map((item) =>
    buildNewsArticleJsonLd({
      title: item.title,
      description: item.description,
      path: `/news#${item.id}`,
      datePublished: item.date,
      image: item.id === "website-launch" ? "/images/HHEWEBSITE.png" : undefined,
    })
  );

  return (
    <div className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }} />

      <Section>
        <div className="mb-8 md:mb-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="pl-0 text-[var(--ink)]/60 hover:bg-transparent">
              ← Back to Home
            </Button>
          </Link>
        </div>

        <div className="mx-auto mb-9 max-w-5xl md:mb-12">
          <CrayonTitle as="h1" className="display-title--hero">
            お知らせと活動報告
          </CrayonTitle>
          <p className="body-lg mt-6 max-w-3xl">
            Happy Hearts Englishのメディア掲載、公式サイト更新、文京区での子ども向け英語イベント、英語絵本づくり、
            地域連携に関する活動報告を掲載しています。
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {newsItems.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="surface-card mx-auto max-w-5xl overflow-hidden p-5 md:p-8"
            >
              {item.media}

              <div className="mt-6 md:mt-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 text-sm font-black tracking-[0.16em] text-[var(--pink-deep)]">
                    <Calendar size={16} />
                    {item.dateLabel}
                  </span>
                </div>

                <h2 className="display-title mt-5 text-[var(--ink)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--ink)]/72 sm:text-lg sm:leading-8">{item.description}</p>

                <div className="mt-6">{item.content}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl justify-center border-t border-[var(--line-soft)] pt-9 md:mt-14 md:pt-12">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full justify-center px-10 sm:w-auto">
              お問い合わせ <ArrowRight className="ml-3" size={20} />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
