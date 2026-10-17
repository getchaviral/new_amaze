"use client";

import { useState } from "react";
import { MediaSlot, PhotoGlyph } from "@/components/ui/kit";
import { Marked } from "@/components/ui/pending";

type Step = {
  when: string;
  title: string;
  body: string;
  photo: string;
  pending: boolean;
};

/** Company history as a tabbed timeline. */
export function Timeline({ steps }: { steps: readonly Step[] }) {
  const [i, setI] = useState(0);
  const cur = steps[i];

  return (
    <div className="flex flex-col gap-7">
      <div role="tablist" aria-label="Company timeline" className="flex flex-wrap gap-2.5">
        {steps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            id={`timeline-tab-${index}`}
            aria-selected={i === index}
            aria-controls="timeline-panel"
            tabIndex={i === index ? 0 : -1}
            onClick={() => setI(index)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                setI((v) => (v + 1) % steps.length);
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                setI((v) => (v - 1 + steps.length) % steps.length);
              }
            }}
            className="pill rounded-xl"
          >
            <Marked>{step.when}</Marked>
          </button>
        ))}
      </div>

      <div
        id="timeline-panel"
        role="tabpanel"
        aria-labelledby={`timeline-tab-${i}`}
        tabIndex={0}
        className="grid items-center gap-8 rounded-[20px] bg-cream p-7 sm:p-9 lg:grid-cols-2"
      >
        <div className="flex flex-col gap-3">
          <p className="text-[0.9375rem] font-bold text-brand">
            <Marked>{cur.when}</Marked>
          </p>
          <h3 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight">
            {cur.title}
          </h3>
          <p className="m-0 text-base leading-relaxed text-ink-soft">{cur.body}</p>
        </div>
        <MediaSlot
          label={cur.photo}
          detail="Photograph · 1200×900"
          className="min-h-[260px]"
          icon={<PhotoGlyph tone="#8A6A1F" />}
        />
      </div>
    </div>
  );
}
