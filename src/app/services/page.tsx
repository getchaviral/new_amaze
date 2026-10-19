import type { Metadata } from "next";
import { BILLING_FAQ, FAQS, PLANS, SEO_PAGES } from "@/lib/site";
import { Accordion } from "@/components/ui/accordion";
import { ServicesShell, ServiceTabs } from "@/components/services/service-views";
import {
  FAQ_PAGE,
  JsonLd,
  SOFTWARE_APPLICATION,
} from "@/lib/structured-data";

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

function Hero() {
  return (
    <section className="bg-ink text-[#F9FAFB]">
      <div className="shell flex flex-col gap-6 py-12 sm:py-14">
        <p className="eyebrow text-gold">Our Services</p>
        <h1 className="m-0 max-w-4xl text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.25rem]">
          Choose how much of your exhibition the AI runs
        </h1>
        <p className="m-0 max-w-3xl text-lg leading-relaxed text-mist">
          Subscribe to AMAZE and design booths yourself, or let our team design, build and run
          your stand end to end.
        </p>
        <ServiceTabs />
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[SOFTWARE_APPLICATION(PLANS), FAQ_PAGE([...FAQS, ...BILLING_FAQ])]} />

      <ServicesShell hero={<Hero />}>
        <span hidden aria-hidden="true" />
      </ServicesShell>

      <section className="bg-white">
        <div className="shell mx-auto flex max-w-4xl flex-col gap-6 py-12 sm:py-14">
          <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem]">
            Plans and billing questions
          </h2>
          <Accordion items={BILLING_FAQ} headingLevel="h3" initialOpen={-1} />
        </div>
      </section>
    </>
  );
}
