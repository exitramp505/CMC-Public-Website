"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

type PublicEvent = {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  startsAt: string;
  endsAt?: string | null;
  location?: string;
  stage?: string;
  region?: string | null;
  publicUrl?: string;
};

const EVENT_FEED =
  "https://cmc-pathway.netlify.app/.netlify/functions/public-events";

function formatDateRange(startValue: string, endValue?: string | null) {
  const start = new Date(startValue);
  const end = endValue ? new Date(endValue) : null;
  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  if (!end || start.toDateString() === end.toDateString()) return date.format(start);
  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
    return `${start.toLocaleDateString("en-US", { month: "short" })} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${date.format(start)} – ${date.format(end)}`;
}

export default function PathwayPublicEvents({ staticTitles }: { staticTitles: string[] }) {
  const [events, setEvents] = useState<PublicEvent[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(EVENT_FEED, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => {
        const existing = new Set(staticTitles.map((title) => title.toLowerCase()));
        setEvents((data.events || []).filter((item: PublicEvent) => !existing.has(item.title.toLowerCase())));
      })
      .catch(() => setEvents([]));
    return () => controller.abort();
  }, [staticTitles]);

  if (!events.length) return null;

  return (
    <section className="px-5 pb-20 lg:px-8" aria-label="Additional upcoming CMC events">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="texture-card rounded-[1.7rem] p-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-ember">
              {formatDateRange(event.startsAt, event.endsAt)}
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-[-.035em] text-ink">
              {event.title}
            </h2>
            {(event.location || event.region) && (
              <p className="mt-3 flex items-start gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-slate">
                <MapPin className="mt-0.5 shrink-0 text-sage" size={17} />
                {event.location || `${event.region} Region`}
              </p>
            )}
            <p className="mt-4 text-base font-medium leading-8 text-slate">
              {event.summary || event.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate/75">
              <CalendarDays className="text-ember" size={18} />
              CMC {event.stage ? `${event.stage.charAt(0).toUpperCase()}${event.stage.slice(1)} ` : ""}event
            </div>
            <Link
              href={event.publicUrl || "/contact"}
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-slate"
            >
              {event.publicUrl ? "Event Details" : "Contact CMC"} <ArrowRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
