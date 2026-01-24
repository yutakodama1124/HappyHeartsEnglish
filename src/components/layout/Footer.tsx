"use client";

import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#5e4b56] text-white py-16 mt-0">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-[#fb6f92] p-1.5 rounded-full text-white">
                            <Heart size={20} fill="currentColor" />
                        </div>
                        <h4 className="text-2xl font-black">Happy Hearts English</h4>
                    </div>
                    <p className="text-[#ffe4e9] text-sm leading-relaxed font-medium opacity-80">
                        英語を通して笑顔を広げ、<br />
                        子どもたちの未来を応援しています。
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4 text-[#fb6f92]">
                        Menu
                    </h4>
                    <ul className="space-y-2 font-medium">
                        {[
                            { name: "概要", href: "/about" },
                            { name: "活動内容", href: "/activities" },
                            { name: "絵本", href: "/#絵本" },
                            { name: "お問い合わせ", href: "/contact" },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-[#fb6f92] transition-colors inline-block"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-4 text-[#fb6f92]">
                        Contact
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-[#fb6f92]" />
                            <p className="font-medium text-sm">englishhappyhearts@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-[#fb6f92]" />
                            <p className="font-medium text-sm">東京都 文京区</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs font-medium text-[#ffe4e9]/50">
                © 2025 Happy Hearts English. All rights reserved.
            </div>
        </footer>
    );
}
