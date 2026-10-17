"use client";

import Link from "next/link";
import { createContext, useContext, useState, type ReactNode } from "react";
import { MANAGED } from "@/lib/site";
import { MediaSlot, PhotoGlyph, SectionHead } from "@/components/ui/kit";
import { Pricing } from "./pricing";
import { PlanQuiz } from "./plan-quiz";

type View = "ai" | "managed";

const ServiceViewContext = createContext<{ view: View; setView: (v: View) => void }>({
  view: "ai",
  setView: () => {},
});

/** The toggle. Sits inside the dark hero, as in the design. */
export function ServiceTabs() {
  const { view, setView } = useContext(ServiceViewContext);

  return (
    <div
      role="tablist"
      aria-label="Service type"
      className="inline-flex flex-wrap gap-2 rounded-2xl bg-slate-deep p-1.5"
    >
      {(["ai", "managed"] as const).map((key) => (
        <button
          key={key}
          type="button"
          role="tab"
          id={`service-tab-${key}`}
          aria-selected={view === key}
          aria-controls={`service-panel-${key}`}
          tabIndex={view === key ? 0 : -1}
          onClick={() => setView(key)}
          className={`min-h-12 rounded-xl px-5 text-[0.9375rem] font-bold transition-colors ${
            view === key ? "bg-brand text-white" : "text-[#F9FAFB] hover:text-gold"
          }`}
        >
          {key === "ai" ? "AI Platform (subscribe)" : "Managed services"}
        </button>
      ))}
    </div>
  );
}

/** Everything below the hero: the active panel's content. */
export function ServicePanel() {
  const { view } = useContext(ServiceViewContext);

  return view === "ai" ? (
    <div
      id="service-panel-ai"
      role="tabpanel"
      aria-labelledby="service-tab-ai"
      tabIndex={0}
      className="flex flex-col gap-20"
    >
      <section id="pricing" className="bg-cream">
        <div className="shell py-16 sm:py-20">
          <Pricing />
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-16 sm:py-20">
          <PlanQuiz />
        </div>
      </section>

      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHead
              tone="dark"
              eyebrow="For exhibition organisers"
              title="Give every exhibitor at your show an AI booth designer"
              lede="A white-label AMAZE portal with your venue’s rules pre-loaded and a vetted build partner. Better-looking halls for you; a share of build revenue for your show."
            />
            <Link href="/contact" className="btn btn-outlineGold mt-2 self-start">
              Talk to us about a partnership
            </Link>
          </div>
          <MediaSlot
            label="White-label portal"
            detail="Screenshot · organiser logo + AMAZE generator"
            dark
            className="min-h-[300px]"
            icon={<PhotoGlyph tone="#D4A037" size={52} />}
          />
        </div>
      </section>
    </div>
  ) : (
    <div
      id="service-panel-managed"
      role="tabpanel"
      aria-labelledby="service-tab-managed"
      tabIndex={0}
    >
      <section className="bg-cream">
        <div className="shell flex flex-col gap-10 py-16 sm:py-20">
          <SectionHead title="We design it, build it and run it" />
          <ul className="m-0 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MANAGED.map((service) => (
              <li
                key={service.name}
                className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-card"
              >
                <MediaSlot
                  label={service.photo}
                  detail="Photograph · 1200×800"
                  className="h-[200px] rounded-none"
                  icon={<PhotoGlyph tone="#8A6A1F" />}
                />
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="m-0 text-lg font-bold">{service.name}</h3>
                  <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {service.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary self-start">
            Get a design + build quote
          </Link>
        </div>
      </section>
    </div>
  );
}

/** Wraps hero + panels so both share one piece of state. */
export function ServicesShell({ hero, children }: { hero: ReactNode; children: ReactNode }) {
  const [view, setView] = useState<View>("ai");
  return (
    <ServiceViewContext.Provider value={{ view, setView }}>
      {hero}
      {children}
      <ServicePanel />
    </ServiceViewContext.Provider>
  );
}
