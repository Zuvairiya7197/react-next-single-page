import { MoveRight } from 'lucide-react';

import { PropertyCards } from '@/components/PropertyCards';
import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { getProperties } from '@/lib/data';

export async function Projects() {
  const properties = await getProperties();

  return (
    <section id="projects" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Prime Opportunities"
              title="Selected residences and investment assets shaped by lifestyle demand and long-term upside."
              description="Explore a curated mix of villas, waterfront homes, and commercial assets inspired by the pace and profile of Dubai and UAE property demand."
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-slate-700)] transition hover:text-[var(--color-gold-500)]"
            >
              Request more opportunities
              <MoveRight size={16} aria-hidden="true" />
            </a>
          </div>
        </SectionReveal>

        <PropertyCards properties={properties} />
      </div>
    </section>
  );
}
