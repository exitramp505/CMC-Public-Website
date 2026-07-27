"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import LogoMark from "@/components/LogoMark";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Pathways", href: "/pathways" },
  { label: "Models", href: "/models" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const discoverHref = "/discover";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    function detectBackground() {
      const header = headerRef.current;
      if (!header) return;

      const sampleY = Math.min(
        window.innerHeight - 1,
        header.getBoundingClientRect().bottom + 2,
      );
      const elements = document.elementsFromPoint(
        window.innerWidth / 2,
        sampleY,
      );
      let element: Element | null =
        elements.find((item) => !header.contains(item)) ?? null;
      let nextDark = false;

      while (element && element !== document.body) {
        const htmlElement = element as HTMLElement;
        const classes =
          typeof htmlElement.className === "string"
            ? htmlElement.className
            : "";
        const styles = window.getComputedStyle(htmlElement);

        if (
          htmlElement.matches(".brand-panel, [data-header-theme='dark']") ||
          classes.includes("bg-slate") ||
          classes.includes("bg-[#293D48]") ||
          classes.includes("bg-[#151616]") ||
          (classes.includes("text-[#FBF0DE]") &&
            styles.backgroundImage !== "none")
        ) {
          nextDark = true;
          break;
        }

        const colorMatch = styles.backgroundColor.match(
          /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
        );

        if (colorMatch && Number(colorMatch[4] ?? 1) > 0.15) {
          const red = Number(colorMatch[1]);
          const green = Number(colorMatch[2]);
          const blue = Number(colorMatch[3]);
          const luminance =
            (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

          nextDark = luminance < 0.46;
          break;
        }

        element = element.parentElement;
      }

      setDarkBackground(nextDark);
    }

    function requestDetection() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(detectBackground);
    }

    detectBackground();
    window.addEventListener("scroll", requestDetection, { passive: true });
    window.addEventListener("resize", requestDetection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestDetection);
      window.removeEventListener("resize", requestDetection);
    };
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[100] border-b shadow-lg backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 ${
        darkBackground
          ? "border-[#FBF0DE]/15 bg-[#151616]/45 shadow-black/20"
          : "border-slate/15 bg-[#FBF0DE]/55 shadow-black/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:px-8">
        <Link
          href="/"
          aria-label="Church Multiplication Collective home"
          className="inline-flex shrink-0 rounded-xl transition hover:-translate-y-0.5"
        >
          <LogoMark inverse className="[&_svg]:h-10 [&_svg]:w-10 sm:[&_svg]:h-11 sm:[&_svg]:w-11" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-extrabold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-ember after:transition-transform ${
                  active
                    ? `${
                        darkBackground ? "text-[#FBF0DE]" : "text-ink"
                      } after:scale-x-100`
                    : `${
                        darkBackground
                          ? "text-[#FBF0DE]/85"
                          : "text-slate"
                      } after:scale-x-0 hover:text-ember hover:after:scale-x-100`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={discoverHref}
            aria-current={pathname === discoverHref ? "page" : undefined}
            className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition"
          >
            Start Discover →
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <Link
            href={discoverHref}
            aria-current={pathname === discoverHref ? "page" : undefined}
            className="button-primary inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-extrabold leading-none transition sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm"
          >
            Start Discover <span className="hidden min-[360px]:inline">→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition sm:h-12 sm:w-12 ${
              darkBackground
                ? "border-[#FBF0DE]/25 bg-[#151616]/45 text-[#FBF0DE] hover:bg-[#151616]/65"
                : "border-slate/15 bg-white/60 text-slate hover:bg-white/85"
            }`}
          >
            {open ? <X size={25} strokeWidth={2.3} /> : <Menu size={26} strokeWidth={2.3} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate/10 bg-sand px-5 pb-5 pt-2 shadow-2xl shadow-black/10 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-2xl border px-5 py-4 text-base font-black transition ${
                    active
                      ? "border-ember/50 bg-ember/12 text-ink"
                      : "border-slate/10 bg-white/70 text-slate hover:border-ember/40 hover:bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
