"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
    id: number;
    x: number;
    y: number;
}

export const HeartTrail = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    const addHeart = useCallback((x: number, y: number) => {
        const id = Date.now();
        setHearts((prev) => [...prev.slice(-15), { id, x, y }]);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Throttle heart creation
            if (Math.random() > 0.8) {
                addHeart(e.clientX, e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [addHeart]);

    useEffect(() => {
        // Cleanup old hearts
        const timer = setInterval(() => {
            setHearts((prev) => prev.filter((h) => Date.now() - h.id < 800));
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 0.8, scale: 0, x: heart.x - 10, y: heart.y - 10 }}
                        animate={{
                            opacity: 0,
                            scale: 1.5,
                            y: heart.y - 100,
                            rotate: Math.random() * 90 - 45
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute text-[#fb6f92]/40"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
