import Link from "next/link";
import {
  ArrowRight,
  Check,
  Church,
  Compass,
  Home,
  Network,
  UsersRound,
} from "lucide-react";

const essentials = [
  "Jesus is worshiped and obeyed",
  "Disciples are reached and developed",
  "Leaders are established and multiplied",
  "Saints are assembled and equipped",
  "Sacraments are honored and observed",
];

const models = [
  {
    id: "church-launch",
    number: "01",
    type: "Public launch",
    label: "Church Launch",
    title: "Church Launch",
    icon: Church,
    text:
      "A public-launch approach that gathers a team, builds momentum, and establishes a visible new congregation in a community.",
    bestFit:
      "A pioneer with strong public leadership and a clear gathering strategy.",
    needs:
      "A sending church, launch team, visible location, and sustained follow-up.",
  },
  {
    id: "missional-church",
    number: "02",
    type: "Embedded presence",
    label: "Missional Church",
    title: "Missional Church",
    icon: Compass,
    text:
      "A relational model focused on long-term cultural engagement, disciple-making, and community formation in everyday spaces.",
    bestFit:
      "Leaders called to embed deeply in a community over time.",
    needs:
      "Patience, local presence, relational credibility, and disciple-making rhythms.",
  },
  {
    id: "micro-church",
    number: "03",
    type: "Reproducible communities",
    label: "Micro Church",
    title: "Micro Church",
    icon: Home,
    text:
      "Small, decentralized gatherings with simple structures, local leadership, and a clear multiplication emphasis.",
    bestFit:
      "Contexts where small communities can reproduce naturally.",
    needs:
      "Simple practices, trained leaders, accountability, and clear doctrine.",
  },
  {
    id: "multi-community",
    number: "04",
    type: "One church, many communities",
    label: "Multi-Community",
    title: "Multi-Community Church",
    icon: UsersRound,
    text:
      "A sending church forms new worshiping communities that reach distinct groups while sharing resources, covering, and leadership support.",
    bestFit:
      "Established churches with capacity to bless different communities.",
    needs:
      "Leadership pipeline, shared mission, clear governance, and local ownership.",
  },
  {
    id: "church-collective",
    number: "05",
    type: "Incubator and covering",
    label: "Church Collective",
    title: "The Church Collective",
    icon: Network,
    text:
      "A covering and incubator for emerging expressions, early-stage churches, and ministry communities that need formation before they have a traditional structure.",
    bestFit:
      "Pioneers and communities that are fruitful but still forming.",
    needs:
      "Coaching, covering, discernment, and time before becoming more formal.",
  },
];

