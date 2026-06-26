'use client';

import Image from 'next/image';

import { BadgeCheck, Coins, ThumbsUp, UsersRound } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const aboutStats = [
  {
    icon: Coins,
    value: 'AED 75M+',
    label: 'Transaction Value Advised',
  },
  {
    icon: UsersRound,
    value: '10+',
    label: 'Years of Real Estate Guidance',
  },
  {
    icon: BadgeCheck,
    value: '100%',
    label: 'Transparency, Sourcing to Signature',
  },
  {
    icon: ThumbsUp,
    value: 'Bespoke Advisory',
    label: 'via a Focused Client Roster',
  },
] as const;

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        {/* Left column */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
              <span>About</span>
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
              About
              <span className="block text-[var(--color-gold-500)]">
                Emlak Real Estate
              </span>
            </h2>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 224 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
                style={{ maxWidth: '70%' }}
              />
            </div>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Emlak Real Estate LLC is a Dubai-based property advisory firm
                supporting buyers, sellers, and investors with strategic
                property sourcing, expert transaction guidance, and
                comprehensive documentation support.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.6, delay: 0.62 }}
              >
                Our approach is built on market intelligence, hands-on
                execution, and transparent communication, enabling clearer
                decisions at every stage of the asset lifecycle.
              </motion.p>
            </div>

            <motion.a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-5 border border-[rgba(212,175,55,0.62)] px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.08em] text-(--color-gold-500) transition hover:bg-(--color-gold-500) hover:text-slate-900 sm:w-auto sm:gap-8 sm:px-7"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
              <span aria-hidden="true" className="text-xl leading-none">
                →
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right column */}
        <div className="relative min-h-0 sm:min-h-136">
          {/* Image */}
          <motion.div
            className="relative h-64 overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.26)] sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[82%] sm:rounded-4xl sm:rounded-tl-[8rem]"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/hero-emlak-main.png"
                alt="Luxury Dubai villa and skyline"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-white/22" />
          </motion.div>

          <div className="absolute left-6 top-0 hidden h-full w-28 rounded-l-[6rem] border-l border-t border-[rgba(212,175,55,0.52)] lg:block" />

          {/* Stat cards */}
          <motion.div
            className="relative z-10 mt-4 grid gap-3 sm:mt-0 sm:flex sm:min-h-136 sm:flex-col sm:justify-center sm:py-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {aboutStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.value}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group relative w-full rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white/86 p-4 pl-14 shadow-[0_16px_44px_rgba(21,43,71,0.1)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[rgba(212,175,55,0.52)] hover:shadow-[0_24px_60px_rgba(21,43,71,0.16)] sm:max-w-78 sm:border-white/45 sm:bg-white/58 sm:p-5 sm:pl-14 lg:ml-0 even:lg:ml-22"
                >
                  <motion.div
                    className="absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,175,55,0.28)] bg-white/82 text-(--color-gold-500) shadow-[0_12px_36px_rgba(21,43,71,0.08)] backdrop-blur transition duration-300 group-hover:border-[rgba(212,175,55,0.7)] group-hover:bg-[rgba(212,175,55,0.1)] sm:-left-7 sm:top-1/2 sm:h-14 sm:w-14 sm:-translate-y-1/2"
                    whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                  </motion.div>

                  <p className="font-display uppercase leading-none text-slate-900">
                    {stat.value === 'AED 75M+' ? (
                      <>
                        <span className="text-xl sm:text-2xl">AED </span>
                        <span className="text-3xl sm:text-4xl">
                          <AnimatedNumber value={75} suffix="M+" />
                        </span>
                      </>
                    ) : stat.value === '10+' ? (
                      <span className="text-3xl sm:text-4xl">
                        <AnimatedNumber value={10} suffix="+" />
                      </span>
                    ) : stat.value === '100%' ? (
                      <span className="text-3xl sm:text-4xl">
                        <AnimatedNumber value={100} suffix="%" />
                      </span>
                    ) : stat.value === 'Bespoke Advisory' ? (
                      <span className="text-lg sm:text-xl">{stat.value}</span>
                    ) : (
                      <span className="text-3xl sm:text-4xl">{stat.value}</span>
                    )}
                  </p>
                  <div className="mt-3 h-px w-10 bg-(--color-gold-500)" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
