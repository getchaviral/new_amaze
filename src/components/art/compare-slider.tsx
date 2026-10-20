"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import concept02 from "@/assets/why/ai_02.png";
import concept03 from "@/assets/why/ai_03.png";
import concept04 from "@/assets/why/ai_04.png";
import concept05 from "@/assets/why/ai_05.png";

const sssDefenceBuilt = "/booth-gallery/sss-defence.png";
const concepts = [
  {
    src: "/booth-gallery/WhatsApp%20Image%202026-10-19%20at%2020.20.06.jpeg",
    alt: "SSS Defence exhibition booth on the show floor",
  },
  { src: concept02, alt: "Briti Scientific exhibition booth AI concept" },
  { src: concept03, alt: "ICAPE Group exhibition booth AI concept" },
  { src: concept04, alt: "Tarsons exhibition booth AI concept" },
  { src: concept05, alt: "SSS Defence exhibition booth AI concept" },
];

/**
 * Drag between the AI concept and the finished booth.
 *
 * Compare the SSS Defence concept against the completed booth photo. Keyboard
 * operable through the underlying range input, which stays in the tab order
 * and carries the accessible name.
 */
export function CompareSlider() {
  const [split, setSplit] = useState(50);
  const [activeConcept, setActiveConcept] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const id = useId();
  const direction = useRef(1);
  const resumeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (manualPause) return;

    const timer = window.setInterval(() => {
      setSplit((current) => {
        const next = current + direction.current * 0.45;
        if (next >= 95) {
          direction.current = -1;
          return 95;
        }
        if (next <= 5) {
          direction.current = 1;
          return 5;
        }
        return next;
      });
    }, 35);

    return () => window.clearInterval(timer);
  }, [manualPause]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveConcept((current) => (current + 1) % concepts.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(
    () => () => {
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const handleManualChange = (value: number) => {
    setSplit(value);
    setManualPause(true);
    if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      setManualPause(false);
      resumeTimer.current = null;
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-white/10 bg-black"
        style={{ width: "min(100%, 104svh)" }}
      >
        {/* Finished booth photo — full width underneath */}
        <div className="absolute inset-0">
          <Image
            src={sssDefenceBuilt}
            alt="Completed SSS Defence exhibition booth on the show floor"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="scale-125 object-contain"
            priority
          />
        </div>

        {/* AI concept carousel — clipped from the left */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-black"
          style={{ width: `${split}%` }}
        >
          <div className="relative h-full" style={{ width: `${(100 / split) * 100}%` }}>
            {concepts.map((concept, index) => (
              <Image
                key={concept.alt}
                src={concept.src}
                alt={index === activeConcept ? concept.alt : ""}
                aria-hidden={index !== activeConcept}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className={`object-contain transition-opacity duration-700 ${index === activeConcept ? "opacity-100" : "opacity-0"}`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        {/* divider */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold"
          style={{ left: `${split}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-ink shadow-lg">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="#D4A037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 2L2 7l5 5M13 2l5 5-5 5" />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-bold tracking-wider text-gold uppercase">
          AI concept
        </span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold tracking-wider text-ink uppercase">
          Built booth
        </span>
      </div>

      <div className="mx-auto flex w-full flex-col gap-1.5" style={{ width: "min(100%, 104svh)" }}>
        <label htmlFor={id} className="text-xs font-semibold text-[#E5E7EB]">
          Compare the concept with the finished booth
        </label>
        <input
          id={id}
          type="range"
          min={5}
          max={95}
          step="any"
          value={split}
          onChange={(event) => handleManualChange(Number(event.target.value))}
          className="h-2 w-[96%] self-center cursor-pointer accent-[#D4A037]"
        />
      </div>
      <div className="mx-auto flex items-center justify-center gap-2" role="group" aria-label="Choose an AI booth concept">
        {concepts.map((concept, index) => (
          <button
            key={concept.alt}
            type="button"
            onClick={() => setActiveConcept(index)}
            aria-label={`Show AI concept ${index + 1}`}
            aria-pressed={activeConcept === index}
            className={`size-2.5 rounded-full transition-colors ${activeConcept === index ? "bg-gold" : "bg-white/40 hover:bg-white/75"}`}
          />
        ))}
      </div>
    </div>
  );
}
