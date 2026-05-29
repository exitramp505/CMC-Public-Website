import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const events = [
  ["Dream Big Workshop", "A one-day workshop for churches to catch vision, identify leaders, and imagine their next multiplication step."],
  ["Church Multiplication Training", "Practical training for pioneers, pastors, and key leaders preparing to launch or multiply new ministry expressions."],
  ["Discernment Center", "A guided discernment environment for potential pioneers and teams to receive feedback, assessment, and next-step clarity."],
  ["Round Tables", "Strategic gatherings for leaders to wrestle with real questions, share learning, and strengthen apostolic imagination."],
];

export default function EventsPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Events" title="Gatherings that move leaders toward action.">
          Events are designed to create clarity, courage, and connection for pastors and pioneers pursuing multiplication.
        </SectionHeader>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {events.map(([title, text]) => (
            <div key={title} className="texture-card rounded-[2rem] p-8">
              <h2 className="text-3xl font-black tracking-[-.025em] text-ink">{title}</h2>
              <p className="mt-5 leading-8 text-slate">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
