import {
  BadgeCheck,
  CircleDollarSign,
  Globe2,
  LineChart,
  Stamp,
  UsersRound,
} from 'lucide-react';

import { SectionReveal } from '@/components/SectionReveal';

const dubaiReasons = [
  {
    icon: LineChart,
    label: 'Record Transaction Volumes',
  },
  {
    icon: UsersRound,
    label: 'Strong Population Growth',
  },
  {
    icon: Stamp,
    label: 'Golden Visa Eligibility',
  },
  {
    icon: CircleDollarSign,
    label: 'USD-Pegged Economy',
  },
  {
    icon: BadgeCheck,
    label: 'RERA-Regulated Market',
  },
  {
    icon: Globe2,
    label: 'Strong Investor Protection',
  },
] as const;

export function WhyDubaiStrip() {
  return (
    <section className="bg-white px-6 py-10 lg:px-8">
      <SectionReveal>
        <div className="mx-auto max-w-7xl overflow-hidden border-y border-[var(--color-gold-500)] bg-[var(--color-slate-900)] shadow-[0_24px_70px_rgba(21,43,71,0.16)]">
          <div className="grid gap-8 px-6 py-10 lg:grid-cols-[18rem_1fr] lg:items-center lg:px-8">
            <div>
              <h2 className="font-display text-4xl uppercase leading-tight text-white">
                <span className="text-[var(--color-gold-400)]">
                  Why Dubai,
                </span>
                <span className="block">Why Now?</span>
              </h2>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-16 bg-[var(--color-gold-500)]" />
                <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
              {dubaiReasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.label}
                    className="relative flex min-h-44 flex-col items-center justify-center bg-[rgba(255,255,255,0.03)] px-4 py-6 text-center"
                  >
                    {index > 0 ? (
                      <span className="absolute top-1/2 left-0 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--color-gold-500)] shadow-[0_0_22px_rgba(212,175,55,0.75)] lg:block" />
                    ) : null}
                    <div className="flex h-18 w-18 items-center justify-center rounded-full border border-[rgba(212,175,55,0.72)] text-[var(--color-gold-400)]">
                      <Icon size={32} strokeWidth={1.45} aria-hidden="true" />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase leading-6 tracking-[0.02em] text-white">
                      {reason.label}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
