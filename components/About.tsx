import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { companyValues } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_24px_70px_rgba(21,43,71,0.08)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-slate-500)]">
              About Emlak
            </p>
            <p className="mt-6 font-display text-3xl leading-tight text-[var(--color-slate-900)] sm:text-4xl">
              Clear advice. Strong execution.
            </p>
            <p className="mt-6 text-base leading-7 text-[var(--color-slate-500)]">
              Dubai-based property advisory for buyers, sellers, and investors.
              Built on market intelligence, transparent communication, and
              end-to-end support.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  30-60
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  days average from serious inquiry to qualified offer.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  12+
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  developer partnerships across the UAE.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Support beyond the shortlist."
            description="Search, evaluation, negotiation, paperwork, and post-sale coordination."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {companyValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 shadow-[0_18px_50px_rgba(21,43,71,0.05)]"
              >
                <h3 className="text-lg font-semibold text-[var(--color-slate-900)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate-500)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
