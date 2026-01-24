"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CloudImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export function CloudImage({ src, alt, className, priority = false }: CloudImageProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn("img-container w-full h-full", className)}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                priority={priority}
            />
            {/* Subtle outer glow instead of blob shadow */}
            <div className="absolute inset-0 -z-10 bg-[#fb6f92]/5 blur-xl group-hover:bg-[#fb6f92]/10 transition-colors" />
        </motion.div>
    );
}
