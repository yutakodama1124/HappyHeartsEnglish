"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { CloudImage } from "@/components/ui/CloudImage";
import { Section } from "@/components/ui/Section";
import { CrayonTitle } from "@/components/ui/CrayonTitle";
import Image from "next/image";
import { useState } from "react";
import { buildBreadcrumbJsonLd } from "@/lib/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutClient() {
  const reduceMotion = useReducedMotion();
  const [, setSecretProgress] = useState({
    yuuken: 0,
    ai: 0,
    yuukenUnlocked: false,
    aiUnlocked: false,
    lastTapAt: 0,
  });
  const [showLoveBurst, setShowLoveBurst] = useState(false);

  const leadership = [
    { name: "Yuuken Miura", role: "Co-Founder / 共同代表", image: "/images/Yuuken.jpg" },
    { name: "Shunya Glover", role: "Co-Founder / 共同代表", image: "/images/Shunya.png" },
    { name: "Wataru Kawaguchi", role: "Co-Founder / 共同代表", image: "/images/Wataru.png" },
    { name: "Yuta Kodama", role: "Co-Founder / 共同代表", image: "/images/Yuta.png" },
  ];

  const members = [
    "Saku Yamaguchi", "Tomo Kyokukawa", "Rion Nakata", "Ai Koike",
    "Asaki Hashimoto", "Keita Kojima", "Haru Fujimori", "Aodhnait Bolduan",
    "Gihan Madegedara", "Rio Ogoshi", "Naohisa Matsudaira", "Juha Kikuchi",
    "Akinari Kimura", "Taku Tsunoda", "Kirin Inoue", "Hana Ishihara",
    "Sora Inoue", "Lisa Yoshida", "Kotaro Tagami", "Go Takao",
    "Taiga Hoshiyama"
  ];

  const memberRoles: Record<string, string> = {
    "Saku Yamaguchi": "Picture Book Leader",
    "Tomo Kyokukawa": "Children's Hall Leader",
    "Rion Nakata": "Growth Team Leader",
    "Ai Koike": "Social Media Leader",
    "Asaki Hashimoto": "Activity Brainstorm Leader",
    "Haru Fujimori": "Social Media Leader",
    "Aodhnait Bolduan": "Activity Brainstorm Leader",
    "Rio Ogoshi": "Outreach Team Leader",
    "Naohisa Matsudaira": "Children's Hall Leader",
    "Akinari Kimura": "Children's Hall Leader",
    "Taku Tsunoda": "Children's Hall Leader",
  };

  const principles = [
    {
      title: "英語を正解より先に、体験として届ける",
      copy: "単語を覚えることだけを目的にせず、絵本、ゲーム、工作、会話の中で自然に英語に触れる時間をつくります。",
    },
    {
      title: "高校生だからできる近さを活かす",
      copy: "先生でも保護者でもない少し年上の存在として、子どもたちが緊張せず話しかけられる距離感を大切にしています。",
    },
    {
      title: "地域と続けられる形で活動する",
      copy: "児童館や教育団体と相談しながら、会場、年齢、人数、時間に合わせて無理なく続けられるプログラムを考えます。",
    },
  ];

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "団体について", path: "/about" },
  ]);

  const registerSecretTap = (target: "yuuken" | "ai") => {
    const now = Date.now();
    const secretTapGoal = 5;
    const secretWindowMs = 6500;

    setSecretProgress((current) => {
      const stillInWindow = now - current.lastTapAt < secretWindowMs;
      const base = stillInWindow
        ? current
        : { yuuken: 0, ai: 0, yuukenUnlocked: false, aiUnlocked: false, lastTapAt: 0 };
      const nextCount = base[target] + 1;
      const next = {
        ...base,
        [target]: nextCount,
        [`${target}Unlocked`]: nextCount >= secretTapGoal,
        lastTapAt: now,
      };

      if (next.yuukenUnlocked && next.aiUnlocked) {
        setShowLoveBurst(true);
        return { yuuken: 0, ai: 0, yuukenUnlocked: false, aiUnlocked: false, lastTapAt: 0 };
      }

      return next;
    });
  };

  const loveRain = Array.from({ length: 22 }, (_, index) => ({
    id: index,
    left: (index * 17) % 96,
    delay: (index % 8) * 0.12,
    duration: 2.8 + (index % 5) * 0.22,
    rotate: index % 2 === 0 ? -16 : 18,
    label: index % 3 === 0 ? "LOVE" : index % 3 === 1 ? "Ai" : "Yuuken",
  }));

  return (
    <div className="bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AnimatePresence>
        {showLoveBurst && (
          <motion.div
            className="love-burst"
            role="dialog"
            aria-label="Secret love animation"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setShowLoveBurst(false)}
          >
            <div className="love-burst__rain" aria-hidden="true">
              {loveRain.map((item) => (
                <motion.div
                  key={item.id}
                  className="love-burst__drop"
                  style={{ left: `${item.left}%` }}
                  initial={{ y: "-22vh", opacity: 0, rotate: item.rotate }}
                  animate={{ y: "116vh", opacity: [0, 1, 1, 0], rotate: item.rotate * -1 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : item.duration,
                    delay: reduceMotion ? 0 : item.delay,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "linear",
                  }}
                >
                  {item.id % 4 === 0 ? (
                    <Image
                      src="/images/easter-love.png"
                      alt=""
                      width={104}
                      height={156}
                      className="love-burst__mini-photo"
                    />
                  ) : (
                    <span>{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="love-burst__stage"
              initial={reduceMotion ? false : { y: 26, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="love-burst__photo love-burst__photo--left">
                <Image
                  src="/images/easter-yuuken.png"
                  alt="Yuuken secret photo"
                  fill
                  sizes="(max-width: 768px) 38vw, 22rem"
                  className="object-cover"
                />
              </div>
              <motion.div
                className="love-burst__heart-wrap"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { scale: [1, 1.14, 1], rotate: [-5, 5, -5] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="love-burst__heart" />
              </motion.div>
              <div className="love-burst__photo love-burst__photo--right">
                <Image
                  src="/images/easter-ai.png"
                  alt="Ai secret photo"
                  fill
                  sizes="(max-width: 768px) 38vw, 22rem"
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                className="love-burst__close"
                onClick={() => setShowLoveBurst(false)}
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Section>
        <div className="max-w-4xl">
          <CrayonTitle as="h1" className="display-title--hero mb-6">
            わたしたちの物語
          </CrayonTitle>
          <p className="body-xl max-w-3xl">
            広尾学園小石川高校の生徒たちが立ち上げた、
            「遊び × 学び」の境界線をやわらかくほどく英語ボランティア団体です。
          </p>
          <p className="body-lg mt-6 max-w-3xl">
            Happy Hearts Englishは、東京都文京区を中心に、子ども向け英語イベント、英語絵本制作、地域施設との連携を行っています。
            活動メンバーは高校生で、企画、教材づくり、当日の進行、広報、外部連携までをチームで分担しています。
          </p>
        </div>
      </Section>

      <Section id="origin" bg="pink">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <CloudImage
            src="/images/HHEteamphoto.jpg"
            alt="Happy Hearts English のメンバー集合写真"
            className="aspect-[4/3] max-w-xl"
            sizes="(max-width: 768px) 100vw, 42vw"
            priority
          />
          <div>
            <CrayonTitle className="mb-6">「もっと楽しく」から始まった一歩。</CrayonTitle>
            <div className="space-y-5 text-base leading-7 text-[var(--foreground)]/72 sm:space-y-6 sm:text-lg sm:leading-8">
              <p>
                多くのメンバーが、英語が通じたときのうれしさや、世界が広がる感覚を自分の経験として知っています。
              </p>
              <p>
                一方で、英語が勉強として遠く感じられてしまう場面もたくさん見てきました。
                だからこそ私たちは、英語にふれる最初の記憶を、もっとあたたかくしたいと考えています。
              </p>
              <p>
                文京区の児童館や地域イベントで出会う子どもたちにとって、英語が「テストのためのもの」ではなく、
                友だちと笑ったり、物語を聞いたり、体を動かしたりする時間の中にあるものになることを目指しています。
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="mb-10 max-w-4xl">
          <CrayonTitle>大切にしていること</CrayonTitle>
          <p className="body-lg mt-6">
            子ども向け英語ボランティアとして、私たちは「楽しい」だけで終わらない準備を大切にしています。
            活動前には対象年齢や会場の雰囲気を確認し、言葉の難しさ、進行のテンポ、安全な動線、子どもたちが参加しやすい声かけを話し合います。
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="surface-card p-5 sm:p-7">
              <h3 className="title-h3 text-[var(--ink)]">{principle.title}</h3>
              <p className="mt-4 text-[0.96rem] leading-7 text-[var(--ink)]/72 sm:mt-5 sm:text-base sm:leading-8">{principle.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <CrayonTitle>創設メンバー / 共同代表</CrayonTitle>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer()}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
        >
          {leadership.map((leader, index) => (
            <motion.article
              key={leader.name}
              variants={fadeUp(index * 0.06)}
              onClick={leader.name === "Yuuken Miura" ? () => registerSecretTap("yuuken") : undefined}
              className="surface-card overflow-hidden p-3 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-4"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { rotate: 1.4, y: -4 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-lg)-0.45rem)] sm:aspect-[3/4]"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </motion.div>
              <div className="px-1 pb-2 pt-4 sm:px-2 sm:pt-5">
                <h3 className="mt-1 text-xl font-black text-[var(--foreground)] sm:mt-2 sm:text-2xl">{leader.name}</h3>
                <p className="mt-1 text-xs font-medium leading-5 text-[var(--ink)]/68 sm:mt-2 sm:text-sm">{leader.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section bg="white">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
            variants={fadeUp()}
            className="surface-card relative p-5 sm:p-8 md:p-12"
          >
            <Quote className="absolute left-5 top-5 text-[var(--pink)]/35 sm:left-8 sm:top-8 sm:text-[var(--pink)]" size={44} />
            <div className="pt-10 sm:pl-8 sm:pt-0 md:pl-12">
              <CrayonTitle className="mb-6">一人ひとりの笑顔が、私たちの原動力です。</CrayonTitle>
              <div className="space-y-5 text-base leading-7 text-[var(--foreground)]/76 sm:space-y-6 sm:text-lg sm:leading-8">
                <p>
                  英語は単なる言語ではなく、新しい世界や友だち、自分の可能性に出会うためのチケットだと信じています。
                </p>
                <p>
                  Happy Hearts Englishは、遊びを通して英語への心理的ハードルを下げ、
                  「もっと知りたい」と自然に思える環境を大切に育ててきました。
                </p>
                <p>
                  届けたいのは英語そのものだけではなく、そこから生まれる自信とワクワクです。
                </p>
              </div>
              <div className="mt-10 border-t border-[var(--line-soft)] pt-8">
                <p className="mt-2 text-xl font-black text-[var(--foreground)] sm:text-2xl">共同代表一同</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <CrayonTitle>なかまたち</CrayonTitle>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
        >
          {members.map((name, index) => (
            <motion.div
              key={name}
              variants={fadeUp((index % 4) * 0.04)}
              onClick={name === "Ai Koike" ? () => registerSecretTap("ai") : undefined}
              className="soft-panel px-3.5 py-4 sm:px-5 sm:py-5"
            >
              <div>
                <h3 className="text-[0.96rem] font-black leading-snug text-[var(--foreground)] sm:text-xl">{name}</h3>
                {memberRoles[name] && (
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-[var(--ink)]/64 sm:mt-2 sm:text-sm sm:leading-6">{memberRoles[name]}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
