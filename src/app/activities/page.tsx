"use client";

import { motion } from "framer-motion";
import { CloudImage } from "@/components/ui/CloudImage";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ActivitiesPage() {
    const activities = [
        {
            title: "絵本制作",
            label: "Storybooks",
            desc: "英語絵本を脚本からイラストまで、すべてメンバーが手作りで制作します。子どもたちが英語を自然に楽しめるよう、温かみのある表現にこだわっています。",
            voice: "脚本がすごく大変だったけど、子どもたちに読んでもらえて本当に嬉しかった！",
            author: "Member M",
            image: "/images/HHECOVER.png",
        },
        {
            title: "イベント開催",
            label: "Events",
            desc: "児童館や施設で、英語を使った遊びを企画。日常の「楽しい」に英語をミックスし、自然に言葉が溢れ出す環境を作ります。",
            voice: "普段あまり笑わない子が、私たちのアクティビティで爆笑してくれた時にやりがいを感じました。",
            author: "Member B",
            image: "/images/HHEActivityCover.JPG",
        },
        {
            title: "他団体との連携",
            label: "Network",
            desc: "英語をテーマにした他のボランティア団体や教育機関と協力。地域全体で学びの輪を広げ、多様な価値観に触れる機会を提供しています。",
            voice: "他団体との交流からも多くを学び、自分たちの活動の成長にも繋がっています。",
            author: "Member C",
            image: "/images/HHEActivity.JPG",
        },
    ];

    return (
        <div className="bg-[#fff0f5]">

            {/* Hero */}
            <Section bgText="CREATION" accentText="What we build / 01" className="pt-60">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-[10rem] font-black text-[#4a3b43] mb-16 leading-[0.8] tracking-tighter">
                        Our<br />
                        <span className="text-[#fb6f92]">Work.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-[#4a3b43]/70 font-medium leading-[1.8] max-w-2xl">
                        「英語 × 楽しい」をカタチにする。 <br />
                        記憶に残る体験を、一つずつ丁寧に織りなしています。
                    </p>
                </div>
            </Section>

            {/* Structured List */}
            <div className="pb-80">
                {activities.map((act, i) => (
                    <Section
                        key={i}
                        bgText={act.label.toUpperCase()}
                        className="py-60"
                    >
                        <div className={`grid lg:grid-cols-2 gap-32 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h2 className="text-5xl font-black text-[#4a3b43] mb-12 tracking-tighter underline decoration-[#fb6f92]/20 underline-offset-8 decoration-8">{act.title}</h2>
                                <p className="text-2xl text-[#4a3b43]/70 font-medium leading-[2.2] mb-12">
                                    {act.desc}
                                </p>
                                <div className="bg-[#fff0f5] p-12 rounded-[3rem] border-l-[12px] border-[#fb6f92] relative shadow-xl shadow-[#fb6f92]/5">
                                    <p className="text-[#4a3b43] italic text-xl leading-relaxed mb-6 font-medium">
                                        &quot;{act.voice}&quot;
                                    </p>
                                    <div className="flex items-center gap-4 justify-end">
                                        <div className="h-px w-8 bg-[#fb6f92]/30" />
                                        <p className="text-sm font-black text-[#fb6f92] tracking-[0.3em] uppercase">/ {act.author}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="relative aspect-[4/3] w-full rounded-[4rem] overflow-hidden shadow-2xl bg-[#fff0f5]"
                            >
                                <CloudImage src={act.image} alt={act.title} className="w-full h-full" />
                            </motion.div>
                        </div>
                    </Section>
                ))}
            </div>

            <Section className="text-center bg-[#fb6f92] text-white py-60 rounded-t-[10rem] overflow-hidden">
                <h3 className="text-4xl md:text-[8rem] font-black mb-16 leading-[0.8] tracking-tighter relative z-10">
                    New<br />
                    Chapter.
                </h3>
                <Link href="/contact" className="relative z-10">
                    <Button size="lg" className="bg-white text-[#fb6f92] px-20 py-10 rounded-full shadow-2xl h-24 text-2xl font-black transition-transform hover:scale-105">
                        GET INVOLVED
                    </Button>
                </Link>
            </Section>
        </div>
    );
}