function EssentialsVenn() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px] overflow-visible">
      <svg
        viewBox="0 0 700 700"
        role="img"
        aria-label="Church Plant Essentials Venn Diagram"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="16"
              floodColor="#151616"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        <circle
          cx="350"
          cy="245"
          r="190"
          fill="#FBF0DE"
          fillOpacity="0.9"
          stroke="#293D48"
          strokeWidth="5"
          filter="url(#softShadow)"
        />

        <circle
          cx="235"
          cy="445"
          r="190"
          fill="#4DA79C"
          fillOpacity="0.32"
          stroke="#293D48"
          strokeWidth="5"
          filter="url(#softShadow)"
        />

        <circle
          cx="465"
          cy="445"
          r="190"
          fill="#EA9F43"
          fillOpacity="0.36"
          stroke="#293D48"
          strokeWidth="5"
          filter="url(#softShadow)"
        />

        <circle
          cx="350"
          cy="380"
          r="92"
          fill="#293D48"
          fillOpacity="0.94"
          stroke="#FBF0DE"
          strokeWidth="5"
        />

        <text
          x="350"
          y="352"
          textAnchor="middle"
          className="fill-[#FBF0DE] text-[24px] font-black uppercase tracking-[0.18em]"
        >
          CHURCH
        </text>

        <text
          x="350"
          y="386"
          textAnchor="middle"
          className="fill-[#FBF0DE] text-[24px] font-black uppercase tracking-[0.18em]"
        >
          PLANT
        </text>

        <text
          x="350"
          y="420"
          textAnchor="middle"
          className="fill-[#FBF0DE] text-[24px] font-black uppercase tracking-[0.18em]"
        >
          ESSENTIALS
        </text>

        <text
          x="350"
          y="168"
          textAnchor="middle"
          className="fill-[#151616] text-[23px] font-black uppercase tracking-[0.15em]"
        >
          CHRIST CENTERED
        </text>

        <text
          x="350"
          y="205"
          textAnchor="middle"
          className="fill-[#293D48] text-[19px] font-extrabold"
        >
          Worships Jesus
        </text>

        <text
          x="350"
          y="234"
          textAnchor="middle"
          className="fill-[#293D48] text-[19px] font-extrabold"
        >
          Makes Disciples
        </text>

        <text
          x="350"
          y="263"
          textAnchor="middle"
          className="fill-[#293D48] text-[19px] font-extrabold"
        >
          Expands Kingdom
        </text>

        <text
          x="188"
          y="500"
          textAnchor="middle"
          className="fill-[#151616] text-[22px] font-black uppercase tracking-[0.15em]"
        >
          MISSIONAL
        </text>

        <text
          x="188"
          y="530"
          textAnchor="middle"
          className="fill-[#151616] text-[22px] font-black uppercase tracking-[0.15em]"
        >
          COMMUNITY
        </text>

        <text
          x="188"
          y="568"
          textAnchor="middle"
          className="fill-[#293D48] text-[18px] font-extrabold"
        >
          Local Presence
        </text>

        <text
          x="188"
          y="596"
          textAnchor="middle"
          className="fill-[#293D48] text-[18px] font-extrabold"
        >
          Disciple Rhythm
        </text>

        <text
          x="512"
          y="500"
          textAnchor="middle"
          className="fill-[#151616] text-[22px] font-black uppercase tracking-[0.15em]"
        >
          QUALIFIED
        </text>

        <text
          x="512"
          y="530"
          textAnchor="middle"
          className="fill-[#151616] text-[22px] font-black uppercase tracking-[0.15em]"
        >
          LEADERSHIP
        </text>

        <text
          x="512"
          y="568"
          textAnchor="middle"
          className="fill-[#293D48] text-[18px] font-extrabold"
        >
          Biblically Trained
        </text>

        <text
          x="512"
          y="596"
          textAnchor="middle"
          className="fill-[#293D48] text-[18px] font-extrabold"
        >
          Spirit Appointed
        </text>

        <path
          d="M255 118 C285 92 318 78 350 78 C382 78 415 92 445 118"
          fill="none"
          stroke="#EA9F43"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M165 382 C132 422 118 466 124 512"
          fill="none"
          stroke="#4DA79C"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="M535 382 C568 422 582 466 576 512"
          fill="none"
          stroke="#EA9F43"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function ModelsPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            Models & Essentials
          </p>

          <h1 className="mx-auto mt-5 max-w-6xl text-[46px] font-black leading-[0.9] tracking-[-0.06em] text-ink md:text-[78px] lg:text-[92px]">
            One mission. Multiple faithful models.
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-lg font-medium leading-8 text-slate md:text-xl">
            Church multiplication does not have to look the same in every place. CMC helps pioneers and churches discern the right model while protecting the biblical essentials of an Open Bible church.
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {models.map((model) => (
              <a
                key={model.id}
                href={`#${model.id}`}
                className="rounded-full border border-slate/15 bg-white/74 px-5 py-3 text-sm font-black text-slate shadow-sm transition hover:-translate-y-0.5 hover:border-ember/40 hover:bg-ember hover:text-ink focus:outline-none focus:ring-4 focus:ring-ember/25"
              >
                {model.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-panel px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Church Plant Essentials
              </p>

              <h2 className="mt-5 text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[64px]">
                Before choosing a model, define the essentials.
              </h2>

              <p className="mt-6 text-lg font-medium leading-8 text-[#FBF0DE] opacity-82">
                The models below describe different ways a new work can take shape. This diagram names what every Open Bible expression must hold in common so flexibility does not become confusion.
              </p>

              <div className="mt-7 rounded-[1.6rem] border border-[#FBF0DE]/14 bg-[#151616]/24 p-6">
                <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#FBF0DE]">
                  Models answer “what shape?” Essentials answer “is it a church?”
                </h3>

                <p className="mt-4 text-base font-medium leading-7 text-[#FBF0DE] opacity-75">
                  CMC is not trying to make every new work look identical. The goal is to help each pioneer and sending church discern the right form while keeping the work Christ-centered, disciple-making, led well, and relationally connected.
                </p>
              </div>
            </div>

            <EssentialsVenn />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {essentials.map((item) => (
              <div
                key={item}
                className="texture-card rounded-[1.35rem] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/12 text-sage">
                  <Check size={21} strokeWidth={2.5} />
                </div>

                <p className="mt-4 text-sm font-black leading-6 text-slate">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-10 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Models
            </p>

            <h2 className="mt-4 text-[40px] font-black leading-[0.96] tracking-[-0.048em] text-ink md:text-[62px]">
              Five common shapes of multiplication.
            </h2>

            <p className="mt-5 text-lg font-medium leading-8 text-slate">
              These are not boxes to force people into. They are discernment language for what God may be forming through a pioneer, a church, and a community.
            </p>
          </div>

          <div className="grid gap-6">
            {models.map((model) => {
              const Icon = model.icon;

              return (
                <article
                  key={model.id}
                  id={model.id}
                  className="scroll-mt-28 rounded-[2rem] border border-slate/10 bg-white/68 p-7 shadow-sm md:p-9"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                    <div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sage/12 text-sage">
                        <Icon size={36} strokeWidth={1.8} />
                      </div>

                      <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                        {model.number}
                      </p>

                      <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.24em] text-slate opacity-70">
                        {model.type}
                      </p>

                      <h3 className="mt-3 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[48px]">
                        {model.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-lg font-medium leading-8 text-slate">
                        {model.text}
                      </p>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-[1.4rem] border border-slate/10 bg-cream/70 p-5">
                          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ember">
                            Best fit
                          </p>

                          <p className="mt-3 text-base font-bold leading-7 text-slate">
                            {model.bestFit}
                          </p>
                        </div>

                        <div className="rounded-[1.4rem] border border-slate/10 bg-cream/70 p-5">
                          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ember">
                            Needs
                          </p>

                          <p className="mt-3 text-base font-bold leading-7 text-slate">
                            {model.needs}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="mt-16 rounded-[2rem] bg-slate p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                  Discernment
                </p>

                <h2 className="mt-4 text-[36px] font-black leading-[0.96] tracking-[-0.048em] text-[#FBF0DE] md:text-[56px]">
                  Choose by calling, context, and capacity.
                </h2>
              </div>

              <div className="grid gap-3">
                {[
                  "Who are we called to reach?",
                  "What kind of leader is God raising up?",
                  "What support structure is already present?",
                  "What model can reproduce disciples, leaders, and churches?",
                ].map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl border border-[#FBF0DE]/14 bg-[#151616]/24 px-5 py-4"
                  >
                    <p className="text-base font-extrabold leading-7 text-[#FBF0DE]">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-12 text-center">
            <Link
              href="/pathways"
              className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
            >
              Explore the Pathway <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
