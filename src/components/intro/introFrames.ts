/**
 * Intro sequence manifest — see /INTRO_ANIMATION_SPEC.md (§4, §5.1, §7.3).
 *
 * The 12 frames are transparent cutouts of the mascot scene on a shared
 * 1600×1200 anchor. The IntroSequence overlay paints the full-viewport cream
 * scene behind them and cross-fades frame → frame using the `hold` timings below.
 *
 * Assets live in /public/intro/ (frame-01.png … frame-12.png + poster.png).
 * `hold` is the on-screen dwell time in ms before advancing to the next frame.
 */

export interface IntroFrame {
  /** Public path to the transparent PNG. */
  src: string;
  /** Dwell time in ms before cross-fading to the next frame. */
  hold: number;
  /** Short note on what the frame shows (for maintainers). */
  note: string;
}

export const INTRO_FRAMES: readonly IntroFrame[] = [
  { src: "/intro/final/frame-01.png", hold: 700, note: "closed book at rest, motion ticks" },
  { src: "/intro/final/frame-02.png", hold: 540, note: "book opens flat, sparkle lines" },
  { src: "/intro/final/frame-03.png", hold: 500, note: "heart peeks over the gutter" },
  { src: "/intro/final/frame-04.png", hold: 560, note: "heart pops up, arms wide (spring pop)" },
  { src: "/intro/final/frame-05.png", hold: 520, note: "heart winks, one arm up" },
  { src: "/intro/final/frame-06.png", hold: 540, note: "flowers appear on both sides" },
  { src: "/intro/final/frame-07.png", hold: 620, note: "clean bridge frame replacing corrupted ABC source" },
  { src: "/intro/final/frame-08.png", hold: 540, note: "two small heart buddies rise" },
  { src: "/intro/final/frame-09.png", hold: 560, note: "big heart high-fives a buddy, stars" },
  { src: "/intro/final/frame-10.png", hold: 560, note: "heart + buddy together, flowers, stars" },
  { src: "/intro/final/frame-11.png", hold: 640, note: "eyes-closed wave, floating heart balloon" },
  { src: "/intro/final/frame-12.png", hold: 1350, note: "final tableau — hold, then dismiss" },
] as const;

/** Final frame — used for the reduced-motion path and as a static fallback. */
export const INTRO_POSTER = "/intro/final/poster.png";

/** sessionStorage key: intro has already played this session. */
export const INTRO_SESSION_KEY = "hhe-intro-seen";

/** Shared art-box aspect (1600×1200). Used to size the centered frame. */
export const INTRO_ART_ASPECT = 1600 / 1200;

/** Hard cap (ms) on frame preloading before the intro proceeds regardless. */
export const INTRO_PRELOAD_TIMEOUT = 2500;
