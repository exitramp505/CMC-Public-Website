import Link from "next/link";
import { ArrowRight, Compass, Flame, Sprout, Users } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import LogoMark from "@/components/LogoMark";

const audience = [
  {
    title: "Potential Pioneers",
    text: "For leaders sensing a call to form new disciple-making communities and pioneering works.",
    icon: Sprout,
  },
  {
    title: "Multiplying Pastors",
    text: "For pastors who want their church to become a sending church, not only a gathering church.",
    icon: Users,
  },
  {
    title: "Churches Ready to Send",
    text: "For congregations seeking a practical pathway for discernment, development, and deployment.",
    icon: Compass,
  },
];

const pathway = [
  [
    "01",
    "Discover",
    "Explore the theology, language, models, and first steps of church multiplication.",
  ],
  [
    "02",
    "Discern",
    "Clarify calling, readiness, fit, and the next faithful step with experienced leaders.",
  ],
  [
    "03",
    "Develop",
    "Build the character, competencies, team, and strategy needed for multiplication.",
  ],
  [
    "04",
    "Deploy",
    "Send pioneers and teams with coaching, covering, and practical support.",
  ],
];

const models = [
  "Church Launch",
  "Missional Church",
  "Micro Church",
  "Multi-Community Church",
  "The Church Collective",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 brand-panel" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block dot-arc" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.34em] text-ember">
              A ministry pathway of Open Bible Churches
            </p>

            <h1 className="poster-type mt-6 text-[4.75rem] text-[#FBF0DE] md:text-[7rem] lg:text-[8rem]">
              Mission to Multiply.
            </h1>

            <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[#FBF0DE] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] md:text-xl">
              The Church Multiplication Collective helps pastors and pioneers recover a sending imagination, form disciple-making communities, and multiply churches into new places.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/discover"
                className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
              >
                Start Discover: Church Multiplication 101 <ArrowRight size={18} />
              </Link>

              <Link
                href="/pathways"
                className="button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-extrabold transition"
              >
                Explore the Pathway
              </Link>
            </div>
          </div>

          <div className="soft-panel relative rounded-[2rem] bg-sand p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-slate/20 pb-6">
              <LogoMark compact />

              <p className="text-right text-xs font-extrabold uppercase tracking-[0.26em] text-slate">
                Discover
                <br />
                Discern
                <br />
                Develop
                <br />
                Deploy
              </p>
            </div>

            <p className="text-3xl font-black leading-tight tracking-[-.035em] text-ink md:text-5xl">
              A clear pathway for pastors and pioneers ready to move from burden to next step.
            </p>

            <div className="mission-stack mt-8 text-left">
              <div className="rounded-xl bg-slate px-5 py-4 text-[#FBF0DE]">
                <p className="text-xl font-black">Make Disciples</p>
              </div>

              <div className="rounded-xl bg-ink px-5 py-4 text-[#FBF0DE]">
                <p className="text-xl font-black">Develop Leaders</p>
              </div>

              <div className="rounded-xl bg-ember px-5 py-4 text-ink">
                <p className="text-xl font-black">Multiply Churches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Who this serves" title="For leaders built to send.">
          Built for potential pioneers and current pastors who want their churches to carry a missional mindset, a multiplying priority, and a mobilizing commitment.
        </SectionHeader>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
          {audience.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="texture-card rounded-[1.7rem] p-7">
                <Icon className="text-sage" size={30} />

                <h3 className="mt-7 text-2xl font-black tracking-[-.025em] text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="For pastors and pioneers" title="For leaders who carry a multiplying burden.">
          Some leaders are not content to only maintain what already exists. They feel the weight of unreached neighborhoods, unactivated leaders, and communities where the church has not yet taken root.
        </SectionHeader>

        <div className="brand-panel mx-auto mt-14 max-w-5xl rounded-[2rem] p-8 shadow-brand md:p-12">
          <Flame className="text-ember" size={38} />

          <p className="mt-6 text-xl font-semibold leading-9 text-[#FBF0DE]/90 md:text-2xl">
            The Church Multiplication Collective helps pastors and pioneers clarify calling, discern readiness, develop capacity, and take faithful steps toward multiplying churches and disciple-making communities.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#FBF0DE]/78">
            Not every multiplying work will look the same. Some will become new churches. Some will begin as missional communities, microchurches, multi-community expressions, or fresh models still being formed.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#FBF0DE]/78">
            We believe healthy churches can become sending churches. We believe ordinary disciples can become spiritual leaders. We believe new communities of faith can be formed wherever Jesus is obeyed, proclaimed, and embodied.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="The pathway" title="Discover. Discern. Develop. Deploy.">
          A simple process for leaders who want to explore multiplication without pretending every pioneer, pastor, or church starts in the same place.
        </SectionHeader>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-4">
          {pathway.map(([number, title, text]) => (
            <div key={title} className="soft-panel rounded-[1.7rem] p-6">
              <p className="text-5xl font-black text-ember">{number}</p>

              <h3 className="mt-6 text-2xl font-black tracking-[-.025em] text-ink">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            Models
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[68px]">
            Multiplication has more than one shape.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-[#FBF0DE] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            The Collective helps leaders discern the right model for their calling, context, and capacity.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {models.map((model) => (
            <Link
              key={model}
              href="/models"
              className="rounded-full border border-[#FBF0DE]/20 bg-[#151616]/40 px-5 py-3 text-sm font-bold text-[#FBF0DE] transition hover:bg-ember hover:text-ink"
            >
              {model}
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
