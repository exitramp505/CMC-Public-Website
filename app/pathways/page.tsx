import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Church Multiplication Pathway",
  description:
    "Explore the Church Multiplication Collective pathway through Discover, Discern, Develop, and Deploy for pioneers and sending churches.",
  alternates: { canonical: "/pathways" },
};

const stages = [
  {
    number: "01",
    phase: "Discover",
    label: "Begin here",
    question: "What is church multiplication, and where might we fit?",
    purpose:
      "A short online course creates a biblical foundation and shared language.",
    pioneer:
      "Name the burden you carry and explore whether pioneering may be your next faithful step.",
    church:
      "Build shared language and explore what becoming a multiplying, sending church could require.",
  },
  {
    number: "02",
    phase: "Discern",
    label: "Seek clarity",
    question: "Is this calling healthy, timely, and ready to move forward?",
    purpose:
      "Prayer, assessment, trusted leaders, and honest feedback bring clarity.",
    pioneer:
      "Clarify calling, character, capacity, family readiness, and fit for the work being considered.",
    church:
      "Recognize potential pioneers and discern how the church can cultivate, affirm, and support them.",
  },
  {
    number: "03",
    phase: "Develop",
    label: "Prepare well",
    question: "What must be formed before a new work begins?",
    purpose:
      "Leaders, teams, disciple-making practices, strategy, and support are developed together.",
    pioneer:
      "Form a team, establish disciple-making rhythms, understand the community, and build a practical plan.",
    church:
      "Create a sending plan with spiritual covering, coaching, resources, communication, and accountability.",
  },
  {
    number: "04",
    phase: "Deploy",
    label: "Send with support",
    question: "How will this work be sent, supported, and sustained?",
    purpose:
      "Deployment is a beginning supported by coaching, relationships, prayer, and accountability.",
    pioneer:
      "Enter the field with a prepared team, a clear model, ongoing coaching, and accountable relationships.",
    church:
      "Release the team publicly and remain actively engaged through prayer, care, coaching, and support.",
  },
];

const principles = [
  {
    title: "Discern before deciding",
    copy: "Test calling, readiness, context, and timing before making a commitment.",
  },
  {
    title: "Choose the right model",
    copy: "Shape the approach around the leader, sending church, and community being served.",
  },
  {
    title: "Continue with support",
    copy: "Stay connected to coaching, covering, prayer, and regional relationships after launch.",
  },
];

