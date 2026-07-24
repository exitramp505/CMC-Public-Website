import type { Metadata } from "next";

import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Models and Essentials",
  description:
    "Explore faithful models of church multiplication and the essential qualities shared by every Open Bible church expression.",
};

const essentials = [
  "Jesus is worshiped and obeyed",
  "Disciples are reached and developed",
  "Leaders are established and multiplied",
  "Saints are assembled and equipped",
  "Sacraments are honored and observed",
];

const models = [
  ["01", "Public launch", "Church Launch", "A public-launch approach that gathers a team, builds momentum, and establishes a visible new congregation in a community.", "A pioneer with strong public leadership and a clear gathering strategy.", "A sending church, launch team, visible location, and sustained follow-up."],
  ["02", "Embedded presence", "Missional Church", "A relational model focused on long-term cultural engagement, disciple-making, and community formation in everyday spaces.", "Leaders called to embed deeply in a community over time.", "Patience, local presence, relational credibility, and disciple-making rhythms."],
  ["03", "Reproducible communities", "Micro Church", "Small, decentralized gatherings with simple structures, local leadership, and a clear multiplication emphasis.", "Contexts where small communities can reproduce naturally.", "Simple practices, trained leaders, accountability, and clear doctrine."],
  ["04", "One church, many communities", "Multi-Community Church", "A sending church forms new worshiping communities that reach distinct groups while sharing resources, covering, and leadership support.", "Established churches with capacity to bless different communities.", "Leadership pipeline, shared mission, clear governance, and local ownership."],
  ["05", "Incubator and covering", "The Church Collective", "A covering and incubator for emerging expressions, early-stage churches, and ministry communities that need formation before they have a traditional structure.", "Pioneers and communities that are fruitful but still forming.", "Coaching, covering, discernment, and time before becoming more formal."],
];

function EssentialsVenn() {
  return (
    <svg viewBox="0 0 900 650" className="h-auto w-full" role="img" aria-label="Church Plant Essentials Venn diagram">
      <defs>
        <filter id="textLiftModels">
          <feDropShadow dx="0" dy="1" stdDeviation="1.4" floodColor="#FBF0DE" floodOpacity=".95" />
        </filter>
      </defs>

      <circle cx="450" cy="220" r="185" fill="none" stroke="#4DA79C" strokeWidth="14" strokeOpacity=".50" />
      <circle cx="312" cy="418" r="185" fill="none" stroke="#EA9F43" strokeWidth="14" strokeOpacity=".46" />
      <circle cx="588" cy="418" r="185" fill="none" stroke="#293D48" strokeWidth="14" strokeOpacity=".38" />

      <g fontFamily="Montserrat, Arial, sans-serif" textAnchor="middle" fill="#151616">
        <text x="450" y="132" fontSize="23" fontWeight="900">MISSIONAL</text>
        <text x="450" y="158" fontSize="23" fontWeight="900">COMMUNITY</text>
        <line x1="346" y1="176" x2="554" y2="176" stroke="#151616" strokeWidth="2" />
        <text x="450" y="205" fontSize="19" fontWeight="700">Worships Jesus</text>
        <text x="450" y="231" fontSize="19" fontWeight="700">Makes Disciples</text>
        <text x="450" y="257" fontSize="19" fontWeight="700">Expands Kingdom</text>

        <g filter="url(#textLiftModels)">
          <text x="450" y="358" fontSize="21" fontWeight="900" fill="#293D48">CHRIST</text>
          <text x="450" y="384" fontSize="21" fontWeight="900" fill="#293D48">CENTERED</text>
        </g>

        <text x="292" y="410" fontSize="23" fontWeight="900">QUALIFIED</text>
        <text x="292" y="436" fontSize="23" fontWeight="900">LEADERSHIP</text>
        <line x1="192" y1="455" x2="392" y2="455" stroke="#151616" strokeWidth="2" />
        <text x="292" y="485" fontSize="19" fontWeight="700">Biblically Trained</text>
        <text x="292" y="511" fontSize="19" fontWeight="700">Spirit Appointed</text>
        <text x="292" y="537" fontSize="19" fontWeight="700">Elder Recognized</text>

        <text x="608" y="410" fontSize="23" fontWeight="900">RELATIONAL</text>
        <text x="608" y="436" fontSize="23" fontWeight="900">CONNECTION</text>
        <line x1="505" y1="455" x2="711" y2="455" stroke="#151616" strokeWidth="2" />
        <text x="608" y="485" fontSize="19" fontWeight="700">Desires Accountability</text>
        <text x="608" y="511" fontSize="19" fontWeight="700">Embraces Network</text>
        <text x="608" y="537" fontSize="19" fontWeight="700">Honors Commitment</text>
      </g>
    </svg>
  );
}

