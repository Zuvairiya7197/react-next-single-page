'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { SectionReveal } from '@/components/SectionReveal';

const developers = [
  {
    name: 'Nakheel',
    logo: '/images/developers/nakheel.svg',
    width: 140,
    height: 90,
    logoClassName: 'max-h-18 sm:max-h-20',
    cardClassName: '',
  },
  {
    name: 'DAMAC',
    logo: '/images/developers/damac.svg',
    width: 300,
    height: 72,
    logoClassName:
      'w-[15.75rem] max-w-none sm:w-[12.75rem] md:w-[13.25rem] max-h-16 sm:max-h-13',
    cardClassName: 'w-[16.5rem] sm:w-[13.8rem]',
  },
  {
    name: 'Emaar Properties',
    logo: '/images/developers/emaar.svg',
    width: 184,
    height: 50,
    logoClassName: 'max-h-11 sm:max-h-12',
    cardClassName: '',
  },
  {
    name: 'Danube Properties',
    logo: '/images/developers/danube.svg',
    width: 190,
    height: 70,
    logoClassName: 'max-h-14 sm:max-h-16',
    cardClassName: '',
  },
  {
    name: 'Meraas',
    logo: '/images/developers/meraas.svg',
    width: 174,
    height: 54,
    logoClassName: 'max-h-11 sm:max-h-12',
    cardClassName: '',
  },
  {
    name: 'Select Group',
    logo: '/images/developers/select-group.svg',
    width: 178,
    height: 58,
    logoClassName: 'max-h-12 sm:max-h-13',
    cardClassName: '',
  },
  {
    name: 'Sobha Realty',
    logo: '/images/developers/sobha.png',
    width: 182,
    height: 60,
    logoClassName: 'max-h-12 sm:max-h-13',
    cardClassName: '',
  },
  {
    name: 'Tiger Group',
    logo: '/images/developers/tiger-group.webp',
    width: 259,
    height: 68,
    logoClassName: 'max-h-13 sm:max-h-14',
    cardClassName: '',
  },
  {
    name: 'Binghatti',
    logo: '/images/developers/binghatti-dark.svg',
    width: 201,
    height: 37,
    logoClassName: 'max-h-11 sm:max-h-12',
    cardClassName: '',
  },
] as const;

const marqueeDevelopers = [...developers, ...developers];

export function DevelopersMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      return;
    }

    let animationFrameId = 0;
    let previousTimestamp = 0;
    const speed = 42;
    let offset = 0;

    const step = (timestamp: number) => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const delta = timestamp - previousTimestamp;
      previousTimestamp = timestamp;
      const halfWidth = track.scrollWidth / 2;

      if (!halfWidth) {
        animationFrameId = window.requestAnimationFrame(step);
        return;
      }

      offset += (speed * delta) / 1000;

      if (offset >= halfWidth) {
        offset = 0;
      }

      track.style.transform = `translate3d(${-halfWidth + offset}px, 0, 0)`;

      animationFrameId = window.requestAnimationFrame(step);
    };

    track.style.transform = 'translate3d(-50%, 0, 0)';
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      track.style.transform = '';
    };
  }, []);

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-slate-900)]">
                <span>Developer Partnerships</span>
                <span className="h-px w-12 bg-[var(--color-gold-500)]" />
              </div>
              <h2 className="mt-7 font-display text-4xl uppercase leading-[0.98] text-[var(--color-slate-900)] sm:text-5xl">
                Trusted Developer
                <span className="block text-[var(--color-gold-500)]">
                  Access
                </span>
              </h2>
              <div className="mt-5 flex items-center gap-4">
                <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
                <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
              </div>
            </div>

            <p className="max-w-xl text-base leading-7 text-[var(--color-slate-900)]">
              Access to leading UAE developers, stronger inventory, high-demand
              communities, and well-positioned opportunities across Dubai.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="overflow-hidden border-y border-[var(--color-gold-500)] bg-[var(--color-slate-900)] shadow-[0_24px_70px_rgba(21,43,71,0.16)]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,var(--color-slate-900)_0%,rgba(21,43,71,0)_100%)] sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,var(--color-slate-900)_0%,rgba(21,43,71,0)_100%)] sm:w-20" />

              <div className="overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
                <div
                  ref={trackRef}
                  className="developer-marquee-track flex w-max flex-nowrap gap-4 sm:gap-5"
                >
                  {marqueeDevelopers.map((developer, index) => (
                    <article
                      key={`${developer.name}-${index}`}
                      className={`flex h-32 w-[12.8rem] shrink-0 items-center justify-center rounded-[1.2rem] border border-[rgba(212,175,55,0.2)] bg-white px-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:h-36 sm:w-[13.8rem] sm:px-5 ${developer.cardClassName}`}
                    >
                      <Image
                        src={developer.logo}
                        alt={`${developer.name} logo`}
                        width={developer.width}
                        height={developer.height}
                        className={`h-auto w-auto object-contain ${developer.logoClassName}`}
                      />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
