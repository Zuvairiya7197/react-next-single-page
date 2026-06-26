'use client';

import { motion } from 'framer-motion';

export function PropertiesPageHeader() {
  return (
    <>
      <motion.div
        className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--color-gold-400)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Prime Opportunities</span>
        <motion.span
          className="h-px bg-(--color-gold-500)"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.span
          className="h-2 w-2 rotate-45 bg-(--color-gold-500)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.75, ease: 'backOut' }}
        />
      </motion.div>

      <motion.h1
        className="mt-5 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        All
        <span className="block text-(--color-gold-400)">Properties</span>
      </motion.h1>

      <motion.p
        className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        Curated for lifestyle demand, yield potential, and long-term value across Dubai and the UAE.
      </motion.p>
    </>
  );
}
