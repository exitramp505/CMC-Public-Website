import { ReactNode } from 'react';

export default function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="accent-line mx-auto" />
      <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.32em] text-ember">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.04em] text-ink md:text-6xl">{title}</h2>
      {children && <p className="mt-6 text-base leading-8 text-slate md:text-lg">{children}</p>}
    </div>
  );
}
