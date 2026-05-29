import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const models = [
  ["Church Launch Model", "A public-launch approach designed to build momentum, gather a launch team, and establish a visible new work in a community."],
  ["Missional Church Model", "A relational model focused on long-term cultural engagement, community cultivation, and disciple-making in everyday spaces."],
  ["Micro Church Model", "Small, decentralized gatherings with simple structures, strong disciple-making, and an emphasis on multiplication."],
  ["Multi-Community Church", "A model where a sending church hosts or helps form new worshiping communities that reach distinct groups while sharing resources."],
  ["The Church Collective", "A covering and incubator for abstract church models, small startup churches, and ministry expressions that do not fit a traditional mold."],
];

export default function ModelsPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Models" title="One mission. Multiple expressions.">
          Multiplication must be contextual. These models give leaders language for discerning what kind of new work may be forming.
        </SectionHeader>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5">
          {models.map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-slate/15 bg-white p-8 md:grid md:grid-cols-[.75fr_1.25fr] md:gap-8">
              <h2 className="text-3xl font-black tracking-[-.025em] text-ink">{title}</h2>
              <p className="mt-4 leading-8 text-slate md:mt-0">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
