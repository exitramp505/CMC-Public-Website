import Link from 'next/link';
import LogoMark from './LogoMark';

const nav = [
  { href: '/about', label: 'About' },
  { href: '/pathways', label: 'Pathways' },
  { href: '/models', label: 'Models' },
  { href: '/events', label: 'Events' },
  { href: '/resources', label: 'Resources' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-slate transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/discover" className="button-primary rounded-full px-5 py-2.5 text-sm font-extrabold transition">
          Start Discover
        </Link>
      </div>
    </header>
  );
}
