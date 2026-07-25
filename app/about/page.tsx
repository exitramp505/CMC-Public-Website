import type { Metadata } from "next";
import { Check, Church, Compass, Network, UsersRound } from "lucide-react";

import CTA from "@/components/CTA";
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
};

const leaders = teamContent.team as TeamMember[];

const commitments = [
  {
    icon: UsersRound,
    label: "Disciples before destinations",
    description:
      "Multiplication begins with people learning to hear Jesus, obey Jesus, and help others follow him—not simply with launching a service.",
  },
  {
    icon: Compass,
    label: "Discernment before deployment",
    description:
      "A burden matters, but it must be tested. We help pioneers and churches clarify calling, context, readiness, and the right next step.",
  },
  {
    icon: Network,
    label: "Relationship over isolation",
    description:
      "Leaders multiply more faithfully when they are connected to coaches, sending churches, regional leaders, and a shared mission.",
  },
];

const waysWeServe = [
  "Introduce leaders and churches to a biblical vision for multiplication",
  "Help pioneers discern calling, fit, readiness, and context",
  "Help churches identify how they can cultivate, send, and support",
  "Connect people to training, coaching, relationships, and practical next steps",
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
    return (
      <img
        src={leader.image}
        alt={leader.name}
        className="h-24 w-24 shrink-0 rounded-[1.5rem] object-cover shadow-lg shadow-black/5"
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
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              About the Collective
            </p>
            <h1 className="mt-6 max-w-4xl text-[3.6rem] font-black leading-[0.88] tracking-[-0.065em] text-[#FBF0DE] sm:text-[5rem] lg:text-[6.3rem]">
              Multiplication is not a solo journey.
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-7 backdrop-blur-sm md:p-9">
            <p className="text-xl font-bold leading-9 text-[#FBF0DE]">
              CMC helps Open Bible pastors, pioneers, and churches move from a
              multiplication burden to a faithful, supported next step.
            </p>
            <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/72">
              We create a pathway for discernment, preparation, relationship,
              and action—without pretending every person or church has the
              same calling.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Why CMC exists
            </p>
            <h2 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[60px]">
              A burden needs more than encouragement.
            </h2>
          </div>

          <div className="space-y-6 text-lg font-medium leading-8 text-slate">
            <p>
              Many leaders sense that God may be inviting them to start
              something new. Many churches want to multiply, but do not yet
              know how to identify pioneers, choose a model, or become a
              healthy sending church.
            </p>
            <p>
              CMC exists to close that gap. We help people name what they are
              sensing, ask better questions, develop the right foundations,
              and move forward with accountable relationships.
            </p>
            <p className="border-l-4 border-ember pl-6 font-bold text-ink">
              The goal is not activity for its own sake. The goal is faithful
              disciples, formed leaders, multiplying churches, and communities
              reached with the gospel.
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
            <h2 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[60px]">
              How we approach multiplication.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {commitments.map(({ icon: Icon, label, description }) => (
              <article
                key={label}
                className="rounded-[2rem] border border-slate/15 bg-[#FBF0DE]/75 p-8 shadow-xl shadow-black/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate text-[#FBF0DE]">
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
              What CMC does
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
                That mission gives CMC its direction. The Collective serves
                within Open Bible, connected to local churches, regional
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
              CMC Leadership
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[64px]">
              Connected across Open Bible regions.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
              National and regional leaders help pastors, pioneers, and
              churches pursue multiplication with relationships and
              accountability close to home.
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

      <CTA />
    </>
  );
}
