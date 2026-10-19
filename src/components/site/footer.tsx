import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { AmazeMark } from "@/components/art/booth";

const LEGAL = [
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#refund", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="bg-night text-mist">
      <div className="shell flex flex-col gap-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AmazeMark size={38} />
              <p className="text-lg font-extrabold tracking-[0.14em] text-white">AMAZE EXPO</p>
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

          <div className="flex flex-col gap-3">
            <p className="text-[0.9375rem] font-bold text-white">Find us on Google</p>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.6z" />
                  <path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A12 12 0 0 0 12 24z" />
                  <path fill="#FBBC05" d="M5.6 14.7a7.2 7.2 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.6z" />
                  <path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3A11.6 11.6 0 0 0 12 0 12 12 0 0 0 1.8 6.1l3.8 3c.9-2.8 3.4-4.3 6.4-4.3z" />
                </svg>
                <p className="font-bold text-white">Amaze Expo</p>
              </div>
              <a
                href="#google-profile"
                className="mt-3 inline-block text-sm font-semibold text-gold no-underline hover:underline"
              >
                Read reviews on Google →
              </a>
            </div>
          </div>
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
