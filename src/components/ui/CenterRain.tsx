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
  const [showMessage, setShowMessage] = useState(false);
  const [showFinalNote, setShowFinalNote] = useState(false);

  useEffect(() => {
    if (burstKey === 0) return;

    const timeout = window.setTimeout(() => setBurstKey(0), 5200);
    return () => window.clearTimeout(timeout);
  }, [burstKey]);

  const startRain = () => {
    setShowMessage(true);
    setBurstKey((current) => current + 1);
  };

  const revealFinalNote = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const reachedEnd = target.scrollTop + target.clientHeight >= target.scrollHeight - 20;

    if (reachedEnd) {
      setShowFinalNote(true);
    }
  };

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
        className={`relative z-10 cursor-pointer border-0 bg-transparent p-0 ${showMessage ? "hidden" : ""}`}
        onClick={startRain}
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

      {showMessage && (
        <div className="center-rain__message relative z-10" onScroll={revealFinalNote}>
          <div className="center-rain__message-copy">
            <p>
              In life, understanding the consequences of your actions and knowing where to draw the line is
              essential—especially during times of transition.
            </p>
            <p>
              Mocking or disregarding a member is unacceptable. This website takes real time and money to maintain,
              yet leaders responses remain late and overall group engagement continues to decline. Some joke around
              while others stay silent, but refusing to help or take responsibility is part of the problem.
            </p>
            <p>
              At this stage, not everything can be treated as a joke. Growth requires accountability—in school,
              friendships, family, and life.
            </p>
            <p>
              The fact that no one can offer even a simple apology says everything. The silence and refusal to take
              responsibility only prove the point and show exactly where this group stands.
            </p>
          </div>

          {showFinalNote && (
            <div className="center-rain__final-note">
              <p>
                I’m joking at this point, I can’t lie. The website will be back, don’t worry. But let’s try to be a
                little more professional. I don’t mind jokes or people messing around, but when I’ve genuinely put
                time, effort, and money into something for everyone, it comes across as rude. Growing up means
                recognizing that it isn’t okay to do something just because of who the person is. It also means
                owning your actions instead of blaming other people.
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
