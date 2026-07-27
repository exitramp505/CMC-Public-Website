import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From Calling to Multiplication",
  description:
    "The Church Multiplication Collective helps pioneers, pastors, and sending churches discern calling and take faithful next steps toward multiplying disciples, leaders, and churches.",
  alternates: { canonical: "/" },
};

const audiences = [
  {
    title: "Pioneers",
    description:
      "You sense a call to form a new disciple-making community or church and need help clarifying calling, context, and readiness.",
    tone: "bg-slate",
    mark: "bg-[#FBF0DE]",
  },
  {
    title: "Pastors",
    description:
      "You want to understand church multiplication, recognize potential pioneers, or explore what multiplication could mean for your church.",
    tone: "bg-ember",
    mark: "bg-ink",
  },
  {
    title: "Sending churches",
    description:
      "Your church is ready to develop, release, and support leaders who can carry the gospel into new communities and contexts.",
    tone: "bg-sage",
    mark: "bg-[#FBF0DE]",
  },
];

const pathwaySteps = [
  {
    number: "01",
    label: "Start here",
    title: "Discover",
    description:
      "Learn the biblical foundation, shared language, models, and first questions of church multiplication.",
  },
  {
    number: "02",
    title: "Discern",
    description:
      "Clarify calling, character, capacity, context, and readiness with trusted leaders.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the leader, team, practices, and plan required for a healthy new work.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Move into the field with sending relationships, coaching, support, and accountability.",
  },
];

const discoverAudiences = [
  "You sense a pioneering call",
  "You are a pastor exploring multiplication",
  "Your church wants to become a sending church",
  "You are interested and want to learn more",
];

