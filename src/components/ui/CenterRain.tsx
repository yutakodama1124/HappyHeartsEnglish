"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const drops = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  delay: (index % 9) * 0.12,
  duration: 2.8 + (index % 6) * 0.22,
  rotate: index % 2 === 0 ? -12 - index : 10 + index,
  width: 4.2 + (index % 5) * 0.55,
}));

export function CenterRain() {
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    if (burstKey === 0) return;

    const timeout = window.setTimeout(() => setBurstKey(0), 5200);
    return () => window.clearTimeout(timeout);
  }, [burstKey]);

  return (
    <main aria-label="Black screen" className="fixed inset-0 grid place-items-center overflow-hidden bg-black p-6">
      {burstKey > 0 && (
        <div key={burstKey} className="pointer-events-none absolute inset-0" aria-hidden="true">
          {drops.map((drop) => (
            <Image
              key={drop.id}
              src="/center-image.jpg"
              alt=""
              width={180}
              height={320}
              className="center-rain__drop"
              style={{
                left: `${drop.left}%`,
                width: `${drop.width}rem`,
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
                transform: `translateY(-120%) rotate(${drop.rotate}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        aria-label="Start image rain"
        className="relative z-10 cursor-pointer border-0 bg-transparent p-0"
        onClick={() => setBurstKey((current) => current + 1)}
      >
        <Image
          src="/center-image.jpg"
          alt=""
          width={1330}
          height={2364}
          priority
          className="max-h-[82vh] w-auto max-w-[88vw] object-contain"
        />
      </button>
    </main>
  );
}
