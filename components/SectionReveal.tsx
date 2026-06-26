'use client';

import type { HTMLAttributes, ReactNode } from 'react';

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
  void delay;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
