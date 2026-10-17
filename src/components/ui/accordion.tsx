"use client";

import { useId, useState } from "react";

export type AccordionItem = { q: string; a: string };

/**
 * Disclosure list used for the home FAQ, the skills list and the billing FAQ.
 * One panel open at a time; real buttons with `aria-expanded` + `aria-controls`.
 */
export function Accordion({
  items,
  initialOpen = 0,
  tone = "light",
  headingLevel = "h3",
}: {
  items: readonly AccordionItem[];
  initialOpen?: number;
  tone?: "light" | "dark";
  headingLevel?: "h3" | "h4";
}) {
  const [open, setOpen] = useState<number>(initialOpen);
  const base = useId();
  const Heading = headingLevel;
  const dark = tone === "dark";

  return (
    <div>
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;

        return (
          <div
            key={item.q}
            className={
              dark
                ? "border-b border-white/12"
                : i === items.length - 1
                  ? ""
                  : "border-b border-line"
            }
          >
            <Heading className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : i)}
                className={`flex min-h-14 w-full items-center gap-4 py-4 text-left transition-colors ${
                  dark ? "hover:text-gold" : "hover:text-brand"
                }`}
              >
                <span className="flex-1 text-[1.0625rem] font-bold sm:text-lg">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-lg font-bold transition-colors ${
                    dark
                      ? "bg-white/10 text-gold"
                      : expanded
                        ? "bg-brand text-white"
                        : "bg-gold-wash text-brand"
                  }`}
                >
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="pb-5 pr-10"
            >
              <p className={`text-[0.9375rem] leading-relaxed sm:text-base ${dark ? "text-mist" : "text-ink-soft"}`}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
