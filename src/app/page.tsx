import type { Metadata } from "next";
import Link from "next/link";
import {
  AGENTS,
  AMAZE_AI,
  FAQS,
  GENERIC_AI,
  HOME_PLANS,
  PROCESS,
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
import { Marked } from "@/components/ui/pending";
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
        <div className="shell grid items-center gap-12 py-12 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:py-16">
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
              20+ years of building booths · 850+ booths delivered
            </p>
          </div>

          <HeroShowcase />
        </div>
      </section>

      {/* --------------------------------------------------- Proof strip */}
      <Band tone="white">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[16rem] text-sm font-bold tracking-[0.16em] text-ink-mute uppercase">
              Trusted by brands at India’s biggest shows
            </p>
            <div className="flex-1">
              <LogoWall />
            </div>
          </div>
          <dl className="m-0 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
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
        <div className="shell flex flex-col gap-10 py-12 sm:py-14 lg:py-16">
          <SectionHead
            eyebrow="Try it now"
            title="Your booth in 60 seconds"
            lede="Pick four things. AMAZE returns a first concept for your stand."
          />
          <BoothGenerator />
        </div>
      </section>

      {/* ------------------------------------------------------ AI team */}
      <Band tone="white">
        <div className="flex flex-col gap-10">
          <SectionHead
            eyebrow="What AMAZE does"
            title="One AI agent for every step of your booth"
          />
          <ol className="m-0 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AGENTS.map((agent) => (
              <li
                key={agent.n}
                className="card-quiet flex flex-col gap-2.5 p-6 transition-shadow hover:shadow-card"
              >
                <p className="text-xs font-bold tracking-[0.14em] text-brand">STEP {agent.n}</p>
                <h3 className="m-0 text-lg font-bold">{agent.name}</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">{agent.does}</p>
                <p className="mt-auto pt-1 text-sm font-semibold text-gold-ink">
                  Output: {agent.out}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      {/* ---------------------------------------------- Real experience */}
      <Band tone="cream">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
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
          <div className="rounded-[22px] border border-line bg-white p-6 sm:p-8">
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
        <div className="shell flex flex-col gap-8 py-12 sm:py-14 lg:py-16">
          <SectionHead
            tone="dark"
            eyebrow="Render vs reality"
            title="The concept you approve is the booth we build"
            lede="Drag the slider: AI concept on the left, the finished booth on the show floor on the right."
          />
          <CompareSlider />
        </div>
      </section>

      {/* ------------------------------------------- Generic vs AMAZE */}
      <Band tone="cream">
        <div className="flex flex-col gap-10">
          <h2 className="m-0 max-w-3xl text-[2rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.5rem]">
            Why you can trust this AI: it was built by people who build booths
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card flex flex-col gap-4 p-8">
              <h3 className="m-0 text-xl font-bold text-ink-mute">Generic AI image tools</h3>
              <ul className="m-0 flex list-disc flex-col gap-2.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {GENERIC_AI.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] bg-brand p-8 text-white">
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
      <Band tone="cream">
        <div className="flex flex-col gap-10">
          <SectionHead title="Plans for exhibitors, agencies and organisers" />
          <div className="grid gap-5 md:grid-cols-3">
            {HOME_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-3 rounded-[20px] p-7 ${
                  plan.featured ? "bg-ink text-[#F9FAFB]" : "card"
                }`}
              >
                <p
                  className={`min-h-4 text-xs font-extrabold tracking-[0.16em] uppercase ${
                    plan.featured ? "text-gold" : ""
                  }`}
                >
                  {plan.featured ? plan.badge || "Most popular" : null}
                </p>
                <h3 className="m-0 text-xl font-bold">{plan.name}</h3>
                <p
                  className={`text-[0.9375rem] ${plan.featured ? "text-mist" : "text-ink-soft"}`}
                >
                  {plan.for}
                </p>
                <p className="mt-1 text-[2rem] leading-none font-extrabold">
                  <Marked dark={plan.featured}>{plan.price}</Marked>
                </p>
                <p className={`text-sm ${plan.featured ? "text-mist" : "text-ink-mute"}`}>
                  {plan.per}
                </p>
                <Link
                  href="/services"
                  className={`btn mt-auto ${plan.featured ? "btn-onDark" : "btn-outline"}`}
                >
                  See plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* ---------------------------------------------------------- FAQ */}
      <Band tone="white">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <h2 className="m-0 text-[2rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.5rem]">
            Frequently asked questions
          </h2>
          <Accordion items={FAQS} headingLevel="h3" initialOpen={0} />
        </div>
      </Band>

    </>
  );
}
