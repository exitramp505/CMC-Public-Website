import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const directors = [
  {
    region: "Central Region",
    name: "Director Name",
    title: "Director of Multiplication",
    initials: "CR",
  },
  {
    region: "East Region",
    name: "Director Name",
    title: "Director of Multiplication",
    initials: "ER",
  },
  {
    region: "Mountain Plains Region",
    name: "Director Name",
    title: "Director of Multiplication",
    initials: "MP",
  },
  {
    region: "Pacific Region",
    name: "Director Name",
    title: "Director of Multiplication",
    initials: "PR",
  },
  {
    region: "Southeast Region",
    name: "Director Name",
    title: "Director of Multiplication",
    initials: "SE",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="About" title="The Church Multiplication Collective">
          The Church Multiplication Collective exists to help pastors, pioneers, and churches recover multiplication as a normal expression of healthy ministry.
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

      <section className="brand-panel px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="accent-line" />

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">
                CMC Leadership
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] md:text-6xl">
                Led through every Open Bible region.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#FBF0DE]/80">
              The Collective is led by the Directors of Multiplication serving the five Open Bible regions. Together, they help pastors, pioneers, and churches take the next faithful step toward multiplication.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {directors.map((director) => (
              <article
                key={director.region}
                className="rounded-[1.75rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-5 shadow-xl shadow-black/10"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-[#FBF0DE]/20 bg-[#FBF0DE]">
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#EA9F43_0%,#F1D2AC_34%,#FBF0DE_72%)]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#151616] bg-[#FBF0DE] text-3xl font-black tracking-[-.04em] text-[#151616]">
                      {director.initials}
                    </div>
                  </div>
                </div>

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

          <div className="mt-10 rounded-[1.75rem] border border-[#FBF0DE]/15 bg-[#FBF0DE]/8 p-6">
            <p className="text-sm leading-7 text-[#FBF0DE]/80">
              Replace each placeholder photo and name with the correct regional Director of Multiplication when final details are ready.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
