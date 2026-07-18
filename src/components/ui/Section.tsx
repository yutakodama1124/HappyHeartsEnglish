 "use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bg?: "white" | "pink" | "transparent";
    parallax?: boolean;
    bgText?: string;
}

export const Section = ({
    id,
    className,
    children,
    bg = "transparent",
    bgText
}: SectionProps) => {
    const containerRef = useRef(null);

    const bgStyles = {
        white: "bg-[var(--paper)]",
        pink: "bg-[var(--blush)]",
        transparent: "",
    };

    return (
        <section
            id={id}
            ref={containerRef}
            className={cn("section-shell", bgStyles[bg], className)}
            data-bg-text={bgText}
        >
            <div className="container-shell">
                {children}
            </div>
        </section>
    );
};