function AudienceMark({
  tone,
  mark,
}: {
  tone: string;
  mark: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`relative block h-[62px] w-[62px] shrink-0 rounded-[1.25rem] ${tone}`}
    >
      <span
        className={`absolute left-1/2 top-1/2 h-8 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full ${mark}`}
      />
      <span
        className={`absolute left-1/2 top-1/2 h-8 w-1.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full ${mark}`}
      />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <section
        className="relative min-h-[720px] overflow-hidden bg-slate text-[#FBF0DE]"
        data-header-theme="dark"
      >
        <Image
          src="/hero-community-gathering-v3.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] opacity-[0.58] grayscale lg:object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,22,22,0.98)_0%,rgba(35,52,61,0.92)_45%,rgba(35,52,61,0.35)_76%,rgba(21,22,22,0.2)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(21,22,22,0.46),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-[800px]">
            <div className="h-1 w-[82px] rounded-full bg-[linear-gradient(90deg,#EA9F43,#4DA79C)]" />
            <p className="mt-7 max-w-full text-[0.68rem] font-black uppercase leading-5 tracking-[0.18em] text-ember sm:text-xs sm:tracking-[0.3em]">
              Church Multiplication Collective · Open Bible
            </p>
            <h1 className="mt-5 max-w-5xl text-[2.35rem] font-black uppercase leading-[0.88] tracking-[-0.065em] text-[#FBF0DE] min-[420px]:text-[3.55rem] sm:text-[6.2rem] sm:leading-[0.82] sm:tracking-[-0.085em] lg:text-[8rem]">
              From calling to multiplication.
            </h1>
            <p className="mt-7 max-w-[710px] text-lg font-bold leading-7 text-[#FBF0DE] sm:text-xl sm:leading-[1.5] md:text-2xl">
              We help pioneers, pastors, and churches discern what God is
              stirring and take a faithful next step.
            </p>
            <p className="mt-4 max-w-[700px] font-semibold leading-8 text-[#FBF0DE]/76">
              Clear guidance, practical preparation, and trusted relationships
              for multiplying disciples, leaders, and churches.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/discover"
                className="button-primary inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-black sm:w-auto"
              >
                Start with Discover →
              </Link>
              <Link
                href="/pathways"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#FBF0DE]/40 px-6 text-sm font-black text-[#FBF0DE] transition hover:-translate-y-0.5 hover:border-ember sm:w-auto"
              >
                See the pathway
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
              Who we serve
            </p>
              <h2 className="mt-5 max-w-xl text-[2.25rem] font-black leading-[0.96] tracking-[-0.05em] text-ink sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
              A pathway for people and churches exploring multiplication.
            </h2>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-slate">
              Whether you are sensing a call, leading a church, or preparing to
              send, you do not have to navigate the next step alone.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate/10 bg-slate/10">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 border-b border-slate/10 bg-white/55 p-5 last:border-b-0 sm:grid-cols-[62px_1fr] sm:items-center sm:gap-6 sm:p-8"
              >
                <AudienceMark tone={audience.tone} mark={audience.mark} />
                <div>
                  <h3 className="text-[1.75rem] font-black leading-none tracking-[-0.045em] text-ink">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-slate">
                    {audience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-slate px-5 py-20 text-[#FBF0DE] lg:px-8 lg:py-28"
        data-header-theme="dark"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
                How we help
              </p>
              <h2 className="mt-5 max-w-3xl text-[2.25rem] font-black leading-[0.96] tracking-[-0.05em] sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
                Clarity for every stage of the journey.
              </h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-[#FBF0DE]/78">
              The Church Multiplication Collective connects spiritual
              discernment with practical preparation. Each stage has a purpose,
              a decision, and the relationships needed to move forward wisely.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pathwaySteps.map((step, index) => (
              <article
                key={step.number}
                className={`relative min-h-[280px] rounded-[1.65rem] border p-7 ${
                  index === 0
                    ? "border-ember/70 bg-ember/10"
                    : "border-[#FBF0DE]/15 bg-ink/25"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                  {step.number}
                  {step.label ? ` · ${step.label}` : ""}
                </p>
                {index < pathwaySteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-7 top-6 text-2xl font-bold text-sage"
                  >
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </span>
                )}
                <h3 className="mt-16 text-3xl font-black tracking-[-0.05em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#FBF0DE]/72">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3E4CC] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#FBF0DE] shadow-[0_28px_80px_rgba(21,22,22,0.1)] lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
              The place to begin
            </p>
            <h2 className="mt-5 text-[2.35rem] font-black leading-[0.96] tracking-[-0.05em] text-ink sm:text-[4.5rem] sm:leading-[0.92] sm:tracking-[-0.065em]">
              Start with Discover.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-slate">
              Discover: Church Multiplication 101 is a short online course for
              anyone who wants to understand church multiplication before
              deciding what comes next.
            </p>
            <div className="mt-7 grid gap-3">
              {discoverAudiences.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-extrabold text-slate"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage text-sm text-[#FBF0DE]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/discover"
              className="button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black"
            >
              Learn about Discover →
            </Link>
          </div>

          <div className="relative min-h-[430px] bg-slate lg:min-h-[560px]">
            <Image
              src="/discover-online-course.webp"
              alt="A pastor taking an online course at a laptop"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover opacity-75 grayscale"
            />
            <div className="absolute inset-x-7 bottom-7 rounded-[1.4rem] border border-[#FBF0DE]/15 bg-ink/65 p-6 text-lg font-black leading-7 text-[#FBF0DE] backdrop-blur-xl">
              A short online course. No commitment to launch.
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-ink px-5 py-20 text-center text-[#FBF0DE] lg:px-8 lg:py-24"
        data-header-theme="dark"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-ember">
            Church Multiplication Collective
          </p>
          <h2 className="mx-auto mt-5 text-[2.25rem] font-black leading-[0.96] tracking-[-0.05em] sm:text-[4.2rem] sm:leading-[0.92] sm:tracking-[-0.065em] lg:text-[5rem]">
            You do not have to have everything figured out to begin.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-[#FBF0DE]/75">
            Discover is the place to start for pioneers, pastors, sending
            churches, and anyone interested in learning more about church
            multiplication.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/discover"
              className="button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black"
            >
              Start Discover →
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#FBF0DE]/35 px-6 text-sm font-black text-[#FBF0DE] transition hover:-translate-y-0.5 hover:border-ember"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
