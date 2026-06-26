'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  {
    value: '0%',
    label: 'Capital Gains Tax',
    numeric: 0,
    suffix: '%',
  },
  {
    value: '6–9%',
    label: 'Average Rental Yield',
    numeric: null,
    suffix: '',
  },
  {
    value: '100%',
    label: 'Foreign Freehold Ownership',
    numeric: 100,
    suffix: '%',
  },
  {
    value: 'Top 5',
    label: 'Global Luxury Real Estate Market',
    numeric: null,
    suffix: '',
  },
] as const;

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function DubaiInvestment() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d1f38 40%, #091422 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/4 h-128 w-lg rounded-full bg-[rgba(212,175,55,0.07)] blur-[100px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 h-[28rem] w-md rounded-full bg-[rgba(30,58,95,0.5)] blur-[80px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(212,175,55,0.04)] blur-[60px]" />
      </div>

      {/* Gold border top */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      {/* Gold border bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={headingVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.span
              className="h-px bg-gradient-to-r from-transparent to-[#d4af37]"
              initial={{ width: 0 }}
              animate={inView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
              Dubai Investment Opportunity
            </span>
            <motion.span
              className="h-px bg-gradient-to-l from-transparent to-[#d4af37]"
              initial={{ width: 0 }}
              animate={inView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            />
          </div>

          <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-white sm:text-5xl">
            Why Invest in
            <span className="block text-[#e3c96c]">Dubai</span>
          </h2>

          <motion.p
            className="mt-5 text-sm leading-7 text-white/50 sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Dubai remains one of the world's most attractive real estate markets, offering unmatched stability, strong returns, and long-term value.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-2xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.04) 60%, rgba(255,255,255,0.04))',
              }}
            >
              {/* Inner card */}
              <div
                className="relative flex h-full flex-col items-center justify-center rounded-2xl px-6 py-8 text-center sm:px-8 sm:py-10"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(160deg, rgba(18,34,58,0.95) 0%, rgba(10,22,40,0.98) 100%)'
                    : 'linear-gradient(160deg, rgba(12,26,46,0.98) 0%, rgba(16,30,52,0.95) 100%)',
                }}
              >
                {/* Subtle inner glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <p className="relative font-display text-4xl uppercase leading-none text-[#e3c96c] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] sm:text-5xl">
                  {stat.numeric !== null ? (
                    <AnimatedNumber value={stat.numeric} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </p>

                <div className="mx-auto mt-5 h-px w-8 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                <p className="relative mt-4 text-sm font-medium leading-6 text-white/60 transition-colors duration-300 group-hover:text-white/80">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
