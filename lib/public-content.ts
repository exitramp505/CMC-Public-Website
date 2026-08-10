const CONTENT_ENDPOINT =
  process.env.CMC_PATHWAY_CONTENT_URL ||
  "https://cmc-pathway.netlify.app/.netlify/functions/public-site-content";

export async function getPublicContent<T>(key: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${CONTENT_ENDPOINT}?key=${encodeURIComponent(key)}`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok) return fallback;
    const payload = (await response.json()) as {
      ok?: boolean;
      content?: Record<string, unknown>;
    };
    const value = payload.content?.[key];
    if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;
    if (Object.keys(value).length === 0) return fallback;
    if (fallback && typeof fallback === "object" && !Array.isArray(fallback)) {
      return { ...fallback, ...value } as T;
    }
    return value as T;
  } catch {
    return fallback;
  }
}
