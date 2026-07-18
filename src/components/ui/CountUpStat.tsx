"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  label: string;
  labelJa: string;
  delay?: number;
};

export function CountUpStat({
  value,
  suffix = "",
  label,
  labelJa,
  delay = 0,
}: CountUpStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now() + delay * 1000;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.max(0, Math.min((now - start) / duration, 1));
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [delay, inView, reduceMotion, value]);

  const renderedValue = useMemo(() => `${displayValue}${suffix}`, [displayValue, suffix]);

  return (
    <div
      ref={ref}
      data-stat-card
      aria-label={`${labelJa}: ${value}${suffix}`}
      className="min-w-0 border-t border-[var(--line-soft)] py-5 text-left"
    >
      <span
        data-stat-value
        aria-hidden="true"
        className="block max-w-full whitespace-nowrap text-[var(--t-h2)] font-extrabold leading-[1.12] tabular-nums tracking-[-0.03em] text-[var(--pink)]"
      >
        {renderedValue}
      </span>
      <span className="mt-2 block text-[var(--t-caption)] font-black uppercase leading-5 tracking-[0.08em] text-[var(--ink)]">
        {label}
      </span>
      <span className="mt-1 block text-sm leading-6 text-[var(--ink)]/62">
        {labelJa}
      </span>
    </div>
  );
}
