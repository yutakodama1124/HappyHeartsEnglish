"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IntroSequence } from "@/components/intro/IntroSequence";
import { CountUpStat } from "@/components/ui/CountUpStat";
import { CrayonTitle } from "@/components/ui/CrayonTitle";
import { SnapshotImage } from "@/components/ui/SnapshotImage";
import { fadeUp, MOTION_EASE, staggerContainer } from "@/lib/motion";

const stats = [
  { value: 20, suffix: "+", label: "Members", labelJa: "活動メンバー" },
  { value: 235, suffix: "+", label: "Volunteer Hours", labelJa: "ボランティア時間" },
  { value: 1, suffix: "+", label: "Year Active", labelJa: "活動年数" },
  { value: 6, suffix: "", label: "Partners", labelJa: "提携先" },
];

const activities = [
  {
    title: "絵本制作",
    copy: "物語、英語表現、イラストまで学生メンバーが制作。英語が初めての子どもでも意味を想像しやすいように、短いフレーズ、くり返し、絵の流れを大切にしています。完成した絵本は読み聞かせや児童館イベントで使える教材として育てています。",
    image: "/images/HHECOVER.png",
  },
  {
    title: "イベント開催",
    copy: "児童館や地域施設で、英語カルタ、読み聞かせ、ゲーム、工作を組み合わせたイベントを企画します。幼児・小学生が正解を急がず声を出せる空気をつくり、英語にふれる最初の時間を楽しくします。",
    image: "/images/HHEActivityCover.JPG",
  },
  {
    title: "他団体連携",
    copy: "教育団体、児童館、地域イベント、学生ボランティア団体と協力し、学校の外にも学びの輪を広げます。子どもたちの年齢、会場、時間に合わせて、無理なく参加できる英語アクティビティを一緒に考えます。",
    image: "/images/HHEActivity.JPG",
  },
];

const audienceBlocks = [
  {
    title: "児童館・地域施設の方へ",
    copy: "文京区周辺で子ども向けの英語イベントを企画したい施設の方に向けて、読み聞かせ、英語ゲーム、工作を組み合わせたプログラムを相談できます。少人数の交流からイベント型の活動まで、会場の雰囲気に合わせて内容を調整します。",
  },
  {
    title: "保護者・地域の方へ",
    copy: "Happy Hearts Englishの活動は、英語の上達だけを目的にした教室ではありません。子どもたちが英語を怖がらず、遊びや物語の中で自然に声に出してみることを大切にしています。",
  },
  {
    title: "参加したい学生へ",
    copy: "絵本制作、イベント運営、広報、外部連携など、得意なことを活かして参加できます。英語が完璧でなくても、子どもと向き合う姿勢や、チームで準備する力を大切にしています。",
  },
];

const galleryImages = [
  { src: "/images/gallery1.JPG", alt: "児童館で英語のゲームを楽しむ子どもたち" },
  { src: "/images/gallery2.JPG", alt: "イベント会場で英語を使ったアクティビティを進行する様子" },
  { src: "/images/gallery3.JPG", alt: "子どもたちと一緒に読み聞かせを行う様子" },
  { src: "/images/gallery4.JPG", alt: "机を囲んで英語の工作に取り組む子どもたち" },
  { src: "/images/gallery5.JPG", alt: "会場で交流しながら英語に触れる参加者たち" },
  { src: "/images/gallery6.JPG", alt: "子どもたちに寄り添って英語を伝えるメンバー" },
  { src: "/images/gallery7.JPG", alt: "イベント後に笑顔で集まる集合写真" },
  { src: "/images/HHEActivity.JPG", alt: "他団体と連携した活動の様子" },
];

