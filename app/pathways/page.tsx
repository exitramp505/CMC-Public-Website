import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pathways",
  description:
    "Explore the CMC pathway from Discover and Discern through Develop and Deploy for pioneers and multiplying churches.",
  alternates: { canonical: "/pathways" },
};

const steps = [
  {
    phase: "Discover",
    kicker: "Name the invitation",
    title: "Shared language and first clarity.",
    summary:
      "Explore the biblical foundation, core language, and practical models of church multiplication.",
    pioneer:
      "Clarify your burden and ask whether pioneering ministry may be your next faithful step.",
    church:
      "Recover a sending imagination and identify how your church could participate in new works.",
  },
  {
    phase: "Discern",
    kicker: "Test the calling",
    title: "Calling, readiness, and fit.",
    summary:
      "Clarify whether the leader, church, context, and timing are aligned for a wise next step.",
    pioneer:
      "Discern calling, character, capacity, support needs, and the kind of assignment that may fit.",
    church:
      "Evaluate health, alignment, sending capacity, and the model your church can support well.",
  },
  {
    phase: "Develop",
    kicker: "Prepare for the work",
    title: "Formation before movement.",
    summary:
      "Build disciple-making practice, leadership capacity, healthy teams, and a grounded ministry plan.",
    pioneer:
      "Form a team, establish disciple-making rhythms, and prepare a ministry plan for the work ahead.",
    church:
      "Develop leaders, strengthen disciple-making systems, and prepare to release people well.",
  },
  {
    phase: "Deploy",
    kicker: "Move with support",
    title: "Sending without going alone.",
    summary:
      "Move from preparation into faithful action with coaching, covering, accountability, and prayer.",
    pioneer:
      "Enter the field with coaching, support, prayer, and strong regional relationships.",
    church:
      "Send well, support well, and remain connected as the new work takes root and matures.",
  },
];

export default function PathwaysPage() {
  return (
    <>
      <section className="brand-panel relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(234,159,67,0.18),transparent_26%),radial-gradient(circle_at_88%_80%,rgba(77,167,156,0.18),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] lg:grid-cols-[1.02fr_.98fr]">
          <div className="flex items-center px-5 py-20 lg:px-16 lg:py-28 xl:pl-24">
            <div className="max-w-3xl">
              <div className="accent-line" />
              <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
                The CMC pathway
              </p>
              <h1 className="mt-6 text-[4.2rem] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[#FBF0DE] sm:text-[5.8rem] xl:text-[7.1rem]">
                From calling
                <span className="block text-ember">to sending.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#FBF0DE]/82">
                A guided journey for pioneers and churches moving from a burden for something new to a healthy, supported work in the field.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/discover"
                  className="button-primary inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
                >
                  Start Discover <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href="#pathway"
                  className="button-secondary inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
                >
                  See the pathway <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <Image
              src="/pathways-planning-conversation.webp"
              alt="Ministry leaders having a thoughtful planning conversation"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#293D48_0%,rgba(41,61,72,0.28)_26%,transparent_58%)] lg:block" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,22,22,0.52),transparent_45%)]" />
            <p className="absolute bottom-7 left-7 max-w-sm text-sm font-bold leading-6 text-[#FBF0DE]/85 lg:left-10">
              Discernment happens through prayer, honest questions, trusted leaders, and a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Choose your role
              </p>
              <h2 className="mt-4 text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[58px]">
                Are you pioneering—or preparing to send?
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-8 text-slate">
              The same four-stage pathway serves two different roles. Pioneers discern and prepare for a new work. Churches develop, release, and support the people they send.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="group rounded-[2rem] border border-ember/35 border-t-4 bg-white/55 p-8 shadow-xl shadow-black/5 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-ember">
                For the pioneer
              </p>
              <h3 className="mt-5 text-[32px] font-black leading-[0.98] tracking-[-0.045em] text-ink md:text-[42px]">
                “I carry a burden for something new.”
              </h3>
              <p className="mt-5 font-medium leading-8 text-slate">
                Test the calling, understand your context, and prepare for the kind of work God may be inviting you to begin.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-sage/45 border-t-4 bg-slate p-8 text-[#FBF0DE] shadow-xl shadow-black/10 md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sage/20 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-sage">
                  For the church
                </p>
                <h3 className="mt-5 text-[32px] font-black leading-[0.98] tracking-[-0.045em] md:text-[42px]">
                  “We want to become a sending church.”
                </h3>
                <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/80">
                  Develop leaders, discern your multiplication model, and learn to release and support people well.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pathway" className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="accent-line" />
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              How the pathway works
            </p>
            <h2 className="mt-5 text-[44px] font-black leading-[0.9] tracking-[-0.06em] text-ink md:text-[72px]">
              Four stages from first questions to supported launch.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate">
              Each stage has a specific purpose and a decision point. Leaders and churches move forward when they are ready—not simply because a calendar says it is time.
            </p>
          </div>

          <div className="mt-16 border-t-2 border-slate/15">
            {steps.map((step, index) => (
              <article
                key={step.phase}
                className="grid gap-7 border-b-2 border-slate/15 py-12 md:grid-cols-[120px_.82fr_1.18fr] md:gap-10 lg:py-16"
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="text-[54px] font-black leading-none tracking-[-0.08em] text-ember md:text-[72px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block h-1 w-10 rounded-full bg-sage md:mt-5" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.27em] text-sage">
                    {step.kicker}
                  </p>
                  <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.22em] text-ember">
                    {step.phase}
                  </p>
                  <h3 className="mt-4 text-[30px] font-black leading-[0.98] tracking-[-0.045em] text-ink md:text-[38px]">
                    {step.title}
                  </h3>
                  <p className="mt-5 font-medium leading-7 text-slate">
                    {step.summary}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate/15 bg-[#FBF0DE]/70 p-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-ember">
                      Pioneer
                    </p>
                    <p className="mt-4 text-sm font-medium leading-7 text-slate">
                      {step.pioneer}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate/15 bg-white/45 p-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-sage">
                      Church
                    </p>
                    <p className="mt-4 text-sm font-medium leading-7 text-slate">
                      {step.church}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Discern before deciding", "Test calling, readiness, context, and timing before making a commitment."],
              ["Choose the right model", "Shape the approach around the leader, sending church, and community being served."],
              ["Continue with support", "Stay connected to coaching, covering, prayer, and regional relationships after launch."],
            ].map(([title, copy]) => (
              <div key={title} className="border-l-4 border-ember pl-5">
                <h3 className="text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-slate">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
