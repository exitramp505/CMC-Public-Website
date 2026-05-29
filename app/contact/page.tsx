import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <SectionHeader eyebrow="Contact" title="Start a conversation.">
        Interested in Discover, a workshop, training, or a multiplication pathway for your church? This is the place to begin.
      </SectionHeader>
      <div className="mx-auto mt-14 max-w-3xl texture-card rounded-[2rem] p-8 text-center md:p-12">
        <h2 className="text-4xl font-black tracking-[-.035em] text-ink md:text-5xl">Ready to explore next steps?</h2>
        <p className="mt-5 leading-8 text-slate">
          Add your preferred contact email, form, or scheduling link here. For now, this button can be replaced with a mailto link or external form.
        </p>
        <Link href="mailto:info@example.com" className="button-primary mt-8 inline-flex rounded-full px-7 py-4 text-sm font-bold transition">
          Email the Collective
        </Link>
      </div>
    </section>
  );
}
