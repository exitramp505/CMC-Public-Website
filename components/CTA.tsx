import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CMC_PATHWAY_SIGNUP_URL } from '@/lib/cmc-pathway';

export default function CTA() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="brand-panel mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-6 shadow-brand sm:p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-ember">Begin here</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.04em] text-sand sm:text-4xl md:text-6xl">Start Discover: Church Multiplication 101.</h2>
          <p className="mt-6 text-lg leading-8 text-sand/80">Explore the biblical foundation, shared language, and practical first steps for multiplying churches.</p>
          <Link href={CMC_PATHWAY_SIGNUP_URL} className="button-primary mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition">
            Start Discover <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
