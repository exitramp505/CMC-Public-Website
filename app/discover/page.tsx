import Link from "next/link";

import { ArrowRight } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";

const discoverLink =
  "https://acquire.pathwright.com/library/discover-church-multiplication-101-238879/register/725954/?ic=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnZpdGVfdHlwZSI6MSwic2VuZGVyX2lkIjoxOTM0MjI5LCJzY2hvb2xfaWQiOjEzOTk3LCJvZmZlcmluZ19pZCI6NzI1OTU0LCJyb2xlIjo1LCJpYXQiOjE3ODA2MTMzMzh9.l14elqh19_R804wFNo_kAOknqOFEVtNNpwidthjWVeY";

export default function DiscoverPage() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <SectionHeader eyebrow="Discover" title="Church Multiplication 101">
        The first step for pastors and potential pioneers who want to explore the call, theology, models, and practical pathway of church multiplication.
      </SectionHeader>

      <div className="mx-auto mt-14 max-w-5xl texture-card rounded-[2rem] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <h2 className="text-4xl font-black tracking-[-.035em] text-ink md:text-5xl">
              Start with clarity.
            </h2>

            <p className="mt-5 leading-8 text-slate">
              Discover is designed to help leaders understand multiplication language, identify possible models, evaluate next steps, and begin discerning whether they are being invited into a pioneering or sending role.
            </p>

            <ul className="mt-8 grid gap-3 text-sm text-slate">
              <li>• Explore a biblical framework for multiplication</li>
              <li>• Learn different models of church multiplication</li>
              <li>• Discern personal and church-level next steps</li>
              <li>• Prepare for deeper discernment and development</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate/15 bg-slate p-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
              Next step
            </p>

            <p className="mt-4 text-sm leading-7 text-[#FBF0DE]/80">
              Begin the Discover track and take the first step into the Church Multiplication Collective pathway.
            </p>

            <Link
              href={discoverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition"
            >
              Start Discover <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
