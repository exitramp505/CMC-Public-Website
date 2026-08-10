import type { Metadata } from "next";

import CTA from "@/components/CTA";
import modelsContent from "@/content/models.json";
import { getPublicContent } from "@/lib/public-content";

export const metadata: Metadata = {
  title: "Church Multiplication Models",
  description:
    "Explore the biblical essentials, visible marks, and adaptable church models shared by Open Bible church expressions.",
  alternates: { canonical: "/models" },
};

const marks = [
  "Jesus is worshiped and obeyed.",
  "Disciples are reached and developed.",
  "Leaders are established and multiplied.",
  "Saints are assembled and equipped.",
  "Sacraments are honored and observed.",
];

const markerStyles = [
  "bg-slate text-[#FBF0DE] shadow-[7px_7px_0_rgba(234,159,67,.35)]",
  "bg-ember text-ink shadow-[7px_7px_0_rgba(41,61,72,.22)]",
  "bg-sage text-ink shadow-[7px_7px_0_rgba(41,61,72,.22)]",
];

const circleContent = [
  {
    title: "Missional community",
    lines: ["Worships Jesus", "Makes Disciples", "Expands Kingdom"],
    className:
      "left-[120px] top-0 bg-sage/80 text-[#FBF0DE]",
    copyClassName:
      "left-1/2 top-[38px] w-[210px] -translate-x-1/2",
  },
  {
    title: "Qualified leadership",
    lines: ["Biblically Trained", "Spirit Appointed", "Elder Recognized"],
    className:
      "bottom-[8px] left-[20px] bg-ember/80 text-ink",
    copyClassName:
      "bottom-[78px] left-[6px] w-[180px]",
  },
  {
    title: "Relational connection",
    lines: [
      "Desires Accountability",
      "Embraces Network",
      "Honors Commitment",
    ],
    className:
      "bottom-[8px] right-[20px] bg-slate/80 text-[#FBF0DE]",
    copyClassName:
      "bottom-[75px] right-[4px] w-[184px]",
  },
];

const discernmentQuestions = [
  "Who are we called to reach?",
  "What kind of leader is God raising up?",
  "What support and sending capacity are available?",
  "Which form can reproduce disciples, leaders, and churches here?",
];

