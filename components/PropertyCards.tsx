'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

import {
  BedDouble,
  CalendarCheck,
  MapPin,
  MessageCircle,
  X,
} from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';
import { SectionReveal } from '@/components/SectionReveal';
import type { Property } from '@/lib/data';

type PropertyCardsProps = {
  properties: Property[];
};

type PropertyInquiryModalProps = {
  property: Property;
  onClose: () => void;
};

export function PropertyCards({ properties }: PropertyCardsProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  return (
    <>
      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-7">
        {properties.map((property, index) => (
          <SectionReveal key={property.id} delay={index * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[rgba(212,175,55,0.22)] bg-white shadow-[0_24px_70px_rgba(21,43,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(21,43,71,0.13)] sm:rounded-[1.6rem]">
              <div className="relative aspect-[16/9] shrink-0 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: property.imagePosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,43,71,0)_34%,rgba(21,43,71,0.72)_100%)]" />
                <div className="absolute top-4 left-4 rounded-full border border-[rgba(212,175,55,0.45)] bg-[rgba(9,24,42,0.64)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-400)] backdrop-blur sm:top-5 sm:left-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                  {property.status}
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex flex-col gap-2 text-white sm:right-5 sm:bottom-5 sm:left-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                      {property.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/78">
                      <MapPin size={16} aria-hidden="true" />
                      {property.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-lg font-semibold sm:text-xl">
                    {property.price}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mt-2 text-sm leading-7 text-[var(--color-slate-500)] sm:mt-4">
                  {property.description}
                </p>
                <div className="mt-6 grid gap-px overflow-hidden rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:mt-auto">
                  <div className="flex items-center gap-3 bg-white px-4 py-3">
                    <BedDouble
                      size={18}
                      className="text-[var(--color-gold-500)]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                        {property.beds}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-500)]">
                        Bedrooms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-4 py-3">
                    <CalendarCheck
                      size={18}
                      className="text-[var(--color-gold-500)]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-slate-900)]">
                        {property.handover}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-slate-500)]">
                        {property.handoverLabel}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProperty(property)}
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-[rgba(212,175,55,0.62)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-gold-500)] transition hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)] sm:w-auto"
                  aria-haspopup="dialog"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Contact us
                </button>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      {selectedProperty ? (
        <PropertyInquiryModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      ) : null}
    </>
  );
}

function PropertyInquiryModal({
  property,
  onClose,
}: PropertyInquiryModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const initialMessage = `Hello Emlak Real Estate LLC, I would like to know more about ${property.title}.`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex min-h-[100dvh] items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-[rgba(21,43,71,0.6)] backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close contact form"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_28px_90px_rgba(21,43,71,0.28)] sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2rem] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-500)] sm:tracking-[0.24em]">
              Property Inquiry
            </p>
            <h2
              id={titleId}
              className="mt-3 text-xl font-semibold text-[var(--color-slate-900)] sm:text-3xl"
            >
              Contact us about {property.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-slate-500)]">
              {property.location} | {property.price}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-slate-700)] transition hover:bg-white"
            aria-label="Close contact form"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7">
          <ContactForm initialMessage={initialMessage} rows={5} />
        </div>
      </div>
    </div>
  );
}
