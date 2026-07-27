import { NextResponse } from "next/server";
import { getRegionForState, stateNames, type RegionKey } from "@/lib/regions";

const recipientVariables: Record<RegionKey, string> = {
  central: "CMC_EMAIL_CENTRAL",
  east: "CMC_EMAIL_EAST",
  mountainPlains: "CMC_EMAIL_MOUNTAIN_PLAINS",
  pacific: "CMC_EMAIL_PACIFIC",
  southeast: "CMC_EMAIL_SOUTHEAST",
};

const clean = (value: unknown, limit = 2000) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot: bots commonly fill every field.
    if (clean(body.website)) return NextResponse.json({ ok: true });

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 60);
    const state = clean(body.state, 2).toUpperCase();
    const church = clean(body.church, 180);
    const interest = clean(body.interest, 220);
    const message = clean(body.message, 4000);

    if (!firstName || !lastName || !email || !state || !interest || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const regionEntry = getRegionForState(state);
    if (!regionEntry || !stateNames[state]) {
      return NextResponse.json(
        { error: "Please select a valid state." },
        { status: 400 },
      );
    }

    const [regionKey, region] = regionEntry;
    const recipient = process.env[recipientVariables[regionKey]];
    const resendKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.CMC_EMAIL_FROM;

    if (!recipient || !resendKey || !fromAddress) {
      console.error(`Contact email is not configured for ${region.name}.`);
      return NextResponse.json(
        { error: "Email delivery is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
        "User-Agent": "cmcopenbible.netlify.app/1.0",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: email,
        subject: `CMC website contact: ${firstName} ${lastName}`,
        text: [
          "New message from the CMC website contact page",
          "",
          `Name: ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `State: ${stateNames[state]}`,
          `Region: ${region.name}`,
          `Church or organization: ${church || "Not provided"}`,
          `Interest: ${interest}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact email.", await response.text());
      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
