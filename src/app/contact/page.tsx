import type { Metadata } from "next";
import { OFFICES, SEO_PAGES } from "@/lib/site";
import { Band, MediaSlot, PinGlyph } from "@/components/ui/kit";
import { ContactForm } from "@/components/contact/contact-form";
import { Marked } from "@/components/ui/pending";
import { JsonLd, LOCAL_BUSINESSES } from "@/lib/structured-data";

export const metadata: Metadata = {
  // `absolute` so the root layout's title template doesn't append the brand a
  // second time — SEO_PAGES titles already end in "| Amaze Expo".
  title: { absolute: SEO_PAGES["/contact"].title },
  description: SEO_PAGES["/contact"].description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: SEO_PAGES["/contact"].title,
    description: SEO_PAGES["/contact"].description,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESSES} />

      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell flex flex-col gap-4 py-12 sm:py-14">
          <p className="eyebrow text-gold">Contact Us</p>
          <h1 className="m-0 max-w-3xl text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.25rem]">
            Tell us about your next show
          </h1>
          <p className="m-0 max-w-2xl text-lg leading-relaxed text-mist">
            Concepts in minutes. A human reply within one working day.
          </p>
        </div>
      </section>

      <Band tone="cream" className="!py-10">
        <ContactForm />
      </Band>

      <Band tone="white">
        <div className="flex flex-col gap-8">
          <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem]">
            Our offices
          </h2>
          <ul className="m-0 grid list-none gap-6 md:grid-cols-3">
            {OFFICES.map((office) => (
              <li
                key={office.city}
                className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-cream"
              >
                <MediaSlot
                  label={`${office.city} office pin`}
                  detail="Google Map embed"
                  className="h-[200px] rounded-none"
                  icon={<PinGlyph size={30} tone="#8A6A1F" />}
                />
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="m-0 text-lg font-bold">
                    {office.city}
                    {office.tag ? (
                      <span className="text-sm font-semibold text-ink-mute"> · {office.tag}</span>
                    ) : null}
                  </h3>
                  <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <Marked>{office.address}</Marked>
                  </p>
                  <p className="m-0 text-[0.9375rem] text-ink-soft">
                    <Marked>{office.hours}</Marked>
                  </p>
                  <a
                    href="#directions"
                    className="mt-1 text-sm font-bold text-brand no-underline hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
