'use client';

import Image from 'next/image';

import { FileCheck2, Handshake, Home, IdCard } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    icon: Home,
    title: 'Property Sourcing',
    text: 'Goal-focused opportunities.',
    className: 'lg:ml-28',
  },
  {
    icon: IdCard,
    title: 'Golden Visa Support',
    text: 'Residency-aligned guidance.',
    className: 'lg:ml-4',
  },
  {
    icon: FileCheck2,
    title: 'Legal Coordination',
    text: 'Organised transaction process.',
    className: 'lg:ml-28',
  },
  {
    icon: Handshake,
    title: 'After-Sales Support',
    text: 'Continued liaison after purchase.',
    className: 'lg:ml-8',
  },
] as const;

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
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
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 sm:gap-4 sm:tracking-[0.22em]">
              <span>Why Clients Choose Us</span>
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-slate-900 sm:mt-7 sm:text-5xl">
              Why clients
              <span className="block text-[var(--color-gold-500)]">
                choose us
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

            <motion.p
              className="mt-6 max-w-xl text-sm leading-7 text-slate-900 sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Support that goes well beyond the property shortlist. We help
              clients move through search, evaluation, negotiation,
              documentation, and post-sale coordination with less friction and
              better context at every stage.
            </motion.p>

            <motion.div
              className="mt-7 max-w-xl rounded-[1.35rem] border border-(--color-border) bg-white p-5 shadow-[0_18px_54px_rgba(21,43,71,0.07)] sm:p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="border-l border-[rgba(212,175,55,0.52)] pl-5">
                <p className="font-display text-2xl uppercase leading-tight text-[var(--color-gold-500)]">
                  30 to 60 days average
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-900">
                  Our average window to move serious inquiries into qualified
                  offers on premium listings, reflecting disciplined process and
                  responsive client communication.
                </p>
              </div>
            </motion.div>
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
                src="/images/5th.jpeg"
                alt="Luxury Dubai property advisory backdrop"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-white/28" />
          </motion.div>

          <div className="absolute left-6 top-0 hidden h-full w-28 rounded-l-[6rem] border-l border-t border-[rgba(212,175,55,0.52)] lg:block" />

          {/* Reason cards */}
          <motion.div
            className="relative z-10 mt-4 grid gap-3 sm:mt-0 sm:flex sm:min-h-136 sm:flex-col sm:justify-center sm:py-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.title}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className={`group relative w-full rounded-2xl border border-[rgba(212,175,55,0.2)] bg-white/86 p-4 pl-14 shadow-[0_16px_44px_rgba(21,43,71,0.1)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[rgba(212,175,55,0.52)] hover:shadow-[0_24px_60px_rgba(21,43,71,0.16)] sm:max-w-72 sm:border-white/45 sm:bg-white/58 sm:p-5 sm:pl-14 ${reason.className}`}
                >
                  <motion.div
                    className="absolute left-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(212,175,55,0.28)] bg-white/82 text-(--color-gold-500) shadow-[0_12px_36px_rgba(21,43,71,0.08)] backdrop-blur transition duration-300 group-hover:border-[rgba(212,175,55,0.7)] group-hover:bg-[rgba(212,175,55,0.1)] sm:-left-7 sm:top-1/2 sm:h-14 sm:w-14 sm:-translate-y-1/2"
                    whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon size={23} strokeWidth={1.4} aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-display text-lg uppercase leading-tight text-slate-900">
                    {reason.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-(--color-gold-500)" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    {reason.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
