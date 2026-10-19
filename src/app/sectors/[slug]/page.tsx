import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTORS, SECTOR_TEMPLATE } from "@/lib/site";
import { Band, MediaSlot, PhotoGlyph } from "@/components/ui/kit";
import { Marked } from "@/components/ui/pending";
import { BREADCRUMBS, JsonLd } from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

const bySlug = (slug: string) => SECTORS.find((s) => s.slug === slug);

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const sector = bySlug(slug);
  if (!sector) return {};

  const title = `${sector.name} Exhibition Booth Design`;
  const description = `${sector.line} Booth design and fabrication by Amaze Expo — 850+ booths built across India.`;

  return {
    title,
    description,
    alternates: { canonical: `/sectors/${sector.slug}` },
    openGraph: { title, description },
  };
}

export default async function SectorPage({ params }: Params) {
  const { slug } = await params;
  const sector = bySlug(slug);
  if (!sector) notFound();

  return (
    <>
      <JsonLd
        data={BREADCRUMBS([
          { name: "Home", path: "/" },
          { name: "Industries we serve", path: "/sectors" },
          { name: sector.name, path: `/sectors/${sector.slug}` },
        ])}
      />

      <Band tone="cream" className="!py-10">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-ink-mute">
          <ol className="m-0 flex list-none flex-wrap gap-2">
            <li>
              <Link href="/" className="font-semibold text-brand no-underline hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/sectors" className="font-semibold text-brand no-underline hover:underline">
                Industries we serve
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-ink">{sector.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-brand">{sector.group}</p>
          <h1 className="m-0 max-w-4xl text-[2.25rem] leading-[1.06] font-extrabold tracking-tight sm:text-[3rem]">
            {sector.name} exhibition booths
          </h1>
          <p className="m-0 max-w-2xl text-lg leading-relaxed text-ink-soft">{sector.line}</p>
        </div>
      </Band>

      <Band tone="white" className="!py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <MediaSlot
            label={`Real ${sector.name.toLowerCase()} booth we built`}
            detail="Photograph · alt text names client, show and city"
            className="min-h-[320px]"
            icon={<PhotoGlyph tone="#8A6A1F" size={48} />}
          />

          <div className="flex flex-col gap-4">
            <div className="rounded-[14px] bg-cream p-5">
              <h2 className="m-0 mb-2 text-[1.0625rem] font-bold">What visitors look for</h2>
              <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                {SECTOR_TEMPLATE.whatVisitorsLookFor}
              </p>
            </div>
            <div className="rounded-[14px] bg-cream p-5">
              <h2 className="m-0 mb-2 text-[1.0625rem] font-bold">The AI’s {sector.name.toLowerCase()} rules</h2>
              <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                {SECTOR_TEMPLATE.aiRules}
              </p>
            </div>
            <div className="rounded-[14px] bg-cream p-5">
              <h2 className="m-0 mb-2 text-[1.0625rem] font-bold">Typical sizes</h2>
              <p className="m-0 text-[0.9375rem] leading-relaxed text-ink-soft">
                <Marked>{SECTOR_TEMPLATE.typicalSizes}</Marked>
              </p>
            </div>
            <Link href="/#generator" className="btn btn-primary mt-2 self-start">
              Generate a {sector.name.toLowerCase()} booth
            </Link>
          </div>
        </div>
      </Band>
    </>
  );
}
