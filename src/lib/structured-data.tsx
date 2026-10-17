import { SITE } from "./site";

/** Injects a JSON-LD block. `data` must be serialisable, which the shapes below are. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: `${SITE.url}/`,
  slogan: SITE.tagline,
  email: SITE.emails[1],
  telephone: "+91-80194-55105",
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-80194-55105",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

/** One LocalBusiness per office — must match the Google Business Profile exactly. */
export const LOCAL_BUSINESSES = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: `${SITE.url}/`,
    telephone: "+91-80194-55105",
    email: SITE.emails[1],
    address: {
      "@type": "PostalAddress",
      streetAddress: "[STREET ADDRESS]",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: "[LATITUDE]", longitude: "[LONGITUDE]" },
    areaServed: "IN",
    sameAs: ["[GOOGLE BUSINESS PROFILE URL]", "[LINKEDIN URL]"],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: `${SITE.url}/`,
    telephone: "+91-80194-55105",
    email: SITE.emails[1],
    address: {
      "@type": "PostalAddress",
      streetAddress: "[STREET ADDRESS]",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: ["[GOOGLE BUSINESS PROFILE URL]"],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: `${SITE.url}/`,
    telephone: "+91-80194-55105",
    email: SITE.emails[1],
    address: {
      "@type": "PostalAddress",
      streetAddress: "[STREET ADDRESS]",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: ["[GOOGLE BUSINESS PROFILE URL]"],
  },
];

export const FAQ_PAGE = (faqs: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const SOFTWARE_APPLICATION = (plans: readonly { name: string; monthly: string; for: string; items: readonly string[] }[]) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AMAZE",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  description:
    "Agentic AI that plans, designs, costs and checks exhibition booths, developed on 1,000+ booth designs and 850+ booths built.",
  offers: plans
    .filter((p) => !p.monthly.includes("⟨"))
    .map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.for,
      price: p.monthly.replace(/[^\d.]/g, "") || undefined,
      priceCurrency: "INR",
      category: "subscription",
    })),
});

export const BREADCRUMBS = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

export const EVENT_SCHEMA = (events: readonly { name: string; dates: string; venue: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Upcoming exhibitions in India",
  itemListElement: events.map((e) => ({
    "@type": "Event",
    name: e.name,
    location: { "@type": "Place", name: e.venue },
    description: `${e.name} — ${e.venue}`,
  })),
});
