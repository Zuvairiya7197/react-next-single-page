import Link from 'next/link';

import { MoveRight } from 'lucide-react';

import { PropertyCards } from '@/components/PropertyCards';
import { SectionReveal } from '@/components/SectionReveal';
import { getProperties } from '@/lib/data';

export async function Projects() {
  const properties = await getProperties();

  return (
    <section id="projects" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
                <span>Prime Opportunities</span>
                <span className="h-px w-12 bg-[var(--color-gold-500)]" />
              </div>
              <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
                Selected Dubai
                <span className="block text-[var(--color-gold-500)]">
                  Opportunities
                </span>
              </h2>
              <div className="mt-5 flex items-center gap-4">
                <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
                <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
                Curated for lifestyle demand, yield potential, and long-term
                value.
              </p>
            </div>
            <Link
              href="/properties"
              className="inline-flex w-full items-center justify-center gap-3 border border-[rgba(212,175,55,0.62)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-gold-500)] transition hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)] sm:w-auto"
            >
              Show More Properties
              <MoveRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </SectionReveal>

        <PropertyCards properties={properties} />
      </div>
    </section>
  );
}
