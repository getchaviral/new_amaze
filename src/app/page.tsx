import type { Metadata } from "next";
import Link from "next/link";
import {
  AMAZE_AI,
  FAQS,
  GENERIC_AI,
  HOME_PLANS,
  SEO_PAGES,
  SKILLS,
  STATS,
} from "@/lib/site";
import { Band, MediaSlot, PhotoGlyph, SectionHead, Stat } from "@/components/ui/kit";
import { Accordion } from "@/components/ui/accordion";
import { LogoWall } from "@/components/ui/logo-wall";
import { BoothGenerator } from "@/components/home/booth-generator";
import { CompareSlider } from "@/components/art/compare-slider";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { FAQ_PAGE, JsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: SEO_PAGES["/"].title,
  description: SEO_PAGES["/"].description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SEO_PAGES["/"].title,
    description: SEO_PAGES["/"].description,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={FAQ_PAGE(FAQS)} />

      {/* ---------------------------------------------------------- Hero */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell grid items-center gap-6 py-10 sm:py-12 lg:grid-cols-[1.05fr_1fr] lg:py-12">
          <div className="flex flex-col gap-6">
            <h1 className="text-[2.5rem] leading-[1.04] font-extrabold tracking-tight sm:text-display">
              AI exhibition booth design, from brief to built booth
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
              AMAZE, our agentic AI, plans, designs, costs and checks your booth in minutes —
              then our team builds it. Developed on 1,000+ booth designs and 850+ booths we
              have actually built.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#generator" className="btn btn-primary">
                Generate your AI booth design
              </Link>
              <Link href="/#demo" className="btn btn-outlineGold">
                See booth examples
              </Link>
            </div>
            <p className="text-[0.9375rem] text-mist">
              15+ years of building booths · 850+ booths delivered
            </p>
          </div>

          <HeroShowcase />
        </div>
      </section>

      {/* --------------------------------------------------- Proof strip */}
      <Band tone="white">
        <div className="flex flex-col gap-7 sm:gap-8">
          <p className="m-0 text-center text-sm font-bold tracking-[0.16em] text-ink-mute uppercase">
              Trusted by brands at India’s biggest shows
          </p>
          <LogoWall />
          <dl className="m-0 grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex min-h-32 items-center justify-center rounded-2xl border border-line bg-cream/60 px-4 py-5 text-center sm:min-h-36 sm:px-6">
                <dd className="m-0">
                  <Stat value={stat.value} label={stat.label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* ----------------------------------------------------- Generator */}
      <section id="generator" className="bg-cream scroll-mt-20">
        <div className="shell grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-14">
          <div className="flex flex-col justify-center">
            <SectionHead
              eyebrow="What AMAZE does"
              title="One AI agent for every step of your booth"
            />
          </div>
          <BoothGenerator />
        </div>
      </section>

      {/* ---------------------------------------------- Real experience */}
      <Band tone="white">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <SectionHead
              eyebrow="Built on real experience"
              title="This isn’t generic AI making up ideas"
              lede="It is our booth design and fabrication experience, made instant. Open any card to see what the AI weighs."
            />
            <MediaSlot
              label="Workshop or team on site"
              detail="Photograph · 1200×900"
              className="min-h-[240px]"
              icon={<PhotoGlyph tone="#8A6A1F" size={48} />}
            />
          </div>
          <div className="rounded-[22px] border border-line bg-white p-6">
            <Accordion
              items={SKILLS}
              headingLevel="h3"
              initialOpen={0}
            />
          </div>
        </div>
      </Band>

      {/* --------------------------------------------- Render vs reality */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell mx-auto flex max-w-7xl flex-col gap-3 !px-2 py-10 sm:!px-3 sm:py-12 lg:py-12">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-gold">Render vs reality</p>
            <h2 className="m-0 text-[2rem] leading-[1.12] font-extrabold tracking-tight text-[#F9FAFB] lg:whitespace-nowrap lg:text-[clamp(1.5rem,3vw,2.5rem)]">
              The concept you approve is the booth we build
            </h2>
            <p className="m-0 text-lg leading-relaxed text-mist">
              Drag the slider: AI concept on the left, the finished booth on the show floor on the right.
            </p>
          </div>
          <CompareSlider />
        </div>
      </section>

      {/* ------------------------------------------- Generic vs AMAZE */}
      <Band tone="cream">
        <div className="flex flex-col gap-6">
          <h2 className="m-0 max-w-3xl text-[2rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.5rem]">
            Why you can trust this AI: it was built by people who build booths
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card flex flex-col gap-4 p-6">
              <h3 className="m-0 text-xl font-bold text-ink-mute">Generic AI image tools</h3>
              <ul className="m-0 flex list-disc flex-col gap-2.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {GENERIC_AI.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] bg-brand p-6 text-white">
              <h3 className="m-0 text-xl font-bold">AMAZE, exhibition-trained AI</h3>
              <ul className="m-0 flex list-disc flex-col gap-2.5 pl-5 text-[0.9375rem] leading-relaxed text-brand-tint">
                {AMAZE_AI.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Band>

      {/* ------------------------------------------------ Plans teaser */}
      <Band tone="white">
        <div className="flex flex-col gap-6">
          <SectionHead
            title="Our Agentic AI offerings for Expo Booth Designers, Agencies & Exhibitors"
            lede="Choose a package that fits your team and the number of booth concepts you need."
          />
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {HOME_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex h-full flex-col gap-4 rounded-[20px] border p-6 shadow-card transition-shadow hover:shadow-lift ${
                  plan.featured
                    ? "border-brand bg-ink text-[#F9FAFB]"
                    : "border-line bg-white text-ink"
                }`}
              >
                <div className="flex min-h-7 items-center">
                  {plan.badge ? (
                    <span className="rounded-full bg-gold-wash px-3 py-1 text-xs font-extrabold tracking-wide text-gold-ink">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="m-0 text-xl font-bold">{plan.name}</h3>
                <p
                  className={`m-0 min-h-12 text-[0.9375rem] leading-relaxed ${plan.featured ? "text-mist" : "text-ink-soft"}`}
                >
                  {plan.for}
                </p>
                <div className={`border-y py-4 ${plan.featured ? "border-white/15" : "border-line"}`}>
                  <p className="m-0 text-3xl leading-none font-extrabold">{plan.price}</p>
                  <p className={`mt-2 mb-0 text-sm ${plan.featured ? "text-mist" : "text-ink-mute"}`}>
                    {plan.per}
                  </p>
                </div>
                <p className={`m-0 text-sm font-semibold ${plan.featured ? "text-[#F9FAFB]" : "text-ink"}`}>
                  {plan.details}
                </p>
                <ul className={`m-0 flex list-none flex-col gap-2.5 p-0 text-sm leading-relaxed ${plan.featured ? "text-mist" : "text-ink-soft"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg viewBox="0 0 20 20" className="mt-0.5 size-4 shrink-0 text-gold" fill="none" aria-hidden="true">
                        <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`btn mt-auto w-full ${plan.featured ? "btn-onDark" : "btn-outline"}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* ---------------------------------------------------------- FAQ */}
      <Band tone="cream">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="m-0 text-[2rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.5rem]">
            Frequently asked questions
          </h2>
          <Accordion items={FAQS} headingLevel="h3" initialOpen={0} />
        </div>
      </Band>
    </>
  );
}
