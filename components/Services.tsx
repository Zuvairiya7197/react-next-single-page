'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data';

const serviceImages = [
  '/images/services/Buy, Sell & Rent.png',
  '/images/services/Investment Advisory.png',
  '/images/services/Off-Plan Sales.png',
  '/images/services/Asset & Leasing Management.png',
  '/images/services/Mortgage & Finance.png',
  '/images/services/Golden Visa Assistance.png',
  '/images/services/Legal & Documentation.png',
] as const;

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[25rem_minmax(0,1fr)] lg:items-center xl:grid-cols-[28rem_minmax(0,1fr)]">

          {/* Left column */}
          <motion.div
            className="max-w-xl"
            variants={leftVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 sm:gap-4 sm:tracking-[0.22em]">
              <span>Our Services</span>
              <motion.span
                className="h-px bg-(--color-gold-500)"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-slate-900 sm:mt-7 sm:text-5xl">
              Our
              <span className="block text-(--color-gold-500)">
                Services
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
              className="mt-6 max-w-md text-sm leading-7 text-slate-900 sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Comprehensive real estate support across every stage of the
              journey. Solutions designed to maximize value and deliver
              results.
            </motion.p>

            <motion.div
              className="mt-8 max-w-sm overflow-hidden rounded-[1.2rem] border border-[rgba(212,175,55,0.32)] bg-white shadow-[0_20px_58px_rgba(21,43,71,0.08)]"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-(--color-gold-500)">
                  Selected Service
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-slate-900">
                      {activeService.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                      {activeService.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.a
                href="#contact"
                className="flex items-center justify-between border-t border-[rgba(212,175,55,0.24)] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-(--color-gold-500) transition hover:bg-(--color-gold-500) hover:text-slate-900"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contact Us</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column — accordion cards */}
          <motion.div
            className="min-w-0 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="-mx-4 flex max-w-[calc(100%+2rem)] snap-x gap-2.5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:max-w-full sm:gap-3 sm:px-0 lg:justify-start lg:overflow-visible">
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.article
                    key={service.title}
                    variants={cardVariants}
                    className={`group relative h-84 shrink-0 snap-start overflow-hidden rounded-[1.25rem] border transition-all duration-700 ease-in-out sm:h-96 sm:rounded-3xl ${
                      isActive
                        ? 'w-[min(82vw,18.5rem)] border-[rgba(212,175,55,0.5)] sm:w-[24rem] lg:w-60 xl:w-68'
                        : 'w-[min(82vw,18.5rem)] border-[rgba(212,175,55,0.5)] sm:w-20 sm:border-[rgba(212,175,55,0.28)] lg:w-[3.6rem] xl:w-[3.9rem]'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                  >
                    <Image
                      src={serviceImages[index % serviceImages.length]}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 28vw, 384px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,43,71,0.06)_0%,rgba(21,43,71,0.42)_48%,rgba(8,18,32,0.88)_100%)]" />
                    <div
                      className={`absolute inset-0 transition duration-500 ${
                        isActive
                          ? 'bg-[rgba(212,175,55,0.1)]'
                          : 'bg-[rgba(212,175,55,0.1)] sm:bg-black/16'
                      }`}
                    />

                    <div
                      className={`absolute transition-all duration-500 ${
                        isActive
                          ? 'right-5 bottom-5 left-5'
                          : 'right-5 bottom-5 left-5 sm:pointer-events-none sm:opacity-0'
                      }`}
                    >
                      <div className="border-l border-(--color-gold-500) pl-4">
                        <div className="min-w-0">
                          <h3
                            className={`font-display uppercase text-white ${
                              isActive
                                ? 'max-w-full whitespace-normal text-xl leading-tight'
                                : 'text-xl leading-tight'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`mt-2 max-w-60 text-sm leading-6 text-white/78 transition duration-300 ${
                              isActive
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-0 opacity-100 sm:pointer-events-none sm:translate-y-2 sm:opacity-0'
                            }`}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
