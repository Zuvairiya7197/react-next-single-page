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
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {properties.map((property, index) => (
          <SectionReveal key={property.id} delay={index * 0.08}>
            <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_70px_rgba(21,43,71,0.08)]">
              <div className="relative aspect-[16/9] shrink-0 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  style={{ objectPosition: property.imagePosition }}
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--color-slate-900)]">
                      {property.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-slate-500)]">
                      <MapPin size={16} aria-hidden="true" />
                      {property.location}
                    </p>
                  </div>
                  <p className="text-2xl font-semibold text-[var(--color-slate-900)]">
                    {property.price}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate-500)]">
                  {property.description}
                </p>
                <div className="mt-6 grid gap-3 border-t border-[var(--color-border)] pt-6 sm:grid-cols-3 lg:mt-auto">
                  <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-3">
                    <BedDouble
                      size={18}
                      className="text-[var(--color-slate-700)]"
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
                  <div className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-strong)] px-4 py-3">
                    <CalendarCheck
                      size={18}
                      className="text-[var(--color-slate-700)]"
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
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-slate-700)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-slate-900)] sm:w-auto"
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
