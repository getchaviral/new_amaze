import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";

const LEGAL = [
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#refund", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="bg-night text-mist">
      <div className="shell flex flex-col gap-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.4fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5">
                <Image
                  src="/amaze-logo.png"
                  alt="AMAZE logo"
                  width={48}
                  height={42}
                  className="h-full w-full object-contain"
                />
              </span>
              <p className="text-lg font-extrabold tracking-[0.14em] text-white">AMZEXPO</p>
            </div>
            <p className="max-w-xs text-[0.9375rem] leading-relaxed">{SITE.tagline}</p>
            <p className="max-w-xs text-[0.8125rem] leading-relaxed text-mist-soft">
              {SITE.product} is a product developed by {SITE.legalName}.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5 text-[0.9375rem]">
            <p className="mb-1 font-bold text-white">Explore</p>
            {NAV.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="text-mist no-underline hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>

          <address className="flex flex-col gap-2.5 text-[0.9375rem] not-italic">
            <p className="mb-1 font-bold text-white">Contact</p>
            <span>{SITE.foundedBy}</span>
            <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-gold no-underline">
              {SITE.phoneDisplay}
            </a>
            <span className="flex flex-wrap gap-x-2">
              {SITE.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="text-mist no-underline hover:text-gold">
                  {email}
                </a>
              ))}
            </span>
            <span>{SITE.cities.join(" · ")}</span>
            <a
              href={SITE.whatsapp}
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-[10px] bg-whatsapp px-4 py-2.5 font-bold text-night no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 1c.2.1.4.2.4.3.1.2.1.6 0 1.2z" />
              </svg>
              Chat on WhatsApp
            </a>
          </address>

        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[0.8125rem] text-mist-soft sm:flex-row sm:items-center">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <a key={item.href} href={item.href} className="text-mist-soft no-underline hover:text-gold">
                {item.label}
              </a>
            ))}
            <span>
              Grievances:{" "}
              <a href={`mailto:${SITE.grievance}`} className="text-mist-soft hover:text-gold">
                {SITE.grievance}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
