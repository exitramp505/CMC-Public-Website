import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const items = [
  ["Discover", "Church Multiplication 101", "A first-step track for pastors and potential pioneers exploring calling, models, theology, and next steps."],
  ["Discern", "Calling and Readiness", "A guided process to clarify fit, gifting, character, ministry style, and the kind of support a leader needs."],
  ["Develop", "Formation and Training", "Practical training in disciple-making, leadership development, team formation, strategy, and sustainable multiplication."],
  ["Deploy", "Sending and Support", "Ongoing coaching, covering, and support as pioneers and churches move from preparation to faithful action."],
];

export default function PathwaysPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Pathways" title="A clear road from interest to action.">
          The pathway is designed to help leaders take the next faithful step without forcing every church or pioneer into the same mold.
        </SectionHeader>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {items.map(([phase, title, text]) => (
            <div key={phase} className="texture-card rounded-[2rem] p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-ember">{phase}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-.025em] text-ink">{title}</h2>
              <p className="mt-5 leading-8 text-slate">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
