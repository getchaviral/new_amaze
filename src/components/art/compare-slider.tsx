"use client";

import { useId, useState } from "react";
import Image from "next/image";

const sssDefenceBuilt = "/booth-gallery/sss-defence.png";
const concept = {
  src: "/booth-gallery/WhatsApp%20Image%202026-10-19%20at%2020.20.06.jpeg",
  alt: "SSS Defence exhibition booth concept",
};

/**
 * Drag between the AI concept and the finished booth.
 *
 * Compare the SSS Defence concept against the completed booth photo. The
 * comparison stays still until adjusted with the keyboard-operable range input.
 */
export function CompareSlider() {
  const [split, setSplit] = useState(50);
  const id = useId();

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

        {/* AI concept — clipped from the left */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-black"
          style={{ width: `${split}%` }}
        >
          <div className="relative h-full" style={{ width: `${(100 / split) * 100}%` }}>
            <Image
              src={concept.src}
              alt={concept.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain"
              priority
            />
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
          onChange={(event) => setSplit(Number(event.target.value))}
          className="h-2 w-[96%] self-center cursor-pointer accent-[#D4A037]"
        />
      </div>
    </div>
  );
}
