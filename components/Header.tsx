"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Pathways", href: "/pathways" },
  { label: "Models", href: "/models" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
];

const discoverHref = "/pathways";

function LogoMark() {
  return (
    <Link
      href="/"
      aria-label="Church Multiplication Collective home"
      className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-[3px] border-slate bg-cream shadow-sm transition hover:-translate-y-0.5"
    >
      <span className="relative block h-7 w-7">
        <span className="absolute left-1/2 top-1/2 h-7 w-[6px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-slate" />
        <span className="absolute left-1/2 top-1/2 h-7 w-[6px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-slate" />

        <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-ember" />
        <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-ember" />
        <span className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-ember" />
        <span className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-ember" />
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <LogoMark />

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold text-slate transition hover:text-ember"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={discoverHref}
            className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition"
          >
            Start Discover
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={discoverHref}
            className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold leading-none transition"
          >
            Start Discover
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
        <div className="border-t border-slate/10 bg-sand px-5 pb-5 pt-2 shadow-2xl shadow-black/10 md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-slate/10 bg-white/70 px-5 py-4 text-base font-black text-slate transition hover:border-ember/40 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
