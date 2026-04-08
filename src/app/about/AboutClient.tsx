"use client";

import { motion } from "framer-motion";
import { CloudImage } from "@/components/ui/CloudImage";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutClient() {
  const leadership = [
    {
      name: "Yuuken Miura",
      role: "Founder / 共同代表",
      image: "/images/Yuuken.jpg",
    },
    {
      name: "Shunya Glover",
      role: "Co-Founder / 共同代表",
      image: "/images/Shunya.jpg",
    },
    {
      name: "Wataru Kawaguchi",
      role: "Co-Founder / 共同代表",
      image: "/images/Wataru.jpg",
    },
    {
      name: "Yuta Kodama",
      role: "Co-Founder / 共同代表",
      image: "/images/Yuta.png",
    },
  ];

  const members = [
    "Saku Yamaguchi", "Tomo Kyokukawa", "Rion Nakata", "Ai Koike",
    "Asaki Hashimoto", "Keita Kojima", "Haru Fujimori", "Aodhnait Bolduan",
    "Gihan Madegedara", "Rio Ogoshi", "Naohisa Matsudaira", "Lily Kikuchi",
    "Manano Ichikawa", "Rion Mizumoto", "Yuika Osada", "Juha Kikuchi",
    "Akinari Kimura", "Taku Tsunoda"
  ];

  return (
    <div className="bg-[#fff0f5]">

      {/* Hero Section */}
      <Section bgText="STORY" accentText="Story / 01" className="pt-32 md:pt-60">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-[10rem] font-black text-[#4a3b43] mb-8 md:mb-16 leading-[1.1] md:leading-[0.8] tracking-tighter">
            Our<br />
            <span className="text-[#fb6f92]">Identity.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#4a3b43]/70 font-medium leading-[1.8] max-w-3xl">
            私たちは、広尾学園小石川高校の生徒が立ち上げた<br />
            英語を通して<span className="text-[#fb6f92]">「遊び × 学び」</span>の境界線をなくす<br />ボランティア団体です。
          </p>
        </div>
      </Section>

      {/* Origin Narrative */}
      <Section bg="pink" bgText="ORIGIN" accentText="Beginning / 02" className="py-32 md:py-60">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
            <CloudImage src="/images/HHEteamphoto.jpg" alt="Team" className="rounded-[2rem] md:rounded-[3rem]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#4a3b43] mb-8 md:mb-12 tracking-tighter">「もっと楽しく」<br />その一歩。</h2>
            <div className="space-y-8 text-xl text-[#4a3b43]/70 font-medium leading-[2.2]">
              <p>
                メンバーの多くが帰国子女として、言葉が通じた時の「心の温かさ」を知っています。
                一方で、日本の教育では英語が「勉強」という壁になっている現状がありました。
              </p>
              <p>
                私たちは、英語を身近な「ワクワク」に変え、子どもたちが自然に世界へと目を向けるきっかけを創るために活動しています。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership - Clean Rectangular Grid */}
      <Section bgText="TEAM" className="py-32 md:py-60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 md:gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-[#4a3b43] tracking-tighter">Leadership.</h2>
          <p className="text-[#fb6f92] font-black text-sm md:text-lg">創設メンバー / 共同代表</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-8 overflow-hidden rounded-[2.5rem] bg-[#fff0f5] shadow-sm transform transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#4a3b43]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70 mb-2">{leader.role}</p>
                  <h3 className="text-2xl font-black">{leader.name}</h3>
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <h3 className="text-2xl font-black text-[#4a3b43] mb-1">{leader.name}</h3>
                <p className="text-sm font-bold text-[#fb6f92] uppercase tracking-widest">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Founder's Message - HEARTFELT BLOCK */}
      <Section className="py-32 md:py-60 bg-[#fff0f5]" bgText="MESSAGE">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fff0f5] p-8 md:p-12 lg:p-24 rounded-[3rem] md:rounded-[5rem] relative shadow-xl md:shadow-2xl border border-[#fb6f92]/20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-[#4a3b43] mb-8 md:mb-12 tracking-tighter leading-tight">
              一人一人の笑顔が、<br />
              私たちの原動力です。
            </h2>

            <div className="space-y-10 text-xl text-[#4a3b43]/80 font-medium leading-[2.2]">
              <p>
                英語は単なる「言語」ではなく、新しい世界、新しい友だち、
                そして自分自身の新しい可能性と出会うための「チケット」だと信じています。
              </p>
              <p>
                Happy Hearts Englishは、遊びを通して英語への心理的ハードルを下げ、
                子どもたちが「もっと知りたい！」と自ら言いたくなる環境作りを大切にしてきました。
              </p>
              <p>
                代表、そしてメンバー一同、一冊の絵本、一つのイベントを通してお届けするのは
                英語そのものだけでなく、そこから生まれる「自信」と「ワクワク」です。
              </p>
            </div>

            <div className="mt-20 pt-16 border-t border-[#4a3b43]/10 flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <p className="text-[#fb6f92] font-black text-xs tracking-[0.4em] uppercase mb-4">Representatives Message</p>
                <h3 className="text-3xl font-black text-[#4a3b43]">共同代表一同</h3>
              </div>
              <div className="text-right">
                <p className="font-black italic text-2xl text-[#fb6f92]/40 tracking-tighter cursor-default select-none">
                  English as a bridge to heart.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Members List - Clean, Non-shabby Ticker/Grid */}
      <section className="py-32 md:py-60 px-6 bg-[#fff0f5] relative overflow-hidden">
        <div className="floating-bg-text opacity-[0.03]">MEMBERS</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-10 mb-16 md:mb-32">
            <h2 className="text-4xl md:text-5xl font-black text-[#4a3b43] tracking-tighter underline decoration-[#fb6f92]/20 underline-offset-[4px] md:underline-offset-8">Our Family.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20">
            {members.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="group cursor-default"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[10px] font-black text-[#fb6f92] opacity-40">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-2xl font-black text-[#4a3b43] group-hover:text-[#fb6f92] transition-colors leading-none">
                    {name}
                  </h4>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-[#fb6f92]/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}