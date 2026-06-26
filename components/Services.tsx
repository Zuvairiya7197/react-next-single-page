'use client';

import Image from 'next/image';
import { useState } from 'react';

import { SectionReveal } from '@/components/SectionReveal';
import { services } from '@/lib/data';

const serviceImages = [
  '/images/projects/lagoon-views-2br.jpg',
  '/images/projects/aeon-creek-harbour.jpg',
  '/images/projects/the-edit-at-d3.jpg',
  '/images/projects/greenz-exterior.webp',
  '/images/projects/mercedes-benz-places.jpg',
  '/images/projects/river-cove-residences.webp',
  '/images/projects/artistry-two.jpg',
] as const;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[25rem_minmax(0,1fr)] lg:items-center xl:grid-cols-[28rem_minmax(0,1fr)]">
          <SectionReveal>
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
                <span>Our Services</span>
                <span className="h-px w-12 bg-[var(--color-gold-500)]" />
              </div>

              <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
                Our
                <span className="block text-[var(--color-gold-500)]">
                  Services
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
                <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
                Comprehensive real estate support across every stage of the
                journey. Solutions designed to maximize value and deliver
                results.
              </p>

              <div className="mt-8 max-w-sm overflow-hidden rounded-[1.2rem] border border-[rgba(212,175,55,0.32)] bg-white shadow-[0_20px_58px_rgba(21,43,71,0.08)]">
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold-500)]">
                    Selected Service
                  </p>
                  <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-[var(--color-slate-900)]">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-slate-500)]">
                    {activeService.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="flex items-center justify-between border-t border-[rgba(212,175,55,0.24)] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-gold-500)] transition hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)]"
                >
                  <span>Contact Us</span>
                  <span aria-hidden="true" className="text-lg leading-none">
                    →
                  </span>
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="min-w-0 overflow-hidden">
            <div className="-mx-4 flex max-w-[calc(100%+2rem)] snap-x gap-2.5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:max-w-full sm:gap-3 sm:px-0 lg:justify-start lg:overflow-visible">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                <article
                  key={service.title}
                  className={`group relative h-[21rem] shrink-0 snap-start overflow-hidden rounded-[1.25rem] border transition-all duration-700 ease-in-out sm:h-[24rem] sm:rounded-[1.5rem] ${
                    isActive
                      ? 'w-[min(82vw,18.5rem)] border-[rgba(212,175,55,0.5)] sm:w-[24rem] lg:w-[15rem] xl:w-[17rem]'
                      : 'w-14 border-[rgba(212,175,55,0.28)] sm:w-[5rem] lg:w-[3.6rem] xl:w-[3.9rem]'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                >
                  <Image
                    src={serviceImages[index % serviceImages.length]}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 384px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,43,71,0.06)_0%,rgba(21,43,71,0.42)_48%,rgba(8,18,32,0.88)_100%)]" />
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isActive ? 'bg-[rgba(212,175,55,0.1)]' : 'bg-black/16'
                    }`}
                  />

                  <div
                    className={`absolute transition-all duration-500 ${
                      isActive
                        ? 'right-5 bottom-5 left-5'
                        : 'pointer-events-none right-5 bottom-5 left-5 opacity-0'
                    }`}
                  >
                    <div className="border-l border-[var(--color-gold-500)] pl-4">
                      <div className="min-w-0">
                        <h3
                          className={`font-display uppercase text-white ${
                            isActive
                              ? 'max-w-full whitespace-normal text-xl leading-tight'
                              : 'text-xl leading-tight'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`mt-2 max-w-[15rem] text-sm leading-6 text-white/78 transition duration-300 ${
                            isActive
                              ? 'translate-y-0 opacity-100'
                              : 'pointer-events-none translate-y-2 opacity-0'
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
