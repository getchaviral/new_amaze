"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SECTORS } from "@/lib/site";
import aeroDefence from "@/assets/sectors/aero_defence.webp";
import agriculture from "@/assets/sectors/agriculture.webp";
import animalHusbandry from "@/assets/sectors/animal_And_husbandry.webp";
import automobiles from "@/assets/sectors/automobiles.webp";
import aviation from "@/assets/sectors/aviation.webp";
import electricalSolar from "@/assets/sectors/electrical and solar.webp";
import foodBeverages from "@/assets/sectors/food and beverages.webp";
import government from "@/assets/sectors/govt sector.webp";
import itHardware from "@/assets/sectors/IT_And_hardware.webp";
import labEquipment from "@/assets/sectors/lab equipment.webp";
import leatherSafety from "@/assets/sectors/leather_and_safety.webp";
import lifestyle from "@/assets/sectors/lifestyle.webp";
import machineTools from "@/assets/sectors/machine_and_tools.webp";
import museumCultural from "@/assets/sectors/meseum-1.webp";
import museumExperience from "@/assets/sectors/meseum-2.webp";
import pharma from "@/assets/sectors/pharma.webp";
import realEstate from "@/assets/sectors/real estate , finance and home accessories.webp";
import retailShowcase from "@/assets/sectors/retail-1-1.webp";
import retailExperience from "@/assets/sectors/retail-2-1.webp";
import rubberChemicals from "@/assets/sectors/rubber and chemicals.webp";

/** 20 sectors, filterable by group. */
const SECTOR_IMAGES = [
  machineTools,
  electricalSolar,
  rubberChemicals,
  leatherSafety,
  automobiles,
  agriculture,
  itHardware,
  aviation,
  aeroDefence,
  pharma,
  labEquipment,
  animalHusbandry,
  foodBeverages,
  lifestyle,
  retailShowcase,
  retailExperience,
  realEstate,
  government,
  museumCultural,
  museumExperience,
] as const;

export function SectorGrid() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImageIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex flex-col gap-6">
      <p aria-live="polite" className="m-0 text-sm font-semibold text-ink-mute">
        {SECTORS.length} sectors
      </p>

      <ul className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((sector, index) => (
          <li key={sector.slug}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-lift">
              <button
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Open ${sector.name} image`}
                aria-haspopup="dialog"
                className="relative h-[150px] w-full cursor-zoom-in overflow-hidden bg-white"
              >
                <Image
                  src={SECTOR_IMAGES[index]}
                  alt={`${sector.name} exhibition`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </button>
              <Link
                href={`/sectors/${sector.slug}`}
                className="flex flex-1 flex-col gap-2 p-5 text-ink no-underline"
              >
                <h3 className="m-0 text-[1.1875rem] leading-snug font-extrabold">
                  {sector.name}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-ink-soft">{sector.line}</p>
                <span className="mt-auto pt-1 text-sm font-bold text-brand">
                  Explore sector →
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            id="sector-image-preview"
            role="dialog"
            aria-modal="true"
            aria-label={`${SECTORS[activeImageIndex].name} exhibition image`}
            onClick={(event) => event.stopPropagation()}
            className="relative h-[min(90vh,900px)] w-full max-w-6xl"
          >
            <Image
              src={SECTOR_IMAGES[activeImageIndex]}
              alt={`${SECTORS[activeImageIndex].name} exhibition`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 z-10 grid size-11 place-items-center rounded-full bg-black/65 text-white hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