export default function ModelsPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />
          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">Models & Essentials</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[68px]">
            One mission. Multiple faithful models.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
            Church multiplication does not have to look the same in every place. CMC helps pioneers and churches discern the right model while protecting the biblical essentials of an Open Bible church.
          </p>
          <div className="mx-auto mt-9 flex max-w-5xl flex-wrap justify-center gap-3">
            {["Church Launch", "Missional Church", "Micro Church", "Multi-Community", "Church Collective"].map((model) => (
              <span key={model} className="rounded-full border border-slate/15 bg-white/60 px-5 py-3 text-sm font-extrabold text-slate shadow-sm">{model}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-panel px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-5xl text-center">
            <div className="accent-line mx-auto" />
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">Church Plant Essentials</p>
            <h2 className="mx-auto mt-5 max-w-5xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] md:text-[64px]">
              Before choosing a model, define the essentials.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-[#FBF0DE]/85">
              The models below describe different ways a new work can take shape. This diagram names what every Open Bible expression must hold in common so flexibility does not become confusion.
            </p>
          </div>

          <div className="mx-auto max-w-[920px] rounded-[2.1rem] border border-[#FBF0DE]/20 bg-[#FBF0DE]/10 p-5 shadow-2xl shadow-black/25 md:p-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#FBF0DE]/15 bg-gradient-to-b from-[#FBF0DE] to-[#F1D2AC]/70 p-3 md:p-4">
              <EssentialsVenn />
            </div>
          </div>

          <div className="mx-auto mt-7 grid max-w-[920px] gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[1.65rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-6 shadow-xl shadow-black/10">
              <h3 className="text-[26px] font-black leading-[1.02] tracking-[-0.035em]">Models answer “what shape?” Essentials answer “is it a church?”</h3>
              <p className="mt-4 font-medium leading-8 text-[#FBF0DE]/82">
                CMC is not trying to make every new work look identical. The goal is to help each pioneer and sending church discern the right form while keeping the work Christ-centered, disciple-making, led well, and relationally connected.
              </p>
            </div>

            <div className="rounded-[1.65rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-6 shadow-xl shadow-black/10">
              <h3 className="text-[26px] font-black leading-[1.02] tracking-[-0.035em]">The minimums we protect</h3>
              <div className="mt-5 grid gap-3">
                {essentials.map((item) => (
                  <div key={item} className="flex gap-3 font-bold leading-7 text-[#FBF0DE]/88">
                    <span className="font-black text-ember">✓</span><p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="accent-line mx-auto" />
          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">Models</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[68px]">
            Five common shapes of multiplication.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
            These are not boxes to force people into. They are discernment language for what God may be forming through a pioneer, a church, and a community.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6">
          {models.map(([number, type, title, text, bestFit, needs]) => (
            <article key={title} className="grid gap-5 lg:grid-cols-[250px_1fr]">
              <div className="brand-panel flex min-h-[210px] flex-col justify-between rounded-[1.75rem] p-7 shadow-xl shadow-black/10">
                <p className="text-[56px] font-black leading-[0.82] tracking-[-0.08em] text-ember">{number}</p>
                <p className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#FBF0DE]/75">{type}</p>
              </div>

              <div className="texture-card rounded-[1.75rem] p-8">
                <h3 className="text-[32px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[46px]">{title}</h3>
                <p className="mt-4 font-medium leading-8 text-slate">{text}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-slate/15 bg-[#FBF0DE]/75 p-5">
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ember">Best fit</p>
                    <p className="text-sm font-bold leading-7 text-slate">{bestFit}</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-slate/15 bg-[#FBF0DE]/75 p-5">
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ember">Needs</p>
                    <p className="text-sm font-bold leading-7 text-slate">{needs}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] border border-slate/15 bg-white/55 p-8 shadow-xl shadow-black/5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">Discernment</p>
            <h2 className="mt-4 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[50px]">
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
              <div key={question} className="rounded-[1.4rem] border border-slate/15 bg-[#FBF0DE]/75 p-5 font-semibold leading-7 text-slate">{question}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
