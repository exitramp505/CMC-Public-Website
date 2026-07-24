"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link
          href="/"
          aria-label="Church Multiplication Collective home"
          className="inline-flex shrink-0 rounded-xl transition hover:-translate-y-0.5"
        >
          <LogoMark inverse />
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
                    ? "text-ink after:scale-x-100"
                    : "text-slate after:scale-x-0 hover:text-ember hover:after:scale-x-100"
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

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={discoverHref}
            aria-current={pathname === discoverHref ? "page" : undefined}
            className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold leading-none transition"
          >
            Start Discover →
          </Link>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate/15 bg-white/75 text-slate shadow-sm transition hover:bg-white"
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
