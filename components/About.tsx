import Image from 'next/image';

import { BadgeCheck, Coins, ThumbsUp, UsersRound } from 'lucide-react';

import { SectionReveal } from '@/components/SectionReveal';

const aboutStats = [
  {
    icon: Coins,
    value: '75+',
    label: 'Career Transaction Value Advised',
  },
  {
    icon: UsersRound,
    value: '10+',
    label: 'Years of Expert Real Estate Guidance',
  },
  {
    icon: BadgeCheck,
    value: '100%',
    label: 'Transparency from Sourcing to Signature',
  },
  {
    icon: ThumbsUp,
    value: 'Bespoke Advisory',
    label: 'via a Focused Client Roster',
  },
] as const;

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionReveal>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
              <span>About</span>
              <span className="h-px w-12 bg-[var(--color-gold-500)]" />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
              About
              <span className="block text-[var(--color-gold-500)]">
                Emlak Real Estate
              </span>
            </h2>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
            </div>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
              <p>
                Emlak Real Estate LLC is a Dubai-based property advisory firm
                supporting buyers, sellers, and investors with strategic
                property sourcing, expert transaction guidance, and
                comprehensive documentation support.
              </p>
              <p>
                Our approach is built on market intelligence, hands-on
                execution, and transparent communication, enabling clearer
                decisions at every stage of the asset lifecycle.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-5 border border-[rgba(212,175,55,0.62)] px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-gold-500)] transition hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)] sm:w-auto sm:gap-8 sm:px-7"
            >
              Learn More About Us
              <span aria-hidden="true" className="text-xl leading-none">
                →
              </span>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative min-h-0 sm:min-h-[34rem]">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-[rgba(212,175,55,0.26)] sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[82%] sm:rounded-[2rem] sm:rounded-tl-[8rem]">
              <Image
                src="/images/hero-emlak-main.png"
                alt="Luxury Dubai villa and skyline"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/22" />
            </div>
            <div className="absolute left-6 top-0 hidden h-full w-28 rounded-l-[6rem] border-l border-t border-[rgba(212,175,55,0.52)] lg:block" />

            <div className="relative z-10 mt-4 grid gap-3 sm:mt-0 sm:flex sm:min-h-[34rem] sm:flex-col sm:justify-center sm:py-5">
              {aboutStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.value}
                    className="relative w-full rounded-[1rem] border border-[rgba(212,175,55,0.2)] bg-white/86 p-4 pl-14 shadow-[0_16px_44px_rgba(21,43,71,0.1)] backdrop-blur-xl sm:max-w-[18rem] sm:border-white/45 sm:bg-white/58 sm:p-5 sm:pl-14 lg:ml-12 even:lg:ml-28"
                  >
                    <div className="absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,175,55,0.28)] bg-white/82 text-[var(--color-gold-500)] shadow-[0_12px_36px_rgba(21,43,71,0.08)] backdrop-blur sm:-left-7 sm:top-1/2 sm:h-14 sm:w-14 sm:-translate-y-1/2">
                      <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                    <p className="font-display text-3xl uppercase leading-none text-[var(--color-slate-900)] sm:text-4xl">
                      {stat.value}
                    </p>
                    <div className="mt-3 h-px w-10 bg-[var(--color-gold-500)]" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-slate-900)]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
