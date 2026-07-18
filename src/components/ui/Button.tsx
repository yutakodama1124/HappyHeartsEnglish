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
            primary: "bg-[var(--pink)] text-white hover:bg-[var(--pink-deep)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]",
            secondary: "bg-white text-[var(--pink-deep)] hover:bg-[var(--paper)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]",
            outline: "border border-[var(--pink-deep)] text-[var(--pink-deep)] hover:bg-white bg-transparent",
            ghost: "text-[var(--pink-deep)] hover:bg-white shadow-none",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-full",
            md: "px-6 py-3 text-base rounded-full",
            lg: "px-7 py-3.5 text-base font-bold rounded-full sm:px-8 sm:py-4 sm:text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative inline-flex min-h-11 touch-manipulation items-center justify-center font-bold tracking-wide transition-[background-color,border-color,color,box-shadow,transform,opacity] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] disabled:pointer-events-none",
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
