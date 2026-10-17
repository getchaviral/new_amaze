"use client";

/**
 * A single-select group of pills. The prototype used radio-like buttons; this
 * keeps the same 44px targets and exposes proper group semantics.
 */
export function PillGroup({
  legend,
  options,
  value,
  onChange,
  dark = false,
  className = "",
}: {
  legend?: string;
  options: readonly string[];
  value: string;
  onChange: (next: string) => void;
  dark?: boolean;
  className?: string;
}) {
  return (
    <fieldset className={`flex flex-col gap-3 ${className}`}>
      {legend ? (
        <legend className="text-[0.9375rem] font-bold">{legend}</legend>
      ) : null}
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`pill ${dark ? "pill-dark" : ""}`}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
