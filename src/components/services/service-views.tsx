"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import services01 from "@/assets/our_services/services_01.png";
import services02 from "@/assets/our_services/services_02.png";
import services03 from "@/assets/our_services/services_03.png";
import services04 from "@/assets/our_services/services_04.png";
import services05 from "@/assets/our_services/services_05.png";
import services06 from "@/assets/our_services/services_06.png";

const SHOWCASE = [
  {
    src: services01,
    title: "Microlit",
    detail: "A bright, product-focused exhibition booth",
  },
  {
    src: services02,
    title: "Care P",
    detail: "A welcoming space for healthcare products",
  },
  {
    src: services03,
    title: "Botanika",
    detail: "An open, premium experience for property launches",
  },
  {
    src: services04,
    title: "Sony",
    detail: "A bold showcase for cameras and imaging",
  },
  {
    src: services05,
    title: "Pragati Pack",
    detail: "A product-led booth with space to explore",
  },
  {
    src: services06,
    title: "SI Group",
    detail: "A distinctive stand for an international audience",
  },
];

export function ServicesShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SHOWCASE.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group relative min-h-[320px] overflow-hidden rounded-[28px] bg-slate-deep shadow-lift sm:aspect-[4/3] sm:min-h-0">
      {SHOWCASE.map((slide, index) => (
        <Image
          key={slide.title}
          src={slide.src}
          alt={index === active ? slide.title : ""}
          aria-hidden={index !== active}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 60vw"
          className={`object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7">
        <div className="min-w-0">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[0.6875rem] font-bold tracking-[0.16em] text-gold uppercase">
            Booth showcase {active + 1} / {SHOWCASE.length}
          </p>
          <h2 className="m-0 text-xl font-extrabold tracking-tight drop-shadow sm:text-2xl">
            {SHOWCASE[active].title}
          </h2>
          <p className="mt-1.5 text-sm font-medium text-white/80 sm:text-base">
            {SHOWCASE[active].detail}
          </p>
          <div className="mt-4 flex items-center gap-2" role="group" aria-label="Choose a booth image">
            {SHOWCASE.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show booth image ${index + 1}`}
                aria-pressed={active === index}
                className={`h-2 rounded-full transition-all ${active === index ? "w-8 bg-gold" : "w-2 bg-white/55 hover:bg-white/85"}`}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setActive((current) => (current + 1) % SHOWCASE.length)}
          aria-label="Show next booth"
          className="mb-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur transition hover:bg-black/60"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
