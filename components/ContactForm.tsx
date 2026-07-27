"use client";

import { FormEvent, useState } from "react";
import { stateNames } from "@/lib/regions";

type FormStatus = "idle" | "sending" | "success" | "error";

const interests = [
  "I want to learn more about Discover",
  "I sense a call to pioneer something new",
  "Our church wants to multiply or send leaders",
  "I want help understanding the CMC pathway",
  "I have a general question",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Unable to send message.");
      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to send your message. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-slate px-5 py-24 text-sand lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -bottom-72 -right-40 h-[560px] w-[560px] rounded-full border-[70px] border-sage/10" />
        <div className="relative mx-auto max-w-6xl">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-ember to-sage" />
          <p className="mt-6 text-xs font-black uppercase tracking-[.27em] text-ember">
            Contact the Collective
          </p>
          <h1 className="mt-5 max-w-5xl text-[3rem] font-black uppercase leading-[.92] tracking-[-.06em] sm:text-[clamp(3.5rem,8vw,6.5rem)] sm:leading-[.87] sm:tracking-[-.075em]">
            Let&apos;s find your next step.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-sand/80 md:text-xl">
            Tell us a little about yourself and what you are exploring. We will
            help you identify a clear next step.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <aside className="min-w-0 lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[.27em] text-ember">
              A personal response
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[.96] tracking-[-.05em] sm:text-5xl md:text-6xl">
              Begin the conversation.
            </h2>
            <p className="mt-6 font-semibold leading-8 text-slate">
              Whether you are a pioneer, pastor, church leader, or simply
              curious about multiplication, this is the place to begin.
            </p>
            <div className="mt-9 grid gap-5">
              {[
                ["Share your context", "A few details help us understand what you are exploring."],
                ["Tell us what you are exploring", "Share your questions, ideas, or sense of calling in your own words."],
                ["We will follow up", "A CMC leader will respond and help you consider what comes next."],
              ].map(([title, text], index) => (
                <div className="grid min-w-0 grid-cols-[44px_minmax(0,1fr)] items-center gap-4" key={title}>
                  <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-slate text-xs font-black text-sand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong className="block text-sm">{title}</strong>
                    <span className="mt-1 block text-xs font-semibold leading-5 text-slate/70">
                      {text}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <div className="texture-card min-w-0 rounded-[1.5rem] p-4 shadow-[0_28px_75px_rgba(41,61,72,.1)] sm:rounded-[2.25rem] sm:p-6 md:p-10">
            {status === "success" ? (
              <div className="grid min-h-[430px] place-items-center px-4 text-center">
                <div>
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-sage text-4xl font-black text-white">
                    ✓
                  </div>
                  <h2 className="mt-6 text-4xl font-black tracking-[-.055em] md:text-5xl">
                    Message sent.
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg font-semibold leading-7 text-slate">
                    Thank you for reaching out. A CMC leader will follow up with
                    you personally.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="border-b border-slate/15 pb-7">
                  <h2 className="text-3xl font-black tracking-[-.045em]">
                    Start a conversation
                  </h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate/70">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                <form onSubmit={submitForm}>
                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <Field label="First name *" name="firstName" autoComplete="given-name" required />
                    <Field label="Last name *" name="lastName" autoComplete="family-name" required />
                    <Field label="Email address *" name="email" type="email" autoComplete="email" required />
                    <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />

                    <label className="grid gap-2 text-[11px] font-black uppercase tracking-[.08em] text-slate">
                      State *
                      <select className="h-14 w-full min-w-0 rounded-2xl border border-slate/20 bg-white/70 px-4 text-base font-medium normal-case tracking-normal text-ink outline-none focus:border-sage focus:ring-4 focus:ring-sage/10" name="state" required defaultValue="">
                        <option value="" disabled>Select your state</option>
                        {Object.entries(stateNames)
                          .sort((a, b) => a[1].localeCompare(b[1]))
                          .map(([code, name]) => <option value={code} key={code}>{name}</option>)}
                      </select>
                    </label>

                    <Field label="Church or organization" name="church" autoComplete="organization" />

                    <label className="grid gap-2 text-[11px] font-black uppercase tracking-[.08em] text-slate md:col-span-2">
                      What would you like to explore? *
                      <select className="h-14 w-full min-w-0 rounded-2xl border border-slate/20 bg-white/70 px-4 text-base font-medium normal-case tracking-normal text-ink outline-none focus:border-sage focus:ring-4 focus:ring-sage/10" name="interest" required defaultValue="">
                        <option value="" disabled>Choose the closest option</option>
                        {interests.map((interest) => <option value={interest} key={interest}>{interest}</option>)}
                      </select>
                    </label>

                    <label className="grid gap-2 text-[11px] font-black uppercase tracking-[.08em] text-slate md:col-span-2">
                      Tell us what you are thinking *
                      <textarea
                        className="min-h-36 w-full min-w-0 resize-y rounded-2xl border border-slate/20 bg-white/70 p-4 text-base font-medium leading-6 normal-case tracking-normal text-ink outline-none focus:border-sage focus:ring-4 focus:ring-sage/10"
                        name="message"
                        placeholder="Share what you are sensing, considering, or hoping to understand."
                        required
                      />
                    </label>

                    <label className="pointer-events-none absolute -left-[9999px]" aria-hidden="true">
                      Website
                      <input name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-800" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    className="button-primary mt-7 rounded-full px-7 py-4 text-sm font-black disabled:cursor-wait disabled:opacity-60"
                    disabled={status === "sending"}
                    type="submit"
                  >
                    {status === "sending" ? "Sending…" : "Send my message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2 text-[11px] font-black uppercase tracking-[.08em] text-slate">
      {label}
      <input
        className="h-14 w-full min-w-0 rounded-2xl border border-slate/20 bg-white/70 px-4 text-base font-medium normal-case tracking-normal text-ink outline-none focus:border-sage focus:ring-4 focus:ring-sage/10"
        {...props}
      />
    </label>
  );
}
