import type { Metadata } from "next";
import {
  Church,
  CircleDot,
  Compass,
  Network,
  UsersRound,
} from "lucide-react";

import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Church Multiplication Models",
  description:
    "Compare five church multiplication models and the biblical essentials shared by every Open Bible church expression.",
  alternates: { canonical: "/models" },
};

const essentials = [
  "Jesus is worshiped and obeyed",
  "Disciples are reached and developed",
  "Leaders are established and multiplied",
  "Saints are assembled and equipped",
  "Sacraments are honored and observed",
];

const models = [
  {
    number: "01",
    title: "Church Launch",
    short: "Public launch",
    movement: "Gather · Launch · Establish",
    icon: Church,
    summary:
      "A prepared team gathers people and establishes a visible new congregation in a community.",
    ledBy: "A pioneer and launch team",
    bestWhen: "Public leadership and a clear gathering strategy are present.",
    requires: "A sending church, location, launch plan, and sustained follow-up.",
    panel: "bg-ember text-ink",
  },
  {
    number: "02",
    title: "Missional Church",
    short: "Embedded presence",
    movement: "Embed · Disciple · Form",
    icon: Compass,
    summary:
      "Leaders live deeply within a community, making disciples and forming church through everyday relationships.",
    ledBy: "A pioneer or embedded team",
    bestWhen: "Trust must be built slowly within a distinct community or culture.",
    requires: "Patience, local presence, relational credibility, and disciple-making rhythms.",
    panel: "bg-sage text-[#FBF0DE]",
  },
  {
    number: "03",
    title: "Micro Church",
    short: "Reproducible communities",
    movement: "Gather · Equip · Reproduce",
    icon: CircleDot,
    summary:
      "Small, simple gatherings develop local leaders and reproduce without depending on a large weekly service.",
    ledBy: "Pioneers and local leaders",
    bestWhen: "Simple communities can form and multiply naturally.",
    requires: "Reproducible practices, trained leaders, accountability, and clear doctrine.",
    panel: "bg-slate text-[#FBF0DE]",
  },
  {
    number: "04",
    title: "Multi-Community Church",
    short: "One church, many communities",
    movement: "Send · Share · Localize",
    icon: UsersRound,
    summary:
      "One established church forms distinct worshiping communities that share mission, leadership, and resources.",
    ledBy: "An established sending church",
    bestWhen: "A church has capacity to reach distinct communities without forcing uniformity.",
    requires: "A leadership pipeline, shared governance, resources, and local ownership.",
    panel: "bg-sage text-[#FBF0DE]",
  },
  {
    number: "05",
    title: "Church Collective",
    short: "Incubator and covering",
    movement: "Cover · Coach · Release",
    icon: Network,
    summary:
      "A relational covering helps emerging churches and ministry communities develop before adopting a traditional structure.",
    ledBy: "A network, covering, or leadership team",
    bestWhen: "Fruit is emerging, but leadership and structure are still forming.",
    requires: "Coaching, covering, discernment, accountability, and time.",
    panel: "bg-ember text-ink",
  },
];

const discernmentQuestions = [
  "Who are we called to reach?",
  "What kind of leader is God raising up?",
  "What support and sending capacity are available?",
  "Which form can reproduce disciples, leaders, and churches here?",
];

