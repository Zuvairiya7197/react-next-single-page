'use client';

import { useMemo, useRef } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

import { ContactForm } from '@/components/ContactForm';
import { contactDetails } from '@/lib/data';

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const details = useMemo(
    () => [
      { ...contactDetails.address, icon: MapPin },
      { ...contactDetails.email, icon: Mail },
      { ...contactDetails.phone, icon: Phone },
    ],
    [],
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">

        {/* Left column */}
        <motion.div
          className="min-w-0"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 sm:gap-4 sm:tracking-[0.22em]">
              <span>Contact</span>
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              />
            </div>
            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-slate-900 sm:mt-7 sm:text-5xl">
              Let's Start
              <span className="block text-(--color-gold-500)">
                The Conversation
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
              Private consultation, opportunity review, then clear next steps.
            </motion.p>
          </div>

          <motion.div
            className="mt-8 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <motion.a
                  key={detail.label}
                  href={detail.href}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex min-w-0 items-start gap-3 rounded-[1.1rem] border border-[rgba(212,175,55,0.22)] bg-white p-4 shadow-[0_16px_44px_rgba(21,43,71,0.06)] transition-[border-color,box-shadow] hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_20px_58px_rgba(21,43,71,0.1)] sm:gap-4 sm:p-5"
                >
                  <motion.div
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(212,175,55,0.36)] text-(--color-gold-500) sm:h-11 sm:w-11"
                    whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 sm:tracking-[0.24em]">
                      {detail.label}
                    </p>
                    <p className="mt-2 overflow-wrap-anywhere text-sm font-semibold text-slate-900 sm:text-base">
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right column — form */}
        <motion.div
          className="min-w-0 lg:pt-36"
          variants={rightVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="overflow-hidden rounded-3xl border border-[rgba(212,175,55,0.28)] bg-white shadow-[0_28px_80px_rgba(21,43,71,0.1)] sm:rounded-[1.8rem]">
            <motion.div
              className="h-1.5 bg-[linear-gradient(90deg,var(--color-gold-500),rgba(212,175,55,0.18))]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            />
            <div className="p-4 sm:p-8">
              <ContactForm rows={3} className="space-y-4" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
