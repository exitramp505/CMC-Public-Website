import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const nationalLeader = {
  region: "Open Bible Churches",
  name: "Michael Nortune",
  title: "President",
  initials: "MN",
};

const directors = [
  {
    region: "Central Region",
    name: "Terry Dreyer",
    title: "Director of Multiplication",
    initials: "TD",
  },
  {
    region: "East Region",
    name: "George Williams",
    title: "Director of Multiplication",
    initials: "GW",
  },
  {
    region: "Mountain Plains Region",
    name: "Rob Bray",
    title: "Director of Multiplication",
    initials: "RB",
  },
  {
    region: "Pacific Region",
    name: "Aaron Sutherland",
    title: "Director of Multiplication",
    initials: "AS",
  },
  {
    region: "Southeast Region",
    name: "Mike Dickey",
    title: "Director of Multiplication",
    initials: "MD",
  },
];

function OpenBibleLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-20 w-16 shrink-0">
        <svg viewBox="0 0 120 150" className="h-full w-full" aria-hidden="true">
          <path
            d="M28 78 C41 69 52 69 60 78 C68 69 79 69 92 78"
            fill="none"
            stroke="#FBF0DE"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M27 96 C42 107 78 107 93 96"
            fill="none"
            stroke="#FBF0DE"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M29 87 C42 80 52 80 60 87 C68 80 78 80 91 87"
            fill="none"
            stroke="#EA9F43"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M60 24 C48 42 48 55 58 66 C58 55 66 49 72 42 C73 56 81 62 81 75 C81 88 72 97 60 97 C47 97 39 88 39 76 C39 58 53 46 60 24Z"
            fill="#EA9F43"
          />
          <path
            d="M26 62 C23 33 37 13 60 13 C83 13 97 33 94 62"
            fill="none"
            stroke="#FBF0DE"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="5 10"
          />
        </svg>
      </div>

      <div className="leading-none">
        <p className="text-4xl font-black uppercase tracking-[-.04em] text-[#FBF0DE]">
          Open Bible
        </p>
        <p className="mt-2 text-xl font-extrabold uppercase tracking-[.22em] text-[#FBF0DE]/85">
          Churches
        </p>
      </div>
    </div>
  );
}

function LeaderPhoto({ initials }: { initials: string }) {
  return (
    <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[#FBF0DE]/20 bg-[#FBF0DE]">
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#EA9F43_0%,#F1D2AC_34%,#FBF0DE_72%)]">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#151616] bg-[#FBF0DE] text-3xl font-black tracking-[-.04em] text-[#151616]">
          {initials}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="About" title="The Church Multiplication Collective">
          The Church Multiplication Collective is a ministry pathway of Open Bible Churches, created to help pastors, pioneers, and churches recover multiplication as a normal expression of healthy ministry.
        </SectionHeader>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="texture-card rounded-[2rem] p-8 md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
              Our purpose
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-.04em] text-ink md:text-5xl">
              A pathway for leaders who carry a multiplying burden.
            </h2>

            <p className="mt-6 leading-8 text-slate">
              We help leaders discern calling, develop multiplication pathways, and send pioneers into new fields with practical support, spiritual clarity, and relational covering.
            </p>
          </div>

          <div className="brand-panel rounded-[2rem] p-8 md:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
              Our conviction
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-.04em] md:text-5xl">
              Multiplication belongs in the life of healthy churches.
            </h2>

            <p className="mt-6 leading-8">
              Multiplication is not a side project for unusually gifted churches. It is a recovery of the apostolic impulse within the people of God.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="brand-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 shadow-2xl shadow-black/15 md:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(251,240,222,.16), transparent 42%), radial-gradient(circle at 82% 18%, rgba(234,159,67,.34), transparent 28%), radial-gradient(circle at 18% 80%, rgba(77,167,156,.24), transparent 32%), url('data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23FBF0DE\' fill-opacity=\'0.2\'%3E%3Ccircle cx=\'8\' cy=\'8\' r=\'1.4\'/%3E%3Ccircle cx=\'48\' cy=\'48\' r=\'1.4\'/%3E%3C/g%3E%3C/svg%3E')",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <OpenBibleLogo />

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
                Part of Open Bible
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
                Rooted in a shared mission.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#FBF0DE]/82">
              <p>
                CMC serves inside the wider mission of Open Bible Churches: to globally make disciples, develop leaders, and multiply churches. That shared mission gives the Collective its direction and keeps multiplication connected to local churches, regional relationships, and accountable leadership.
              </p>

              <p>
                The Collective is not a separate movement competing with Open Bible. It is a practical pathway that helps Open Bible pastors and pioneers take next steps toward disciple-making communities, new churches, and sending churches across every region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-panel px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="accent-line" />

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
                CMC Leadership
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] md:text-6xl">
                Led nationally and through every Open Bible region.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#FBF0DE]/80">
              The Collective is led in partnership with the president of Open Bible Churches and the Directors of Multiplication serving the five Open Bible regions. Together, they help pastors, pioneers, and churches take the next faithful step toward multiplication.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <article className="rounded-[1.75rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/10 p-5 shadow-xl shadow-black/10">
              <LeaderPhoto initials={nationalLeader.initials} />

              <div className="mt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ember">
                  {nationalLeader.region}
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-.04em]">
                  {nationalLeader.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#FBF0DE]/75">
                  {nationalLeader.title}
                </p>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {directors.map((director) => (
                <article
                  key={director.region}
                  className="rounded-[1.75rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-5 shadow-xl shadow-black/10"
                >
                  <LeaderPhoto initials={director.initials} />

                  <div className="mt-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-ember">
                      {director.region}
                    </p>

                    <h3 className="mt-3 text-2xl font-black tracking-[-.04em]">
                      {director.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#FBF0DE]/75">
                      {director.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
