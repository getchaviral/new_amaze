"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, PROJECT_TYPES } from "@/lib/site";
import { MediaSlot, PhotoGlyph } from "@/components/ui/kit";
import { Marked } from "@/components/ui/pending";

/** Project grid, filterable by type. */
export function ProjectGrid() {
  const [type, setType] = useState("All");
  const shown = PROJECTS.filter((p) => type === "All" || p.type === type);

  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2.5">
        {PROJECT_TYPES.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={type === name}
            onClick={() => setType(name)}
            className="pill"
          >
            {name}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="m-0 text-sm font-semibold text-ink-mute">
        {shown.length} {shown.length === 1 ? "project" : "projects"}
        {type === "All" ? "" : ` in ${type}`}
      </p>

      <ul className="m-0 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <li
            key={project.file}
            className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-card"
          >
            <MediaSlot
              label={project.title}
              detail={`1200×800 · ${project.file}`}
              className="h-[220px] rounded-none"
              icon={<PhotoGlyph tone="#8A6A1F" />}
            />
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="m-0 text-[0.6875rem] font-bold tracking-[0.12em] text-brand uppercase">
                {project.type}
              </p>
              <h3 className="m-0 text-[1.1875rem] leading-snug font-extrabold">
                <Marked>{project.title}</Marked>
              </h3>
              <p className="m-0 text-sm leading-relaxed text-ink-soft">
                <Marked>{project.meta}</Marked>
              </p>
              <Link
                href="/#generator"
                className="mt-auto pt-1 text-sm font-bold text-brand no-underline hover:underline"
              >
                Make one like this →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
