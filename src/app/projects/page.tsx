import type { Metadata } from "next";
import Link from "next/link";
import { FEATURED_PROJECT, SEO_PAGES } from "@/lib/site";
import { Band, MediaSlot, PlayGlyph } from "@/components/ui/kit";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Marked } from "@/components/ui/pending";

export const metadata: Metadata = {
  // `absolute` so the root layout's title template doesn't append the brand a
  // second time — SEO_PAGES titles already end in "| Amaze Expo".
  title: { absolute: SEO_PAGES["/projects"].title },
  description: SEO_PAGES["/projects"].description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: SEO_PAGES["/projects"].title,
    description: SEO_PAGES["/projects"].description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Band tone="cream" className="!pb-8">
        <div className="flex flex-col gap-5">
          <p className="eyebrow text-brand">Projects</p>
          <h1 className="m-0 max-w-4xl text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.25rem]">
            850+ booths, retail spaces and museums we have built
          </h1>
          <p className="m-0 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Real clients, real show floors. Filter the work, then generate a booth like it in
            minutes.
          </p>
        </div>
      </Band>

      {/* -------------------------------------------- featured case study */}
      <Band tone="cream" className="!py-8">
        <article className="grid overflow-hidden rounded-[24px] bg-ink text-[#F9FAFB] lg:grid-cols-[1.15fr_1fr]">
          <MediaSlot
            label="Photo gallery · 4 photographs of the booth"
            detail="alt: “Royal Canin booth by Amaze Expo at [show], [city], [year]”"
            dark
            className="min-h-[340px] rounded-none lg:border-r lg:border-gold/25"
            icon={<PlayGlyph size={52} />}
          />
          <div className="flex flex-col gap-3.5 p-8 sm:p-10">
            <p className="eyebrow text-gold">Featured case study · Exhibition</p>
            <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2rem]">
              {FEATURED_PROJECT.headline}
            </h2>
            <p className="m-0 text-[0.9375rem] text-mist">
              <Marked dark>{FEATURED_PROJECT.meta}</Marked>
            </p>
            <dl className="m-0 flex flex-col gap-2.5 pt-1">
              {FEATURED_PROJECT.rows.map(([term, detail]) => (
                <div key={term} className="grid gap-1">
                  <dt className="text-sm font-bold text-gold">{term}</dt>
                  <dd className="m-0 text-[0.9375rem] leading-relaxed text-[#E5E7EB]">
                    <Marked dark>{detail}</Marked>
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/#generator" className="btn btn-primary mt-3 self-start">
              Make one like this
            </Link>
          </div>
        </article>
      </Band>

      <Band tone="cream" className="!pt-4">
        <ProjectGrid />
      </Band>

      {/* ----------------------------------------------- time-lapse + testimonials */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell flex flex-col gap-8 py-12 sm:py-14">
          <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2.25rem]">
            From bare floor to opening day
          </h2>
          <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
            <MediaSlot
              label="30-second build time-lapse"
              detail="Lazy-loaded, with poster image and captions"
              dark
              className="min-h-[320px]"
              icon={<PlayGlyph size={52} />}
            />
            <div className="grid gap-5">
              <MediaSlot
                label="Client testimonial 1"
                detail="Video · 20–30 s"
                dark
                className="min-h-[150px]"
              />
              <MediaSlot
                label="Client testimonial 2"
                detail="Video · 20–30 s"
                dark
                className="min-h-[150px]"
              />
            </div>
          </div>
          <p className="m-0 max-w-3xl text-sm text-mist">
            AI concepts shown anywhere on this tab carry an “AI concept” label and are never
            mixed unlabelled with built work.
          </p>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="shell flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
          <h2 className="m-0 max-w-2xl text-[1.75rem] leading-[1.2] font-extrabold tracking-tight sm:text-[2rem]">
            Seen something you like? Get your version in minutes.
          </h2>
          <Link href="/#generator" className="btn btn-onDark">
            Generate your AI booth design
          </Link>
        </div>
      </section>
    </>
  );
}
