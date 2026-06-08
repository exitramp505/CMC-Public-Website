import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

import eventsContent from "@/content/events.json";

type EventItem = {
  title: string;
  date: string;
  location?: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  featured?: boolean;
};

const events = eventsContent.events as EventItem[];

export default function EventsPage() {
  const featured = events.filter((event) => event.featured);
  const regular = events.filter((event) => !event.featured);

  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="accent-line mx-auto" />

          <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
            Events
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.052em] text-ink md:text-[68px]">
            Gatherings for pioneers, pastors, and multiplying churches.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-slate">
            Explore upcoming CMC opportunities designed to help leaders discover, discern, develop, and deploy toward church multiplication.
          </p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5">
              {featured.map((event) => (
                <article
                  key={`${event.title}-${event.date}`}
                  className="brand-panel rounded-[2rem] p-8 shadow-2xl shadow-black/10 md:p-12"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                        Featured Event
                      </p>

                      <h2 className="mt-5 text-[40px] font-black leading-[0.94] tracking-[-0.052em] text-[#FBF0DE] md:text-[64px]">
                        {event.title}
                      </h2>
                    </div>

                    <div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl border border-[#FBF0DE]/14 bg-[#151616]/24 px-5 py-4 text-[#FBF0DE]">
                          <CalendarDays className="shrink-0 text-ember" size={24} />
                          <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FBF0DE] opacity-60">
                              Date
                            </p>
                            <p className="mt-1 text-base font-black">{event.date}</p>
                          </div>
                        </div>

                        {event.location && (
                          <div className="flex items-center gap-3 rounded-2xl border border-[#FBF0DE]/14 bg-[#151616]/24 px-5 py-4 text-[#FBF0DE]">
                            <MapPin className="shrink-0 text-ember" size={24} />
                            <div>
                              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FBF0DE] opacity-60">
                                Location
                              </p>
                              <p className="mt-1 text-base font-black">{event.location}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="mt-6 text-lg font-medium leading-8 text-[#FBF0DE]">
                        {event.description}
                      </p>

                      {event.buttonUrl && (
                        <Link
                          href={event.buttonUrl}
                          className="button-primary mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold transition"
                        >
                          {event.buttonText || "Learn More"} <ArrowRight size={18} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {regular.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="texture-card rounded-[1.7rem] p-7"
            >
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-ember">
                {event.date}
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-.035em] text-ink">
                {event.title}
              </h2>

              {event.location && (
                <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.18em] text-slate">
                  {event.location}
                </p>
              )}

              <p className="mt-4 text-base font-medium leading-8 text-slate">
                {event.description}
              </p>

              {event.buttonUrl && (
                <Link
                  href={event.buttonUrl}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-slate"
                >
                  {event.buttonText || "Learn More"} <ArrowRight size={16} />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
