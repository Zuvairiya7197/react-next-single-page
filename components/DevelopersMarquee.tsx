'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { motion, useInView } from 'framer-motion';

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

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

export function DevelopersMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

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
    <section ref={sectionRef} className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading row */}
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 sm:gap-4 sm:tracking-[0.22em]">
              <span>Developer Partnerships</span>
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              />
            </div>
            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-slate-900 sm:mt-7 sm:text-5xl">
              Trusted Developer
              <span className="block text-(--color-gold-500)">
                Access
              </span>
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-(--color-gold-500)" />
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 224 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
                style={{ maxWidth: '70%' }}
              />
            </div>
          </div>

          <motion.p
            className="max-w-xl text-sm leading-7 text-slate-900 sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Access to leading UAE developers, stronger inventory, high-demand
            communities, and well-positioned opportunities across Dubai.
          </motion.p>
        </motion.div>

        {/* Marquee panel */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="overflow-hidden border-y border-(--color-gold-500) bg-[rgb(2,18,34)] shadow-[0_24px_70px_rgba(2,18,34,0.2)]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(90deg,rgb(2,18,34)_0%,rgba(2,18,34,0)_100%)] sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(270deg,rgb(2,18,34)_0%,rgba(2,18,34,0)_100%)] sm:w-20" />

              <div className="overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
                <div
                  ref={trackRef}
                  className="developer-marquee-track flex w-max flex-nowrap gap-4 sm:gap-5"
                >
                  {marqueeDevelopers.map((developer, index) => (
                    <motion.article
                      key={`${developer.name}-${index}`}
                      className={`flex h-28 w-[10.75rem] shrink-0 items-center justify-center rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white px-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:h-36 sm:w-[13.8rem] sm:rounded-[1.2rem] sm:px-5 ${developer.cardClassName}`}
                      whileHover={{ scale: 1.04, borderColor: 'rgba(212,175,55,0.6)', transition: { duration: 0.2 } }}
                    >
                      <Image
                        src={developer.logo}
                        alt={`${developer.name} logo`}
                        width={developer.width}
                        height={developer.height}
                        className={`h-auto w-auto object-contain ${developer.logoClassName}`}
                      />
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
