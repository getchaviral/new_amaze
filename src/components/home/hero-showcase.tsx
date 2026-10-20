"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/booth-gallery/ai-03.png",
    alt: "Blue and white exhibition booth with a prominent company display",
  },
  {
    src: "/booth-gallery/ai-05.png",
    alt: "Illuminated exhibition booth with a dark display wall",
  },
  {
    src: "/booth-gallery/ai-06.png",
    alt: "Blue and white exhibition booth with a bright reception counter",
  },
  {
    src: "/booth-gallery/ai-09.png",
    alt: "Dark exhibition booth with illuminated product displays",
  },
  {
    src: "/booth-gallery/ai-10.png",
    alt: "Automotive exhibition booth with tire and product displays",
  },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActive((current) => (current - 1 + images.length) % images.length);
  };
  const showNext = () => {
    setActive((current) => (current + 1) % images.length);
  };

  return (
    <div
      id="demo"
      className="group relative aspect-[4/3] scroll-mt-24 overflow-hidden rounded-panel border border-white/15 bg-slate-deep shadow-2xl shadow-black/25 ring-1 ring-white/10"
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          aria-hidden={active !== index}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 640px"
          className={`object-cover transition-opacity duration-700 ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 top-0 flex justify-end p-4 sm:p-5">
        <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-semibold tracking-wider text-white tabular-nums shadow-sm backdrop-blur-md">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-y-0 left-3 flex items-center sm:left-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous booth"
          className="grid size-10 place-items-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-3 flex items-center sm:right-4">
        <button
          type="button"
          onClick={showNext}
          aria-label="Show next booth"
          className="grid size-10 place-items-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-16 pb-4 sm:px-5 sm:pb-5">
        <div className="flex shrink-0 items-center gap-1.5" role="group" aria-label="Choose a booth">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show booth image ${index + 1}`}
              aria-pressed={active === index}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                active === index ? "w-6 bg-white" : "w-2 bg-white/55 hover:bg-white/85"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
