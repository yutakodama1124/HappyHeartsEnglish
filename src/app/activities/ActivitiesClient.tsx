"use client";

import { motion } from "framer-motion";
import { CloudImage } from "@/components/ui/CloudImage";
import { Section } from "@/components/ui/Section";
import { CrayonTitle } from "@/components/ui/CrayonTitle";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/site";
import { fadeUp } from "@/lib/motion";

export default function ActivitiesClient() {
  const activities = [
    {
      title: "絵本制作",
      desc: "英語絵本を脚本からイラストまで、すべてメンバーが手づくりで制作します。子どもたちが自然に英語を楽しめるよう、短い英語表現、くり返しやすいフレーズ、絵だけでも流れが伝わる構成にこだわっています。完成した絵本は読み聞かせ、英語ゲーム、工作イベントの導入として活用します。",
      voice: "脚本づくりは大変だったけれど、子どもたちに読んでもらえた瞬間に全部報われました。",
      author: "Member M",
      image: "/images/HHECOVER.png",
      points: ["英語が初めての子どもにも伝わる短い文", "読み聞かせで使いやすいページ構成", "イベント後も活動に残る教材づくり"],
    },
    {
      title: "イベント開催",
      desc: "児童館や地域施設で、英語を使った遊びを企画します。英語カルタ、読み聞かせ、ジェスチャーゲーム、工作、チーム対抗のミニアクティビティなどを組み合わせ、日常の「楽しい」に英語を混ぜて、自然に言葉があふれる環境をつくります。",
      voice: "普段あまり笑わない子が、アクティビティで思いきり笑ってくれた時にやりがいを感じました。",
      author: "Member B",
      image: "/images/HHEActivityCover.JPG",
      points: ["幼児・小学生向けの参加しやすい英語ゲーム", "児童館や地域イベントに合わせた時間設計", "子どもが声を出しやすい高校生ならではの進行"],
    },
    {
      title: "他団体との連携",
      desc: "英語をテーマにした他のボランティア団体、教育機関、児童館、地域イベントと協力し、地域全体で学びの輪を広げています。提携先の目的や参加する子どもの年齢に合わせて、絵本、ゲーム、発表、交流を組み合わせた形を相談します。",
      voice: "他団体との交流から学ぶことも多く、自分たちの活動の視野も広がりました。",
      author: "Member C",
      image: "/images/HHEActivity.JPG",
      points: ["提携先6団体との活動実績", "施設やイベントの目的に合わせた企画相談", "教育・国際交流・地域活動との接点づくり"],
    },
  ];

  const flow = [
    "活動相談: 対象年齢、人数、会場、希望するテーマを確認します。",
    "企画づくり: 絵本、ゲーム、工作、読み聞かせを組み合わせて流れを決めます。",
    "準備と練習: メンバー内で英語表現、進行、安全面、子どもへの声かけを確認します。",
    "当日運営: 高校生メンバーが子どもたちと近い距離で活動を進めます。",
    "振り返り: 次回に向けて、参加者の反応や改善点をチームで共有します。",
  ];

  const faqs = [
    {
      question: "どんな年齢の子ども向けに活動していますか？",
      answer: "主に幼児から小学生を対象に、英語絵本、読み聞かせ、ゲーム、工作を組み合わせた参加しやすい活動を行っています。",
    },
    {
      question: "イベントではどんな英語アクティビティをしますか？",
      answer: "英語カルタ、絵本の読み聞かせ、ジェスチャーゲーム、工作、チームで参加できるミニアクティビティなど、会場や年齢に合わせて内容を調整します。",
    },
    {
      question: "児童館や地域施設との連携はできますか？",
      answer: "できます。対象年齢、人数、会場、希望するテーマを確認し、子どもたちが安全に楽しめる英語体験になるよう企画を相談します。",
    },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "活動内容", path: "/activities" },
  ]);
  const faqJsonLd = buildFaqJsonLd(faqs);

  return (
    <div className="bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Section>
        <div className="max-w-4xl">
          <CrayonTitle as="h1" className="display-title--hero mb-6">
            活動のつくり方
          </CrayonTitle>
          <p className="body-xl max-w-3xl">
            「英語 × 楽しい」を体験として形にするために、
            私たちは絵本・イベント・地域連携の3つの軸で活動しています。
          </p>
          <p className="body-lg mt-6 max-w-3xl">
            文京区の児童館や地域施設で、子どもたちが英語を聞く、まねする、体を動かす、友だちと笑う時間をつくります。
            活動は一回限りの出し物ではなく、手づくり教材、チームでの準備、提携先との相談を重ねながら育てています。
          </p>
        </div>
      </Section>

      <div className="pb-24 md:pb-32">
        {activities.map((activity, index) => (
          <Section
            key={activity.title}
            bg={index % 2 === 0 ? "pink" : "white"}
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUp()}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <CrayonTitle className="mb-5">{activity.title}</CrayonTitle>
                <p className="text-lg leading-8 text-[var(--foreground)]/72">{activity.desc}</p>
                <ul className="mt-6 space-y-3 text-base leading-7 text-[var(--ink)]/72">
                  {activity.points.map((point) => (
                    <li key={point} className="border-l-2 border-[var(--pink)] pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8 rounded-[var(--r-md)] border border-[var(--line-soft)] bg-[var(--blush)] p-7 shadow-[var(--shadow-card)]">
                  <span className="absolute -left-2 top-8 h-5 w-5 rotate-45 border-b border-r border-[var(--line-soft)] bg-[var(--blush)]" />
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-[var(--pink-deep)]">
                    {activity.author.replace("Member ", "")}
                  </span>
                  <p className="text-lg italic leading-8 text-[var(--foreground)]/76">&quot;{activity.voice}&quot;</p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUp(0.08)}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <CloudImage
                  src={activity.image}
                  alt={activity.title}
                  className="aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </Section>
        ))}
      </div>

      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <CrayonTitle>活動までの流れ</CrayonTitle>
            <p className="body-lg mt-6">
              児童館、地域施設、教育団体、学生団体との連携では、事前相談から当日の運営までを段階的に進めます。
              子どもたちにとって安全で参加しやすい英語体験になるよう、会場に合わせて内容を調整します。
            </p>
          </div>
          <ol className="grid gap-4">
            {flow.map((item, index) => (
              <li key={item} className="surface-card p-5">
                <p className="text-lg font-bold leading-8 text-[var(--ink)]">
                  {index + 1}. {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section bg="pink">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <CrayonTitle>活動についての質問</CrayonTitle>
            <p className="body-lg mt-6">
              英語イベントや地域連携を検討している方に向けて、活動内容の基本をまとめています。
              詳しい条件は会場や対象年齢に合わせて相談できます。
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="surface-card p-6">
                <h2 className="text-xl font-black leading-8 text-[var(--ink)]">{faq.question}</h2>
                <p className="mt-3 text-base leading-8 text-[var(--ink)]/72">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="cta-pattern relative overflow-hidden rounded-t-[var(--r-lg)] px-6 py-24 text-white md:py-32">
        <div className="container-shell text-center">
          <h2 className="hero-title mx-auto mt-6 max-w-3xl">
            次の活動に、一緒に関わりませんか。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/82">
            ボランティア、イベント連携、絵本制作のご相談まで、お気軽にご連絡ください。
          </p>
          <Link href="/contact" className="mt-10 inline-flex">
            <Button size="lg" variant="secondary" className="px-10">
              お問い合わせ
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
