"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import dmicdcBooth from "@/assets/why/why_choose_hero_01.png";
import sssDefenceBooth from "@/assets/why/why_choose_hero_02.png";
import keralaBooth from "@/assets/why/why_choose_hero_03.png";
import officeInterior from "@/assets/why/why_choose_hero_04.jpg";
import swarupChemicalsBooth from "@/assets/why/why_choose_hero_05.jpg";
import gujaratFluorochemicalsBooth from "@/assets/why/why_choose_hero_06.png";

const images = [
  { src: dmicdcBooth, alt: "DMICDC exhibition pavilion with green and red structural arches" },
  { src: sssDefenceBooth, alt: "SSS Defence exhibition stand displaying firearms and defense products" },
  { src: keralaBooth, alt: "Kerala green-industry pavilion with a wide curved entrance" },
  { src: officeInterior, alt: "Office interior with a geometric ceiling light and meeting tables" },
  { src: swarupChemicalsBooth, alt: "Swarup Chemicals agricultural products exhibition booth" },
  { src: gujaratFluorochemicalsBooth, alt: "Gujarat Fluorochemicals exhibition stand in white and blue" },
];

export function WhyChooseUsHeroImage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-[380px] overflow-hidden rounded-[20px] border border-line bg-slate-deep shadow-card"
      role="region"
      aria-label="Amaze Expo booth photography"
      aria-roledescription="carousel"
    >
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={index === active ? image.alt : ""}
          aria-hidden={index !== active}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={`object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/55 to-transparent px-4 pt-10 pb-4" role="group" aria-label="Choose a booth photo">
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show booth photo ${index + 1}`}
            aria-pressed={active === index}
            className={`size-2.5 rounded-full transition-colors ${active === index ? "bg-white" : "bg-white/55 hover:bg-white/85"}`}
          />
        ))}
      </div>
    </div>
  );
}