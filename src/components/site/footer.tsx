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
            <a
              href="mailto:info@amazexpo.com"
              className="text-mist no-underline hover:text-gold"
            >
              info@amazexpo.com
            </a>
            <span>{SITE.cities.join(" · ")}</span>
            <a
              href={SITE.whatsapp}
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-[10px] bg-whatsapp px-4 py-2.5 font-bold text-night no-underline"
            >
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
