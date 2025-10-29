"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ActivitiesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // 🎨 Add images for each activity here
  const activities = [
    {
      title: "絵本制作",
      desc: "英語絵本を脚本からイラストまで、すべてメンバーが手作りで制作します。子どもたちが英語を自然に楽しめるようわかりやすい英語を使うなど、様々な工夫をしています！",
      voice: "『脚本がすごく大変だったけど子どもたちに読んでもらえてすごく嬉しかった！』 - メンバーM",
      image: "/images/HHECOVER.png",
    },
    {
      title: "イベント開催",
      desc: "児童館や区の施設で英語を使ったアクティビティを開催。ドッジボールなどに英語を加えたアクティビティや日本でも人気のカードゲームに英語を混ぜ込むなど日常生活の「楽しい」と英語を掛け合わせています！。",
      voice: "『普段あまり笑わないこどもが私たちのアクティビティを楽しいと言ってくれたことにすごいやりがいを感じた。』 - メンバーB",
      image: "/images/HHEActivityCover.JPG",
    },
    {
      title: "他団体との連携",
      desc: "英語をテーマにした他のボランティア団体や教育機関と協力し、地域全体で学びの輪を広げています。",
      voice: "『他団体との交流からも多くを学び、自分たちの活動の成長にも繋がった。』 - メンバーC",
      image: "/images/HHEActivity.JPG",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 text-pink-700">
      {/* 🏠 Back to Home Navigation */}
      <div className="flex justify-start p-6">
        <Link
          href="/"
          className="text-pink-600 hover:text-red-500 font-semibold rounded-full px-4 py-2 transition-transform transform hover:scale-110"
        >
          ← ホームへ戻る
        </Link>
      </div>

      <motion.section
        className="max-w-6xl mx-auto py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-pink-600">
          活動の詳細
        </h1>

        <div className="space-y-20">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-pink-200"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* 🖼️ Replaced placeholder with actual image */}
                <div className="flex justify-center items-center p-4">
                 <Image
  src={a.image}
  alt={`${a.title} の画像`}
  width={500}
  height={350}
  className="rounded-2xl shadow-md object-cover w-full h-[280px] md:h-[320px]"
/>
                </div>

                {/* 📄 Text content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">{a.title}</h2>
                  <p className="text-lg leading-relaxed mb-6">{a.desc}</p>
                  <div className="bg-pink-50 border-l-4 border-pink-400 rounded-r-xl p-4 text-pink-600 italic text-sm">
                    {a.voice}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✉️ How to Join Section */}
        <motion.section
          className="text-center mt-24"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-pink-600 mb-6">
            活動への参加方法
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Happy Hearts English では、新しい仲間をいつでも歓迎しています！
            興味のある方はお問い合わせページからご連絡ください。
            一緒に子どもたちに笑顔を届けましょう。
          </p>
          <Link href="/Contact">
            <motion.button
              className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-white px-8 py-4 rounded-full font-extrabold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お問い合わせへ
            </motion.button>
          </Link>
        </motion.section>
      </motion.section>
    </div>
  );
}