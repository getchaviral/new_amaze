import type { ReactNode } from "react";

/** A photo or video slot, drawn as a designed surface rather than a dashed box. */
export function MediaSlot({
  label,
  detail,
  dark = false,
  icon,
  className = "",
  children,
}: {
  label: string;
  detail?: string;
  dark?: boolean;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`media ${dark ? "media-dark" : ""} ${className}`}>
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 py-8 text-center">
        {icon}
        <p
          className={`text-[0.9375rem] font-bold ${dark ? "text-[#F9FAFB]" : "text-gold-ink"}`}
        >
          {label}
        </p>
        {detail ? (
          <p className={`text-xs ${dark ? "text-mist" : "text-gold-ink/85"}`}>{detail}</p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

/** Photo icon used inside media slots. Decorative — the caption carries meaning. */
export function PhotoGlyph({ size = 40, tone = "#8A6A1F" }: { size?: number; tone?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={tone}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 17l-5-5-9 8" />
    </svg>
  );
}

/** Play icon for video slots. */
export function PlayGlyph({ size = 44, tone = "#D4A037" }: { size?: number; tone?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={tone}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M10 9l5 3-5 3z" />
    </svg>
  );
}

/** Map pin icon for the office cards. */
export function PinGlyph({ size = 20, tone = "currentColor" }: { size?: number; tone?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={tone}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Section heading block: eyebrow + heading + optional standfirst. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = "light",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow ${dark ? "text-gold" : "text-brand"}`}>{eyebrow}</p>
      ) : null}
      <Tag
        className={`text-[2rem] leading-[1.12] font-extrabold tracking-tight sm:text-[2.5rem] ${
          dark ? "text-[#F9FAFB]" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {lede ? (
        <p className={`text-lg leading-relaxed ${dark ? "text-mist" : "text-ink-soft"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/** A numbered statistic. */
export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-1">
      <p
        className={`text-[2.5rem] leading-none font-extrabold tracking-tight sm:text-[3rem] ${
          dark ? "text-gold" : "text-brand"
        }`}
      >
        {value}
      </p>
      <p className={`text-[0.9375rem] ${dark ? "text-mist" : "text-ink-soft"}`}>{label}</p>
    </div>
  );
}

/**
 * Alternating section ground.
 *
 * `className` targets the inner `.shell` wrapper, where the vertical padding
 * lives, so `!py-*` overrides work as expected. Use `outerClassName` for the
 * background section itself.
 */
export function Band({
  tone = "cream",
  children,
  className = "",
  outerClassName = "",
  id,
}: {
  tone?: "cream" | "white" | "ink" | "brand";
  children: ReactNode;
  className?: string;
  outerClassName?: string;
  id?: string;
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream",
    white: "bg-white",
    ink: "bg-ink text-[#F9FAFB]",
    brand: "bg-brand text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} ${outerClassName}`}>
      <div className={`shell py-16 sm:py-20 lg:py-24 ${className}`}>{children}</div>
    </section>
  );
}
