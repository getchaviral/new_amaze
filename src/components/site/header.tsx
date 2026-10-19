"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { NAV, SITE } from "@/lib/site";

const THEME_KEY = "amaze-theme";
const themeListeners = new Set<() => void>();

/**
 * The saved theme lives in localStorage, not React, so it is read through
 * `useSyncExternalStore` rather than copied into state inside an effect — which
 * would cascade a render on mount. Cross-tab changes arrive via `storage`.
 */
function subscribeTheme(onChange: () => void) {
  themeListeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    themeListeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function readTheme() {
  return window.localStorage.getItem(THEME_KEY) === "dark";
}

function writeTheme(isDark: boolean) {
  window.localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  themeListeners.forEach((listener) => listener());
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const darkMode = useSyncExternalStore(subscribeTheme, readTheme, () => false);

  // Sync the flag onto <html>. This only touches the DOM — no React state — so
  // there is no cascading render to warn about.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => writeTheme(!darkMode);

  // Escape closes the panel. The panel closes itself on navigation instead —
  // see the mobile nav links below — so no effect is needed for that.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="shell header-shell">
        <nav aria-label="Main" className="relative top-1 flex min-h-[72px] translate-x-2 flex-wrap items-center gap-x-8 gap-y-2 py-3 md:translate-x-3 xl:flex-nowrap xl:gap-x-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg text-ink no-underline"
          >
            <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-white/15">
              <Image
                src="/amaze-logo.png"
                alt="AMAZE"
                width={64}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="text-lg font-extrabold tracking-[0.08em]">AMAZE EXPO</span>
          </Link>

          <ul className="order-3 -mx-1 hidden w-full list-none flex-wrap gap-x-6 gap-y-1 xl:order-2 xl:mx-0 xl:flex xl:w-auto xl:flex-1 xl:flex-nowrap xl:justify-center xl:gap-x-3">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block whitespace-nowrap px-1 py-2.5 text-[0.9375rem] font-semibold no-underline transition-colors xl:text-sm ${
                      active ? "text-brand" : "text-ink hover:text-brand"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-opacity ${
                        active ? "bg-brand opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="order-2 ml-auto flex items-center gap-3 xl:order-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
              title={`Switch to ${darkMode ? "light" : "dark"} theme`}
              className="grid size-11 shrink-0 place-items-center rounded-lg border border-line text-ink transition-colors hover:bg-cream"
            >
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                </svg>
              )}
            </button>
            <Link href="/#generator" className="btn btn-primary hidden md:inline-flex">
              Generate your AI booth design
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-lg border border-line xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
                {open ? (
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 3l16 10M19 3L3 13" />
                  </g>
                ) : (
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 2h20M1 8h20M1 14h20" />
                  </g>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open ? (
          <div id="mobile-nav" className="border-t border-line pb-4 xl:hidden">
            <ul className="flex list-none flex-col">
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block border-b border-line py-3.5 text-base font-semibold no-underline ${
                        active ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/#generator"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 w-full"
            >
              Generate your AI booth design
            </Link>
            <p className="mt-3 text-sm text-ink-mute">
              <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-brand">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
        ) : null}
      </div>
    </header>
  );
}
