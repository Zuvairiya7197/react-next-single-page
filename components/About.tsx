import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { companyValues } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <div className="rounded-[2rem] border border-white/60 bg-[var(--color-surface)] p-8 shadow-[0_24px_70px_rgba(16,33,58,0.08)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-slate-500)]">
              About Ibrahim Tisekar
            </p>
            <p className="mt-6 font-display text-3xl leading-tight text-[var(--color-slate-900)] sm:text-4xl">
              Trusted advisors crafting memorable buying and selling journeys.
            </p>
            <p className="mt-6 text-base leading-7 text-[var(--color-slate-500)]">
              Our team blends market intelligence, strategic marketing, and
              white-glove guidance to help every client move decisively. From
              city residences to destination homes and growth-minded investment
              assets, we focus on long-term fit, not just short-term closings.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  18+
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  years guiding premium residential and commercial transactions.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-5">
                <p className="text-3xl font-semibold text-[var(--color-slate-900)]">
                  96%
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-slate-500)]">
                  of clients come through referrals, repeat partnerships, and
                  investor relationships.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Real estate guidance built on clarity, calm, and sharp execution."
            description="We believe remarkable service should feel polished and personal. Every campaign, viewing, and negotiation is designed to make complex decisions easier to trust."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {companyValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.6rem] border border-[var(--color-border)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(16,33,58,0.06)]"
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
