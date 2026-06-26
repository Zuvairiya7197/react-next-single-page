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

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    [],
  );

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const updateActiveSection = () => {
      if (sections.length === 0) return;

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

      for (let i = 0; i < sections.length; i++) {
        const cur = sections[i];
        const next = sections[i + 1];
        if (marker >= cur.offsetTop && marker < (next?.offsetTop ?? Infinity)) {
          setActiveSection(cur.id);
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
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const sync = () => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${el.offsetHeight}px`,
      );
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener('resize', sync);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
      document.documentElement.style.removeProperty('--navbar-height');
    };
  }, [isOpen]);

  return (
    <Fragment>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
          hasScrolled || isOpen
            ? 'border-b border-white/[0.07] bg-[rgba(2,18,34,0.84)] shadow-[0_8px_40px_rgba(2,18,34,0.3)] backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Gold accent line */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/45 to-transparent transition-opacity duration-700 ${
            hasScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-500 lg:px-8 ${
            hasScrolled ? 'py-3' : 'py-4 lg:py-5'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="relative flex shrink-0 items-center"
            aria-label="Emlak Real Estate LLC home"
          >
            <div
              className={`flex items-center transition-all duration-500 ${
                hasScrolled
                  ? 'h-[2.8rem] w-[6.2rem]'
                  : 'h-[3.35rem] w-[7.35rem] sm:h-[3.65rem] sm:w-[8.15rem] lg:h-[3.95rem] lg:w-[8.85rem]'
              }`}
            >
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

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`navbar-link relative py-1.5 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'navbar-link-active' : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-px left-0 right-0 mx-auto h-[1.5px] origin-center rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-400 ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA with tooltip */}
          <div className="group relative hidden md:block">
            <a
              href="https://emlakdesign.com/"
              target="_blank"
              rel="noreferrer"
              className="navbar-link inline-flex items-center gap-1.5 border border-[#d4af37]/50 px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.09em] transition-all duration-300 hover:border-[#d4af37]/90 hover:bg-[#d4af37]/[0.07]"
            >
              Emlak Designs
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="none"
                className="text-[#d4af37] opacity-70"
              >
                <path
                  d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="pointer-events-none absolute top-[calc(100%+0.8rem)] right-0 w-56 translate-y-2 border border-white/[0.09] bg-[rgba(2,18,34,0.92)] px-4 py-3.5 opacity-0 shadow-[0_16px_48px_rgba(2,18,34,0.5)] backdrop-blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                Interior Design
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65">
                Looking for interiors? Discover Emlak Designs.
              </p>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-all duration-300 hover:bg-white/[0.15] active:scale-95 md:hidden"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={`block transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen ? (
          <div
            id="mobile-navigation"
            className="border-t border-white/[0.07] bg-[rgba(2,18,34,0.96)] px-5 pb-5 pt-2 backdrop-blur-2xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-0.5">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/[0.07] text-[#d4af37]'
                        : 'text-white/55 hover:bg-white/[0.04] hover:text-white/85'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                    )}
                  </a>
                );
              })}

              <div className="mt-3 border-t border-white/[0.07] pt-4">
                <a
                  href="https://emlakdesign.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 border border-[#d4af37]/30 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#d4af37]/75 transition-all duration-200 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                >
                  Explore Emlak Designs
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </header>
    </Fragment>
  );
}
