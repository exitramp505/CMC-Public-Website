import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="About" title="A collective for leaders who still believe the Church is sent.">
          Church Multiplication Collective exists to help pastors, pioneers, and churches recover multiplication as a normal expression of healthy ministry.
        </SectionHeader>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="texture-card rounded-[2rem] p-8">
            <h2 className="text-3xl font-black tracking-[-.025em] text-ink">Our purpose</h2>
            <p className="mt-5 leading-8 text-slate">
              We help leaders discern calling, develop multiplication pathways, and send pioneers into new fields with practical support, spiritual clarity, and relational covering.
            </p>
          </div>
          <div className="texture-card rounded-[2rem] p-8">
            <h2 className="text-3xl font-black tracking-[-.025em] text-ink">Our conviction</h2>
            <p className="mt-5 leading-8 text-slate">
              Multiplication is not a side project for unusually gifted churches. It is a recovery of the apostolic impulse within the people of God.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
