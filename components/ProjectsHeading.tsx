'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { MoveRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function ProjectsHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      variants={leftVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 sm:gap-4 sm:tracking-[0.22em]">
          <span>Prime Opportunities</span>
          <motion.span
            className="h-px bg-(--color-gold-500)"
            initial={{ width: 0 }}
            animate={inView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          />
        </div>
        <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-slate-900 sm:mt-7 sm:text-5xl">
          Selected Dubai
          <span className="block text-(--color-gold-500)">
            Opportunities
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
        <motion.p
          className="mt-6 max-w-xl text-sm leading-7 text-slate-900 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Curated for lifestyle demand, yield potential, and long-term value.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, delay: 0.65 }}
      >
        <Link
          href="/properties"
          className="inline-flex w-full items-center justify-center gap-3 border border-[rgba(212,175,55,0.62)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-(--color-gold-500) transition hover:bg-(--color-gold-500) hover:text-slate-900 sm:w-auto"
        >
          Show More Properties
          <MoveRight size={16} aria-hidden="true" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
