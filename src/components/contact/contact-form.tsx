"use client";

import { useState, type FormEvent } from "react";
import { BUDGET_BANDS, ENQUIRY_PATHS, SITE } from "@/lib/site";

const PATHS = ENQUIRY_PATHS.map((p) => ({ ...p }));

/** Enquiry type cards driving a conditional brief form. */
export function ContactForm() {
  const [pathId, setPathId] = useState<string>("quote");
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const path = PATHS.find((p) => p.id === pathId) ?? PATHS[2];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <div className="flex flex-col gap-6">
      <fieldset className="m-0 flex flex-col gap-4 border-0 p-0">
        <legend className="mb-1 text-[1.5rem] font-extrabold tracking-tight">
          What would you like to do?
        </legend>
        <div role="group" aria-label="Enquiry type" className="grid gap-4 sm:grid-cols-2">
          {PATHS.map((option) => {
            const selected = option.id === pathId;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setPathId(option.id);
                  setStatus("idle");
                }}
                className={`flex min-h-[110px] flex-col gap-1.5 rounded-2xl border-2 p-5 text-left transition-colors ${
                  selected
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink hover:border-brand"
                }`}
              >
                <span className="text-[1.125rem] font-extrabold">{option.title}</span>
                <span
                  className={`text-sm leading-snug ${selected ? "text-brand-tint" : "text-ink-soft"}`}
                >
                  {option.sub}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-6 shadow-card sm:p-6"
        >
          <h2 className="m-0 text-[1.375rem] font-extrabold">{path.form}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Full name
              <input name="name" type="text" autoComplete="name" required className="field mt-1.5" />
            </label>
            <label className="field-label">
              Company
              <input name="company" type="text" autoComplete="organization" className="field mt-1.5" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Email
              <input name="email" type="email" autoComplete="email" required className="field mt-1.5" />
            </label>
            <label className="field-label">
              Phone / WhatsApp
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91"
                className="field mt-1.5"
              />
            </label>
          </div>

          {path.needsShow ? (
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="field-label sm:col-span-2">
                Show name and dates
                <input
                  name="show"
                  type="text"
                  placeholder="e.g. IMTEX, 21–27 Jan 2027"
                  className="field mt-1.5"
                />
              </label>
              <label className="field-label">
                Booth size (m²)
                <input name="size" type="text" placeholder="e.g. 6x9 m" className="field mt-1.5" />
              </label>
              <label className="field-label sm:col-span-3 sm:max-w-xs">
                Budget band
                <select name="budget" className="field mt-1.5" defaultValue={BUDGET_BANDS[0]}>
                  {BUDGET_BANDS.map((band) => (
                    <option key={band}>{band}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}

          {path.isOrganiser ? (
            <label className="field-label">
              Show you organise and number of exhibitors
              <input name="organiser" type="text" className="field mt-1.5" />
            </label>
          ) : null}

          {path.isDemo ? (
            <div className="rounded-xl border border-gold/40 bg-gold-wash p-5">
              <p className="m-0 text-sm font-bold text-gold-ink">
                Booking calendar · pick a 20-minute demo slot
              </p>
              <p className="mt-1 mb-0 text-xs text-gold-ink/85">
                Embeds the scheduling widget; availability is held server-side.
              </p>
            </div>
          ) : null}

          <label className="field-label">
            Message
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Numbers, @ and symbols are all fine — up to 1,000 characters"
              className="field mt-1.5 resize-y"
            />
          </label>

          <label className="field-label">
            Upload brief, floor plan or brand guide (optional)
            <input
              name="attachment"
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
              className="mt-1.5 block w-full text-sm font-medium file:mr-4 file:rounded-lg file:border-0 file:bg-gold-wash file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-gold-ink"
            />
          </label>

          <button type="submit" className="btn btn-primary self-start">
            {path.submit}
          </button>

          <p aria-live="polite" className="m-0 text-sm text-ink-mute">
            {status === "sent" ? (
              <span className="font-semibold text-brand">
                Thank you — this demo form does not send yet. Wire it to your inbox or CRM before
                launch.
              </span>
            ) : (
              <>
                AMAZE emails you a draft brief within minutes. By sending, you agree to our{" "}
                <a href="#privacy" className="font-semibold text-brand">
                  Privacy Policy
                </a>
                .
              </>
            )}
          </p>
        </form>

        <aside className="flex flex-col gap-5">
          <div className="flex flex-col gap-2.5 rounded-[20px] bg-ink p-6 text-[#F9FAFB]">
            <h2 className="m-0 text-xl font-bold">Talk to us directly</h2>
            <p className="m-0 text-base leading-relaxed">
              <a href="mailto:jp@amazexpo.com" className="text-[#F9FAFB] no-underline hover:text-gold">
                jp@amazexpo.com
              </a>{" "}
              ·{" "}
              <a href="mailto:info@amazexpo.com" className="text-[#F9FAFB] no-underline hover:text-gold">
                info@amazexpo.com
              </a>
            </p>
            <p className="m-0 text-sm text-mist">{SITE.cities.join(" · ")}</p>
            <a
              href={SITE.whatsapp}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-[10px] bg-whatsapp px-4 py-2.5 font-bold text-night no-underline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.5 14c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.5-4.1-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.4.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 1c.2.1.4.2.4.3.1.2.1.6 0 1.2z" />
              </svg>
              Chat with AMAZE on WhatsApp
            </a>
          </div>

          <div className="rounded-[20px] border border-line bg-white p-6">
            <h2 className="m-0 mb-2 text-lg font-bold">Google reviews</h2>
            <div className="rounded-xl border border-gold/40 bg-gold-wash px-4 py-6 text-center">
              <p className="m-0 text-[0.8125rem] font-bold text-gold-ink">
                Google Business Profile · star rating, 3 latest reviews, “Write a review” link
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
