"use client";

import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const Footer = () => {
    const links = [
        { name: "ホーム", href: "/" },
        { name: "団体について", href: "/about" },
        { name: "活動内容", href: "/activities" },
        { name: "ニュース", href: "/news" },
        { name: "お問い合わせ", href: "/contact" },
    ];

    return (
        <footer className="mt-0 bg-[var(--blush)] py-16 text-[var(--ink)]">
            <div className="container-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
                <div>
                    <div className="mb-4">
                        <h4 className="text-2xl font-black">Happy Hearts English</h4>
                    </div>
                    <p className="max-w-md text-sm font-medium leading-relaxed text-[var(--ink)]/72">
                        文京区を拠点に、英語絵本づくりや子ども向けイベントを通して、
                        英語を「楽しい出会い」に変える学生ボランティア団体です。
                    </p>
                </div>

                <div>
                    <h4 className="mb-4 text-lg font-bold text-[var(--pink-deep)]">
                        Sitemap
                    </h4>
                    <ul className="space-y-2 font-medium">
                        {links.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--pink-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)]"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 text-lg font-bold text-[var(--pink-deep)]">Connect</h4>
                    <div className="space-y-4 text-sm font-medium">
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-[var(--pink-deep)]" />
                            <p>englishhappyhearts@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-[var(--pink-deep)]" />
                            <p>東京都 文京区</p>
                        </div>
                        <a
                            href={siteConfig.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-11 items-center gap-3 rounded-full transition-colors hover:text-[var(--pink-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--blush)]"
                            aria-label="Happy Hearts EnglishのInstagramを開く"
                        >
                            <Instagram size={18} className="text-[var(--pink-deep)]" />
                            <span>@happy.hearts.english</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-[var(--line-soft)] pt-8 text-center text-xs font-medium text-[var(--ink)]/50">
                © 2025 Happy Hearts English. All rights reserved.
            </div>
        </footer>
    );
}
