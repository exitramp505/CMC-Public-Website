import CTA from "@/components/CTA";

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
    type: "Public launch",
    title: "Church Launch",
    text: "A public-launch approach that gathers a team, builds momentum, and establishes a visible new congregation in a community.",
    bestFit: "A pioneer with strong public leadership and a clear gathering strategy.",
    needs: "A sending church, launch team, visible location, and sustained follow-up.",
  },
  {
    number: "02",
    type: "Embedded presence",
    title: "Missional Church",
    text: "A relational model focused on long-term cultural engagement, disciple-making, and community formation in everyday spaces.",
    bestFit: "Leaders called to embed deeply in a community over time.",
    needs: "Patience, local presence, relational credibility, and disciple-making rhythms.",
  },
  {
    number: "03",
    type: "Reproducible communities",
    title: "Micro Church",
    text: "Small, decentralized gatherings with simple structures, local leadership, and a clear multiplication emphasis.",
    bestFit: "Contexts where small communities can reproduce naturally.",
    needs: "Simple practices, trained leaders, accountability, and clear doctrine.",
  },
  {
    number: "04",
    type: "One church, many communities",
    title: "Multi-Community Church",
    text: "A sending church forms new worshiping communities that reach distinct groups while sharing resources, covering, and leadership support.",
    bestFit: "Established churches with capacity to bless different communities.",
    needs: "Leadership pipeline, shared mission, clear governance, and local ownership.",
  },
  {
    number: "05",
    type: "Incubator and covering",
    title: "The Church Collective",
    text: "A covering and incubator for emerging expressions, early-stage churches, and ministry communities that need formation before they have a traditional structure.",
    bestFit: "Pioneers and communities that are fruitful but still forming.",
    needs: "Coaching, covering, discernment, and time before becoming more formal.",
  },
];

function EssentialsVenn() {
  return (
    <svg
      viewBox="0 0 900 650"
      className="h-auto w-full"
      role="img"
      aria-label="Church Plant Essentials Venn diagram"
    >
      <defs>
        <filter id="textLift">
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="1.4"
            floodColor="#FBF0DE"
            floodOpacity=".95"
          />
        </filter>
      </defs>

      <circle
        cx="450"
        cy="220"
        r="185"
        fill="none"
        stroke="#C8D2F2"
        strokeWidth="12"
        strokeOpacity=".72"
      />
      <circle
        cx="312"
        cy="418"
        r="185"
        fill="none"
        stroke="#C8D2F2"
        strokeWidth="12"
        strokeOpacity=".72"
      />
      <circle
        cx="588"
        cy="418"
        r="185"
        fill="none"
        stroke="#C8D2F2"
        strokeWidth="12"
        strokeOpacity=".72"
      />

      <g fontFamily="Montserrat, Arial, sans-serif" textAnchor="middle" fill="#151616">
        <text x="450" y="132" fontSize="22" fontWeight="900">
          MISSIONAL
        </text>
        <text x="450" y="157" fontSize="22" fontWeight="900">
          COMMUNITY
        </text>
        <line x1="350" y1="174" x2="550" y2="174" stroke="#151616" strokeWidth="2" />
        <text x="450" y="202" fontSize="18" fontWeight="600">
          Worships Jesus
        </text>
        <text x="450" y="226" fontSize="18" fontWeight="600">
          Makes Disciples
        </text>
        <text x="450" y="250" fontSize="18" fontWeight="600">
          Expands Kingdom
        </text>

        <g filter="url(#textLift)">
          <text x="450" y="358" fontSize="20" fontWeight="900" fill="#2F5BEA">
            CHRIST
          </text>
          <text x="450" y="382" fontSize="20" fontWeight="900" fill="#2F5BEA">
            CENTERED
          </text>
        </g>

        <text x="292" y="410" fontSize="22" fontWeight="900">
          QUALIFIED
        </text>
        <text x="292" y="435" fontSize="22" fontWeight="900">
          LEADERSHIP
        </text>
        <line x1="195" y1="452" x2="389" y2="452" stroke="#151616" strokeWidth="2" />
        <text x="292" y="480" fontSize="18" fontWeight="600">
          Biblically Trained
        </text>
        <text x="292" y="504" fontSize="18" fontWeight="600">
          Spirit Appointed
        </text>
        <text x="292" y="528" fontSize="18" fontWeight="600">
          Elder Recognized
        </text>

        <text x="608" y="410" fontSize="22" fontWeight="900">
          RELATIONAL
        </text>
        <text x="608" y="435" fontSize="22" fontWeight="900">
          CONNECTION
        </text>
        <line x1="508" y1="452" x2="708" y2="452" stroke="#151616" strokeWidth="2" />
        <text x="608" y="480" fontSize="18" fontWeight="600">
          Desires Accountability
        </text>
        <text x="608" y="504" fontSize="18" fontWeight="600">
          Embraces Network
        </text>
        <text x="608" y="528" fontSize="18" fontWeight="600">
          Honors Commitment
        </text>
      </g>
    </svg>
  );
}

