'use client';

import { useMemo } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';
import { SectionReveal } from '@/components/SectionReveal';
import { contactDetails } from '@/lib/data';

export function Contact() {
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
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal className="min-w-0">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate-900)] sm:gap-4 sm:tracking-[0.22em]">
              <span>Contact</span>
              <span className="h-px w-12 bg-[var(--color-gold-500)]" />
            </div>
            <h2 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-[var(--color-slate-900)] sm:mt-7 sm:text-5xl">
              Let’s Start
              <span className="block text-[var(--color-gold-500)]">
                The Conversation
              </span>
            </h2>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
              <span className="h-px w-56 max-w-[70%] bg-[var(--color-gold-500)]" />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-slate-900)] sm:text-base">
              Private consultation, opportunity review, then clear next steps.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex min-w-0 items-start gap-3 rounded-[1.1rem] border border-[rgba(212,175,55,0.22)] bg-white p-4 shadow-[0_16px_44px_rgba(21,43,71,0.06)] transition hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_20px_58px_rgba(21,43,71,0.1)] sm:gap-4 sm:p-5"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(212,175,55,0.36)] text-[var(--color-gold-500)] sm:h-11 sm:w-11">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-slate-500)] sm:tracking-[0.24em]">
                      {detail.label}
                    </p>
                    <p className="mt-2 overflow-wrap-anywhere text-sm font-semibold text-[var(--color-slate-900)] sm:text-base">
                      {detail.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal className="min-w-0 lg:pt-36" delay={0.1}>
          <div className="overflow-hidden rounded-[1.5rem] border border-[rgba(212,175,55,0.28)] bg-white shadow-[0_28px_80px_rgba(21,43,71,0.1)] sm:rounded-[1.8rem]">
            <div className="h-1.5 bg-[linear-gradient(90deg,var(--color-gold-500),rgba(212,175,55,0.18))]" />
            <div className="p-4 sm:p-8">
            <ContactForm rows={3} className="space-y-4" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
