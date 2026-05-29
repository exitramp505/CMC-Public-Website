import Link from 'next/link';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="border-t border-slate/15 bg-ink text-sand">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <LogoMark inverse />
            <p className="mt-4 max-w-xl text-sm leading-7 text-sand/74">
              Helping pastors, pioneers, and churches make disciples, develop leaders, and multiply churches.
            </p>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-ember">Explore</p>
            <div className="mt-4 grid gap-3 text-sm text-sand/74">
              <Link href="/pathways" className="hover:text-ember">Pathways</Link>
              <Link href="/models" className="hover:text-ember">Models</Link>
              <Link href="/events" className="hover:text-ember">Events</Link>
              <Link href="/resources" className="hover:text-ember">Resources</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-ember">Begin</p>
            <div className="mt-4 grid gap-3 text-sm text-sand/74">
              <Link href="/discover" className="hover:text-ember">Discover: Church Multiplication 101</Link>
              <Link href="/contact" className="hover:text-ember">Start a Conversation</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 h-px bg-sand/15" />
        <p className="mt-6 text-xs text-sand/55">© {new Date().getFullYear()} Church Multiplication Collective. A ministry pathway of Open Bible Churches.</p>
      </div>
    </footer>
  );
}