export default function ModelsPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
            Models & Essentials
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] text-ink md:text-7xl">
            The form can flex. The center cannot.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate">
            CMC helps pioneers and churches discern the right model of multiplication without losing the biblical essentials of an Open Bible church.
          </p>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {[
              "Church Launch",
              "Missional Church",
              "Micro Church",
              "Multi-Community",
              "Church Collective",
            ].map((model) => (
              <span
                key={model}
                className="rounded-full border border-slate/15 bg-white/55 px-5 py-3 text-sm font-extrabold text-slate shadow-sm"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-panel px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="accent-line" />

            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
              Church Plant Essentials
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
              Every expression needs the same center.
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-[#FBF0DE]/84">
              A new work may begin as a launch, a micro church, a missional community, a multi-community expression, or an emerging collective. The structure may vary, but the essentials give it integrity.
            </p>

            <div className="mt-8 grid gap-3">
              {essentials.map((item) => (
                <div key={item} className="flex gap-3 font-bold leading-7 text-[#FBF0DE]/86">
                  <span className="font-black text-ember">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/95 p-4 text-[#151616] shadow-2xl shadow-black/20 md:p-6">
            <div className="rounded-[1.5rem] border border-slate/10 bg-[#FBF0DE] p-2">
              <EssentialsVenn />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
            Models
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] text-ink md:text-7xl">
            Five common shapes of multiplication.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate">
            These are not boxes to force people into. They are discernment language for what God may be forming through a pioneer, a church, and a community.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-7">
          {models.map((model) => (
            <article key={model.title} className="grid gap-6 lg:grid-cols-[290px_1fr]">
              <div className="brand-panel flex min-h-[220px] flex-col justify-between rounded-[2rem] p-8 shadow-xl shadow-black/10">
                <p className="text-6xl font-black leading-none tracking-[-0.08em] text-ember">
                  {model.number}
                </p>

                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#FBF0DE]/75">
                  {model.type}
                </p>
              </div>

              <div className="texture-card rounded-[2rem] p-8 md:p-10">
                <h3 className="text-4xl font-black leading-[0.94] tracking-[-0.05em] text-ink md:text-5xl">
                  {model.title}
                </h3>

                <p className="mt-5 font-medium leading-8 text-slate">
                  {model.text}
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate/15 bg-[#FBF0DE]/75 p-5">
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-ember">
                      Best fit
                    </p>
                    <p className="text-sm font-bold leading-7 text-slate">
                      {model.bestFit}
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-slate/15 bg-[#FBF0DE]/75 p-5">
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-ember">
                      Needs
                    </p>
                    <p className="text-sm font-bold leading-7 text-slate">
                      {model.needs}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] border border-slate/15 bg-white/55 p-8 shadow-xl shadow-black/5 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
              Discernment
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-5xl">
              Choose by calling, context, and capacity.
            </h2>

            <p className="mt-5 max-w-2xl font-medium leading-8 text-slate">
              The right model is not always the biggest or fastest model. The right model fits the mission field, the leader, the sending church, and the season.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Who are we called to reach?",
              "What kind of leader is God raising up?",
              "What support structure is already present?",
              "What model can reproduce disciples, leaders, and churches?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-[1.4rem] border border-slate/15 bg-[#FBF0DE]/75 p-5 font-semibold leading-7 text-slate"
              >
                {question}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
