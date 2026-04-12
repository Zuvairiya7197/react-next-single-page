'use client';

import Image from 'next/image';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { navItems } from '@/lib/data';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) {
      return;
    }

    const syncNavbarHeight = () => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${headerElement.offsetHeight}px`,
      );
    };

    syncNavbarHeight();

    const resizeObserver = new ResizeObserver(syncNavbarHeight);
    resizeObserver.observe(headerElement);
    window.addEventListener('resize', syncNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncNavbarHeight);
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, [isOpen]);

  return (
    <Fragment>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(21,43,71,0.08)] bg-[rgba(255,255,255,0.96)] pt-[env(safe-area-inset-top)] shadow-[0_10px_35px_rgba(21,43,71,0.08)] backdrop-blur-xl"
      >
        <div className="mx-auto flex min-h-[6.5rem] max-w-7xl items-center justify-between px-6 py-4 lg:min-h-[7rem] lg:px-8">
          <a
            href="#home"
            className="relative flex shrink-0 items-center"
            aria-label="Emlak Real Estate LLC home"
          >
            <div className="flex h-[4.75rem] w-[10rem] items-center sm:h-[5.25rem] sm:w-[11rem] lg:h-[5.75rem] lg:w-[12rem]">
              <Image
                src="/images/emlak-logo.png"
                alt="Emlak logo"
                width={1522}
                height={1478}
                priority
                className="h-full w-full object-contain object-left"
              />
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
                      ? 'bg-[var(--color-slate-700)] text-white shadow-[0_14px_32px_rgba(21,43,71,0.18)]'
                      : 'text-[var(--color-slate-500)] hover:bg-[rgba(30,58,95,0.08)] hover:text-[var(--color-slate-700)]'
                  }`}
                  style={isActive ? { color: '#ffffff' } : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="https://emlakdesign.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[var(--color-gold-500)] px-5 py-3 text-sm font-semibold text-[var(--color-slate-900)] transition hover:bg-[var(--color-gold-400)] md:inline-flex"
          >
            Visit Emlak Design
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-slate-900)] shadow-[0_10px_30px_rgba(21,43,71,0.08)] md:hidden"
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
            className="border-t border-[var(--color-border)] bg-[rgba(255,255,255,0.98)] px-6 py-4 shadow-[0_18px_45px_rgba(21,43,71,0.1)] md:hidden"
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
                        ? 'bg-[var(--color-slate-700)] text-white'
                        : 'bg-[var(--color-surface-strong)] text-[var(--color-slate-700)]'
                    }`}
                    style={isActive ? { color: '#ffffff' } : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="https://emlakdesign.com/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-[var(--color-gold-500)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-slate-900)]"
              >
                Visit Emlak Design
              </a>
            </nav>
          </div>
        ) : null}
      </header>
      <div
        aria-hidden="true"
        className="h-[var(--navbar-height,6.5rem)] lg:h-[var(--navbar-height,7rem)]"
      />
    </Fragment>
  );
}