export default function PathwaysPage() {
  return (
    <>
      <section
        className="relative min-h-[700px] overflow-hidden bg-slate text-[#FBF0DE]"
        data-header-theme="dark"
      >
        <Image
          src="/pathways-planning-conversation.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 grayscale"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,22,22,0.98)_0%,rgba(35,52,61,0.9)_47%,rgba(35,52,61,0.32)_78%,rgba(21,22,22,0.18)_100%)]" />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-[850px]">
            <div className="h-1 w-[82px] rounded-full bg-[linear-gradient(90deg,#EA9F43,#4DA79C)]" />
            <p className="mt-7 text-[0.68rem] font-black uppercase leading-5 tracking-[0.18em] text-ember sm:text-xs sm:tracking-[0.28em]">
              The Church Multiplication Collective pathway
            </p>
            <h1 className="mt-5 text-[3rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#FBF0DE] min-[420px]:text-[3.4rem] sm:text-[6rem] sm:leading-[0.84] sm:tracking-[-0.08em] lg:text-[7.4rem]">
              A clear path from calling to sending.
            </h1>
            <p className="mt-8 max-w-[710px] text-xl font-bold leading-[1.5] md:text-2xl">
              Four stages help pioneers and churches understand what comes next
              and move forward together.
            </p>
            <p className="mt-4 max-w-[700px] font-semibold leading-8 text-[#FBF0DE]/75">
              Discover the vision. Discern the calling. Develop what is needed.
              Deploy with support.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/discover"
                className="button-primary inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-black sm:w-auto"
              >
                Start with Discover →
              </Link>
              <a
                href="#journey"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#FBF0DE]/40 px-6 text-sm font-black text-[#FBF0DE] transition hover:-translate-y-0.5 hover:border-ember sm:w-auto"
              >
                See all four stages
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
                Two roles in the journey
              </p>
              <h2 className="mt-5 text-[2.3rem] font-black leading-[0.96] tracking-[-0.05em] text-ink sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
                Are you pioneering or preparing to send?
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-slate">
              The pathway serves both. Pioneers clarify and prepare for a new
              work. Churches develop, release, and support the people they send.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-ember/30 border-t-[6px] border-t-ember bg-white/55 p-8 shadow-xl shadow-black/5 md:p-10">
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[40px] border-ember opacity-[0.06]" />
              <div className="relative">
                <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#A85F08]">
                  <span className="h-3 w-3 rounded-full bg-ember" />
                  For the pioneer
                </p>
                <h3 className="mt-8 max-w-xl text-[2.1rem] font-black leading-[0.98] tracking-[-0.05em] text-ink md:text-[2.65rem]">
                  I sense a call to begin something new.
                </h3>
                <p className="mt-5 max-w-xl font-semibold leading-8 text-slate">
                  Clarify the calling, understand the context, and prepare for
                  the kind of work God may be inviting you to begin.
                </p>
              </div>
            </article>

            <article
              className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-sage/35 border-t-[6px] border-t-sage bg-slate p-8 text-[#FBF0DE] shadow-xl shadow-black/10 md:p-10"
              data-header-theme="dark"
            >
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[40px] border-sage opacity-[0.08]" />
              <div className="relative">
                <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#73C8BD]">
                  <span className="h-3 w-3 rounded-full bg-sage" />
                  For the church
                </p>
                <h3 className="mt-8 max-w-xl text-[2.1rem] font-black leading-[0.98] tracking-[-0.05em] md:text-[2.65rem]">
                  We want to become a sending church.
                </h3>
                <p className="mt-5 max-w-xl font-semibold leading-8 text-[#FBF0DE]/76">
                  Develop leaders, discern the right multiplication model, and
                  learn to release and support people well.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
                The pathway
              </p>
              <h2 className="mt-5 text-[2.3rem] font-black leading-[0.96] tracking-[-0.05em] text-ink sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
                Each stage answers a different question.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg font-semibold leading-8 text-slate">
                People move forward when there is clarity and readiness, not
                simply because time has passed. Each stage has a purpose and a
                decision.
              </p>
              <div className="mt-6 flex flex-wrap gap-6 text-xs font-black text-slate">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded-full bg-ember" />
                  Pioneer
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded-full bg-sage" />
                  Church
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-16">
            <div className="pointer-events-none absolute bottom-16 left-[51px] top-16 hidden w-1 rounded-full bg-[linear-gradient(#EA9F43,#4DA79C)] md:block" />

            <div className="grid gap-7">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="relative grid gap-4 md:grid-cols-[104px_0.78fr_1.22fr] md:gap-6"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border-[6px] border-[#F3E4CC] bg-slate text-xl font-black text-[#FBF0DE] md:h-[104px] md:w-[104px] md:rounded-[1.9rem] md:border-[10px] md:text-3xl">
                    {stage.number}
                  </div>

                  <div className="rounded-[1.5rem] bg-slate p-6 text-[#FBF0DE] sm:rounded-[1.9rem] md:p-8">
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-ember">
                      {stage.phase} · {stage.label}
                    </p>
                    <h3 className="mt-4 text-[2rem] font-black leading-none tracking-[-0.05em] sm:text-[2.35rem]">
                      {stage.phase}
                    </h3>
                    <p className="mt-5 text-lg font-black leading-7">
                      {stage.question}
                    </p>
                    <p className="mt-4 text-sm font-semibold leading-7 text-[#FBF0DE]/68">
                      {stage.purpose}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate/10 border-t-[5px] border-t-ember bg-[#FBF0DE]/80 p-6 sm:rounded-[1.75rem] sm:p-7">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#A85F08]">
                        Pioneer
                      </p>
                      <p className="mt-4 text-sm font-semibold leading-7 text-slate">
                        {stage.pioneer}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate/10 border-t-[5px] border-t-sage bg-[#FBF0DE]/80 p-6 sm:rounded-[1.75rem] sm:p-7">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#277B71]">
                        Church
                      </p>
                      <p className="mt-4 text-sm font-semibold leading-7 text-slate">
                        {stage.church}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-slate px-5 py-20 text-[#FBF0DE] lg:px-8 lg:py-24"
        data-header-theme="dark"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
            How we move
          </p>
          <h2 className="mt-5 text-[2.3rem] font-black leading-[0.96] tracking-[-0.05em] sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
            Clarity before momentum.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="min-h-[250px] rounded-[1.9rem] border border-[#FBF0DE]/15 bg-ink/25 p-8"
              >
                <span className="text-xs font-black tracking-[0.2em] text-ember">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-11 text-[1.6rem] font-black leading-none tracking-[-0.045em]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#FBF0DE]/68">
                  {principle.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate text-[#FBF0DE] shadow-[0_28px_80px_rgba(21,22,22,0.1)] lg:grid-cols-[1fr_0.72fr]">
          <div className="p-6 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
              The place to begin
            </p>
            <h2 className="mt-5 text-[3rem] font-black leading-[0.92] tracking-[-0.065em] sm:text-[4.5rem]">
              Start with Discover.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#FBF0DE]/75">
              Discover: Church Multiplication 101 is a short online course for
              pioneers, pastors, churches, and anyone interested in learning
              more. It introduces the vision and helps you decide whether
              deeper discernment should come next.
            </p>
            <Link
              href="/discover"
              className="button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black"
            >
              Learn about Discover →
            </Link>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[500px]">
            <Image
              src="/discover-online-course.webp"
              alt="A pastor taking an online course at a laptop"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover opacity-70 grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(41,61,72,0.42),rgba(21,22,22,0.18))]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="-rotate-90 text-[4rem] font-black tracking-[-0.07em] text-[#FBF0DE]/75 sm:text-[6rem]">
                START
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
