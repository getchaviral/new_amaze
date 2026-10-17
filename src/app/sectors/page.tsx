import type { Metadata } from "next";
import Link from "next/link";
import { SEO_PAGES, SECTOR_TEMPLATE, SHOWS } from "@/lib/site";
import { Band, MediaSlot, PhotoGlyph } from "@/components/ui/kit";
import { SectorGrid } from "@/components/sectors/sector-grid";
import { Marked } from "@/components/ui/pending";
import { EVENT_SCHEMA, JsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: SEO_PAGES["/sectors"].title },
  description: SEO_PAGES["/sectors"].description,
  alternates: { canonical: "/sectors" },
  openGraph: {
    title: SEO_PAGES["/sectors"].title,
    description: SEO_PAGES["/sectors"].description,
  },
};

export default function SectorsPage() {
  return (
    <>
      <JsonLd data={EVENT_SCHEMA(SHOWS)} />

      <Band tone="cream" className="!pb-8">
        <div className="flex flex-col gap-5">
          <p className="eyebrow text-brand">
            Industries we serve · 20 sectors · 47 sub-industries
          </p>
          <h1 className="m-0 max-w-4xl text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3.25rem]">
            Exhibition stand design for every industry
          </h1>
          <p className="m-0 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Every sector exhibits differently. AMAZE uses a playbook for each — what visitors
            expect, what regulators allow and what converts.
          </p>
        </div>
      </Band>

      <Band tone="cream" className="!pt-6">
        <SectorGrid />
      </Band>

      {/* --------------------------------------- sector page template */}
      <Band tone="white">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <p className="eyebrow text-brand">Inside every sector page · /sectors/pharma</p>
            <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2.25rem]">
              Sector pages carry the playbook
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <MediaSlot
              label="Real sector booth we built"
              detail="Photograph · alt text names client, show and city"
              className="min-h-[300px]"
              icon={<PhotoGlyph tone="#8A6A1F" size={48} />}
            />
            <div className="flex flex-col gap-4">
              <div className="rounded-[14px] bg-cream p-5">
                <h3 className="m-0 mb-2 text-[1.0625rem] font-bold">What visitors look for</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {SECTOR_TEMPLATE.whatVisitorsLookFor}
                </p>
              </div>
              <div className="rounded-[14px] bg-cream p-5">
                <h3 className="m-0 mb-2 text-[1.0625rem] font-bold">The AI’s sector rules</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {SECTOR_TEMPLATE.aiRules}
                </p>
              </div>
              <div className="rounded-[14px] bg-cream p-5">
                <h3 className="m-0 mb-2 text-[1.0625rem] font-bold">Typical sizes</h3>
                <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                  <Marked>{SECTOR_TEMPLATE.typicalSizes}</Marked>
                </p>
              </div>
              <Link href="/#generator" className="btn btn-primary self-start">
                Generate a booth
              </Link>
            </div>
          </div>
        </div>
      </Band>

      {/* ------------------------------------------------ show calendar */}
      <section className="bg-ink text-[#F9FAFB]">
        <div className="shell flex flex-col gap-8 py-16 sm:py-20">
          <div className="flex flex-col gap-2.5">
            <p className="eyebrow text-gold">Upcoming shows in India</p>
            <h2 className="m-0 text-[1.75rem] leading-tight font-extrabold tracking-tight sm:text-[2.25rem]">
              Plan your booth for the next show
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[820px] border-collapse text-left text-[0.9375rem]">
              <thead className="bg-white/[0.04]">
                <tr className="text-gold">
                  <th scope="col" className="px-4 py-3.5 font-bold">Show</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Dates</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Venue</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Sector</th>
                  <th scope="col" className="px-4 py-3.5">
                    <span className="sr-only">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {SHOWS.map((show) => (
                  <tr key={show.name} className="border-t border-white/10">
                    <th scope="row" className="px-4 py-3.5 font-bold text-white">
                      {show.name}
                    </th>
                    <td className="px-4 py-3.5 text-mist">
                      <Marked dark>{show.dates}</Marked>
                    </td>
                    <td className="px-4 py-3.5 text-mist">{show.venue}</td>
                    <td className="px-4 py-3.5 text-mist">{show.sector}</td>
                    <td className="px-4 py-3.5">
                      <Link href="/#generator" className="font-bold text-gold no-underline hover:underline">
                        Plan my booth
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="m-0 max-w-3xl text-sm text-mist">
            Each show gets its own page with venue rules and Event schema, editable in the CMS.
          </p>
        </div>
      </section>
    </>
  );
}