const newsItems = [
  {
    title: "地域番組『あらぶんちょ!チャンネル』で活動が紹介されました",
    category: "Media",
    href: "/news#tv-feature-fumikomu",
  },
  {
    title: "Happy Hearts Englishの公式サイトを公開しました",
    category: "Release",
    href: "/news#website-launch",
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[var(--paper)]">
      {/* Full-screen intro hero at the very top; -mt-24 cancels the layout's
          navbar padding so it sits flush to the top. Scroll down to continue. */}
      <div className="-mt-24">
        <IntroSequence />
      </div>
      <section className="relative overflow-hidden bg-[var(--blush)] px-5 pb-16 pt-9 sm:px-6 md:pb-32 md:pt-16">
        <div className="container-shell">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer(0.07)}>
            <h1 className="hero-title max-w-6xl text-[var(--ink)]">
              {["Happy", "Hearts", "English"].map((word, index) => (
                <motion.span
                  key={word}
                  variants={fadeUp(index * 0.07)}
                  className={word === "Hearts" ? "mr-4 inline-block text-[var(--pink)]" : "mr-4 inline-block"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p variants={fadeUp(0.16)} className="body-xl mt-5 max-w-3xl md:mt-7">
              英語絵本と地域イベントを通して、子どもたちが英語にふれる最初の記憶を、
              もっと楽しく、もっとあたたかいものにします。
            </motion.p>
            <motion.p variants={fadeUp(0.2)} className="body-lg mt-4 max-w-3xl md:mt-5">
              東京都文京区を中心に、広尾学園小石川高校の高校生メンバーが、英語の読み聞かせ、英語ゲーム、手づくり絵本、地域施設でのイベントを企画しています。
              子ども向け英語ボランティアとして、児童館や教育団体と連携しながら、英語を「勉強」ではなく「楽しい出会い」として届けます。
            </motion.p>
            <motion.div variants={fadeUp(0.22)} className="mt-7 grid gap-3 sm:flex sm:flex-wrap md:mt-8">
              <Link href="/activities" className="focus-ring rounded-full">
                <Button size="lg" className="w-full justify-center px-7 sm:w-auto">
                  活動を見る <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact" className="focus-ring rounded-full">
                <Button variant="outline" size="lg" className="w-full justify-center bg-white px-7 sm:w-auto">
                  参加・連携の相談
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: MOTION_EASE, delay: 0.34 }}
            className="mt-10 grid items-end gap-5 sm:gap-7 md:mt-14 lg:grid-cols-[minmax(0,0.68fr)_minmax(320px,0.32fr)]"
          >
            <SnapshotImage
              src="/images/HHEteamphoto.jpg"
              alt="Happy Hearts English の活動メンバー集合写真"
              priority
              sizes="(max-width: 768px) 100vw, 76rem"
              className="aspect-[4/3] min-h-0 md:aspect-[16/9] md:min-h-[20rem]"
              tilt="left"
            />
            <SnapshotImage
              src="/images/HHECHARACTER.jpg"
              alt="Happy Hearts English のキャラクター"
              priority
              sizes="(max-width: 768px) 80vw, 360px"
              className="mx-auto aspect-square w-full max-w-[220px] sm:max-w-[300px] md:max-w-[360px]"
              imageClassName="object-contain p-3 sm:p-5"
              tilt="right"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <CrayonTitle>高校生の親しみやすさで、英語を楽しいに。</CrayonTitle>
            <p className="body-lg mt-5 md:mt-6">
              Happy Hearts Englishは、広尾学園小石川高校の生徒が中心となって活動する学生ボランティア団体です。
              子どもたちが英語を「勉強」だけでなく、遊びや物語の中で自然に楽しめる場をつくっています。
            </p>
            <p className="body-lg mt-4 md:mt-5">
              活動では、幼児・小学生が安心して参加できるよう、難しい文法説明よりも、聞く・まねする・動く・笑う体験を重視しています。
              高校生だからこそ近い距離で寄り添い、子どもたちの「言ってみたい」「もう一回やりたい」という気持ちを引き出します。
            </p>
            <Link href="/about" className="link-stroke mt-7 inline-flex items-center gap-2">
              団体について読む <ArrowRight size={16} />
            </Link>
          </div>
          <SnapshotImage
            src="/images/gallery7.JPG"
            alt="イベント後に笑顔で集まる集合写真"
            sizes="(max-width: 768px) 100vw, 46vw"
            className="aspect-[4/3]"
            tilt="right"
          />
        </div>
      </section>

      <section className="section-shell bg-[var(--blush)]">
        <div className="container-shell">
          <div className="mb-9 max-w-3xl md:mb-12">
            <CrayonTitle>手づくりの絵本から、地域の時間へ。</CrayonTitle>
          </div>

          <div className="space-y-11 md:space-y-14">
            {activities.map((activity, index) => (
              <article key={activity.title} className="grid items-center gap-6 md:gap-8 lg:grid-cols-2">
                <SnapshotImage
                  src={activity.image}
                  alt={activity.title}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className={`aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  imageClassName={activity.image.endsWith(".png") ? "object-contain p-4 sm:p-6" : "object-cover"}
                  tilt={index % 2 === 0 ? "left" : "right"}
                />
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <CrayonTitle as="h3" className="title-h3">
                    {activity.title}
                  </CrayonTitle>
                  <p className="body-lg mt-4 md:mt-5">{activity.copy}</p>
                  <Link href="/activities" className="link-stroke mt-6 inline-flex items-center gap-2">
                    詳しく見る <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl md:mb-10">
            <CrayonTitle>活動実績</CrayonTitle>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {stats.map((stat, index) => (
              <CountUpStat key={stat.label} {...stat} delay={index * 0.07} />
            ))}
          </div>
        </div>

        <div className="mask-fade-x mt-10 md:mt-14">
          <div className="animate-marquee">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="mx-2 w-[68vw] bg-white p-2 shadow-[var(--shadow-card)] sm:mx-3 sm:w-[22rem] md:w-96"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-sm)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 68vw, (max-width: 768px) 22rem, 384px"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--blush)]">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl md:mb-10">
            <CrayonTitle>どんな人に向けた活動か。</CrayonTitle>
            <p className="body-lg mt-6">
              Happy Hearts Englishは、子ども、地域施設、保護者、学生メンバー、連携団体のあいだに、
              英語を楽しいと思える機会を増やすための活動です。文京区で英語イベントや教育ボランティアを探している方に、活動内容が伝わるように整理しています。
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {audienceBlocks.map((block) => (
              <article key={block.title} className="surface-card p-5 sm:p-7">
                <h3 className="title-h3 text-[var(--ink)]">{block.title}</h3>
                <p className="mt-4 text-[0.96rem] leading-7 text-[var(--ink)]/72 sm:mt-5 sm:text-base sm:leading-8">{block.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--paper)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <CrayonTitle>活動報告は、地域との信頼を育てる場所。</CrayonTitle>
            <Link href="/news" className="link-stroke mt-7 inline-flex items-center gap-2">
              ニュース一覧へ <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[var(--r-md)] border border-[var(--line-soft)] bg-white p-5 shadow-[var(--shadow-card)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] sm:p-6"
              >
                <h3 className="title-h3 mt-3 text-[var(--ink)] group-hover:text-[var(--pink-deep)]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-t-[var(--r-lg)] bg-[var(--pink)] px-5 py-20 text-white sm:px-6 md:py-32">
        <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="hero-title mt-4 max-w-4xl">
              子どもたちに、英語って楽しいと思える時間を。
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/86 sm:mt-5 sm:text-lg sm:leading-8">
              ボランティア参加、児童館・施設でのイベント相談、団体連携のご相談を受け付けています。
            </p>
          </div>
          <Link href="/contact" className="focus-ring rounded-full">
            <Button variant="secondary" size="lg" className="w-full justify-center px-8 sm:w-auto">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
