'use client';

import { useEffect, useState } from 'react';

import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-4 bottom-20 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-slate-700)] text-white shadow-[0_18px_40px_rgba(21,43,71,0.2)] transition duration-300 hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)] sm:right-5 sm:bottom-24 sm:h-12 sm:w-12 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
