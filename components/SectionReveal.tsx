'use client';

import type { HTMLAttributes, ReactNode } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

type SectionRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function SectionReveal({
  children,
  delay = 0,
  className,
  ...props
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 1.02, 0.73, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
