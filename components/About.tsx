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
              About Emlak Real Estate LLC
            </p>
            <p className="mt-6 font-display text-3xl leading-tight text-[var(--color-slate-900)] sm:text-4xl">
              End-to-end property guidance built for confident decisions.
            </p>
            <p className="mt-6 text-base leading-7 text-[var(--color-slate-500)]">
              Inspired by the service depth seen across leading UAE brokerages,
              our approach combines market intelligence, transaction support,
              documentation guidance, and calm communication. We stay focused on
              practical outcomes, not just the closing moment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  15+
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  years of real estate guidance across residential, commercial,
                  and investment-focused decisions.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  98%
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  client satisfaction driven by responsive communication,
                  transparent advice, and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Support that goes well beyond the property shortlist."
            description="We help clients move through search, evaluation, negotiation, documentation, and post-sale coordination with less friction and better context."
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
