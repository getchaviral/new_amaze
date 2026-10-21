import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SEO_PAGES } from "@/lib/site";
import { ServicesShowcase } from "@/components/services/service-views";

export const metadata: Metadata = {
  // `absolute` so the root layout's title template does not append the brand a
  // second time — SEO_PAGES titles already end in "| Amaze Expo".
  title: { absolute: SEO_PAGES["/services"].title },
  description: SEO_PAGES["/services"].description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: SEO_PAGES["/services"].title,
    description: SEO_PAGES["/services"].description,
  },
};

const SERVICE_HIGHLIGHTS = [
  { name: "Conceptualize exhibition booth design", icon: "spark" },
  { name: "Planning, production, installation and maintenance of exhibition booth", icon: "cube" },
  { name: "Project Management", icon: "sliders" },
  { name: "Interactive experience support", icon: "grid" },
];

function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    spark: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />,
    cube: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-8 4.5 8 4.6 8-4.6M12 12v9" />,
    sliders: <path d="M4 6h9m4 0h3M4 12h3m4 0h9M4 18h9m4 0h3M13 4v4m-2 2v4m6 2v4" />,
    grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  };

  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Hero() {
  return (
    <section className="bg-cream">
      <div className="shell grid items-center gap-6 py-10 sm:py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-gold-deep">Our Services</p>
            <h1 className="m-0 max-w-xl text-[2.5rem] leading-[1.04] font-extrabold tracking-tight sm:text-[3.25rem]">
              Explore our work across industries.
            </h1>
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {SERVICE_HIGHLIGHTS.map((service) => (
              <li key={service.name} className="flex min-h-[82px] items-center gap-4 rounded-[20px] border border-brand/15 bg-white px-4 py-3 shadow-sm sm:px-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gold-wash text-brand">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="flex-1 text-base font-bold text-ink sm:text-lg">{service.name}</span>
                <svg viewBox="0 0 24 24" className="size-6 shrink-0 text-gold" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        <ServicesShowcase />
      </div>
    </section>
  );
}

function ConceptSection() {
  return (
    <section className="service-concept">
      <div className="shell grid items-center gap-6 py-10 sm:py-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-6 lg:py-14">
        <div className="flex flex-col items-start gap-5">
          <span className="grid size-14 place-items-center rounded-full bg-gold/15 text-brand">
            <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="5" width="14" height="14" rx="3" />
              <path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m14 0h4M1 15h4m14 0h4M9 9h6v6H9z" />
            </svg>
          </span>
          <p className="eyebrow text-gold-deep">AI booth concept</p>
          <h2 className="m-0 max-w-3xl text-[2rem] leading-[1.08] font-extrabold tracking-tight sm:text-[2.75rem]">
            Generate a custom AI booth concept in minutes.
          </h2>
          <p className="m-0 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Use our AI-powered concept builder to explore booth layouts, mood themes, and event-ready presentation ideas before you commit to production.
          </p>
        </div>
        <div className="flex flex-col gap-5 rounded-[28px] bg-white p-6 shadow-card sm:p-9">
          <p className="eyebrow text-gold-deep">Build your concept</p>
          <h3 className="m-0 text-xl leading-snug font-bold sm:text-2xl">
            Fast, scalable booth ideas backed by event strategy.
          </h3>
          <ul className="m-0 flex list-disc flex-col gap-3 pl-5 text-[0.9375rem] leading-relaxed text-ink-soft">
            <li>Custom design direction for your brand</li>
            <li>Modular layout proposals for efficient installation</li>
            <li>Delivery-ready recommendations for your events</li>
          </ul>
          <Link href="/#generator" className="btn btn-primary mt-2 w-full">
            Generate Your AI Booth Design
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <ConceptSection />
    </>
  );
}
