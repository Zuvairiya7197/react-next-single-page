'use client';

import { useMemo } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';
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
      className="bg-[var(--color-surface-strong)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal className="min-w-0">
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need and we will shape the next step."
            description="Whether you are buying, selling, comparing investment options, or exploring a property strategy tied to wider life goals, we are here to help."
          />

          <div className="mt-8 space-y-4">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex min-w-0 items-start gap-3 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(21,43,71,0.08)] sm:gap-4 sm:rounded-[1.5rem] sm:p-5"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-slate-700)] text-white sm:h-11 sm:w-11">
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

        <SectionReveal className="min-w-0" delay={0.1}>
          <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_24px_70px_rgba(21,43,71,0.08)] sm:rounded-[2rem] sm:p-10">
            <ContactForm />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
