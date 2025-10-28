"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-blue-50 text-pink-700">
      <div className="flex justify-start p-6">
        <Link
          href="/"
          className="text-pink-600 hover:text-red-500 font-semibold rounded-full px-4 py-2 transition-transform transform hover:scale-110"
        >
          ← ホームへ戻る
        </Link>
      </div>
      
      <motion.section
        className="max-w-3xl mx-auto py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-pink-600">
          お問い合わせ
        </h1>
        <p className="text-lg text-center mb-10">
          ご質問や活動提携のご相談など、お気軽にご連絡ください。
        </p>

        <form onSubmit={handleSubmit} className="bg-white border border-pink-200 rounded-3xl p-8 shadow-md space-y-6">
          <div>
            <label className="block font-semibold mb-2">お名前</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="例：山田 花子"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">メッセージ</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="お問い合わせ内容をご記入ください"
            ></textarea>
          </div>

          {status === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              メッセージが送信されました！
            </div>
          )}
          
          {status === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              送信に失敗しました。もう一度お試しください。
            </div>
          )}

          <motion.button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 text-white font-bold py-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
            whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
          >
            {status === "sending" ? "送信中..." : "送信する"}
          </motion.button>
        </form>

        <div className="text-center mt-10">
          <p className="text-pink-600 font-semibold">englishhappyhearts@gmail.com</p>
          <p className="text-pink-600">文京区, 東京</p>
        </div>
      </motion.section>
    </div>
  );
}