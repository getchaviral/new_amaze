"use client";

import { useState } from "react";
import Link from "next/link";
import { PLANS } from "@/lib/site";
import { Marked } from "@/components/ui/pending";

/** Plan grid with a monthly / annual switch. */
export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <h2 className="m-0 text-[2rem] leading-tight font-extrabold tracking-tight sm:text-[2.25rem]">
          AMAZE AI plans
        </h2>
        <div
          role="group"
          aria-label="Billing period"
          className="flex gap-1.5 rounded-xl border border-line bg-white p-1.5"
        >
          <button
            type="button"
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
            className={`min-h-11 rounded-lg px-4 text-[0.9375rem] font-bold transition-colors ${
              annual ? "text-ink hover:bg-cream" : "bg-brand text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
            className={`min-h-11 rounded-lg px-4 text-[0.9375rem] font-bold transition-colors ${
              annual ? "bg-brand text-white" : "text-ink hover:bg-cream"
            }`}
          >
            Annual · save <Marked>⟨X⟩%</Marked>
          </button>
        </div>
      </div>

      <ul className="m-0 grid list-none gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const featured = plan.featured;
          const price = annual ? plan.annual : plan.monthly;

          return (
            <li
              key={plan.name}
              className={`flex flex-col gap-3.5 rounded-[20px] p-7 ${
                featured ? "bg-ink text-[#F9FAFB]" : "card"
              }`}
            >
              <p
                className={`min-h-4 text-xs font-extrabold tracking-[0.16em] uppercase ${
                  featured ? "text-gold" : ""
                }`}
              >
                {featured ? plan.badge || "Most popular" : null}
              </p>
              <h3 className="m-0 text-xl font-extrabold">{plan.name}</h3>
              <p className={`m-0 text-[0.9375rem] leading-relaxed ${featured ? "text-mist" : "text-ink-soft"}`}>
                {plan.for}
              </p>
              <p className="mt-1 text-[2rem] leading-none font-extrabold">
                <Marked dark={featured}>{price}</Marked>
              </p>
              <p className={`m-0 text-[0.8125rem] ${featured ? "text-mist" : "text-ink-mute"}`}>
                {plan.custom ? "talk to us" : annual ? "per month, billed yearly" : "per month"}
              </p>
              <ul className="m-0 flex list-disc flex-col gap-2 pl-5 text-[0.9375rem] leading-relaxed">
                {plan.items.map((item) => (
                  <li key={item} className={featured ? "text-[#E5E7EB]" : "text-ink-soft"}>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn mt-auto ${featured ? "btn-onDark" : "btn-outline"}`}
              >
                {plan.cta}
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="m-0 text-sm text-ink-mute">
        Prices in INR, GST extra · Pay by UPI or card on our secure payment gateway · Cancel any
        time · Plan details and prices: <Marked>⟨CONFIRM BEFORE LAUNCH⟩</Marked>
      </p>
    </div>
  );
}
