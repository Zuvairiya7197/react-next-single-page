import Image from 'next/image';

import { SectionReveal } from '@/components/SectionReveal';
import { heroHighlights, marketStats } from '@/lib/data';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-6.5rem)] overflow-hidden px-6 lg:min-h-[calc(100vh-7rem)] lg:px-8"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/1st.jpeg"
          alt="Stylized exterior illustration of a premium modern residence"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,43,71,0.96)_0%,rgba(21,43,71,0.88)_42%,rgba(21,43,71,0.52)_72%,rgba(21,43,71,0.22)_100%)]" />
      </div>
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6.5rem)] max-w-7xl items-center gap-16 py-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
        <SectionReveal className="relative z-10">
          <span className="inline-flex rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold-400)] shadow-[0_18px_50px_rgba(12,24,41,0.22)]">
            Boutique Real Estate Advisors
          </span>
          <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[1.35rem] border border-white/12 bg-[rgba(255,255,255,0.08)] px-5 py-3 shadow-[0_18px_50px_rgba(12,24,41,0.2)] backdrop-blur">
            <p className="font-display text-2xl leading-none text-white sm:text-[2rem]">
              EMLAK{' '}
              <span className="text-[var(--color-gold-400)]">
                REAL ESTATE LLC
              </span>
            </p>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Elevated spaces for{' '}
            <span className="text-[var(--color-gold-400)]">modern living</span>,
            investing, and growth.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            <span className="font-semibold text-white">
              EMLAK REAL ESTATE LLC
            </span>{' '}
            pairs local expertise with refined presentation to help clients
            unlock exceptional homes, commercial opportunities, and long-term
            value in every move.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[var(--color-slate-900)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-strong)]"
            >
              Explore Properties
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[var(--color-gold-400)] hover:bg-white/10"
              style={{ color: '#ffffff' }}
            >
              Schedule a Private Tour
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/12 bg-[rgba(255,255,255,0.08)] p-5 shadow-[0_20px_60px_rgba(12,24,41,0.22)] backdrop-blur"
              >
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="relative z-10" delay={0.1}>
          <div className="relative rounded-[2rem] border border-white/12 bg-[rgba(255,255,255,0.08)] p-5 shadow-[0_30px_90px_rgba(12,24,41,0.28)] backdrop-blur-md sm:p-6">
            <div className="absolute inset-x-10 top-4 h-28 rounded-full bg-[rgba(212,175,55,0.18)] blur-3xl" />
            <div className="relative rounded-[1.6rem] border border-[rgba(212,175,55,0.18)] bg-[rgba(9,20,35,0.34)] p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold-400)]">
                Signature Approach
              </p>
              <p className="mt-3 font-display text-3xl leading-tight text-white">
                Every listing is positioned with the polish of a premium brand.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                From market preparation to final negotiation, we shape each
                touchpoint to feel clear, elevated, and deeply considered.
              </p>
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-400)]">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
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
