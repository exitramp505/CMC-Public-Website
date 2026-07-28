import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  CMC_PATHWAY_LOGIN_URL,
  CMC_PATHWAY_SIGNUP_URL,
} from "@/lib/cmc-pathway";

export const metadata: Metadata = {
  title: "Discover: Church Multiplication 101",
  description:
    "Take a short online introductory course exploring the biblical foundation, shared language, models, and practical first steps of church multiplication.",
  alternates: { canonical: "/discover" },
};

const questions = [
  {
    number: "01",
    question: "What does church multiplication actually mean?",
    answer:
      "Build shared language around disciples, leaders, churches, sending, and multiplication.",
  },
  {
    number: "02",
    question: "Where might I—or my church—fit?",
    answer:
      "Compare multiplication models and recognize the roles of pioneers and sending churches.",
  },
  {
    number: "03",
    question: "What should the next step be?",
    answer:
      "Identify the questions that need deeper discernment before moving into preparation or deployment.",
  },
];

const topics = [
  "A biblical framework for multiplication",
  "Shared language for leaders and churches",
  "Different models of church multiplication",
  "The roles of pioneers and sending churches",
  "Personal and church-level next steps",
  "Preparation for deeper discernment",
];

export default function DiscoverPage() {
  return (
    <>
      <section className="brand-panel relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,rgba(234,159,67,0.19),transparent_28%),radial-gradient(circle_at_90%_82%,rgba(77,167,156,0.17),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] lg:grid-cols-[1.03fr_.97fr]">
          <div className="flex items-center px-5 py-20 lg:px-16 lg:py-28 xl:pl-24">
            <div className="max-w-3xl">
              <div className="accent-line" />
              <p className="mt-7 text-xs font-extrabold uppercase leading-5 tracking-[0.2em] text-ember sm:text-sm sm:tracking-[0.32em]">
                Discover · Church Multiplication 101
              </p>
              <h1 className="mt-6 text-[3.1rem] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#FBF0DE] sm:text-[5.7rem] sm:leading-[0.82] sm:tracking-[-0.075em] xl:text-[7rem]">
                Start with
                <span className="block text-ember">clarity.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#FBF0DE]/82">
                Discover is a short online course for pastors, pioneers, and
                churches. It offers a biblical foundation, shared language,
                and a practical introduction to church multiplication.
              </p>

              <Link
                href={CMC_PATHWAY_SIGNUP_URL}
                className="button-primary mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
              >
                Create your CMC Pathway account
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <p className="mt-3 text-xs font-semibold text-[#FBF0DE]/60">
                Your account gives you access to Discover and keeps your next
                steps in one place.
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <Image
              src="/discover-online-course.webp"
              alt="A pastor taking notes beside a laptop while completing an online course"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#293D48_0%,rgba(41,61,72,0.25)_26%,transparent_58%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(21,22,22,0.48),transparent_44%)]" />
            <p className="absolute bottom-7 left-7 max-w-sm text-sm font-bold leading-6 text-[#FBF0DE]/85 lg:left-10">
              Begin by understanding the invitation before deciding where it may lead.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                The purpose
              </p>
              <h2 className="mt-4 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[62px]">
                Three questions Discover helps you answer.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-8 text-slate">
              This short online course is orientation—not an assessment and
              not a commitment to launch. It gives you enough substance to
              understand the landscape and decide whether deeper discernment
              is warranted.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {questions.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] border border-slate/15 bg-white/55 p-8 shadow-xl shadow-black/5"
              >
                <span className="text-5xl font-black tracking-[-0.07em] text-ember">
                  {item.number}
                </span>
                <h3 className="mt-7 text-[27px] font-black leading-[1.02] tracking-[-0.04em] text-ink">
                  {item.question}
                </h3>
                <p className="mt-5 text-sm font-medium leading-7 text-slate">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <div>
            <div className="accent-line" />
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              What you will explore
            </p>
            <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
              A foundation for the conversations ahead.
            </h2>
            <p className="mt-6 max-w-xl font-medium leading-8 text-slate">
              You will work through an accessible online introduction to the
              biblical “why,” the people involved, the major multiplication
              models, and the decisions that come next. You will leave with a
              clearer framework for a real conversation about multiplication.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <div
                key={topic}
                className="flex min-h-32 gap-4 rounded-[1.5rem] border border-slate/15 bg-[#FBF0DE]/70 p-6"
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    index % 2 === 0
                      ? "bg-ember text-ink"
                      : "bg-sage text-[#FBF0DE]"
                  }`}
                >
                  <Check size={16} strokeWidth={3} aria-hidden="true" />
                </span>
                <p className="text-sm font-bold leading-6 text-slate">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Who should begin
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
              One course. Two important perspectives.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-ember/35 border-t-4 bg-white/55 p-8 shadow-xl shadow-black/5 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-ember">
                For pioneers
              </p>
              <h3 className="mt-5 text-[32px] font-black leading-[0.98] tracking-[-0.045em] text-ink md:text-[42px]">
                You sense a call toward something new.
              </h3>
              <p className="mt-5 font-medium leading-8 text-slate">
                Discover helps you name that burden, understand the available models, and decide whether to enter a deeper process of discerning calling and fit.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-sage/45 border-t-4 bg-slate p-8 text-[#FBF0DE] shadow-xl shadow-black/10 md:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sage/20 blur-2xl" />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-sage">
                  For pastors and churches
                </p>
                <h3 className="mt-5 text-[32px] font-black leading-[0.98] tracking-[-0.045em] md:text-[42px]">
                  Your church wants to multiply and send.
                </h3>
                <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/80">
                  Discover helps leaders build shared language, compare models, and identify what becoming a healthy sending church could require.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="brand-panel px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Begin Discover
            </p>
            <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-[#FBF0DE] sm:text-[42px] md:text-[62px]">
              Ready to explore church multiplication?
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#FBF0DE]/82">
              Create your CMC Pathway account first. Discover will be available
              on your dashboard, along with your progress and any next steps
              assigned by your regional leader.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-7">
            <Link
              href={CMC_PATHWAY_SIGNUP_URL}
              className="button-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
            >
              Create your CMC Pathway account
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <p className="mt-4 text-center text-xs font-semibold leading-6 text-[#FBF0DE]/65">
              Already have a CMC Pathway account?
            </p>
            <Link
              href={CMC_PATHWAY_LOGIN_URL}
              className="mt-2 inline-flex w-full items-center justify-center text-sm font-bold text-[#FBF0DE] underline decoration-ember/70 underline-offset-4 transition hover:text-ember"
            >
              Log in to continue
            </Link>
            <Link
              href="/pathways"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-[#FBF0DE]/80 transition hover:text-[#FBF0DE]"
            >
              Review the full CMC pathway
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
