"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

import home01 from "@/assets/hero/home01.png";
import home02 from "@/assets/hero/home02.png";
import home03 from "@/assets/hero/home03.png";
import home04 from "@/assets/hero/home04.png";
import home05 from "@/assets/hero/home05.png";
import home06 from "@/assets/hero/home06.png";

/** Built work, cycled through a photographic showcase. */
const SLIDES = [
  {
    src: home01,
    alt: "Make in India pavilion with curved blue walls and a lit lion sculpture at an aviation show",
  },
  {
    src: home02,
    alt: "SSS Defence booth with a black backdrop and illuminated gold circular display cases",
  },
  {
    src: home03,
    alt: "Alaska belts booth by Vinko Auto Industries in white and red",
  },
  {
    src: home04,
    alt: "Backlit POSSPOLE reception counter framed in wood with a marigold garland",
  },
  {
    src: home05,
    alt: "GMR Airports outdoor pavilion with a terminal backdrop and red carpet entrance",
  },
  {
    src: home06,
    alt: "ben.x eyewear booth with a red, green and blue arch and hexagonal display shelves",
  },
];

/** How long each image holds before the next one arrives. */
const INTERVAL_MS = 3600;

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * A photographic showcase of built work. It advances itself every 3.6 seconds,
 * yields to anyone who hovers or focuses it, and stops entirely under
 * `prefers-reduced-motion`, where the crossfade is suppressed too rather than
 * silently swapping images behind the user.
 */
export function BoothGenerator() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [paused, reducedMotion]);

  const slide = (i: number) => {
    const isActive = i === active;
    return [
      "object-cover transition-[opacity,transform] duration-700 ease-out",
      isActive ? "scale-100 opacity-100" : "scale-105 opacity-0",
      reducedMotion ? "transition-none" : "",
    ].join(" ");
  };

  return (
    <div
      className="mx-auto flex w-full max-w-5xl flex-col rounded-[22px] bg-white p-3 shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[14px] bg-slate-deep sm:min-h-[420px] lg:min-h-[520px]">
        {SLIDES.map((item, i) => (
          <Image
            key={item.alt}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={i === 0}
            className={slide(i)}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 flex justify-center p-3">
          <div className="flex items-center gap-1.5 rounded-full bg-ink/55 px-2.5 py-1.5 backdrop-blur-sm">
            {SLIDES.map((item, i) => (
              <button
                key={item.alt}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1} of ${SLIDES.length}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-gold" : "w-1.5 bg-white/55 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
