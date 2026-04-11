import Image from 'next/image';

import { SectionReveal } from '@/components/SectionReveal';
import { heroHighlights, marketStats } from '@/lib/data';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-18 pt-16 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal className="relative z-10">
          <span className="inline-flex rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-slate-700)] shadow-[0_18px_50px_rgba(16,33,58,0.08)]">
            Boutique Real Estate Advisors
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-[var(--color-slate-900)] sm:text-6xl lg:text-7xl">
            Elevated spaces for modern living, investing, and growth.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-slate-500)] sm:text-xl">
            We pair local expertise with refined presentation to help clients
            unlock exceptional homes, commercial opportunities, and long-term
            value in every move.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-slate-500)] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-slate-700)]"
            >
              Explore Properties
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 px-7 py-4 text-sm font-semibold text-[var(--color-slate-900)] transition hover:-translate-y-0.5 hover:border-[var(--color-gold-500)] hover:bg-white"
            >
              Schedule a Private Tour
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/60 bg-white/72 p-5 shadow-[0_20px_60px_rgba(16,33,58,0.08)] backdrop-blur"
              >
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="relative z-10" delay={0.1}>
          <div className="relative rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,rgba(16,33,58,0.95),rgba(37,74,112,0.86))] p-4 shadow-[0_30px_90px_rgba(16,33,58,0.22)] sm:p-6">
            <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-[rgba(216,179,106,0.25)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)]">
              <Image
                src="/images/property-one.svg"
                alt="Stylized exterior illustration of a premium modern residence"
                width={900}
                height={760}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/8 p-4 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[rgba(248,243,235,0.65)]">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[rgba(248,243,235,0.72)]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
