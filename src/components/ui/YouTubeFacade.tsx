"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
};

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-white/70 bg-white shadow-[var(--shadow-card)]">
      {active ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group relative h-full w-full"
          aria-label={`${title} を再生`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/28" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-[var(--pink-deep)] shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:scale-105">
              <Play size={26} fill="currentColor" />
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
