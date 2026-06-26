'use client';

import { useRef } from 'react';
import {
  BadgeCheck,
  CircleDollarSign,
  Globe2,
  LineChart,
  Stamp,
  UsersRound,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const dubaiReasons = [
  { icon: LineChart,        label: 'Record Transaction Volumes' },
  { icon: UsersRound,       label: 'Strong Population Growth' },
  { icon: Stamp,            label: 'Golden Visa Eligibility' },
  { icon: CircleDollarSign, label: 'USD-Pegged Economy' },
  { icon: BadgeCheck,       label: 'RERA-Regulated Market' },
  { icon: Globe2,           label: 'Strong Investor Protection' },
] as const;

const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const cellVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const diamondVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'backOut' } },
};

export function WhyDubaiStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-(--color-gold-500) bg-[rgb(2,18,34)] shadow-[0_24px_70px_rgba(2,18,34,0.2)] sm:rounded-4xl"
        variants={panelVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[18rem_1fr] lg:items-center lg:px-8">

          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-3xl uppercase leading-tight text-white sm:text-4xl">
              <span className="text-(--color-gold-400)">Why Dubai,</span>
              <span className="block">Why Now?</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 64 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              />
              <motion.span
                className="h-2 w-2 rotate-45 bg-(--color-gold-500)"
                variants={diamondVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.7 }}
              />
            </div>
          </motion.div>

          {/* Reason cells */}
          <motion.div
            className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] sm:grid-cols-2 sm:rounded-[1.2rem] lg:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {dubaiReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.label}
                  variants={cellVariants}
                  whileHover={{ backgroundColor: 'rgba(212,175,55,0.08)', transition: { duration: 0.2 } }}
                  className="group relative flex min-h-36 flex-col items-center justify-center bg-[rgba(2,18,34,0.82)] px-4 py-5 text-center sm:min-h-44 sm:py-6"
                >
                  {index > 0 ? (
                    <motion.span
                      className="absolute top-1/2 left-0 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-(--color-gold-500) shadow-[0_0_22px_rgba(212,175,55,0.75)] lg:block"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.35, delay: 0.5 + index * 0.08, ease: 'backOut' }}
                    />
                  ) : null}
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(212,175,55,0.72)] text-(--color-gold-400) transition duration-300 group-hover:border-[rgba(212,175,55,1)] group-hover:bg-[rgba(212,175,55,0.12)] group-hover:shadow-[0_0_28px_rgba(212,175,55,0.22)] sm:h-18 sm:w-18"
                    animate={{ boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 16px rgba(212,175,55,0.28)', '0 0 0px rgba(212,175,55,0)'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                  >
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}>
                      <Icon size={28} strokeWidth={1.45} aria-hidden="true" />
                    </motion.div>
                  </motion.div>
                  <p className="mt-6 text-sm font-semibold uppercase leading-6 tracking-[0.02em] text-white transition duration-300 group-hover:text-(--color-gold-400)">
                    {reason.label}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