function EssentialsCopy({
  title,
  lines,
  className,
}: {
  title: string;
  lines: string[];
  className: string;
}) {
  return (
    <div className={`absolute z-[2] text-center ${className}`}>
      <p className="text-[20px] font-black capitalize leading-none tracking-[-.03em] first:[&]:text-[20px]">
        {title}
      </p>
      <div className="mx-auto mt-[9px] h-0.5 w-[72%] bg-current opacity-60" />
      <p className="mt-[7px] text-[10.5px] font-extrabold leading-[1.42] opacity-85">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

function ChurchEssentialsDiagram() {
  return (
    <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate/10 bg-[#F3E4CC] shadow-2xl shadow-black/10 sm:mt-12 sm:rounded-[2.5rem]">
      <div className="relative hidden min-h-[760px] md:block">
        <div className="absolute left-1/2 top-1/2 h-[460px] w-[520px] -translate-x-1/2 -translate-y-[52%] scale-[1.18] lg:scale-[1.34]">
          {circleContent.map((circle) => (
            <div
              key={circle.title}
              className={`absolute h-[280px] w-[280px] rounded-full border-[5px] border-[#FBF0DE]/80 shadow-[0_18px_45px_rgba(21,22,22,.09)] ${circle.className}`}
            >
              <EssentialsCopy
                title={circle.title}
                lines={circle.lines}
                className={circle.copyClassName}
              />
            </div>
          ))}

          <div className="absolute left-1/2 top-[52%] z-[4] grid h-[154px] w-[154px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[7px] border-[#FBF0DE] bg-slate text-center text-[#FBF0DE] shadow-[0_20px_55px_rgba(21,22,22,.24)]">
            <div className="absolute -inset-[15px] rounded-full border-2 border-dashed border-ember/70" />
            <p className="px-2 text-[20px] font-black uppercase leading-[.98] tracking-[-0.025em]">
              Christ
              <br />
              centered
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-5 md:hidden">
        <div className="relative mx-auto mb-3 grid h-44 w-44 place-items-center rounded-full border-8 border-[#FBF0DE] bg-slate text-center text-[#FBF0DE] shadow-2xl shadow-black/20">
          <div className="absolute -inset-4 rounded-full border-2 border-dashed border-ember/70" />
          <p className="px-2 text-[1.35rem] font-black uppercase leading-none tracking-[-0.02em]">
            Christ
            <br />
            centered
          </p>
        </div>
        {circleContent.map((circle) => (
          <div
            key={circle.title}
            className={`rounded-[1.5rem] p-5 text-center ${
              circle.title === "Missional community"
                ? "bg-sage text-[#FBF0DE]"
                : circle.title === "Qualified leadership"
                  ? "bg-ember text-ink"
                  : "bg-slate text-[#FBF0DE]"
            }`}
          >
            <p className="text-xl font-black capitalize leading-none">
              {circle.title}
            </p>
            <div className="mx-auto mt-3 h-0.5 w-32 bg-current opacity-50" />
            <p className="mt-3 text-xs font-extrabold leading-5 opacity-85">
              {circle.lines.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ModelsPage() {
  const content = await getPublicContent("models", modelsContent);
  const models = content.models;

  return (
    <>
      <section className="brand-panel relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(234,159,67,0.2),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(77,167,156,0.18),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="accent-line" />
            <p className="mt-7 text-xs font-extrabold uppercase leading-5 tracking-[0.2em] text-ember sm:text-sm sm:tracking-[0.3em]">
              Church Multiplication Models
            </p>
            <h1 className="mt-6 max-w-4xl text-[2.9rem] font-black leading-[0.92] tracking-[-0.055em] text-[#FBF0DE] sm:text-[5.2rem] sm:leading-[0.86] sm:tracking-[-0.07em] lg:text-[6.5rem]">
              Different shapes.
              <span className="block text-ember">Same center.</span>
            </h1>
          </div>
          <div className="rounded-[2rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-7 backdrop-blur-sm md:p-9">
            <p className="text-xl font-bold leading-9 text-[#FBF0DE]">
              Every faithful expression begins with the same biblical
              essentials.
            </p>
            <p className="mt-5 font-medium leading-8 text-[#FBF0DE]/75">
              Context may shape how a church gathers and multiplies, but it
              does not change the center or the marks of a biblical church.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 pt-20 lg:px-8 lg:pb-10 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Biblical Church Essentials
              </p>
              <h2 className="mt-5 max-w-2xl text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[58px]">
                Christ at the center. Three essentials held together.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-slate">
              These essentials describe the biblical foundation of a church.
              They belong together and provide the foundation from which every
              faithful church expression can grow.
            </p>
          </div>
          <ChurchEssentialsDiagram />
        </div>
      </section>

      <section className="bg-slate px-5 py-20 text-[#FBF0DE] lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Biblical Church Marks
            </p>
            <h2 className="mt-5 max-w-xl text-[36px] font-black leading-[0.98] tracking-[-0.045em] sm:text-[42px] md:text-[60px]">
              Five visible marks of a biblical church.
            </h2>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#FBF0DE]/72">
              When Christ remains at the center and the three essentials are
              held together, these marks become visible in the worship,
              discipleship, leadership, shared life, and practices of the
              church.
            </p>
          </div>

          <div className="border-t border-[#FBF0DE]/20">
            {marks.map((mark, index) => (
              <div
                key={mark}
                className="grid min-h-[105px] grid-cols-[52px_1fr] items-center gap-5 border-b border-[#FBF0DE]/20 py-5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ember/70 text-[11px] font-black tracking-[.12em] text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[22px] font-black leading-[1.13]">
                  {mark}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_92%_8%,rgba(77,167,156,.13),transparent_25%),radial-gradient(circle_at_8%_92%,rgba(234,159,67,.14),transparent_25%)] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Church Models
              </p>
              <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
                Different forms. Shared foundation.
              </h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-slate">
              The essentials and marks remain consistent, but a church can
              take different forms depending on its mission, context,
              leadership, and stage of development. This collection can grow
              as additional models emerge.
            </p>
          </div>

          <div className="mt-14 grid gap-4">
            {models.map((model, index) => (
              <details
                key={`${model.title}-${index}`}
                className="group overflow-hidden rounded-[1.8rem] border border-slate/15 bg-[#FBF0DE]/85 shadow-[0_14px_34px_rgba(21,22,22,.06)] transition duration-200 hover:-translate-y-1 hover:border-ember/65 hover:shadow-[0_22px_46px_rgba(21,22,22,.11)] open:border-ember/65 open:shadow-[0_22px_46px_rgba(21,22,22,.11)]"
              >
                <summary className="grid min-h-[150px] cursor-pointer list-none grid-cols-[58px_1fr] items-center gap-x-5 gap-y-2 p-5 text-left marker:content-none sm:grid-cols-[76px_1fr_44px] sm:p-7 lg:min-h-[190px] lg:grid-cols-[86px_minmax(220px,.75fr)_1.25fr_44px] lg:gap-x-8 lg:px-9 [&::-webkit-details-marker]:hidden">
                  <span
                    className={`row-span-2 grid h-[54px] w-[54px] place-items-center rounded-[17px] text-sm font-black sm:h-[68px] sm:w-[68px] sm:rounded-[21px] sm:text-lg ${markerStyles[index % markerStyles.length]}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="self-end text-[25px] font-black leading-[.98] tracking-[-.035em] text-ink sm:text-[30px] lg:self-center">
                    {model.title}
                  </span>

                  <span className="col-start-2 text-[10px] font-black uppercase tracking-[.12em] text-ember lg:self-start">
                    {model.movement}
                  </span>

                  <span className="col-span-2 mt-3 font-semibold leading-7 text-slate sm:col-span-1 sm:col-start-2 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:mt-0">
                    {model.summary}
                  </span>

                  <span
                    aria-hidden="true"
                    className="col-start-2 row-start-4 ml-auto grid h-10 w-10 place-items-center rounded-full border-2 border-slate/20 text-2xl leading-none text-slate transition group-open:rotate-45 group-open:bg-slate group-open:text-[#FBF0DE] sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:ml-0 lg:col-start-4"
                  >
                    +
                  </span>
                </summary>

                <div className="mx-5 mb-5 grid gap-4 border-t border-slate/15 pt-6 sm:mx-7 sm:mb-7 sm:grid-cols-2 lg:ml-[152px] lg:mr-9">
                  <div className="rounded-[1.25rem] bg-[#F3E4CC]/75 p-5">
                    <p className="text-[11px] font-black uppercase tracking-[.13em] text-ember">
                      Best suited for
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate">
                      {model.bestSuitedFor}
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] bg-[#F3E4CC]/75 p-5">
                    <p className="text-[11px] font-black uppercase tracking-[.13em] text-ember">
                      What strengthens it
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate">
                      {model.whatStrengthensIt}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Choosing a model
            </p>
            <h2 className="mt-5 text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[60px]">
              Discern fit—not popularity.
            </h2>
            <p className="mt-6 font-medium leading-8 text-slate">
              Begin with calling, context, and capacity. Those realities point
              toward the model that can serve the mission faithfully.
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
                <p className="mt-3 font-bold leading-7 text-slate">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
