/**
 * Client logo wall.
 *
 * The canvas holds five "CLIENT LOGO" slots. Rather than fake brands, each slot
 * is a designed mark with a neutral caption, ready to be swapped for real
 * artwork without changing the layout.
 */

const MARKS: { id: string; path: React.ReactNode }[] = [
  { id: "a", path: <><circle cx="18" cy="18" r="12" /><path d="M18 6v24" /></> },
  { id: "b", path: <><path d="M18 5l13 23H5z" /><path d="M18 16l6 11H12z" /></> },
  { id: "c", path: <><rect x="6" y="6" width="24" height="24" rx="4" /><path d="M6 18h24M18 6v24" /></> },
  { id: "d", path: <><path d="M18 4l12 7v14l-12 7-12-7V11z" /><circle cx="18" cy="18" r="5" /></> },
  { id: "e", path: <><path d="M5 26l9-18 9 18" /><path d="M12 26h18" /></> },
];

export function LogoWall() {
  return (
    <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {MARKS.map((mark) => (
        <li
          key={mark.id}
          className="flex h-[74px] items-center gap-3 rounded-xl border border-line bg-cream px-4"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            stroke="#4B5563"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 opacity-70"
          >
            {mark.path}
          </svg>
          <span className="text-[0.6875rem] leading-tight font-bold tracking-[0.12em] text-ink-mute uppercase">
            Client
            <br />
            logo
          </span>
        </li>
      ))}
    </ul>
  );
}
