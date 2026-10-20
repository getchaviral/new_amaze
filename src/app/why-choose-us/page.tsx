import type { Metadata } from "next";
import Image from "next/image";
import {
  COMMITMENTS,
  REASONS,
  SEO_PAGES,
  TEAM,
  WHY_STATS,
} from "@/lib/site";
import { Band, SectionHead, Stat } from "@/components/ui/kit";
import { Marked } from "@/components/ui/pending";
import { WhyChooseUsHeroImage } from "@/components/why/hero-image-carousel";

import reasonEndToEnd from "@/assets/why/reason-1.png";
import reasonTechnology from "@/assets/why/reason-2.png";
import reasonExpertise from "@/assets/why/reason-3.png";
import reasonIndustries from "@/assets/why/reason-4.png";
import reasonLocations from "@/assets/why/reason-5.png";
import reasonPartnership from "@/assets/why/reason-6.png";

/**
 * One illustration per reason, in `REASONS` order. Assets 4 and 5 are crossed
 * on purpose: file 4 circles the industry sectors, which is the "Deep industry
 * knowledge" playbooks point, while file 5 circles city landmarks, which is
 * "Pan-India execution". Taken in file order they would have been swapped.
 */
const REASON_IMAGES = [
  { src: reasonEndToEnd, alt: "Booth process flow from brief and concept through design, approval, fabrication and logistics to show-ready" },
  { src: reasonTechnology, alt: "AI, virtual reality and cloud tools networked around a digital exhibition booth" },
  { src: reasonExpertise, alt: "Exhibition booth ringed with completed stands and award, team and quality symbols" },
  { src: reasonLocations, alt: "Exhibition booth below a globe connecting international city landmarks" },
  { src: reasonIndustries, alt: "Medical, automotive, retail, fashion, solar and other industry sectors around a glowing globe" },
  { src: reasonPartnership, alt: "Handshake over booth drawings with a growth chart and completed stand behind" },
];

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
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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
          <WhyChooseUsHeroImage />
        </div>
      </Band>

      {/* ----------------------------------------------------- Counters */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
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

      {/* ---------------------------------------------------- Challenge */}
      <Band tone="cream">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
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
        <div className="flex flex-col gap-6">
          <SectionHead title="Six reasons brands choose Amaze" />
          <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, i) => {
              const image = REASON_IMAGES[i];
              return (
                <li
                  key={reason.title}
                  className="card-quiet flex flex-col gap-3.5 overflow-hidden p-0"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-deep">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 px-6 pb-6">
                    <h3 className="m-0 text-lg font-bold">{reason.title}</h3>
                    <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                      <Marked>{reason.body}</Marked>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Band>

      {/* -------------------------------------------------------- Team */}
      <Band tone="cream">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="Humans + AI"
            title="AI does the heavy lifting. Our people sign it off."
            className="max-w-none lg:whitespace-nowrap"
          />
          <ul className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.slice(0, 3).map((person, i) => (
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
        <ul className="m-0 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