function ChurchEssentialsDiagram() {
  return (
    <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-slate/10 bg-[#F3E4CC] p-4 shadow-2xl shadow-black/10 md:p-8">
      <svg
        viewBox="0 0 1000 875"
        className="hidden h-auto w-full md:block"
        role="img"
        aria-label="Christ-centered church essentials diagram showing missional community, qualified leadership, and relational connection converging in Christ and producing five shared marks of a church"
      >
        <defs>
          <filter id="essentialsShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#151616" floodOpacity=".15" />
          </filter>
          <marker
            id="arrowHead"
            markerWidth="12"
            markerHeight="12"
            refX="6"
            refY="6"
            orient="auto"
          >
            <path d="M0,0 L12,6 L0,12 Z" fill="#293D48" />
          </marker>
        </defs>

        <text
          x="500"
          y="48"
          textAnchor="middle"
          fill="#151616"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="25"
          fontWeight="900"
          letterSpacing="4"
        >
          THREE REALITIES CONVERGE
        </text>

        <circle cx="500" cy="260" r="220" fill="#4DA79C" fillOpacity=".70" stroke="#4DA79C" strokeWidth="8" />
        <circle cx="337" cy="455" r="220" fill="#EA9F43" fillOpacity=".70" stroke="#EA9F43" strokeWidth="8" />
        <circle cx="663" cy="455" r="220" fill="#293D48" fillOpacity=".63" stroke="#293D48" strokeWidth="8" />

        <g fontFamily="Montserrat, Arial, sans-serif" textAnchor="middle">
          <text x="500" y="135" fill="#151616" fontSize="29" fontWeight="900">
            MISSIONAL COMMUNITY
          </text>
          <text x="500" y="170" fill="#151616" fontSize="18" fontWeight="700">
            Worship · Disciples · Kingdom
          </text>

          <text x="300" y="555" fill="#151616" fontSize="27" fontWeight="900">
            QUALIFIED
          </text>
          <text x="300" y="588" fill="#151616" fontSize="27" fontWeight="900">
            LEADERSHIP
          </text>
          <text x="300" y="620" fill="#151616" fontSize="16" fontWeight="700">
            Trained · Appointed · Recognized
          </text>

          <text x="700" y="555" fill="#FBF0DE" fontSize="27" fontWeight="900">
            RELATIONAL
          </text>
          <text x="700" y="588" fill="#FBF0DE" fontSize="27" fontWeight="900">
            CONNECTION
          </text>
          <text x="700" y="620" fill="#FBF0DE" fontSize="16" fontWeight="700">
            Accountable · Networked · Committed
          </text>
        </g>

        <g filter="url(#essentialsShadow)">
          <circle cx="500" cy="390" r="118" fill="#151616" stroke="#FBF0DE" strokeWidth="10" />
        </g>
        <g
          fill="#FBF0DE"
          fontFamily="Montserrat, Arial, sans-serif"
          textAnchor="middle"
          fontWeight="900"
        >
          <text x="500" y="372" fontSize="24" letterSpacing="4">
            CHRIST
          </text>
          <text x="500" y="411" fontSize="34">
            CENTERED
          </text>
          <text x="500" y="446" fill="#EA9F43" fontSize="17" letterSpacing="2">
            THE SHARED CENTER
          </text>
        </g>

        <line
          x1="500"
          y1="535"
          x2="500"
          y2="692"
          stroke="#293D48"
          strokeWidth="7"
          markerEnd="url(#arrowHead)"
        />

        <text
          x="500"
          y="740"
          textAnchor="middle"
          fill="#151616"
          fontFamily="Montserrat, Arial, sans-serif"
          fontSize="23"
          fontWeight="900"
          letterSpacing="3"
        >
          PRODUCES A RECOGNIZABLE CHURCH
        </text>

        {[
          ["Jesus", "worshiped"],
          ["Disciples", "developed"],
          ["Leaders", "multiplied"],
          ["Saints", "equipped"],
          ["Sacraments", "honored"],
        ].map(([top, bottom], index) => {
          const x = 28 + index * 192;
          return (
            <g key={top}>
              <rect
                x={x}
                y="770"
                width="176"
                height="72"
                rx="20"
                fill={index % 2 === 0 ? "#293D48" : "#FBF0DE"}
                stroke="#293D48"
                strokeOpacity=".18"
                strokeWidth="2"
              />
              <text
                x={x + 88}
                y="800"
                textAnchor="middle"
                fill={index % 2 === 0 ? "#FBF0DE" : "#151616"}
                fontFamily="Montserrat, Arial, sans-serif"
                fontSize="18"
                fontWeight="900"
              >
                {top}
              </text>
              <text
                x={x + 88}
                y="825"
                textAnchor="middle"
                fill={index % 2 === 0 ? "#EA9F43" : "#4DA79C"}
                fontFamily="Montserrat, Arial, sans-serif"
                fontSize="16"
                fontWeight="800"
              >
                {bottom}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="md:hidden">
        <p className="text-center text-xs font-black uppercase tracking-[0.24em] text-slate">
          Three realities converge
        </p>

        <div className="relative mx-auto mt-7 flex h-44 w-44 items-center justify-center rounded-full border-8 border-[#FBF0DE] bg-slate text-center text-[#FBF0DE] shadow-2xl shadow-black/20">
          <div className="absolute -inset-4 rounded-full border border-dashed border-ember" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
              Christ
            </p>
            <p className="mt-1 text-2xl font-black uppercase leading-none">
              Centered
            </p>
          </div>
        </div>

        <div className="mx-auto h-8 w-px bg-slate/35" />

        <div className="grid gap-3">
          {[
            ["bg-sage text-[#FBF0DE]", "Missional community", "Worship · Disciples · Kingdom"],
            ["bg-ember text-ink", "Qualified leadership", "Trained · Appointed · Recognized"],
            ["bg-slate text-[#FBF0DE]", "Relational connection", "Accountable · Networked · Committed"],
          ].map(([color, title, detail]) => (
            <div key={title} className={`rounded-[1.5rem] p-5 text-center ${color}`}>
              <p className="text-lg font-black uppercase tracking-[-0.03em]">
                {title}
              </p>
              <p className="mt-2 text-xs font-bold opacity-75">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto h-8 w-px bg-slate/35" />
        <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate">
          Produces a recognizable church
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {essentials.map((item, index) => (
            <div
              key={item}
              className={`rounded-2xl px-4 py-4 text-center text-xs font-black ${
                index % 2 === 0
                  ? "bg-slate text-[#FBF0DE]"
                  : "bg-[#FBF0DE] text-ink"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ModelsPage() {
  return (
    <>
      <section className="brand-panel relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(234,159,67,0.2),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(77,167,156,0.18),transparent_32%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="accent-line" />
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Church Multiplication Models
            </p>
            <h1 className="mt-6 max-w-4xl text-[3.8rem] font-black leading-[0.86] tracking-[-0.07em] text-[#FBF0DE] sm:text-[5.2rem] lg:text-[6.5rem]">
              Different shapes.
              <span className="block text-ember">Same center.</span>
            </h1>
          </div>

          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-7 backdrop-blur-sm md:p-9">
            <p className="text-xl font-bold leading-9 text-[#FBF0DE]">
              Context changes the shape of a church—not its biblical center.
            </p>
            <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/72">
              These five models give pioneers and churches practical language
              for discerning what God may be forming.
            </p>
            <div className="mt-7 flex items-center gap-4 border-t border-[#FBF0DE]/15 pt-6">
              <span className="text-5xl font-black tracking-[-0.07em] text-ember">
                5
              </span>
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#FBF0DE]/70">
                models
                <br />
                one mission
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                The essentials
              </p>
              <h2 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[60px]">
                Shape can flex. The center cannot.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-8 text-slate">
              Every model must remain Christ-centered, led well, and
              relationally connected.
            </p>
          </div>

          <ChurchEssentialsDiagram />
        </div>
      </section>

      <section className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Compare the models
            </p>
            <h2 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[60px]">
              Five ways multiplication can take shape.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
              A model is a starting framework—not a formula. The right one
              fits the people, place, leader, and sending capacity.
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {models.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.title}
                  className="overflow-hidden rounded-[2rem] border border-slate/10 bg-[#FBF0DE] shadow-[0_22px_55px_rgba(21,22,22,0.10)]"
                >
                  <div className="grid lg:grid-cols-[.7fr_1.3fr]">
                    <div className={`relative overflow-hidden p-7 md:p-9 ${model.panel}`}>
                      <span className="pointer-events-none absolute -bottom-12 -right-4 text-[12rem] font-black leading-none tracking-[-0.1em] opacity-[0.09]">
                        {model.number}
                      </span>
                      <div className="flex items-start justify-between gap-5">
                        <span className="text-5xl font-black tracking-[-0.07em] opacity-35">
                          {model.number}
                        </span>
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-current/20 bg-[#FBF0DE]/15">
                          <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                      </div>
                      <p className="relative mt-7 text-xs font-black uppercase tracking-[0.24em] opacity-65">
                        {model.short}
                      </p>
                      <h3 className="relative mt-3 text-[36px] font-black leading-[0.94] tracking-[-0.05em] md:text-[48px]">
                        {model.title}
                      </h3>
                      <p className="relative mt-5 font-medium leading-7 opacity-80">
                        {model.summary}
                      </p>
                      <p className="relative mt-7 border-t border-current/20 pt-5 text-xs font-black uppercase tracking-[0.18em]">
                        {model.movement}
                      </p>
                    </div>

                    <div className="grid gap-px bg-slate/10 sm:grid-cols-3">
                      <div className="bg-[#FBF0DE] p-6 md:p-8">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                          Usually led by
                        </p>
                        <p className="mt-4 font-bold leading-7 text-slate">
                          {model.ledBy}
                        </p>
                      </div>
                      <div className="bg-[#FBF0DE] p-6 md:p-8">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                          Best when
                        </p>
                        <p className="mt-4 font-bold leading-7 text-slate">
                          {model.bestWhen}
                        </p>
                      </div>
                      <div className="bg-[#FBF0DE] p-6 md:p-8">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                          Requires
                        </p>
                        <p className="mt-4 font-bold leading-7 text-slate">
                          {model.requires}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Choosing a model
            </p>
            <h2 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[60px]">
              Discern fit—not popularity.
            </h2>
            <p className="mt-6 font-medium leading-8 text-slate">
              The biggest or fastest model is not automatically the most
              faithful. Begin with calling, context, and capacity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {discernmentQuestions.map((question, index) => (
              <div
                key={question}
                className="rounded-[1.6rem] border border-slate/15 bg-white/55 p-6 shadow-lg shadow-black/5"
              >
                <span className="text-sm font-black text-ember">
                  0{index + 1}
                </span>
                <p className="mt-3 font-bold leading-7 text-slate">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
