"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      const target = document.querySelector(targetId!);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const activities = [
  {
    title: "絵本制作",
    desc: "脚本からイラストまで、ボランティアが手作りで英語絵本を制作し公開しております！",
    image: "/images/HHECOVER.png",
  },
  {
    title: "イベント開催",
    desc: "児童館や区の施設と連携し、英語での様々なアクティビティやイベントを開催してます！",
    image: "/images/HHEActivityCover.jpg",
  },
  {
    title: "他団体との連携",
    desc: "英語をメインとしてる他のボランティア団体とも協力し、より多くの子供たちに英語の楽しさを届けてます！",
    image: "/images/HHEActivity.jpg",
  },
];

  return (
    <div
      className="min-h-screen bg-white text-gray-800"
      style={{
        fontFamily:
          "'Noto Sans JP', 'M PLUS Rounded 1c', 'Inter', 'Poppins', sans-serif",
      }}
    >
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-pink-100 via-red-100 to-blue-100 shadow-sm sticky top-0 z-50 py-4 border-b border-pink-200 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-pink-600 select-none">
            Happy Hearts English
          </h1>
         <div className="hidden md:flex gap-6">
  <a href="/about" className="text-pink-700 hover:text-red-500 font-semibold rounded-full px-3 py-1 transition-transform transform hover:scale-110">概要</a>
  <a href="/activities" className="text-pink-700 hover:text-red-500 font-semibold rounded-full px-3 py-1 transition-transform transform hover:scale-110">活動内容</a>
  <a href="#絵本" className="text-pink-700 hover:text-red-500 font-semibold rounded-full px-3 py-1 transition-transform transform hover:scale-110">絵本</a>
  <a href="/News" className="text-pink-700 hover:text-red-500 font-semibold rounded-full px-3 py-1 transition-transform transform hover:scale-110">ニュース</a>
  <a href="/Contact" className="text-pink-700 hover:text-red-500 font-semibold rounded-full px-3 py-1 transition-transform transform hover:scale-110">お問い合わせ</a>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 py-20 px-6 rounded-b-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-pink-600 font-semibold mb-4 rounded-full inline-block px-3 py-1 bg-pink-100 select-none shadow-sm">
              英語を楽しく、みんなに
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-pink-700 japanese-text">
              Happy Hearts English
              <br />のボランティア活動は
              <br />
              「楽しそう！」から始まる学びの旅
            </h2>
            <p className="text-lg text-pink-700 mb-8 leading-relaxed">
              英語を通して笑顔を広げ、子どもたちの未来を応援しています。
            </p>
          </motion.div>

         <motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <Image
    src="/images/HHECHARACTER.jpg"
    alt="Happy Hearts English ロゴキャラクター"
    width={600}
    height={600}
    className="rounded-3xl shadow-lg object-cover w-full h-auto"
  />
</motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="概要" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 rounded-t-3xl rounded-b-3xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold text-pink-600 mb-6 rounded-full inline-block px-4 py-2 bg-pink-200 shadow-md select-none">
              Happy Hearts Englishの紹介
            </h3>
            <p className="text-lg text-pink-700 mb-4 leading-relaxed">
              <span className="text-red-400 font-bold">Happy Hearts English</span>
              は広尾学園小石川高校の生徒が立ち上げたボランティア団体です。絵本制作や楽しいアクティビティ、
              他団体との連携を通して、英語の楽しさを広めています。
            </p>
            <p className="text-lg text-pink-700 mb-4 leading-relaxed">
              性別、年齢、人種、などの枠組みを気にせずすべての人に英語教育を届け、楽しみながら子どもたちをグローバルな人材に育てることを目標としてます。
            </p>
            <p className="text-lg text-pink-700 leading-relaxed">
              英語を通じて子どもたちの未来を明るく彩れるよう日々活動中です！
            </p>
          </motion.div>

         <motion.div
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <Image
    src="/images/HHEteamphoto.jpg"
    alt="Happy Hearts English チーム写真"
    width={600}
    height={600}
    className="rounded-3xl shadow-lg object-cover w-full h-auto"
  />
</motion.div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="/about">
            <motion.button
              className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-white px-8 py-4 rounded-full font-extrabold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:animate-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              もっと詳しく見る
            </motion.button>
          </a>
        </div>
      </section>

      {/* Activities Section */}
      <section id="活動内容" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 rounded-t-3xl">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-extrabold text-pink-600 rounded-full inline-block px-6 py-3 bg-pink-200 shadow-md select-none">
            私たちの活動
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              className="bg-pink-50 border border-pink-200 rounded-3xl p-8 hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
           <Image
  src={a.image}
  alt={`${a.title} の画像`}
  width={500}
  height={300}
  className="rounded-2xl mb-6 shadow-md object-contain w-full h-auto"
  style={{ maxHeight: "250px" }}
/>
              <h4 className="text-xl font-extrabold text-red-400 mb-3 rounded-full inline-block px-3 py-1 bg-red-100 select-none">
                {a.title}
              </h4>
              <p className="text-pink-700 leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/activities">
            <motion.button
              className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-white px-8 py-4 rounded-full font-extrabold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:animate-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              活動を詳しく見る
            </motion.button>
          </a>
        </div>
      </section>

      {/* Books Section - Single Book */}
      <section id="絵本" className="py-20 px-6 bg-gradient-to-b from-pink-50 via-red-50 to-blue-50 rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h3 className="text-3xl md:text-5xl font-extrabold text-pink-600 rounded-full inline-block px-6 py-3 bg-pink-200 shadow-md select-none">
            絵本の紹介
          </h3>
        </div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white border border-pink-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Image
                src="/images/HHECOVER.png"
                alt="Happy Hearts English ロゴキャラクター"
                width={400}
                height={333}
                className="rounded-3xl shadow-lg object-cover"
              />
            </div>
            <h4 className="text-2xl font-extrabold text-red-400 mb-4 rounded-full inline-block px-4 py-2 bg-red-100 select-none">
              Our Amazing Body
            </h4>
            <p className="text-pink-700 text-lg leading-relaxed">
              私たちの体について楽しく学べる英語絵本です。体の各部分の名前や機能を紹介し、子どもたちが英語で自分の体について話せるようになることを目指しています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="ギャラリー" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 rounded-t-3xl rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-extrabold text-pink-600 rounded-full inline-block px-6 py-3 bg-pink-200 shadow-md select-none">
            ギャラリー
          </h3>
          <p className="text-lg text-pink-700 mt-4">学びと遊びの瞬間を共有</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
  {[
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/HHECHARACTER.jpg",
  ].map((src, i) => (
    <div key={i} className="overflow-hidden rounded-3xl shadow-md">
      <Image
        src={src}
        alt={`ギャラリー画像 ${i + 1}`}
        width={400}
        height={400}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  ))}
</div>
      </section>

      {/* News Section */}
      <section id="ニュース" className="py-20 px-6 bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 rounded-t-3xl">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-extrabold text-pink-600 rounded-full inline-block px-6 py-3 bg-pink-200 shadow-md select-none">
            最新のニュース
          </h3>
        </div>
        <div className="space-y-6 max-w-5xl mx-auto">
         <Link href="/News">
  <motion.article
    className="bg-white border border-pink-200 rounded-3xl p-8 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h4 className="text-xl font-extrabold text-red-400 mb-3 rounded-full inline-block px-3 py-1 bg-red-100 select-none">
      Websiteを公開しました！
    </h4>
    <p className="text-pink-700 mb-4">
      最近の活動レポートを詳しくご覧ください！
    </p>
    <p className="text-sm text-pink-400 select-none">2025年11月01日</p>
    <p className="text-red-500 font-semibold hover:underline mt-3">→ 詳しく見る</p>
  </motion.article>
</Link>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white py-24 px-6 text-center rounded-t-3xl"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 select-none">
          活動に参加しませんか？
        </h3>
        <p className="text-xl mb-10">
          ボランティア、パートナーシップ、お問い合わせはこちら
        </p>
        <Link href="/Contact">
          <motion.button
            className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-white px-12 py-5 rounded-full font-extrabold text-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 hover:animate-bounce"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            お問い合わせ
          </motion.button>
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 via-red-600 to-pink-700 text-white py-16 px-6 rounded-b-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-extrabold mb-4 select-none">Happy Hearts English</h4>
            <p className="text-pink-200">
              英語の楽しさを日々広めてまいります。
            </p>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-4 select-none">リンク</h4>
            <ul className="space-y-2 text-pink-200">
              {["概要", "活動内容", "絵本", "ギャラリー"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="hover:text-white hover:pl-2 transition inline-block select-none"
                  >
                    ✦ {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-extrabold mb-4 select-none">お問い合わせ</h4>
            <p className="text-pink-200 mb-2 select-none">
              englishhappyhearts@gmail.com
            </p>
            <p className="text-pink-200 select-none">文京区</p>
          </div>
        </div>
        <div className="border-t border-pink-300/40 pt-8 text-center mt-10 text-pink-200 select-none">
          © 2025 Happy Hearts English and Yuta Kodama. All rights reserved.
        </div>
      </footer>
    {/* Inline style for .japanese-text */}
    <style>
      {`
        .japanese-text {
          word-break: keep-all;
          overflow-wrap: anywhere;
        }
      `}
    </style>
    </div>
  );
}