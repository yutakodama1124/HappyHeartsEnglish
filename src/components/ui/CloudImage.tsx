"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CloudImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    sizes?: string;
}

export function CloudImage({
    src,
    alt,
    className,
    priority = false,
    sizes = "(max-width: 768px) 100vw, 50vw"
}: CloudImageProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn("snapshot group h-full w-full", className)}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                priority={priority}
            />
        </motion.div>
    );
}
