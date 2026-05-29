import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";

const resources = ["Multiplication Guides", "Worksheets", "Training Videos", "Assessment Tools", "Recommended Reading", "Event Materials"];

export default function ResourcesPage() {
  return (
    <>
      <section className="px-5 py-24 lg:px-8">
        <SectionHeader eyebrow="Resources" title="Tools for pastors, pioneers, and sending churches.">
          This page can become the home for guides, worksheets, videos, downloads, and links connected to the multiplication pathway.
        </SectionHeader>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <div key={item} className="rounded-3xl border border-slate/15 bg-white p-7">
              <h2 className="text-2xl font-black tracking-[-.025em] text-ink">{item}</h2>
              <p className="mt-4 text-sm leading-7 text-slate">Placeholder section for future downloads, links, and curated resources.</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
