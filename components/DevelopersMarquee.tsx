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
  },
  {
    name: 'DAMAC',
    logo: '/images/developers/damac.svg',
    width: 178,
    height: 46,
    logoClassName: 'max-h-10 sm:max-h-11',
  },
  {
    name: 'Emaar Properties',
    logo: '/images/developers/emaar.svg',
    width: 184,
    height: 50,
    logoClassName: 'max-h-11 sm:max-h-12',
  },
  {
    name: 'Danube Properties',
    logo: '/images/developers/danube.svg',
    width: 190,
    height: 70,
    logoClassName: 'max-h-14 sm:max-h-16',
  },
  {
    name: 'Meraas',
    logo: '/images/developers/meraas.svg',
    width: 174,
    height: 54,
    logoClassName: 'max-h-11 sm:max-h-12',
  },
  {
    name: 'Select Group',
    logo: '/images/developers/select-group.svg',
    width: 178,
    height: 58,
    logoClassName: 'max-h-12 sm:max-h-13',
  },
  {
    name: 'Sobha Realty',
    logo: '/images/developers/sobha.png',
    width: 182,
    height: 60,
    logoClassName: 'max-h-12 sm:max-h-13',
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
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] shadow-[0_24px_70px_rgba(21,43,71,0.06)]">
            <div className="grid gap-8 border-b border-[var(--color-border)] px-6 py-8 md:grid-cols-[1.05fr_1fr] md:px-10 md:py-10">
              <div>
                <h2 className="font-display text-3xl leading-tight text-[var(--color-slate-900)] sm:text-4xl">
                  Top Developers in UAE
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-[var(--color-slate-500)]">
                We work with leading UAE real estate developers to help clients
                access stronger inventory, high-demand communities, and
                well-positioned opportunities across Dubai and the wider market.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,#f8fafc_0%,rgba(248,250,252,0)_100%)] sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,#f8fafc_0%,rgba(248,250,252,0)_100%)] sm:w-20" />

              <div className="overflow-hidden px-4 py-4 sm:px-6 sm:py-6">
                <div
                  ref={trackRef}
                  className="developer-marquee-track flex w-max flex-nowrap gap-4 sm:gap-5"
                >
                  {marqueeDevelopers.map((developer, index) => (
                    <article
                      key={`${developer.name}-${index}`}
                      className="flex h-34 w-[12.8rem] shrink-0 items-center justify-center rounded-[1.35rem] border border-[rgba(30,58,95,0.08)] bg-[#eef1f6] px-4 shadow-[0_16px_40px_rgba(21,43,71,0.05)] sm:h-38 sm:w-[13.8rem] sm:rounded-[1.55rem] sm:px-5"
                    >
                      <Image
                        src={developer.logo}
                        alt={`${developer.name} logo`}
                        width={developer.width}
                        height={developer.height}
                        className={`h-auto w-auto max-w-full object-contain ${developer.logoClassName}`}
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
