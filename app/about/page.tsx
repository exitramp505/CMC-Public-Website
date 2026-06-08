import CTA from "@/components/CTA";

const leaders = [
  {
    name: "Michael Nortune",
    role: "President",
    region: "Open Bible Churches",
  },
  {
    name: "Mike Dickey",
    role: "Director of Multiplication",
    region: "Southeast Region",
  },
  {
    name: "Aaron Sutherland",
    role: "Director of Multiplication",
    region: "Pacific Region",
  },
  {
    name: "Terry Dreyer",
    role: "Director of Multiplication",
    region: "Central Region",
  },
  {
    name: "Rob Bray",
    role: "Director of Multiplication",
    region: "Mountain Plains Region",
  },
  {
    name: "George Williams",
    role: "Director of Multiplication",
    region: "East Region",
  },
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

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            About CMC
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[68px]">
            A pathway for pastors and pioneers who carry a multiplication burden.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
            The Church Multiplication Collective helps leaders recover a sending imagination, form disciple-making communities, and multiply churches into new places.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <article className="texture-card rounded-[2rem] p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Mission
            </p>

            <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[44px]">
              Make disciples.
            </h2>

            <p className="mt-5 font-medium leading-8 text-slate">
              Multiplication begins with disciples who hear Jesus, obey Jesus, and help others follow Jesus.
            </p>
          </article>

          <article className="texture-card rounded-[2rem] p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Formation
            </p>

            <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[44px]">
              Develop leaders.
            </h2>

            <p className="mt-5 font-medium leading-8 text-slate">
              Healthy multiplication requires leaders who are called, formed, trained, and supported.
            </p>
          </article>

          <article className="texture-card rounded-[2rem] p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              Multiplication
            </p>

            <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[44px]">
              Multiply churches.
            </h2>

            <p className="mt-5 font-medium leading-8 text-slate">
              The goal is not activity alone. The goal is faithful new works that worship Jesus, make disciples, and expand the Kingdom.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="brand-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-10 shadow-2xl shadow-black/10 md:px-12 md:py-14">
          <img
            src="/open-bible-mark-white-transparent.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-0 w-[520px] max-w-none -translate-y-1/2 opacity-[0.18] md:-right-24 md:w-[680px] lg:-right-28 lg:w-[760px]"
          />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-2/3 bg-gradient-to-l from-[#151616]/30 via-[#151616]/10 to-transparent" />

          <div className="relative z-20 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <div className="accent-line" />

              <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Part of Open Bible
              </p>

              <h2 className="mt-5 max-w-xl text-[36px] font-black leading-[0.96] tracking-[-0.045em] md:text-[54px]">
                Rooted in a shared mission.
              </h2>

              <p className="mt-6 max-w-md text-base font-semibold leading-8 text-[#FBF0DE]/72">
                CMC serves within Open Bible, connected to local churches, regional relationships, and accountable leadership.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#FBF0DE]/12 bg-[#151616]/30 p-6 md:p-8">
              <p className="text-xl font-bold leading-9 text-[#FBF0DE]/90">
                Open Bible Churches exist to globally make disciples, develop leaders, and multiply churches.
              </p>

              <div className="my-7 h-px w-full bg-[#FBF0DE]/14" />

              <div className="space-y-5 text-base font-medium leading-8 text-[#FBF0DE]/78">
                <p>
                  That shared mission gives the Collective its direction and keeps multiplication connected to the church, not detached from it.
                </p>

                <p>
                  CMC is a practical pathway that helps Open Bible pastors and pioneers take next steps toward disciple-making communities, new churches, and sending churches across every region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="accent-line mx-auto" />

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
              CMC Leadership
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[64px]">
              Led through Open Bible regions.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
              The Church Multiplication Collective is guided by national and regional leaders who serve pastors, pioneers, and multiplying churches.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="texture-card flex gap-5 rounded-[2rem] p-6"
              >
                <PlaceholderPortrait name={leader.name} />

                <div className="flex flex-col justify-center">
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-ember">
                    {leader.region}
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-ink">
                    {leader.name}
                  </h3>

                  <p className="mt-1 font-semibold leading-7 text-slate">
                    {leader.role}
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
