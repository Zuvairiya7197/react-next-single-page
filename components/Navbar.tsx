'use client';

import Image from 'next/image';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

import { Menu, X } from 'lucide-react';

import { navItems } from '@/lib/data';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const isHeroNav = activeSection === 'home';

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
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 24);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

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
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
          hasScrolled || isOpen
            ? 'border-b border-white/10 bg-[rgba(2,18,34,0.72)] shadow-[0_18px_55px_rgba(2,18,34,0.28)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex min-h-[5.25rem] max-w-7xl items-center justify-between px-6 py-4 lg:min-h-[5.75rem] lg:px-8">
          <a
            href="#home"
            className="relative flex shrink-0 items-center"
            aria-label="Emlak Real Estate LLC home"
          >
            <div className="flex h-[3.35rem] w-[7.35rem] items-center sm:h-[3.65rem] sm:w-[8.15rem] lg:h-[3.95rem] lg:w-[8.85rem]">
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
            className="hidden items-center gap-9 md:flex"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`navbar-link relative px-0 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'navbar-link-active after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:bg-[#d4af37]'
                      : isHeroNav
                        ? ''
                        : 'rounded-full px-4'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="group relative hidden md:block">
            <a
              href="https://emlakdesign.com/"
              target="_blank"
              rel="noreferrer"
              className={`navbar-link inline-flex border px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.04em] transition ${
                isHeroNav
                  ? 'border-[#d4af37] hover:border-[#e3c96c]'
                  : 'border-[var(--color-gold-500)]'
              }`}
            >
              Explore Emlak Designs
            </a>
            <div className="pointer-events-none absolute top-[calc(100%+0.85rem)] right-0 w-64 translate-y-2 border border-white/14 bg-[rgba(2,18,34,0.78)] px-4 py-3 text-left opacity-0 shadow-[0_18px_48px_rgba(2,18,34,0.34)] backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-400)]">
                Interior Design
              </p>
              <p className="mt-1.5 text-sm font-medium leading-5 text-white">
                Looking for interiors? Discover Emlak Designs.
              </p>
            </div>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(21,43,71,0.08)] md:hidden ${
              isHeroNav
                ? 'border-white/20 bg-white/10 text-white'
                : 'border-[var(--color-border)] bg-white text-[var(--color-slate-900)]'
            }`}
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
                        ? 'bg-[var(--color-slate-700)] text-[var(--color-gold-500)]'
                        : 'bg-[var(--color-slate-700)] text-white hover:text-[var(--color-gold-500)]'
                    }`}
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
                className="mt-2 rounded-2xl bg-[var(--color-gold-500)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Explore Emlak Designs
              </a>
            </nav>
          </div>
        ) : null}
      </header>
    </Fragment>
  );
}
