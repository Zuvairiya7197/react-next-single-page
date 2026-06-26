'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { MapPin, MoveRight } from 'lucide-react';

const heroProperties = [
  {
    location: 'Dubailand',
    title: 'Lagoon Views',
    type: '2 Bed Apartment',
    price: 'AED 1.82M',
    specs: '2 Bed | 2 Bath | 1,797 Sqft',
    image: '/images/projects/lagoon-views-2br.jpg',
  },
  {
    location: 'Dubai Design District',
    title: 'The Edit at d3',
    type: 'Design-Led Residences',
    price: 'AED 2.00M',
    specs: '1-4 Bed | Penthouses | Q2 2030',
    image: '/images/projects/the-edit-at-d3.jpg',
  },
  {
    location: 'Dubai Land',
    title: 'The Brooks',
    type: 'Sobha Villa Community',
    price: 'AED 4.16M',
    specs: '4-5 Bed | 5 Bath | 4,106 Sqft',
    image: '/images/projects/the-brooks.webp',
  },
  {
    location: 'Academic City',
    title: 'Greenz by Danube',
    type: 'Townhouse Community',
    price: 'AED 3.5M',
    specs: '3-5 Bed | 1% Monthly Plan',
    image: '/images/projects/greenz-exterior.webp',
  },
] as const;

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeProperty = heroProperties[activeImageIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        currentIndex === heroProperties.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden px-4 pt-24 text-white sm:px-6 sm:pt-26 lg:px-8 lg:pt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-emlak-main.png"
          alt="Luxury Dubai waterfront villa with skyline view"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,34,0.96)_0%,rgba(2,18,34,0.82)_34%,rgba(2,18,34,0.24)_54%,rgba(2,18,34,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,18,34,0.46)_0%,rgba(2,18,34,0.02)_42%,rgba(2,18,34,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center gap-5 pb-5 sm:min-h-[calc(100svh-6.5rem)] sm:justify-end sm:gap-6 sm:pb-6 lg:min-h-[calc(100svh-7rem)] lg:gap-7">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-400)] sm:gap-4 sm:text-sm sm:tracking-[0.34em]">
            <span>Dubai Property Advisory</span>
            <span className="h-px w-14 bg-[var(--color-gold-500)]" />
            <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.55rem,13vw,6.25rem)] uppercase leading-[0.92] tracking-normal text-white sm:mt-7">
            Invest smart,
            <span className="block text-[var(--color-gold-400)]">
              live premium.
            </span>
          </h1>
          <div className="mt-6 h-px max-w-sm bg-[linear-gradient(90deg,var(--color-gold-500),rgba(212,175,55,0))]" />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/84 sm:text-lg lg:leading-8">
            Emlak Real Estate LLC helps clients buy, sell, lease, invest, and
            relocate with clear guidance from search to signature.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-7">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[var(--color-gold-500)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.02em] text-[var(--color-slate-900)] shadow-[0_22px_55px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--color-gold-400)] sm:w-auto sm:px-7"
            >
              Explore Properties
              <MoveRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm border border-[rgba(212,175,55,0.62)] bg-transparent px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:-translate-y-0.5 hover:bg-[rgba(212,175,55,0.12)] sm:w-auto sm:px-7"
            >
              Book Consultation
              <MoveRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="w-full max-w-2xl overflow-hidden rounded-[1rem] border border-white/18 bg-[rgba(9,24,42,0.68)] shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-md">
              <div className="grid gap-0 sm:grid-cols-[8rem_1fr_auto_1fr] sm:items-center">
                <div className="relative h-24 sm:h-full sm:min-h-28">
                  {heroProperties.map((property, index) => (
                    <Image
                      key={property.title}
                      src={property.image}
                      alt={`${property.title} property image`}
                      fill
                      sizes="128px"
                      className={`object-cover transition-opacity duration-700 ${
                        activeImageIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-[rgba(2,18,34,0.16)]" />
                </div>
                <div className="flex items-center gap-3 p-4 sm:gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(212,175,55,0.18)] text-[var(--color-gold-400)]">
                    <MapPin size={23} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {activeProperty.location}
                    </p>
                    <p className="mt-1 text-sm text-white/72">
                      {activeProperty.type}
                    </p>
                  </div>
                </div>
                <div className="hidden h-16 w-px bg-white/18 sm:block" />
                <div className="p-4 pt-0 sm:pt-4">
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    {activeProperty.price}
                  </p>
                  <p className="mt-1 text-sm text-white/72">
                    {activeProperty.specs}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {heroProperties.map((property, index) => (
                <button
                  key={property.title}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show ${property.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImageIndex === index
                      ? 'w-12 bg-[var(--color-gold-500)]'
                      : 'w-5 bg-white/40 hover:bg-white/70'
                  }`}
                >
                  <span className="sr-only">{property.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
