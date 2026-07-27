import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  FileText,
  Layers,
  LibraryBig,
  Sparkles,
} from "lucide-react";

import resourcesContent from "@/content/resources.json";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore practical CMC courses, guides, assessments, and tools for pastors, pioneers, and multiplying churches.",
  alternates: { canonical: "/resources" },
};

type ResourceItem = {
  title: string;
  category?: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  featured?: boolean;
};

const icons = [BookOpen, Compass, FileText, Layers, LibraryBig, Sparkles];

const resources = resourcesContent.resources as ResourceItem[];
const featuredResources = resources.filter((resource) => resource.featured);
const regularResources = resources.filter((resource) => !resource.featured);

function ResourceCard({
  resource,
  index,
  large = false,
}: {
  resource: ResourceItem;
  index: number;
  large?: boolean;
}) {
  const Icon = icons[index % icons.length];

  const cardClasses = large
    ? "brand-panel rounded-[2rem] p-7 shadow-2xl shadow-black/10 md:p-9"
    : "texture-card rounded-[1.7rem] p-7";

  const titleClasses = large
    ? "mt-5 text-3xl font-black leading-[0.96] tracking-[-0.045em] text-[#FBF0DE] md:text-[42px]"
    : "mt-5 text-3xl font-black leading-[0.98] tracking-[-0.04em] text-ink";

  const descriptionClasses = large
    ? "mt-5 text-base font-medium leading-8 text-[#FBF0DE] opacity-82"
    : "mt-4 text-base font-medium leading-8 text-slate";

  const categoryClasses = large
    ? "text-xs font-extrabold uppercase tracking-[0.28em] text-ember"
    : "text-xs font-extrabold uppercase tracking-[0.28em] text-ember";

  return (
    <article className={cardClasses}>
      <div
        className={
          large
            ? "flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FBF0DE]/10 text-ember"
            : "flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/12 text-sage"
        }
      >
        <Icon size={large ? 34 : 30} strokeWidth={1.8} />
      </div>

      {resource.category && (
        <p className={`${categoryClasses} mt-6`}>{resource.category}</p>
      )}

      <h2 className={titleClasses}>{resource.title}</h2>

      <p className={descriptionClasses}>{resource.description}</p>

      {resource.buttonUrl && (
        <Link
          href={resource.buttonUrl}
          className={
            large
              ? "button-primary mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-extrabold transition"
              : "mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-slate"
          }
        >
          {resource.buttonText || "View Resource"} <ArrowRight size={17} />
        </Link>
      )}

      {!resource.buttonUrl && resource.buttonText && (
        <span className="mt-7 inline-flex rounded-full border border-slate/15 bg-white/45 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate/70">
          {resource.buttonText}
        </span>
      )}
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sage/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <div className="accent-line" />

              <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                {resourcesContent.heroEyebrow}
              </p>

              <h1 className="mt-5 max-w-5xl text-[36px] font-black leading-[0.98] tracking-[-0.045em] text-ink sm:text-[42px] md:text-[68px]">
                {resourcesContent.heroTitle}
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
                {resourcesContent.heroDescription}
              </p>
            </div>

            <div className="soft-panel rounded-[2rem] p-6 md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-ember">
                Resource Library
              </p>

              <h2 className="mt-4 text-3xl font-black leading-[0.98] tracking-[-0.04em] text-ink">
                Built to move leaders from interest to action.
              </h2>

              <p className="mt-4 text-base font-medium leading-8 text-slate">
                Explore practical guides, courses, assessments, and training opportunities for every stage of the multiplication pathway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredResources.length > 0 && (
        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Featured
              </p>

              <h2 className="mt-4 text-[38px] font-black leading-[0.96] tracking-[-0.048em] text-ink md:text-[56px]">
                {resourcesContent.featuredTitle}
              </h2>

              <p className="mt-4 text-lg font-medium leading-8 text-slate">
                {resourcesContent.featuredDescription}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {featuredResources.map((resource, index) => (
                <ResourceCard
                  key={`${resource.title}-${index}`}
                  resource={resource}
                  index={index}
                  large
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                Library
              </p>

              <h2 className="mt-4 text-[38px] font-black leading-[0.96] tracking-[-0.048em] text-ink md:text-[56px]">
                More resources
              </h2>
            </div>

            <p className="max-w-md text-base font-medium leading-7 text-slate">
              Browse additional tools for discerning calling, developing leaders, and preparing to multiply.
            </p>
          </div>

          {regularResources.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {regularResources.map((resource, index) => (
                <ResourceCard
                  key={`${resource.title}-${index}`}
                  resource={resource}
                  index={featuredResources.length + index}
                />
              ))}
            </div>
          ) : (
            <div className="texture-card rounded-[2rem] p-8 text-center md:p-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                No Additional Resources
              </p>

              <h2 className="mt-5 text-[36px] font-black leading-[0.96] tracking-[-0.045em] text-ink md:text-[52px]">
                More tools are on the way.
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
