"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 text-pink-700">
      {/* Back to Home Button */}
      <div className="flex justify-start p-6">
        <Link
          href="/"
          className="text-pink-600 hover:text-red-500 font-semibold rounded-full px-4 py-2 transition-transform transform hover:scale-110"
        >
          ← ホームへ戻る
        </Link>
      </div>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto py-20 px-6 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-8">
          Happy Hearts English について
        </h1>
        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          私たちは、広尾学園小石川高校の1年生が立ち上げた、英語を通して子どもたちの「楽しい！」を育てるボランティア団体です。
          日本の将来を担う子どもたちが世界で活躍できる人材となるよう、英語を身近に感じられる機会を提供しています。
        </p>
        <Image
  src="/images/HHEteamphoto.jpg"
  alt="Happy Hearts English 団体写真"
  width={600}
  height={300}
  className="rounded-3xl w-full max-w-2xl h-auto object-contain mx-auto"
/>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="max-w-5xl mx-auto py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-pink-600 mb-6">設立のきっかけ</h2>
        <p className="text-lg leading-relaxed mb-4">
          私たちのメンバーの多くは帰国子女であり、日本の教育現場において「英語を楽しく学べる場所がもっと増えたらいいのに」という強い想いから、この団体を立ち上げました。
        </p>
        <p className="text-lg leading-relaxed mb-8">
          学校の授業では伝えきれない英語の面白さや、実際に使う楽しさを子どもたちと共有したい。
          そして、普段の生活では触れることが少ない英語を、もっと身近に感じてもらいたい。
          そんな想いで、日々活動しています。
        </p>
        <Image
  src="/images/HHEActivity.JPG"
  alt="Happy Hearts English 団体写真"
  width={600}
  height={300}
  className="rounded-3xl w-full max-w-2xl h-auto object-contain mx-auto"
/>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="bg-white py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-pink-600 mb-6">ミッションとビジョン</h2>
          <p className="text-lg leading-relaxed mb-8">
            私たちのミッションは、よく苦手意識を持たれる英語を「楽しい！」と感じられるようにすることです。様々なアクティビティや活動を通して子どもたちの想像力や好奇心を育て、やがては国際的な視野を持つ次世代を育てることが私たちの目標です。
          </p>
          <p className="text-lg leading-relaxed">
            未来に向けて、地域や学校、他団体とのつながりをさらに深め、
            すべての子どもたちが笑顔で学べる社会を目指しています。
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="max-w-6xl mx-auto py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-pink-600 mb-10 text-center">
          メンバー紹介
        </h2>

        {/* Leaders Section */}
        <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">
          代表
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              name: "Yuuken Miura", 
              role: "共同代表", 
              image: "/images/Yuuken.jpg",
              message: "英語教育を通じて、子どもたちの可能性を広げたいと思っています。"
            },
            { 
              name: "Shunya Glover", 
              role: "共同代表", 
              image: "/images/Shunya.jpg",
              message: "楽しく学ぶことの大切さを、一緒に伝えていきましょう！"
            },
            { 
              name: "Wataru Kawaguchi", 
              role: "共同代表", 
              image: "/images/Wataru.jpg",
              message: "みんなで作る温かいコミュニティを目指しています。"
            },
          ].map((leader, i) => (
            <motion.div
              key={i}
              className="bg-white border border-pink-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition"
              variants={fadeIn}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={400}
                height={400}
                className="rounded-2xl mb-4 object-cover w-full h-64"
              />
              <h3 className="text-xl font-bold text-pink-600 mb-1">{leader.name}</h3>
              <p className="text-pink-500 text-sm font-semibold mb-2">{leader.role}</p>
              <p className="text-pink-700 text-sm leading-relaxed">
                {leader.message}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regular Members Section */}
        <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">
          メンバー
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "Saku Yamaguchi", grade: "高校1年生" },
            { name: "Tomo Kyokukawa", grade: "高校2年生" },
            { name: "Rion Nakata", grade: "高校2年生" },
            { name: "Ai Koike", grade: "高校2年生" },
            { name: "Asaki Hashimoto", grade: "高校2年生" },
            { name: "Keita Kojima", grade: "高校2年生" },
            { name: "Haru Fujimori", grade: "高校2年生" },
            { name: "Aodhnait Bolduan", grade: "高校2年生" },
            { name: "Gihan Madegedara", grade: "高校2年生" },
            { name: "Rio Ogoshi", grade: "高校2年生" },
            { name: "Naohisa Matsudaira", grade: "高校2年生" },
            { name: "Lily Kikuchi", grade: "高校1年生" },
            { name: "Manano Ichikawa", grade: "高校1年生" },
            { name: "Rion Mizumoto", grade: "高校1年生" },
            { name: "Yuika Osada", grade: "高校1年生" },
            { name: "Juha Kikuchi", grade: "高校1年生" },
            { name: "Akinari Kimura", grade: "高校1年生" },
            { name: "Taku Tsunoda", grade: "高校1年生" },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="bg-white border border-pink-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
              variants={fadeIn}
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">{member.name}</h3>
              <p className="text-pink-500 text-sm font-semibold">
                {member.grade}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Future Vision */}
      <motion.section
        className="bg-gradient-to-r from-pink-100 via-red-100 to-blue-100 py-20 px-6 text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-pink-600 mb-6">これからの目標</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          今後は地域との連携をさらに強化し、より多くの子どもたちに
          「英語の楽しさ」を届ける活動を展開していきます。
          オンライン絵本の制作や国際交流イベントも準備中です。
        </p>
      </motion.section>
    </div>
  );
}