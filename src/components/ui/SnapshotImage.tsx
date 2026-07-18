"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOTION_EASE } from "@/lib/motion";

type SnapshotImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  tilt?: "left" | "right" | "none";
};

export function SnapshotImage({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority = false,
  tilt = "left",
}: SnapshotImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      initial={reduceMotion ? false : { opacity: 0, y: 4 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: MOTION_EASE }}
      className={cn(
        "snapshot",
        tilt === "left" && "snapshot--left",
        tilt === "right" && "snapshot--right",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </motion.figure>
  );
}
