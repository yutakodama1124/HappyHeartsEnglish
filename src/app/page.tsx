"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CloudImage } from "@/components/ui/CloudImage";
import { ArrowRight, Star, Heart, Smile } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  const galleryImages = [
    "/images/gallery1.JPG",
    "/images/gallery2.JPG",
    "/images/gallery3.JPG",
    "/images/gallery4.JPG",
    "/images/gallery5.JPG",
    "/images/gallery6.JPG",
    "/images/HHEActivity.JPG",
    "/images/HHEActivityCover.JPG",
  ];

  const values = [
    {
      icon: <Smile className="text-[#fb6f92]" size={32} />,
      title: "Pure Joy",
      titleJa: "学ぶ楽しさ",
      desc: "英語を「勉強」ではなく「遊び」として捉え、子どもたちの純粋な笑顔を引き出すことを最優先にします。"
    },
    {
      icon: <Star className="text-[#fb6f92]" size={32} />,
      title: "Real Connection",
      titleJa: "心のつながり",
      desc: "言葉の壁を超えて、心と心が通じ合う瞬間の温かさを大切にしています。"
    },
    {
      icon: <Heart className="text-[#fb6f92]" size={32} />,
      title: "Growth Together",
      titleJa: "共に育つ",
      desc: "教える側も教わる側も、共に学び、新しい世界を広げていく成長の場を創ります。"
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#fff0f5]">

      {/* 01. HERO */}
      <section className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden bg-[#fff0f5]">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" className="text-left">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <span className="writing-vertical text-[10px] font-black tracking-widest text-[#fb6f92]">01 / HERO</span>
              <div className="h-px w-12 bg-[#fb6f92]/30" />
              <span className="text-[12px] font-black tracking-[0.2em] text-[#fb6f92] uppercase">HHE Journey</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-[9.5rem] font-black text-[#4a3b43] leading-[1] md:leading-[0.8] mb-8 md:mb-12 tracking-tighter">
              Happy<br />
              <span className="text-[#fb6f92]">Hearts.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#4a3b43]/70 mb-14 leading-relaxed max-w-lg font-medium">
              英語の「ワクワク」を、<br />
              すべての子どもたちへ届ける物語。
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button size="lg" className="px-12 rounded-full border-2 border-[#fb6f92] bg-white text-[#fb6f92] hover:bg-[#fb6f92] hover:text-white shadow-xl transition-all h-20 text-xl font-black group">
                  Our Full Story <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: heroImageY }}
          className="absolute right-[-5%] top-[15%] w-[60%] lg:w-[45%] aspect-[4/3] opacity-20 lg:opacity-100 pointer-events-none"
        >
          <CloudImage
            src="/images/HHECHARACTER.jpg"
            alt="Happy Hearts"
            className="w-full h-full rounded-[4rem] shadow-2xl"
            priority
          />
        </motion.div>
      </section>

      {/* 02. NARRATIVE */}
      <Section bgText="IDENTITY" accentText="Identity / 02" className="pt-60">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-[#4a3b43] mb-8 md:mb-12 leading-[1.1] md:leading-[0.9] tracking-tighter">
              一人一人の<br />
              心が弾む。
            </h2>
            <p className="text-2xl text-[#4a3b43]/60 mb-10 leading-[2.2] font-medium max-w-lg">
              広尾学園小石川高校の生徒が立ち上げた、<br />
              小さな一歩から始まったボランティア団体。<br /><br />
              英語が「世界とつながる喜び」に変わる瞬間を創り出します。
            </p>
          </div>

          <div className="relative">
            <CloudImage
              src="/images/HHEteamphoto.jpg"
              alt="Team"
              className="w-full aspect-[4/3] rounded-[4rem] shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* 03. CORE VALUES - Premium Vertical Storyline */}
      <Section bg="pink" bgText="VALUES" accentText="Our Heart / 03" className="py-32 md:py-80 bg-[#fffcfd]">
        <div className="text-left mb-32 md:mb-60 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl lg:text-[10rem] font-black text-[#4a3b43] tracking-tighter mb-8 md:mb-10 leading-none">Our Spirit.</h2>
          <p className="text-sm md:text-xl lg:text-2xl text-[#fb6f92] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase decoration-[#fb6f92]/20 underline underline-offset-[8px] md:underline-offset-[16px] decoration-2 md:decoration-4">What moves us forward.</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-32 md:space-y-64 px-6 md:px-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative py-12 md:py-24 group"
            >
              {/* Giant Aesthetic Index Only */}
              <div className="absolute left-1/2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 pointer-events-none z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-[2s]">
                <span className="text-[12rem] md:text-[20rem] lg:text-[40rem] font-black text-[#fb6f92] select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Sophisticated Narrative Block */}
              <div className={`relative z-10 flex flex-col ${i % 2 === 0 ? "md:items-start text-left" : "md:items-end text-right"} items-center space-y-4 md:space-y-6 lg:space-y-10`}>
                <h3 className="text-4xl md:text-6xl lg:text-[12rem] font-black text-[#4a3b43] mb-4 tracking-tighter leading-none italic group-hover:not-italic transition-all duration-[1s] ease-in-out">
                  {v.title}
                </h3>
                <p className="text-[#fb6f92] font-black text-lg md:text-2xl lg:text-3xl tracking-[0.2em] md:tracking-[0.5em] uppercase opacity-40">
                  {v.titleJa}
                </p>
                <p className="text-2xl md:text-5xl text-[#4a3b43]/60 font-medium leading-[1.6] max-w-5xl tracking-tight">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 04. IMPACT STATS */}
      <Section bgText="IMPACT" className="py-32 md:py-60 border-t border-[#fb6f92]/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { num: "20+", label: "Members", labelJa: "活動メンバー" },
            { num: "130+", label: "Volunteer Hours", labelJa: "ボランティア時間" },
            { num: "1+", label: "Years", labelJa: "活動年数" },
            { num: "100%", label: "Smiles", labelJa: "笑顔の数" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-6xl lg:text-[8rem] font-black text-[#fb6f92] leading-none mb-4 tracking-tighter drop-shadow-sm">{s.num}</span>
              <span className="text-sm md:text-xl font-black text-[#4a3b43] uppercase tracking-[0.05em] md:tracking-[0.1em]">{s.label}</span>
              <span className="text-[10px] md:text-xs font-bold text-[#4a3b43]/40 mt-1 md:mt-2">{s.labelJa}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 05. ACTIVITIES */}
      <Section bgText="ACTIVITY" accentText="What we do / 05" className="bg-[#fff0f5] pt-32 md:pt-60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 md:gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-[#4a3b43] tracking-tighter">Activities.</h2>
          <Link href="/activities">
            <span className="text-[#fb6f92] font-black text-sm md:text-lg border-b-2 md:border-b-4 border-[#fb6f92]/10 hover:border-[#fb6f92] pb-1 md:pb-2 transition-all cursor-pointer">Explore All</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {[
            { title: "絵本制作", src: "/images/HHECOVER.png" },
            { title: "イベント開催", src: "/images/HHEActivityCover.JPG" },
            { title: "他団体連携", src: "/images/HHEActivity.JPG" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="w-full aspect-[4/3] mb-10 rounded-[3rem] overflow-hidden shadow-xl">
                <CloudImage src={item.src} alt={item.title} className="w-full h-full" />
              </div>
              <h3 className="text-3xl font-black text-[#4a3b43] group-hover:text-[#fb6f92] transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 06. MOMENTS */}
      <section className="py-32 md:py-60 bg-[#fff0f5] overflow-hidden relative">
        <div className="floating-bg-text !text-[30vw] opacity-[0.02]">MOMENTS</div>

        <div className="mb-12 md:mb-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#4a3b43] tracking-tighter">Captured Memories.</h2>
        </div>

        <div className="rotate-[-1deg]">
          <div className="animate-marquee">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div key={i} className="w-[80vw] md:w-[400px] lg:w-[500px] aspect-video relative mx-4 md:mx-6 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl">
                <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. CALL TO ACTION */}
      <section className="bg-[#fb6f92] text-white py-32 md:py-60 px-6 rounded-t-[4rem] md:rounded-t-[8rem] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-9xl font-black mb-8 md:mb-14 leading-[1.1] md:leading-[0.85] tracking-tighter">
            Let&apos;s build the<br />
            next chapter.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-20 font-medium leading-loose">
            ボランティア、パートナーシップ、制作のご相談。<br />
            あなたの温かい一歩をお待ちしています。
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#fb6f92] px-20 py-10 rounded-full font-black text-2xl shadow-2xl transition-all"
            >
              Connect with us
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}