"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GENERATOR_GROUPS, GOAL_TIPS } from "@/lib/site";
import { PillGroup } from "@/components/ui/choice";
import { BoothElevation } from "@/components/art/booth";

type Key = (typeof GENERATOR_GROUPS)[number]["key"];

/**
 * "Your booth in 60 seconds" — four choices, a live concept card.
 *
 * The generator is client-only by necessity; the summary line and the AMAZE
 * recommendation are derived synchronously so there is no loading state and no
 * flash of empty content.
 */
export function BoothGenerator() {
  const [choices, setChoices] = useState<Record<string, string>>(() =>
    Object.fromEntries(GENERATOR_GROUPS.map((g) => [g.key, g.default])),
  );
  const [contact, setContact] = useState("");

  const set = (key: Key) => (value: string) =>
    setChoices((prev) => ({ ...prev, [key]: value }));

  const summary = useMemo(
    () => GENERATOR_GROUPS.map((g) => choices[g.key]).join(" · "),
    [choices],
  );
  const tip = GOAL_TIPS[choices.goal] ?? GOAL_TIPS["Generate leads"];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
      {/* inputs */}
      <div className="flex flex-col gap-7 rounded-[22px] bg-white p-6 shadow-card sm:p-8">
        {GENERATOR_GROUPS.map((group) => (
          <PillGroup
            key={group.key}
            legend={`${GENERATOR_GROUPS.indexOf(group) + 1} · ${group.legend}`}
            options={group.options}
            value={choices[group.key]}
            onChange={set(group.key)}
          />
        ))}
      </div>

      {/* concept */}
      <div className="flex flex-col gap-5 rounded-[22px] bg-ink p-6 text-[#F9FAFB] sm:p-8">
        <p className="eyebrow text-gold">Your first concept</p>

        <div className="overflow-hidden rounded-[14px] border border-gold/35 bg-slate-deep">
          <BoothElevation variant="wire" className="w-full" showDimensions={false} />
        </div>

        <p className="text-[0.9375rem] leading-relaxed text-mist">{summary}</p>

        <p className="text-base leading-relaxed text-[#E5E7EB]">
          <span className="font-bold text-gold">AMAZE suggests: </span>
          {tip}
        </p>

        <div className="mt-1 flex flex-col gap-3 border-t border-white/10 pt-5">
          <label htmlFor="generator-contact" className="text-sm font-semibold text-[#E5E7EB]">
            Email or WhatsApp number to unlock 4 more concepts in HD
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="generator-contact"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com or +91…"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="field flex-1"
            />
            <Link href="/services" className="btn btn-primary shrink-0">
              Unlock HD concepts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
