import Link from "next/link";

const pathwaySteps = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify calling, language, and the first conversation around multiplication.",
  },
  {
    number: "02",
    title: "Discern",
    description: "Assess readiness, context, character, capacity, and the wisest next step.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Form leaders, teams, practices, and disciple-making rhythms.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Send pioneers and churches toward faithful multiplication.",
  },
];

const essentials = [
  "Make Disciples",
  "Develop Leaders",
  "Multiply Churches",
];

const marks = [
  "", "ember", "", "sage", "", "", "sage", "", "ember",
  "", "sage", "", "ember", "", "", "sage", "", "ember",
  "sage", "", "", "ember", "", "sage", "", "", "ember",
  "", "", "sage", "", "ember", "", "", "sage", "",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#293D48_0%,#23343D_48%,#151616_100%)] text-[#FBF0DE]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(234,159,67,0.16),transparent_28%),radial-gradient(circle_at_92%_72%,rgba(77,167,156,0.16),transparent_34%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(251,240,222,0.048)_1px,transparent_1px),linear-gradient(90deg,rgba(251,240,222,0.038)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
          <div className="hero-light-orb hero-light-orb-one" />
          <div className="hero-light-orb hero-light-orb-two" />

          <div className="hero-mark-field">
            {marks.map((tone, index) => (
              <span
                key={index}
                className={`hero-small-mark ${tone ? `hero-small-mark-${tone}` : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-79px)] max-w-7xl items-center px-5 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-[860px]">
            <div className="h-1 w-[86px] rounded-full bg-[linear-gradient(90deg,#EA9F43,#4DA79C)]" />

            <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-[#EA9F43] sm:text-sm sm:tracking-[0.33em]">
              A ministry pathway of Open Bible Churches
            </p>

            <h1 className="mt-5 max-w-5xl text-[4.55rem] font-black uppercase leading-[0.78] tracking-[-0.095em] text-[#FBF0DE] sm:text-[6.4rem] md:text-[8rem] lg:text-[10.5rem] xl:text-[12rem]">
              Mission to Multiply.
            </h1>

            <p className="mt-8 max-w-[680px] text-[1.06rem] font-semibold leading-[1.55] text-[#FBF0DE]/90 sm:text-xl md:text-2xl">
              For pastors and pioneers called to form new works and multiply churches.
            </p>

            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href="/discover"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#EA9F43] px-6 text-sm font-black text-[#151616] shadow-[0_16px_34px_rgba(234,159,67,0.22)] transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Start Discover →
              </Link>

              <Link
                href="/pathways"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#FBF0DE]/35 px-6 text-sm font-black text-[#FBF0DE] transition hover:-translate-y-0.5 hover:border-[#EA9F43]/60"
              >
                Explore the Pathway
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#EA9F43]">
              The Pathway
            </p>

            <h2 className="mt-4 max-w-xl text-[2.65rem] font-black leading-[0.9] tracking-[-0.075em] text-[#151616] sm:text-[4rem] lg:text-[5.2rem]">
              A clear path from burden to multiplication.
            </h2>

            <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-[#293D48] sm:text-lg">
              The invitation is simple. The pathway gives pastors, pioneers, and sending churches a clear next step.
            </p>
          </div>

          <div className="grid gap-4">
            {pathwaySteps.map((step) => (
              <article
                key={step.number}
                className="relative grid gap-5 overflow-hidden rounded-[1.65rem] border border-[#293D48]/10 bg-white/55 p-5 shadow-[0_14px_40px_rgba(21,22,22,0.075)] sm:grid-cols-[86px_1fr] sm:items-center sm:p-6"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[linear-gradient(90deg,#EA9F43,#4DA79C)] opacity-75" />

                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[1.25rem] bg-[#293D48] text-lg font-black tracking-[-0.04em] text-[#FBF0DE] sm:h-[72px] sm:w-[72px] sm:text-xl">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-3xl font-black leading-none tracking-[-0.055em] text-[#151616]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[0.95rem] font-semibold leading-7 text-[#293D48]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#293D48] px-5 py-16 text-[#FBF0DE] lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#EA9F43]">
              Essentials
            </p>

            <h2 className="mt-4 max-w-3xl text-[2.65rem] font-black leading-[0.91] tracking-[-0.075em] text-[#FBF0DE] sm:text-[4rem] lg:text-[5rem]">
              Every model keeps the same center.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {essentials.map((essential, index) => (
              <div
                key={essential}
                className="rounded-[1.65rem] border border-[#FBF0DE]/15 bg-[#151616]/25 p-6"
              >
                <strong className="block text-xs font-black uppercase tracking-[0.22em] text-[#EA9F43]">
                  {String(index + 1).padStart(2, "0")}
                </strong>

                <span className="mt-4 block text-[1.55rem] font-black leading-none tracking-[-0.055em] text-[#FBF0DE]">
                  {essential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-light-orb {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          filter: blur(62px);
          opacity: 0.3;
          animation: hero-orb-float 7s ease-in-out infinite alternate;
        }

        .hero-light-orb-one {
          left: -120px;
          bottom: -160px;
          background: rgba(77, 167, 156, 0.42);
        }

        .hero-light-orb-two {
          right: -160px;
          top: 120px;
          background: rgba(234, 159, 67, 0.34);
          animation-duration: 8s;
          animation-direction: alternate-reverse;
        }

        .hero-mark-field {
          position: absolute;
          inset: -14%;
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          grid-auto-rows: 118px;
          gap: 28px;
          transform: rotate(-3deg);
          animation: hero-field-drift 8s ease-in-out infinite alternate;
        }

        .hero-small-mark {
          position: relative;
          width: 36px;
          height: 36px;
          margin: auto;
          border: 2px solid rgba(251, 240, 222, 0.12);
          border-radius: 12px;
          opacity: 0.72;
        }

        .hero-small-mark::before,
        .hero-small-mark::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 20px;
          border-radius: 99px;
          background: rgba(251, 240, 222, 0.16);
          transform-origin: center;
        }

        .hero-small-mark::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .hero-small-mark::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .hero-small-mark-ember {
          border-color: rgba(234, 159, 67, 0.2);
        }

        .hero-small-mark-ember::before,
        .hero-small-mark-ember::after {
          background: rgba(234, 159, 67, 0.22);
        }

        .hero-small-mark-sage {
          border-color: rgba(77, 167, 156, 0.18);
        }

        .hero-small-mark-sage::before,
        .hero-small-mark-sage::after {
          background: rgba(77, 167, 156, 0.2);
        }

        @keyframes hero-field-drift {
          from {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }

          to {
            transform: translate3d(-38px, 30px, 0) rotate(-3deg);
          }
        }

        @keyframes hero-orb-float {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }

          to {
            transform: translate3d(42px, -34px, 0) scale(1.1);
          }
        }

        @media (max-width: 980px) {
          .hero-mark-field {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        @media (max-width: 680px) {
          .hero-mark-field {
            inset: -24%;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 96px;
          }

          .hero-small-mark {
            width: 32px;
            height: 32px;
          }

          .hero-light-orb {
            width: 280px;
            height: 280px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-mark-field,
          .hero-light-orb {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
