import { Award, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';

import { SectionReveal } from '@/components/SectionReveal';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Honest. Transparent. Accountable.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'Committed to the highest standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Creative solutions. Smarter results.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    text: 'Built on trust and lasting relationships.',
  },
] as const;

export function CoreValues() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="text-center">
            <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-500)] sm:gap-4 sm:tracking-[0.32em]">
              <span className="h-px flex-1 bg-[var(--color-gold-500)]" />
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <span>Our Core Values</span>
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <span className="h-px flex-1 bg-[var(--color-gold-500)]" />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-[var(--color-slate-900)] sm:mt-7 sm:text-6xl">
              Our Values.
              <span className="text-[var(--color-gold-500)]">
                {' '}
                Our Promise.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-slate-500)] sm:text-lg">
              The principles that guide our decisions, shape our culture, and
              define every client relationship.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-[rgba(212,175,55,0.55)] bg-[rgb(2,18,34)] shadow-[0_26px_70px_rgba(2,18,34,0.2)] sm:mt-14 sm:rounded-[2rem]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group relative flex min-h-[15rem] flex-col items-center justify-center border-[rgba(212,175,55,0.28)] px-6 py-8 text-center text-white transition duration-300 hover:bg-[rgba(212,175,55,0.05)] sm:min-h-[18rem] sm:px-8 sm:py-10 lg:border-l first:lg:border-l-0"
                  >
                    {index > 0 ? (
                      <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--color-gold-500)] shadow-[0_0_28px_rgba(212,175,55,0.85)] lg:block" />
                    ) : null}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(212,175,55,0.7)] text-[var(--color-gold-400)] transition duration-300 group-hover:border-[rgba(212,175,55,1)] group-hover:bg-[rgba(212,175,55,0.12)] group-hover:shadow-[0_0_32px_rgba(212,175,55,0.25)] sm:h-24 sm:w-24">
                      <Icon size={36} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl uppercase transition duration-300 group-hover:text-[var(--color-gold-400)]">
                      {value.title}
                    </h3>
                    <p className="mt-5 max-w-[13rem] text-base leading-7 text-white/78 transition duration-300 group-hover:text-white/95">
                      {value.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
