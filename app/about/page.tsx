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
        <div className="brand-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 shadow-2xl shadow-black/10 md:p-12">
          <img
            src="/open-bible-about-background-watermark.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 hidden w-[520px] max-w-none opacity-[0.11] mix-blend-screen lg:block"
          />

          <div className="relative z-[1] grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <img
                src="/open-bible-logo-lockup-white-transparent.png"
                alt="Open Bible Churches"
                className="h-auto w-64"
              />

              <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Part of Open Bible
              </p>

              <h2 className="mt-5 text-[34px] font-black leading-[0.96] tracking-[-0.045em] md:text-[50px]">
                Rooted in a shared mission.
              </h2>
            </div>

            <div className="space-y-7 text-lg font-medium leading-8 text-[#FBF0DE]/84">
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
