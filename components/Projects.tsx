import Image from 'next/image';
import { Bath, BedDouble, MapPin, MoveRight, Ruler } from 'lucide-react';

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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {properties.map((property, index) => (
            <SectionReveal key={property.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_70px_rgba(21,43,71,0.08)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.imageAlt}
                    width={900}
                    height={640}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-[rgba(21,43,71,0.84)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                    {property.status}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--color-slate-900)]">
                        {property.title}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-slate-500)]">
                        <MapPin size={16} aria-hidden="true" />
                        {property.location}
                      </p>
                    </div>
                    <p className="text-2xl font-semibold text-[var(--color-slate-900)]">
                      {property.price}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate-500)]">
                    {property.description}
                  </p>
                  <div className="mt-6 grid gap-3 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-3">
                      <BedDouble
                        size={18}
                        className="text-[var(--color-slate-700)]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                          {property.beds}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-500)]">
                          Bedrooms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-3">
                      <Bath
                        size={18}
                        className="text-[var(--color-slate-700)]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                          {property.baths}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-500)]">
                          Bathrooms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-3">
                      <Ruler
                        size={18}
                        className="text-[var(--color-slate-700)]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                          {property.area}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-500)]">
                          Interior
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
