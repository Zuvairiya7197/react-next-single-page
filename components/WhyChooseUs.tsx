import Image from 'next/image';

import { FileCheck2, Handshake, Home, IdCard } from 'lucide-react';

import { SectionReveal } from '@/components/SectionReveal';

const reasons = [
  {
    icon: Home,
    title: 'Property Sourcing',
    text: 'Goal-focused opportunities.',
    className: 'lg:ml-28',
  },
  {
    icon: IdCard,
    title: 'Golden Visa Support',
    text: 'Residency-aligned guidance.',
    className: 'lg:ml-4',
  },
  {
    icon: FileCheck2,
    title: 'Legal Coordination',
    text: 'Organised transaction process.',
    className: 'lg:ml-28',
  },
  {
    icon: Handshake,
    title: 'After-Sales Support',
    text: 'Continued liaison after purchase.',
    className: 'lg:ml-8',
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionReveal>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
              <span>Why Clients Choose Us</span>
              <span className="h-px w-12 bg-[var(--color-gold-500)]" />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
              Why clients
              <span className="block text-[var(--color-gold-500)]">
                choose us
              </span>
            </h2>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
              Support that goes well beyond the property shortlist. We help
              clients move through search, evaluation, negotiation,
              documentation, and post-sale coordination with less friction and
              better context at every stage.
            </p>

            <div className="mt-7 max-w-xl rounded-[1.35rem] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_54px_rgba(21,43,71,0.07)] sm:p-6">
              <div className="border-l border-[rgba(212,175,55,0.52)] pl-5">
                <p className="font-display text-2xl uppercase leading-tight text-[var(--color-gold-500)]">
                  30 to 60 days average
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate-900)]">
                  Our average window to move serious inquiries into qualified
                  offers on premium listings, reflecting disciplined process and
                  responsive client communication.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative min-h-0 sm:min-h-[34rem]">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-[rgba(212,175,55,0.26)] sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[82%] sm:rounded-[2rem] sm:rounded-tl-[8rem]">
              <Image
                src="/images/hero-emlak-main.png"
                alt="Luxury Dubai property advisory backdrop"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/28" />
            </div>
            <div className="absolute left-6 top-0 hidden h-full w-28 rounded-l-[6rem] border-l border-t border-[rgba(212,175,55,0.52)] lg:block" />

            <div className="relative z-10 mt-4 grid gap-3 sm:mt-0 sm:flex sm:min-h-[34rem] sm:flex-col sm:justify-center sm:py-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className={`relative w-full rounded-[1rem] border border-[rgba(212,175,55,0.2)] bg-white/86 p-4 pl-14 shadow-[0_16px_44px_rgba(21,43,71,0.1)] backdrop-blur-xl sm:max-w-[18rem] sm:border-white/45 sm:bg-white/58 sm:p-5 sm:pl-14 ${reason.className}`}
                  >
                    <div className="absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,175,55,0.28)] bg-white/82 text-[var(--color-gold-500)] shadow-[0_12px_36px_rgba(21,43,71,0.08)] backdrop-blur sm:-left-7 sm:top-1/2 sm:h-14 sm:w-14 sm:-translate-y-1/2">
                      <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg uppercase leading-tight text-[var(--color-slate-900)]">
                      {reason.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-[var(--color-gold-500)]" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-slate-900)]">
                      {reason.text}
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
