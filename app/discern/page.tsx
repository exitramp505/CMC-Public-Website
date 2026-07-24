import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Users,
} from "lucide-react";

import discernContent from "@/content/discern.json";

export const metadata: Metadata = {
  title: "Discernment Center",
  description:
    "Learn about the CMC Discernment Center for leaders exploring a call to church pioneering.",
  alternates: { canonical: "/discern" },
};

const process = [
  {
    title: "Apply",
    text: "Begin by completing the application so regional leaders can learn more about your calling, ministry experience, and current context.",
    icon: ClipboardCheck,
  },
  {
    title: "Prepare",
    text: "Candidates prepare a short presentation that helps the team hear their call to ministry, philosophy of ministry, and recruiting message.",
    icon: MessageSquareText,
  },
  {
    title: "Participate",
    text: "The Discernment Center is an interactive multi-day gathering with church pioneering exercises, interviews, observation, coaching, and prayer.",
    icon: Users,
  },
  {
    title: "Discern",
    text: "After the center, candidates receive feedback and a recommended next step for development, deployment, or further preparation.",
    icon: Compass,
  },
];

const categories = [
  {
    title: "Calling",
    text: "Does this person demonstrate a clear and durable sense of call to pioneering ministry?",
  },
  {
    title: "Character",
    text: "Is there visible maturity, integrity, humility, teachability, and spiritual depth?",
  },
  {
    title: "Capacity",
    text: "Does this person show the leadership, communication, relational, and missional ability needed for the work ahead?",
  },
  {
    title: "Competency",
    text: "Are the person, spouse, team, support structure, and ministry environment aligned in a way that gives the work a healthy foundation?",
  },
];

const outcomes = [
  "Clarify your call to pioneering ministry",
  "Receive feedback from experienced multiplication leaders",
  "Discern your current readiness for next steps",
  "Identify areas of strength, growth, and support",
];

export default function DiscernPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 brand-panel" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block dot-arc" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-ember">
              {discernContent.heroEyebrow}
            </p>

            <h1 className="poster-type mt-6 text-[4.25rem] text-[#FBF0DE] md:text-[6rem] lg:text-[7.25rem]">
              {discernContent.heroTitle}
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[#FBF0DE] md:text-xl">
              {discernContent.heroDescription}
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-[#FBF0DE]/14 bg-[#151616]/24 px-5 py-4 text-[#FBF0DE]">
                <CalendarDays className="shrink-0 text-ember" size={24} />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FBF0DE] opacity-60">
                    Dates
                  </p>
                  <p className="mt-1 text-base font-black">{discernContent.dates}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#FBF0DE]/14 bg-[#151616]/24 px-5 py-4 text-[#FBF0DE]">
                <MapPin className="shrink-0 text-ember" size={24} />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FBF0DE] opacity-60">
                    Location
                  </p>
                  <p className="mt-1 text-base font-black">{discernContent.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={discernContent.applicationUrl}
                className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
              >
                Start Your Application <ArrowRight size={18} />
              </Link>

              <a
                href="#what-to-expect"
                className="button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-extrabold transition"
              >
                What to Expect
              </a>
            </div>
          </div>

          <div className="soft-panel rounded-[2rem] bg-sand p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-slate/20 pb-6">
              <ShieldCheck className="text-slate" size={42} />

              <p className="text-right text-xs font-extrabold uppercase tracking-[0.26em] text-slate">
                Calling
                <br />
                Character
                <br />
                Capacity
                <br />
                Competency
              </p>
            </div>

            <p className="text-3xl font-black leading-tight tracking-[-.035em] text-ink md:text-5xl">
              A guided process for leaders exploring pioneering ministry.
            </p>

            <div className="mt-8 grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-white/70 px-4 py-3 text-slate">
                  <CheckCircle2 className="mt-1 shrink-0 text-sage" size={20} />
                  <p className="text-sm font-bold leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="what-to-expect" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            What to Expect
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[64px]">
            {discernContent.whatToExpectTitle}
          </h2>

          <div className="mx-auto mt-7 max-w-4xl space-y-5 text-lg font-medium leading-9 text-slate">
            <p>{discernContent.whatToExpectParagraphOne}</p>
            <p>{discernContent.whatToExpectParagraphTwo}</p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="texture-card rounded-[1.7rem] p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sage/12 text-sage">
                  <Icon size={38} strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-[-.025em] text-ink">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="accent-line mx-auto" />

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Evaluation Focus
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[64px]">
              Four areas help guide the conversation.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-[#FBF0DE]">
              Coaches look for patterns of health, readiness, and alignment across the candidate’s life, leadership, relationships, and ministry context.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-[1.7rem] border border-[#FBF0DE]/14 bg-[#151616]/26 p-7"
              >
                <h3 className="text-3xl font-black tracking-[-.035em] text-[#FBF0DE]">
                  {category.title}
                </h3>

                <p className="mt-4 text-base font-medium leading-8 text-[#FBF0DE] opacity-80">
                  {category.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="brand-panel mx-auto max-w-5xl rounded-[2rem] p-8 text-center shadow-brand md:p-12">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            Ready to Begin?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[64px]">
            Start your Discernment Center application.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-[#FBF0DE]">
            The application gives regional leaders the information needed to understand your story, your sense of call, and the next step you are exploring.
          </p>

          <div className="mt-10">
            <Link
              href={discernContent.applicationUrl}
              className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
            >
              Get Started on Your Application <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
