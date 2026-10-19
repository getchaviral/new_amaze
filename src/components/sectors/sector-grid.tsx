"use client";

import Link from "next/link";
import { useState } from "react";
import { SECTOR_GROUPS, SECTORS } from "@/lib/site";
import { MediaSlot, PhotoGlyph } from "@/components/ui/kit";

/** 20 sectors, filterable by group. */
export function SectorGrid() {
  const [group, setGroup] = useState("All");
  const shown = SECTORS.filter((s) => group === "All" || s.group === group);

  return (
    <div className="flex flex-col gap-6">
      <div role="group" aria-label="Filter sectors" className="flex flex-wrap gap-2.5">
        {SECTOR_GROUPS.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={group === name}
            onClick={() => setGroup(name)}
            className="pill"
          >
            {name}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="m-0 text-sm font-semibold text-ink-mute">
        {shown.length} {shown.length === 1 ? "sector" : "sectors"}
        {group === "All" ? "" : ` in ${group}`}
      </p>

      <ul className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((sector) => (
          <li key={sector.slug}>
            <Link
              href={`/sectors/${sector.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white text-ink no-underline shadow-card transition-shadow hover:shadow-lift"
            >
              <MediaSlot
                label={`${sector.name} booth we built`}
                detail="Photograph · 1200×800"
                className="h-[150px] rounded-none"
                icon={<PhotoGlyph tone="#8A6A1F" size={32} />}
              />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="m-0 text-[0.6875rem] font-bold tracking-[0.12em] text-brand uppercase">
                  {sector.group}
                </p>
                <h3 className="m-0 text-[1.1875rem] leading-snug font-extrabold">
                  {sector.name}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-ink-soft">{sector.line}</p>
                <span className="mt-auto pt-1 text-sm font-bold text-brand">
                  Explore sector →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
