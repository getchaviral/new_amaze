/**
 * A 6 m × 3.6 m exhibition booth drawn as a front elevation.
 *
 * The same geometry is drawn twice: once as a wireframe "AI concept" and once
 * as the finished, built booth. Because both share one coordinate system, the
 * render-vs-reality slider lines up exactly — the concept literally becomes the
 * build as you drag.
 */

type Variant = "wire" | "built";

const CRIMSON = "#B22234";
const CRIMSON_DEEP = "#7A1222";
const GOLD = "#D4A037";
const GOLD_DEEP = "#8A6A1F";

export function BoothElevation({
  variant,
  className = "",
  showDimensions = true,
}: {
  variant: Variant;
  className?: string;
  showDimensions?: boolean;
}) {
  const built = variant === "built";
  const stroke = built ? GOLD_DEEP : GOLD;
  const dim = built ? "#E5E7EB" : "#D1D5DB";

  return (
    <svg
      viewBox="0 0 900 520"
      className={className}
      role="img"
      aria-label={
        built
          ? "Finished exhibition booth: brand wall, LED screen, reception counter and meeting area"
          : "AI concept wireframe of a 6 by 3.6 metre exhibition booth"
      }
    >
      <defs>
        <linearGradient id="booth-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={built ? "#2A3444" : "transparent"} />
          <stop offset="100%" stopColor={built ? "#161D29" : "transparent"} />
        </linearGradient>
        <linearGradient id="booth-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GOLD} stopOpacity={built ? 0.35 : 0} />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
        <pattern id="booth-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0H0V50" fill="none" stroke={dim} strokeOpacity="0.12" strokeWidth="1" />
        </pattern>
      </defs>

      {/* drawing grid */}
      <rect x="0" y="0" width="900" height="520" fill="url(#booth-grid)" />

      {/* floor */}
      <rect x="150" y="430" width="600" height="46" fill="url(#booth-floor)" />

      {/* structural frame */}
      <rect
        x="150"
        y="70"
        width="600"
        height="360"
        fill={built ? "#171F2B" : "none"}
        stroke={stroke}
        strokeWidth={built ? 3 : 2}
        strokeDasharray={built ? undefined : "10 7"}
      />

      {/* back wall — brand panel */}
      <rect
        x="150"
        y="70"
        width="240"
        height="360"
        fill={built ? CRIMSON : "none"}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={built ? undefined : "10 7"}
      />

      {/* brand mark on the wall */}
      <g opacity={built ? 1 : 0.9}>
        <rect
          x="228"
          y="196"
          width="84"
          height="84"
          rx="14"
          fill={built ? "#FFFFFF" : "none"}
          stroke={built ? "none" : GOLD}
          strokeWidth="2"
          strokeDasharray={built ? undefined : "8 6"}
        />
        <text
          x="270"
          y="256"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="46"
          fontWeight="800"
          fill={built ? CRIMSON : GOLD}
        >
          A
        </text>
      </g>

      {/* LED screen */}
      <rect
        x="430"
        y="118"
        width="260"
        height="172"
        rx="6"
        fill={built ? "#0B1017" : "none"}
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray={built ? undefined : "10 7"}
      />
      {built ? (
        <g>
          <rect x="446" y="134" width="228" height="140" rx="3" fill="#12202E" />
          <path d="M446 240l56-52 44 38 40-30 88 78H446z" fill={GOLD} opacity="0.5" />
          <circle cx="500" cy="172" r="14" fill={GOLD} opacity="0.75" />
        </g>
      ) : (
        <path
          d="M430 232h260M560 118v172"
          stroke={GOLD}
          strokeWidth="1.5"
          strokeDasharray="7 6"
          opacity="0.7"
        />
      )}

      {/* warm light wash from the screen, built variant only */}
      {built ? (
        <rect x="410" y="290" width="300" height="150" fill="url(#booth-glow)" />
      ) : null}

      {/* reception counter */}
      <g>
        <rect
          x="184"
          y="330"
          width="176"
          height="100"
          rx="6"
          fill={built ? CRIMSON_DEEP : "none"}
          stroke={stroke}
          strokeWidth="2"
          strokeDasharray={built ? undefined : "10 7"}
        />
        <rect
          x="184"
          y="330"
          width="176"
          height="16"
          rx="4"
          fill={built ? GOLD : "none"}
          stroke={stroke}
          strokeWidth="1.5"
        />
      </g>

      {/* meeting table + two stools */}
      <g stroke={stroke} strokeWidth="2" strokeDasharray={built ? undefined : "8 6"}>
        <ellipse
          cx="620"
          cy="386"
          rx="74"
          ry="22"
          fill={built ? "#3B4757" : "none"}
        />
        <path d="M620 386v44" />
        <circle cx="556" cy="404" r="17" fill={built ? CRIMSON : "none"} />
        <circle cx="684" cy="404" r="17" fill={built ? CRIMSON : "none"} />
      </g>

      {/* hanging banner */}
      <g>
        <path d="M560 70V34" stroke={stroke} strokeWidth="1.5" />
        <rect
          x="470"
          y="14"
          width="180"
          height="34"
          rx="5"
          fill={built ? CRIMSON : "none"}
          stroke={stroke}
          strokeWidth="1.5"
          strokeDasharray={built ? undefined : "8 6"}
        />
        {built ? (
          <text
            x="560"
            y="37"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="15"
            fontWeight="800"
            letterSpacing="3"
            fill="#FFFFFF"
          >
            AMAZE
          </text>
        ) : null}
      </g>

      {showDimensions ? (
        <g fontFamily="Inter, sans-serif" fontSize="14" fill={dim}>
          {/* width */}
          <path d="M150 486h600" stroke={dim} strokeWidth="1.5" />
          <path d="M150 478v16M750 478v16" stroke={dim} strokeWidth="1.5" />
          <text x="450" y="512" textAnchor="middle" fontWeight="600">
            6.00 m
          </text>
          {/* height */}
          <path d="M118 70v360" stroke={dim} strokeWidth="1.5" />
          <path d="M110 70h16M110 430h16" stroke={dim} strokeWidth="1.5" />
          <text
            x="104"
            y="254"
            textAnchor="middle"
            fontWeight="600"
            transform="rotate(-90 104 254)"
          >
            3.60 m
          </text>
        </g>
      ) : null}
    </svg>
  );
}

/** Small standalone mark used in the header lockup and footer. */
export function AmazeMark({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-[10px] bg-brand text-white ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.46 }}
      aria-hidden="true"
    >
      <span className="font-extrabold leading-none">A</span>
    </span>
  );
}
