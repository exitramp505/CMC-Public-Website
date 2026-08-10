import type { Metadata } from "next";
import Link from "next/link";
import { Check, Church, Compass, Network, UsersRound } from "lucide-react";

import teamContent from "@/content/team.json";

export const metadata: Metadata = {
  title: "About the Church Multiplication Collective",
  description:
    "Learn why the Church Multiplication Collective exists and how it helps Open Bible pastors, pioneers, and churches discern, prepare for, and pursue multiplication.",
  alternates: { canonical: "/about" },
};

type TeamMember = {
  name: string;
  title: string;
  region: string;
  image?: string;
  imagePositionX?: number;
  imagePositionY?: number;
};

const leaders = teamContent.team as TeamMember[];

const commitments = [
  {
    icon: UsersRound,
    label: "Disciple-making before launching",
    description:
      "Multiplication begins with people following Jesus and helping others do the same. A public gathering is not the starting point.",
    iconClass: "bg-slate text-[#FBF0DE]",
  },
  {
    icon: Compass,
    label: "Discernment before deployment",
    description:
      "We help pioneers and churches clarify calling, character, readiness, context, and the wisest next step.",
    iconClass: "bg-ember text-ink",
  },
  {
    icon: Network,
    label: "Relationship over isolation",
    description:
      "Healthy multiplication depends on coaches, sending churches, regional relationships, and a shared mission.",
    iconClass: "bg-sage text-[#FBF0DE]",
  },
];

const waysWeServe = [
  "Introduce a biblical vision for multiplication",
  "Help pioneers discern calling and readiness",
  "Help churches cultivate, send, and support",
  "Connect leaders with training, coaching, and relationships",
];

function PlaceholderPortrait({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.5rem] border border-slate/15 bg-gradient-to-br from-[#FBF0DE] to-[#F1D2AC] text-2xl font-black tracking-[-0.06em] text-slate shadow-lg shadow-black/5">
      {initials}
    </div>
  );
}

function TeamPortrait({ leader }: { leader: TeamMember }) {
  if (leader.image) {
    const positionX = Math.min(100, Math.max(0, leader.imagePositionX ?? 50));
    const positionY = Math.min(100, Math.max(0, leader.imagePositionY ?? 30));

    return (
      <img
        src={leader.image}
        alt={leader.name}
        className="h-24 w-24 shrink-0 rounded-[1.5rem] object-cover shadow-lg shadow-black/5"
        style={{ objectPosition: `${positionX}% ${positionY}%` }}
      />
    );
  }

  return <PlaceholderPortrait name={leader.name} />;
}

export default function AboutPage() {
  return (
    <>
      <section className="brand-panel relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(234,159,67,0.2),transparent_28%),radial-gradient(circle_at_88%_76%,rgba(77,167,156,0.18),transparent_32%)]" />
        <img
          src="/open-bible-mark-white-transparent.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-36 w-[620px] max-w-none opacity-[0.08] md:w-[800px]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <div>
            <div className="accent-line" />
            <p className="mt-7 text-xs font-extrabold uppercase leading-5 tracking-[0.2em] text-ember sm:text-sm sm:tracking-[0.3em]">
              About the Church Multiplication Collective
            </p>
            <h1 className="mt-6 max-w-4xl text-[2.8rem] font-black leading-[0.93] tracking-[-0.05em] text-[#FBF0DE] sm:text-[5rem] sm:leading-[0.88] sm:tracking-[-0.065em] lg:text-[6.3rem]">
              A shared pathway for multiplying churches.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-7 backdrop-blur-sm md:p-9">
            <p className="text-xl font-bold leading-9 text-[#FBF0DE]">
              The Church Multiplication Collective brings pastors, sending
              churches, and pioneers—including those exploring a future with
              Open Bible—into one process for discerning, preparing, and
              supporting new works.
            </p>
            <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/72">
              Calling is tested in community, leaders are prepared with care,
              and churches remain connected to the people they send.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Why the Church Multiplication Collective exists
            </p>
            <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
              Church multiplication requires clarity and preparation.
            </h2>
          </div>

          <div className="space-y-6 text-lg font-medium leading-8 text-slate">
            <p>
              A sense of calling raises practical questions: Is the leader
              ready? What kind of church should take shape? Who will send,
              coach, and support the work? The Church Multiplication Collective
              helps Open Bible leaders answer those questions together.
            </p>
            <p className="border-l-4 border-ember pl-6 font-bold text-ink">
              We pursue faithful disciples, formed leaders, multiplying
              churches, and communities reached with the gospel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Our convictions
            </p>
            <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
              How we approach multiplication.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {commitments.map(({ icon: Icon, iconClass, label, description }) => (
              <article
                key={label}
                className="rounded-[2rem] border border-slate/15 bg-[#FBF0DE]/75 p-8 shadow-xl shadow-black/5"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}>
                  <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-[28px] font-black leading-[1] tracking-[-0.04em] text-ink">
                  {label}
                </h3>
                <p className="mt-5 text-sm font-medium leading-7 text-slate">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-ember p-8 text-ink md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-ink/65">
              What the Church Multiplication Collective does
            </p>
            <h2 className="mt-5 text-[38px] font-black leading-[0.95] tracking-[-0.05em] md:text-[52px]">
              We help make the next step clear.
            </h2>
            <div className="mt-8 space-y-5">
              {waysWeServe.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-ember">
                    <Check size={16} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <p className="font-bold leading-7">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="brand-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
            <Church
              className="absolute -bottom-10 -right-8 text-sage/10"
              size={250}
              strokeWidth={1}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-sage">
                Part of Open Bible
              </p>
              <h2 className="mt-5 text-[38px] font-black leading-[0.95] tracking-[-0.05em] text-[#FBF0DE] md:text-[52px]">
                Rooted in a shared mission.
              </h2>
              <p className="mt-7 text-xl font-bold leading-9 text-[#FBF0DE]">
                Open Bible Churches exist to globally make disciples, develop
                leaders, and multiply churches.
              </p>
              <p className="mt-6 font-medium leading-8 text-[#FBF0DE]/75">
                That mission guides the Church Multiplication Collective and
                keeps multiplication connected to local churches, regional
                relationships, and accountable leadership.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="accent-line mx-auto" />
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Church Multiplication Collective Leadership
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[40px] md:text-[64px]">
              Connected across Open Bible regions.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
              National and regional leaders support multiplication with
              relationships and accountability close to home.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={`${leader.name}-${leader.region}`}
                className="texture-card flex gap-5 rounded-[2rem] p-6"
              >
                <TeamPortrait leader={leader} />
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-ember">
                    {leader.region}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-ink">
                    {leader.name}
                  </h3>
                  <p className="mt-1 font-semibold leading-7 text-slate">
                    {leader.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-ink px-5 py-20 text-center text-[#FBF0DE] lg:px-8 lg:py-24"
        data-header-theme="dark"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
            The place to begin
          </p>
          <h2 className="mx-auto mt-5 text-[2.25rem] font-black leading-[0.96] tracking-[-0.05em] sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
            You do not need a complete plan to start exploring.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-[#FBF0DE]/75">
            Discover is a short online course for pioneers, pastors, churches,
            and anyone who wants to learn more about church multiplication.
          </p>
          <Link
            href="/discover"
            className="button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black"
          >
            Start Discover →
          </Link>
        </div>
      </section>
    </>
  );
}
