'use client';

import { useEffect, useMemo, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { navItems } from '@/lib/data';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const updateActiveSection = () => {
      if (sections.length === 0) {
        return;
      }

      const headerOffset = 110;
      const marker = window.scrollY + headerOffset + window.innerHeight * 0.22;
      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      if (pageBottom >= documentHeight - 24) {
        setActiveSection(sections.at(-1)?.id ?? 'contact');
        return;
      }

      for (let index = 0; index < sections.length; index += 1) {
        const currentSection = sections[index];
        const nextSection = sections[index + 1];
        const currentTop = currentSection.offsetTop;
        const nextTop = nextSection?.offsetTop ?? Number.POSITIVE_INFINITY;

        if (marker >= currentTop && marker < nextTop) {
          setActiveSection(currentSection.id);
          return;
        }
      }
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [sectionIds]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(248,243,235,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Horizon Crest Estates home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-[linear-gradient(135deg,rgba(216,179,106,0.16),rgba(17,36,61,0.88))] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,33,58,0.18)]">
            HC
          </div>
          <div>
            <p className="font-display text-xl text-[var(--color-slate-900)]">
              Horizon Crest
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-slate-500)]">
              Estates
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 md:flex"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--color-slate-500)] text-white shadow-[0_12px_30px_rgba(16,33,58,0.18)]'
                    : 'text-[var(--color-slate-700)] hover:bg-white/80 hover:text-[var(--color-slate-900)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--color-gold-500)] px-5 py-3 text-sm font-semibold text-[var(--color-slate-900)] transition hover:bg-[var(--color-gold-400)] md:inline-flex"
        >
          Book a Consultation
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 text-[var(--color-slate-900)] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/60 bg-[rgba(255,253,248,0.95)] px-6 py-4 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-[var(--color-slate-900)] text-white'
                      : 'bg-white text-[var(--color-slate-700)]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-[var(--color-gold-500)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-slate-900)]"
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
