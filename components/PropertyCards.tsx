'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

import {
  BedDouble,
  CalendarCheck,
  Maximize2,
  MapPin,
  MessageCircle,
  ShowerHead,
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

  const cardDetails = (property: Property) => [
    {
      icon: BedDouble,
      value: property.beds,
      label: 'Bedrooms',
    },
    {
      icon: ShowerHead,
      value: property.baths,
      label: 'Bathrooms',
    },
    {
      icon: Maximize2,
      value: property.area,
      label: property.areaLabel,
    },
    {
      icon: CalendarCheck,
      value: property.handover,
      label: property.handoverLabel,
    },
  ];

  return (
    <>
      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-7">
        {properties.map((property, index) => (
          <SectionReveal key={property.id} delay={index * 0.08}>
            <article className="group relative h-[26rem] overflow-hidden rounded-[1rem] border border-[rgba(212,175,55,0.24)] shadow-[0_18px_52px_rgba(21,43,71,0.08)] transition duration-300 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_34px_90px_rgba(21,43,71,0.18)] sm:h-[30rem] sm:rounded-[1.6rem]">
              {/* Full-bleed image */}
              <Image
                src={property.image}
                alt={property.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                style={{ objectPosition: property.imagePosition }}
              />

              {/* Gradient — lightens on hover as panel covers it */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,38,0.04)_0%,rgba(10,23,38,0.18)_40%,rgba(10,23,38,0.92)_100%)] transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,38,0.08)_0%,rgba(10,23,38,0.5)_40%,rgba(10,23,38,0.98)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Status badge */}
              <div className="absolute top-3 left-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur sm:top-5 sm:left-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]">
                <span className="line-clamp-1">{property.status}</span>
              </div>

              {/* Sliding bottom panel */}
              <div className="absolute inset-x-0 bottom-0 z-10">
                {/* Always visible: title, location, price */}
                <div className="px-4 pb-4 pt-3 text-white sm:px-6 sm:pb-5 sm:pt-4">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.18rem] uppercase leading-[1.08] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:text-[1.7rem]">
                        {property.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] sm:mt-2 sm:gap-2 sm:text-sm">
                        <MapPin size={13} aria-hidden="true" className="shrink-0 sm:size-4" />
                        {property.location}
                      </p>
                    </div>
                    <p className="w-fit shrink-0 rounded-full border border-white/20 bg-white/14 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur sm:px-3 sm:py-1.5 sm:text-lg">
                      {property.price}
                    </p>
                  </div>
                </div>

                {/* Details panel slides up on hover */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[24rem] group-focus-within:max-h-[24rem]">
                  <div className="border-t border-white/10 bg-[rgba(2,18,34,0.88)] px-4 pb-5 pt-4 backdrop-blur-xl sm:px-6 sm:pb-6">
                    <p className="line-clamp-2 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                      {property.description}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
                      {cardDetails(property).map((detail) => {
                        const Icon = detail.icon;
                        return (
                          <div
                            key={detail.label}
                            className="flex items-center gap-2 rounded-[0.75rem] border border-white/10 bg-white/8 px-2.5 py-2 sm:gap-3 sm:rounded-[0.9rem] sm:px-3 sm:py-2.5"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(212,175,55,0.18)] text-[var(--color-gold-400)] sm:h-9 sm:w-9">
                              <Icon size={13} aria-hidden="true" className="sm:size-[15px]" />
                            </span>
                            <div className="min-w-0">
                              <p className="line-clamp-1 text-xs font-semibold text-white sm:text-sm">
                                {detail.value}
                              </p>
                              <p className="mt-0.5 line-clamp-1 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-white/50 sm:text-[0.65rem]">
                                {detail.label}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProperty(property)}
                      className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.12)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--color-gold-500)] hover:text-[var(--color-slate-900)] sm:mt-4 sm:py-3 sm:text-sm"
                      aria-haspopup="dialog"
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      Contact us
                    </button>
                  </div>
                </div>
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
