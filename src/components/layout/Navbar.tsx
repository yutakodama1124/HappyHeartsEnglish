"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "概要", href: "/about" },
    { name: "活動内容", href: "/activities" },
    { name: "ニュース", href: "/news" },
    { name: "お問い合わせ", href: "/contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-120%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-6 inset-x-0 z-50 flex justify-center"
        >
            <div
                className={cn(
                    "nav-island flex items-center gap-6 px-6 py-2.5 rounded-full",
                    "max-w-fit md:min-w-[400px] justify-between"
                )}
            >
                {/* Logo Icon */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-sm font-black text-[#4a3b43] tracking-tight group-hover:text-[#fb6f92] transition-colors">
                        Happy Hearts
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.slice(0, 4).map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href}>
                                <div className={cn(
                                    "px-4 py-2 rounded-full text-[13px] font-bold transition-all relative",
                                    isActive ? "text-[#fb6f92]" : "text-[#4a3b43]/60 hover:text-[#4a3b43]"
                                )}>
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-[#fb6f92]/5 rounded-full -z-10"
                                        />
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button / Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full text-[#4a3b43]"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute top-16 inset-x-6 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-[#ffe4e9] md:hidden"
                    >
                        <div className="flex flex-col gap-4 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-black text-[#4a3b43] py-2 hover:text-[#fb6f92] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
