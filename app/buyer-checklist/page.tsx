import type { Metadata } from 'next';
import Link from 'next/link';

import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dubai Buyer and Investor Checklist | Emlak Real Estate LLC',
  description:
    'A practical checklist for comparing Dubai property options before buying, investing, or planning a Golden Visa-linked purchase.',
};

const checklistGroups = [
  {
    title: 'Before You Shortlist',
    items: [
      'Define end-use, rental yield, capital growth, residency, or resale priority.',
      'Set a full acquisition budget that includes transfer, agency, mortgage, and service-fee assumptions.',
      'Compare communities by commute, tenant demand, school access, and future supply.',
    ],
  },
  {
    title: 'Before You Reserve',
    items: [
      'Check developer track record, escrow status, handover timeline, and payment-plan pressure.',
      'Ask for service-charge expectations, floor-plan efficiency, parking, view protection, and cancellation terms.',
      'Review Golden Visa eligibility against current property value, ownership structure, and documentation needs.',
    ],
  },
  {
    title: 'Before You Transfer',
    items: [
      'Confirm all parties, fees, NOC steps, mortgage release timelines, and trustee-office requirements.',
      'Keep written records of inclusions, handover condition, snagging items, and post-sale commitments.',
      'Plan leasing, furnishing, utilities, management, or move-in support before the final handover date.',
    ],
  },
];

export default function BuyerChecklistPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#guide"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-slate-700)] transition hover:border-[rgba(212,175,55,0.45)] hover:text-[var(--color-gold-500)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Emlak
        </Link>

        <section className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_70px_rgba(21,43,71,0.08)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-500)] sm:tracking-[0.28em]">
            Dubai Buyer Guide
          </p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--color-slate-900)] sm:text-5xl">
            Buyer and investor checklist
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-slate-500)] sm:text-lg">
            Use this as a practical first-pass filter before comparing
            apartments, villas, off-plan launches, ready homes, or
            Golden Visa-linked purchases.
          </p>

          <div className="mt-10 grid gap-6">
            {checklistGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5 sm:p-6"
              >
                <h2 className="text-xl font-semibold text-[var(--color-slate-900)]">
                  {group.title}
                </h2>
                <div className="mt-5 grid gap-4">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[var(--color-gold-500)]"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-7 text-[var(--color-slate-500)]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-[var(--color-slate-900)] p-6 text-white">
            <h2 className="text-2xl font-semibold">Ready to compare options?</h2>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Share your budget, preferred timeline, and target outcome so Emlak
              Real Estate LLC can shortlist the right next steps.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-slate-900)] transition hover:bg-[var(--color-surface-strong)]"
            >
              Contact Emlak
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
