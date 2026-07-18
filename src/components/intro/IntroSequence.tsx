"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  INTRO_FRAMES,
  INTRO_PRELOAD_TIMEOUT,
} from "@/components/intro/introFrames";

// In-flow hero section at the top of the page: the mascot wakes up out of the
// book (frames 1→12), plays once, then rests on the final frame. Not a modal.
// Just the artwork on the blush background — no overlays that can cover it.

function preloadImages(paths: string[]) {
  const unique = Array.from(new Set(paths));
  return Promise.allSettled(
    unique.map(
      (path) =>
        new Promise<void>((resolve) => {
          const image = new window.Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = path;
        })
    )
  );
}

const LAST = INTRO_FRAMES.length - 1;

export function IntroSequence() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  // Preload all frames before playing so cross-fades never flash a half-loaded
  // image. Hard timeout so a slow asset can never gate the hero.
  useEffect(() => {
    let cancelled = false;
    let timeout = 0;

    if (reduceMotion) {
      setFrameIndex(LAST);
      setReady(true);
      return;
    }

    const preload = preloadImages(INTRO_FRAMES.map((frame) => frame.src));
    const timer = new Promise<void>((resolve) => {
      timeout = window.setTimeout(resolve, INTRO_PRELOAD_TIMEOUT);
    });
    Promise.race([preload.then(() => undefined), timer]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  // Play once: schedule every frame change at its absolute cumulative time, then
  // rest on the final frame. Scheduling the whole sequence up front (rather than
  // one re-render-driven timer per frame) can't fast-forward or skip, and the
  // cleanup clears them all so a StrictMode double-invoke just rebuilds it.
  useEffect(() => {
    if (!ready || reduceMotion) return;

    const timers: number[] = [];
    let elapsed = 0;
    for (let i = 1; i < INTRO_FRAMES.length; i += 1) {
      elapsed += INTRO_FRAMES[i - 1].hold;
      timers.push(window.setTimeout(() => setFrameIndex(i), elapsed));
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [ready, reduceMotion]);

  const activeIndex = reduceMotion ? LAST : frameIndex;
  const isPopFrame = frameIndex === 3; // "heart pops up" gets a spring overshoot

  return (
    <section className="hhe-intro" aria-label="Happy Hearts English イントロアニメーション">
      <motion.div
        className="hhe-intro__art"
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -8, 0], scale: isPopFrame ? [0.97, 1.04, 1] : [1, 1.015, 1] }
        }
        transition={
          isPopFrame
            ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* All frames are preloaded and stacked; only the active one is opaque.
            Pure opacity crossfade — no mount/unmount, nothing to orphan. */}
        {INTRO_FRAMES.map((frame, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- frames are pre-optimized and manually preloaded for a controlled stacked crossfade; next/image's lazy loading fights this.
          <img
            key={frame.src}
            src={frame.src}
            alt=""
            className="hhe-intro__frame"
            draggable={false}
            decoding="async"
            style={{ opacity: index === activeIndex ? 1 : 0 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
