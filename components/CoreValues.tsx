'use client';

import { Award, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    text: 'Honest. Transparent. Accountable.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'Committed to the highest standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Creative solutions. Smarter results.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    text: 'Built on trust and lasting relationships.',
  },
] as const;

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const diamondVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'backOut' } },
};

export function CoreValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={headingVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-(--color-gold-500) sm:gap-4 sm:tracking-[0.32em]">
            <motion.span
              className="h-px flex-1 bg-(--color-gold-500)"
              initial={{ scaleX: 0, originX: 1 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            />
            <motion.span
              className="h-2 w-2 rotate-45 bg-(--color-gold-500)"
              variants={diamondVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.55 }}
            />
            <span>Our Core Values</span>
            <motion.span
              className="h-2 w-2 rotate-45 bg-(--color-gold-500)"
              variants={diamondVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.65 }}
            />
            <motion.span
              className="h-px flex-1 bg-(--color-gold-500)"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            />
          </div>

          <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-slate-900 sm:mt-7 sm:text-6xl">
            Our Values.
            <span className="text-(--color-gold-500)">
              {' '}
              Our Promise.
            </span>
          </h2>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The principles that guide our decisions, shape our culture, and
            define every client relationship.
          </motion.p>
        </motion.div>

        {/* Dark panel */}
        <motion.div
          className="mt-10 overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.55)] bg-[rgb(2,18,34)] shadow-[0_26px_70px_rgba(2,18,34,0.2)] sm:mt-14 sm:rounded-4xl"
          variants={panelVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={cardVariants}
                  whileHover={{ backgroundColor: 'rgba(212,175,55,0.07)', transition: { duration: 0.2 } }}
                  className="group relative flex min-h-60 flex-col items-center justify-center border-[rgba(212,175,55,0.28)] px-6 py-8 text-center text-white sm:min-h-72 sm:px-8 sm:py-10 lg:border-l first:lg:border-l-0"
                >
                  {index > 0 ? (
                    <motion.span
                      className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-(--color-gold-500) shadow-[0_0_28px_rgba(212,175,55,0.85)] lg:block"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1, ease: 'backOut' }}
                    />
                  ) : null}

                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(212,175,55,0.7)] text-(--color-gold-400) transition duration-300 group-hover:border-[rgba(212,175,55,1)] group-hover:bg-[rgba(212,175,55,0.12)] group-hover:shadow-[0_0_32px_rgba(212,175,55,0.25)] sm:h-24 sm:w-24"
                    animate={{ boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 18px rgba(212,175,55,0.3)', '0 0 0px rgba(212,175,55,0)'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.45 } }}
                    >
                      <Icon size={36} strokeWidth={1.4} aria-hidden="true" />
                    </motion.div>
                  </motion.div>

                  <h3 className="mt-8 font-display text-2xl uppercase transition duration-300 group-hover:text-(--color-gold-400)">
                    {value.title}
                  </h3>
                  <p className="mt-5 max-w-52 text-base leading-7 text-white/78 transition duration-300 group-hover:text-white/95">
                    {value.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
