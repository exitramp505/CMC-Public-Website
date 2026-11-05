export type PublicEvent = {
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

const EVENT_ENDPOINT =
  process.env.CMC_PATHWAY_EVENTS_URL ||
  "https://pathway.openbiblecmc.org/.netlify/functions/public-events";

export async function getPublicEvents(): Promise<PublicEvent[] | null> {
  try {
    const response = await fetch(EVENT_ENDPOINT, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok) return null;
    const payload = (await response.json()) as {
      ok?: boolean;
      events?: PublicEvent[];
    };
    return payload.ok && Array.isArray(payload.events) ? payload.events : null;
  } catch {
    return null;
  }
}
