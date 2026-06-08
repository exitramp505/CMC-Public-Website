import Link from "next/link";
import {
  ArrowRight,
  Church,
  Compass,
  Home,
  Network,
  UsersRound,
} from "lucide-react";

const models = [
  {
    id: "church-launch",
    label: "Church Launch",
    title: "Church Launch",
    icon: Church,
    description:
      "A new public church work with a clear gathering rhythm, leadership structure, ministry plan, and launch pathway.",
    bestFor:
      "Pioneers with a clear call to start a new public congregation in a defined community.",
    essentials: [
      "Clear sending and accountability",
      "Disciple-making before public launch",
      "Identified leadership and ministry teams",
      "Sustainable plan for worship, mission, and care",
    ],
  },
  {
    id: "missional-church",
    label: "Missional Church",
    title: "Missional Church",
    icon: Compass,
    description:
      "A church expression formed around incarnational mission, neighborhood presence, and disciple-making in everyday life.",
    bestFor:
      "Leaders reaching people who may not immediately connect with a traditional Sunday-centered church model.",
    essentials: [
      "Strong local presence",
      "Simple disciple-making practices",
      "Hospitality and relational evangelism",
      "Clear pathway from mission to gathered community",
    ],
  },
  {
    id: "micro-church",
    label: "Micro Church",
    title: "Micro Church",
    icon: Home,
    description:
      "A smaller, reproducible church community with worship, Scripture, prayer, mission, pastoral care, and multiplication built into its DNA.",
    bestFor:
      "Pioneers focused on low-overhead, highly relational, and reproducible forms of church.",
    essentials: [
      "Simple and reproducible structure",
      "Shared leadership",
      "Clear ecclesial identity",
      "Multiplication from the beginning",
    ],
  },
  {
    id: "multi-community",
    label: "Multi-Community",
    title: "Multi-Community",
    icon: UsersRound,
    description:
      "One church with multiple communities, expressions, languages, styles, or ministry contexts held together by shared mission and leadership.",
    bestFor:
      "Existing churches or new works reaching distinct groups while remaining one aligned church body.",
    essentials: [
      "Shared governance and doctrine",
      "Contextualized ministry expression",
      "Leadership development across communities",
      "Unified mission with flexible methods",
    ],
  },
  {
    id: "church-collective",
    label: "Church Collective",
    title: "Church Collective",
    icon: Network,
    description:
      "A networked expression of multiple local groups or churches connected through shared leadership, mission, doctrine, and multiplication strategy.",
    bestFor:
      "Leaders building a multiplying ecosystem of local groups, micro churches, or church communities.",
    essentials: [
      "Common theological center",
      "Clear leadership and accountability",
      "Reproducible disciple-making process",
      "Shared mission across multiple communities",
    ],
  },
];

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
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Church Plant Essentials
              </p>

              <h2 className="mt-5 text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[64px]">
                The model can change. The essentials stay the same.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {["Disciples", "Leaders", "Churches"].map((essential) => (
                <div
                  key={essential}
                  className="rounded-[1.6rem] border border-[#FBF0DE]/14 bg-[#151616]/24 p-6 text-center"
                >
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#FBF0DE]">
                    {essential}
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-6 text-[#FBF0DE] opacity-75">
                    Every faithful model must make disciples, develop leaders, and multiply churches.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Model Options
            </p>

            <h2 className="mt-4 text-[40px] font-black leading-[0.96] tracking-[-0.048em] text-ink md:text-[62px]">
              Choose the model that fits the mission field.
            </h2>

            <p className="mt-5 text-lg font-medium leading-8 text-slate">
              These are not rigid boxes. They are practical starting points for discernment, planning, coaching, and sending.
            </p>
          </div>

          <div className="grid gap-6">
            {models.map((model, index) => {
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
                        Model {index + 1}
                      </p>

                      <h3 className="mt-3 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[48px]">
                        {model.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-lg font-medium leading-8 text-slate">
                        {model.description}
                      </p>

                      <div className="mt-6 rounded-[1.4rem] border border-slate/10 bg-cream/70 p-5">
                        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ember">
                          Best Fit
                        </p>

                        <p className="mt-3 text-base font-bold leading-7 text-slate">
                          {model.bestFor}
                        </p>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {model.essentials.map((essential) => (
                          <div
                            key={essential}
                            className="rounded-2xl border border-slate/10 bg-white/70 px-5 py-4"
                          >
                            <p className="text-sm font-extrabold leading-6 text-slate">
                              {essential}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

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
