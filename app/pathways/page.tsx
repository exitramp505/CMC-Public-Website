import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CTA from "@/components/CTA";

const steps = [
  {
    phase: "Discover",
    title: "Shared language and first clarity.",
    summary:
      "Discover introduces the biblical foundation, core language, and practical models of church multiplication.",
    pioneer:
      "Clarify your burden and begin asking whether pioneering ministry may be your next faithful step.",
    church:
      "Recover a sending imagination and identify how your church could participate in new works.",
  },
  {
    phase: "Discern",
    title: "Calling, readiness, and fit.",
    summary:
      "Discernment clarifies whether the leader, church, context, and timing are aligned for the next step.",
    pioneer:
      "Discern calling, character, capacity, support needs, and the kind of assignment that may fit.",
    church:
      "Evaluate health, alignment, sending capacity, and the model your church can support well.",
  },
  {
    phase: "Develop",
    title: "Formation before movement.",
    summary:
      "Development prepares leaders and churches through disciple-making practice, leadership formation, team development, and strategy.",
    pioneer:
      "Build a ministry plan, form a team, practice disciple-making rhythms, and prepare for the work.",
    church:
      "Develop leaders, strengthen disciple-making systems, and prepare to release people well.",
  },
  {
    phase: "Deploy",
    title: "Sending with support.",
    summary:
      "Deployment moves leaders and churches from preparation into action with coaching, covering, and accountability.",
    pioneer:
      "Move into the field with prayer, coaching, support, and regional relationships.",
    church:
      "Send well, support well, and stay connected as the new work matures.",
  },
];

export default function PathwaysPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            Pathways
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[68px]">
            Two entry points. One multiplication pathway.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
            CMC helps pioneers and multiplying churches move from burden to clarity, from clarity to formation, and from formation to faithful action.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="texture-card rounded-[2rem] p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              I am a pioneer
            </p>

            <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[50px]">
              I carry a burden for something new.
            </h2>

            <p className="mt-5 font-medium leading-8 text-slate">
              You may be sensing a call to reach a people, form a disciple-making community, or pioneer a new work. The pathway helps you test that burden and prepare wisely.
            </p>
          </article>

          <article className="brand-panel rounded-[2rem] p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              We are a multiplying church
            </p>

            <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] md:text-[50px]">
              We want to become a sending church.
            </h2>

            <p className="mt-5 font-medium leading-8">
              Your church may be ready to develop leaders, bless new works, and recover a sending imagination. The pathway helps you discern readiness and next steps.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-4">
          <Link
            href="/discover"
            className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition"
          >
            Start Discover <ArrowRight size={18} />
          </Link>

          <a
            href="#pathway"
            className="inline-flex items-center justify-center rounded-full border border-slate/25 bg-white/35 px-7 py-4 text-sm font-extrabold text-slate transition hover:bg-white/55"
          >
            View the pathway below
          </a>
        </div>
      </section>

      <section id="pathway" className="brand-panel px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="accent-line" />

              <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                The pathway
              </p>

              <h2 className="mt-5 text-[40px] font-black leading-[0.94] tracking-[-0.052em] md:text-[64px]">
                Discover, Discern, Develop, Deploy.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg font-medium leading-8 text-[#FBF0DE]/85">
                CMC is a guided pathway for pioneers and multiplying churches, built around discernment, formation, sending, and support.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  ["Not pressure.", "Discern the right next step without forcing timing or model."],
                  ["Not one-size-fits-all.", "Different models can fit different contexts."],
                  ["Not alone.", "Move with coaching, covering, and regional support."],
                ].map(([lead, copy]) => (
                  <div key={lead} className="flex items-start gap-3 text-sm font-semibold leading-7 text-[#FBF0DE]/82">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ember shadow-[0_0_0_4px_rgba(234,159,67,0.14)]" />
                    <p>
                      <strong className="font-black text-[#FBF0DE]">{lead}</strong>{" "}
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-14 grid gap-9">
            <div className="absolute left-12 top-10 hidden h-[calc(100%-5rem)] w-1 rounded-full bg-gradient-to-b from-ember via-[#FBF0DE]/25 to-sage lg:block" />

            {steps.map((step, index) => (
              <article
                key={step.phase}
                className="relative grid gap-5 lg:grid-cols-[104px_1fr] lg:gap-7"
              >
                <div className="relative z-[1] flex h-16 w-16 items-center justify-center rounded-[1.1rem] border-4 border-ember bg-[#FBF0DE] text-2xl font-black tracking-[-0.06em] text-[#151616] shadow-xl shadow-black/20 lg:h-[100px] lg:w-[100px] lg:rounded-[1.75rem] lg:border-[6px] lg:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative overflow-hidden rounded-[2rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-8 shadow-xl shadow-black/15">
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-ember/15 blur-2xl" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                        {step.phase}
                      </p>

                      <h3 className="mt-3 text-[32px] font-black leading-[0.96] tracking-[-0.045em] md:text-[46px]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="font-medium leading-8 text-[#FBF0DE]/82">
                      {step.summary}
                    </p>
                  </div>

                  <div className="relative mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-6">
                      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ember">
                        Pioneer
                      </p>

                      <p className="mt-4 text-sm font-medium leading-7 text-[#FBF0DE]/84">
                        {step.pioneer}
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-6">
                      <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ember">
                        Multiplying church
                      </p>

                      <p className="mt-4 text-sm font-medium leading-7 text-[#FBF0DE]/84">
                        {step.church}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate/15 bg-white/55 p-8 shadow-xl shadow-black/5">
          <div className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Begin here
              </p>

              <h2 className="mt-4 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[50px]">
                Start with Discover.
              </h2>

              <p className="mt-5 max-w-2xl font-medium leading-8 text-slate">
                Discover: Church Multiplication 101 is the first step for both potential pioneers and churches exploring multiplication.
              </p>
            </div>

            <Link
              href="/discover"
              className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition"
            >
              Start Discover <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
