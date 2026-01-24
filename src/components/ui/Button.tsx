"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Omit animation/drag props to prevent TS conflicts
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDragStart' | 'onDragEnd' | 'onDrag' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDrop' | 'onAnimationStart' | 'onAnimationEnd'> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-[#fb6f92] text-white hover:bg-[#e25578] shadow-sm hover:shadow-md",
            secondary: "bg-[#ffe4e9] text-[#fb6f92] hover:bg-[#ffb7c5] hover:text-white shadow-sm",
            outline: "border-2 border-[#fb6f92] text-[#fb6f92] hover:bg-[#fff0f5] bg-transparent",
            ghost: "text-[#fb6f92] hover:bg-[#fff0f5] shadow-none",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-full",
            md: "px-6 py-3 text-base rounded-full",
            lg: "px-8 py-4 text-lg font-bold rounded-full",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex items-center justify-center font-bold tracking-wide transition-all",
                    variants[variant],
                    sizes[size],
                    isLoading && "opacity-70 cursor-not-allowed",
                    className
                )}
                disabled={isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
