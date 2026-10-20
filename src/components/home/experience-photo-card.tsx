"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import vikramSolarBooth from "@/assets/why/ai_01.png";
import britiScientificBooth from "@/assets/why/ai_02.png";
import tarsonsBooth from "@/assets/why/ai_04.png";
import theonBooth from "@/assets/why/ai_07.png";

const images = [
  { src: vikramSolarBooth, alt: "Vikram Solar exhibition booth" },
  { src: britiScientificBooth, alt: "Briti Scientific exhibition booth" },
  { src: theonBooth, alt: "Theon Pharmaceuticals exhibition booth" },
  { src: tarsonsBooth, alt: "Tarsons exhibition booth" },
];

export function ExperiencePhotoCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-line bg-white shadow-card"
      role="region"
      aria-label="Booth photography"
      aria-roledescription="carousel"
    >
      {images.map((image, index) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={index === active ? image.alt : ""}
          aria-hidden={index !== active}
          fill
          sizes="(max-width: 1024px) 100vw, 35vw"
          className={`object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
          priority={index === 0}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/45 to-transparent px-4 pt-8 pb-3" role="group" aria-label="Choose a booth photo">
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show ${image.alt}`}
            aria-pressed={active === index}
            className={`size-2.5 rounded-full transition-colors ${active === index ? "bg-white" : "bg-white/55 hover:bg-white/85"}`}
          />
        ))}
      </div>
    </div>
  );
}