"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsDetailPage() {
  const { id } = useParams();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
        className="max-w-4xl mx-auto py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6">
          Websiteを公開しました！ {id}
        </h1>
        <p className="text-sm text-pink-400 mb-6">2025年11月01日</p>
       <Image
    src="/images/HHEWEBSITE.png"
    alt="Happy Hearts English チーム写真"
    width={600}
    height={600}
    className="rounded-3xl shadow-lg object-cover w-full h-auto"
  />
        <p className="text-lg leading-relaxed mb-6 mt-4">
          この度Happy Hearts Englishの公式ウェブサイトを公開しました。私たちの活動内容や最新ニュース、イベント情報などをより多くの方に知っていただくためのプラットフォームです。作成してくれたのは、私たちの団体メンバーである広尾学園小石川高校の学生です。彼らの情熱と努力により、魅力的で使いやすいサイトが完成しました。
        </p>
        <p className="text-lg leading-relaxed">
          今後はこのwebsiteを通じて、私たちの活動報告やイベント案内、ボランティア募集情報などを定期的に発信していく予定です。ぜひブックマークして、最新情報をチェックしてください。これからもHappy Hearts Englishをよろしくお願いいたします！
        </p>
      </motion.section>
    </div>
  );
}