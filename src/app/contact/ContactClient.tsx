"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Send, MapPin } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

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
        headers: { "Content-Type": "application/json" },
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
    <div className="bg-[#fffcfd]">
      <Section accentText="Contact / 01" className="pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-[#4a3b43] mb-6 md:mb-8 tracking-tighter">
            Get in<br />
            <span className="text-[#fb6f92]">Touch.</span>
          </h1>
          <p className="text-lg text-[#4a3b43]/60 font-medium">
            ご質問や活動提携のご相談など、お気軽にご連絡ください。<br />
            私たちの物語に、あなたの声を。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3.5rem] shadow-xl md:shadow-2xl border border-[#fb6f92]/10">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <label className="block font-black text-[#4a3b43] mb-3 text-xs uppercase tracking-widest pl-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#fff0f5]/30 border-2 border-transparent focus:border-[#fb6f92] rounded-[1.5rem] p-5 focus:outline-none transition-all font-medium placeholder:text-[#4a3b43]/20"
                  placeholder="山田 花子"
                />
              </div>
              <div>
                <label className="block font-black text-[#4a3b43] mb-3 text-xs uppercase tracking-widest pl-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#fff0f5]/30 border-2 border-transparent focus:border-[#fb6f92] rounded-[1.5rem] p-5 focus:outline-none transition-all font-medium placeholder:text-[#4a3b43]/20"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block font-black text-[#4a3b43] mb-3 text-xs uppercase tracking-widest pl-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#fff0f5]/30 border-2 border-transparent focus:border-[#fb6f92] rounded-[1.5rem] p-5 focus:outline-none transition-all font-medium placeholder:text-[#4a3b43]/20 resize-none"
                  placeholder="お問い合わせ内容をご記入ください..."
                ></textarea>
              </div>

              {status === "success" && (
                <div className="bg-[#fb6f92]/5 text-[#fb6f92] p-5 rounded-2xl font-black text-center text-sm">
                  ✨ メッセージが送信されました！
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 text-red-500 p-5 rounded-2xl font-black text-center text-sm">
                  😢 送信に失敗しました。
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full py-6 text-xl shadow-2xl bg-[#fb6f92]"
                isLoading={status === "sending"}
              >
                Send Message <Send className="ml-3" size={20} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-6 md:gap-10 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-2 md:gap-4 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#fb6f92]/5">
            <Mail size={24} className="text-[#fb6f92]" />
            <p className="font-black text-[#4a3b43] text-sm">englishhappyhearts@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-3xl border border-[#fb6f92]/5">
            <MapPin size={24} className="text-[#fb6f92]" />
            <p className="font-black text-[#4a3b43] text-sm">東京都 文京区</p>
          </div>
        </div>
      </Section>
    </div>
  );
}