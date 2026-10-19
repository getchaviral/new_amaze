import type { Metadata } from "next";
import Link from "next/link";
import {
  COMMITMENTS,
  REASONS,
  SEO_PAGES,
  TEAM,
  TIMELINE,
  VERTICALS,
  WHY_STATS,
} from "@/lib/site";
import { Band, MediaSlot, PhotoGlyph, SectionHead, Stat } from "@/components/ui/kit";
import { Marked } from "@/components/ui/pending";
import { Timeline } from "@/components/why/timeline";

export const metadata: Metadata = {
  title: { absolute: SEO_PAGES["/why-choose-us"].title },
  description: SEO_PAGES["/why-choose-us"].description,
  alternates: { canonical: "/why-choose-us" },
  openGraph: {
    title: SEO_PAGES["/why-choose-us"].title,
    description: SEO_PAGES["/why-choose-us"].description,
  },
};

const initials = (name: string) => {
  const clean = name.replace(/[⟨⟩]/g, "").trim();
  if (!clean || clean.startsWith("NAME")) return "?";
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
};

export default function WhyChooseUsPage() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <Band tone="cream" className="!py-12 sm:!py-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-5">
            <p className="eyebrow text-brand">About Amaze Expo</p>
            <h1 className="m-0 text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.25rem]">
              We built 850+ booths by hand. Then we taught an AI everything we learned.
            </h1>
            <p className="m-0 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Our team brings 75+ years of combined experience in conceptualising, designing
              and producing exhibition booths — plus retail interiors and museum work across
              India. Every recommendation AMAZE makes carries that experience.
            </p>
          </div>
          <MediaSlot
            label="Team on the show floor"
            detail="Photograph · 1400×1000"
            className="min-h-[380px]"
            icon={<PhotoGlyph tone="#8A6A1F" size={52} />}
          />
        </div>
      </Band>

      {/* ----------------------------------------------------- Counters */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {WHY_STATS.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              tone="dark"
            />
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- Timeline */}
      <Band tone="white">
        <div className="flex flex-col gap-9">
          <SectionHead eyebrow="Our story" title="From the workshop floor to agentic AI" />
          <Timeline steps={TIMELINE} />
        </div>
      </Band>

      {/* ---------------------------------------------------- Challenge */}
      <Band tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            eyebrow="The challenge"
            title="Exhibitors get a few seconds to win a visitor"
          />
          <p className="m-0 text-lg leading-[1.75] text-ink-soft">
            An attractive booth is no longer enough. It has to stop visitors, guide their
            journey, show the product, start real conversations and turn them into business —
            within real space, time, budget and venue limits. That is what we have designed and
            built for over two decades, and what AMAZE now does in minutes.
          </p>
        </div>
      </Band>

      {/* ------------------------------------------------ Six reasons */}
      <Band tone="white">
        <div className="flex flex-col gap-10">
          <SectionHead title="Six reasons brands choose Amaze" />
          <ul className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason) => (
              <li key={reason.title} className="card-quiet flex flex-col gap-2.5 p-7">
                <h3 className="m-0 text-lg font-bold">{reason.title}</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <Marked>{reason.body}</Marked>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* --------------------------------------------------- Verticals */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell flex flex-col gap-10 py-12 sm:py-14 lg:py-16">
          <SectionHead
            tone="dark"
            title="Exhibitions, retail and museums — one standard of craft"
          />
          <ul className="m-0 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VERTICALS.map((v) => (
              <li key={v.title} className="flex flex-col gap-4">
                <MediaSlot
                  label={v.photo}
                  detail="Photograph · 1200×800"
                  dark
                  className="h-[220px]"
                  icon={<PhotoGlyph tone="#D4A037" />}
                />
                <h3 className="m-0 text-xl font-bold">{v.title}</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-mist">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------- Team */}
      <Band tone="cream">
        <div className="flex flex-col gap-10">
          <SectionHead
            eyebrow="Humans + AI"
            title="AI does the heavy lifting. Our people sign it off."
          />
          <ul className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person, i) => (
              <li key={`${person.name}-${i}`} className="card flex flex-col gap-3 p-5">
                <div
                  className="grid aspect-square place-items-center rounded-xl border border-line bg-gold-wash"
                  aria-hidden="true"
                >
                  <span className="text-4xl font-extrabold text-brand">{initials(person.name)}</span>
                </div>
                <h3 className="m-0 text-lg font-bold">
                  <Marked>{person.name}</Marked>
                </h3>
                <p className="m-0 text-sm font-semibold text-brand">
                  <Marked>{person.role}</Marked>
                </p>
                <p className="m-0 text-sm leading-relaxed text-ink-soft">
                  <Marked>{person.line}</Marked>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ------------------------------------------------ Commitments */}
      <Band tone="white">
        <ul className="m-0 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item) => (
            <li
              key={item.title}
              className={`flex flex-col gap-2.5 border-t-[3px] pt-5 ${
                item.gold ? "border-gold" : "border-brand"
              }`}
            >
              <h3 className="m-0 text-lg font-bold">{item.title}</h3>
              <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* --------------------------------------------------- CTA band */}
      <section className="bg-brand text-white">
        <div className="shell flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
          <h2 className="m-0 max-w-2xl text-[1.875rem] leading-[1.2] font-extrabold tracking-tight sm:text-[2.25rem]">
            See what our experience looks like as AI
          </h2>
          <Link href="/#generator" className="btn btn-onDark">
            Generate your AI booth design
          </Link>
        </div>
      </section>
    </>
  );
}
