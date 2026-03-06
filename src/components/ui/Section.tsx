"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bg?: "white" | "pink" | "transparent";
    accentText?: string; // Vertical English Accent
    parallax?: boolean;
    bgText?: string;     // Large floating background text
}

export const Section = ({
    id,
    className,
    children,
    bg = "transparent",
    accentText,
    parallax = false,
    bgText
}: SectionProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -100 : 0]);
    const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const bgStyles = {
        white: "bg-[#fffcfd]",
        pink: "bg-[#fff0f5]",
        transparent: "",
    };

    return (
        <section
            id={id}
            ref={containerRef}
            className={cn("py-20 md:py-40 px-6 relative overflow-hidden", bgStyles[bg], className)}
        >
            {/* Large Floating Background Text */}
            {bgText && (
                <motion.div
                    style={{ x: bgX }}
                    className="floating-bg-text select-none"
                >
                    {bgText}
                </motion.div>
            )}

            {/* Vertical Accent Typography */}
            {accentText && (
                <div className="absolute top-20 left-6 md:left-12 hidden lg:block select-none overflow-hidden z-20">
                    <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="writing-vertical text-[10px] uppercase font-black tracking-[0.3em] text-[#fb6f92]/30 block"
                    >
                        {accentText}
                    </motion.span>
                </div>
            )}

            <motion.div
                style={{ y }}
                className="max-w-7xl mx-auto z-10 relative"
            >
                {children}
            </motion.div>
        </section>
    );
};
