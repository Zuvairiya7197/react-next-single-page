'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState, useMemo } from 'react';

import {
  BedDouble,
  CalendarCheck,
  ChevronDown,
  Maximize2,
  MapPin,
  MessageCircle,
  Search,
  ShowerHead,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ContactForm } from '@/components/ContactForm';
import type { Property } from '@/lib/data';

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SORT_OPTIONS = [
  { value: 'default', label: 'Default Order' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'location', label: 'Location A–Z' },
  { value: 'title', label: 'Title A–Z' },
];

function parsePrice(price: string): number {
  const match = price.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function PropertyCard({
  property,
  onInquire,
}: {
  property: Property;
  onInquire: (p: Property) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const details = [
    { icon: BedDouble, value: property.beds, label: 'Bedrooms' },
    { icon: ShowerHead, value: property.baths, label: 'Bathrooms' },
    { icon: Maximize2, value: property.area, label: property.areaLabel },
    { icon: CalendarCheck, value: property.handover, label: property.handoverLabel },
  ];

  return (
    <motion.article
      variants={cardVariants}
      layout
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      onClick={() => setExpanded((v) => !v)}
      className="group relative h-104 cursor-pointer overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.24)] shadow-[0_18px_52px_rgba(21,43,71,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(212,175,55,0.42)] hover:shadow-[0_34px_90px_rgba(21,43,71,0.18)] sm:h-120 sm:rounded-[1.6rem]">
      <Image
        src={property.image}
        alt={property.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        style={{ objectPosition: property.imagePosition }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,38,0.04)_0%,rgba(10,23,38,0.18)_40%,rgba(10,23,38,0.92)_100%)] transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,38,0.08)_0%,rgba(10,23,38,0.5)_40%,rgba(10,23,38,0.98)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute top-3 left-3 z-10 max-w-[calc(100%-1.5rem)] rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur sm:top-5 sm:left-5 sm:px-4 sm:py-2 sm:text-xs">
        <span className="line-clamp-1">{property.status}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="px-4 pb-4 pt-3 text-white sm:px-6 sm:pb-5 sm:pt-4">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-[1.18rem] uppercase leading-[1.08] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:text-[1.5rem]">
                {property.title}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-white/80 sm:mt-2 sm:text-sm">
                <MapPin size={13} aria-hidden="true" className="shrink-0" />
                {property.location}
              </p>
            </div>
            <p className="w-fit shrink-0 rounded-full border border-white/20 bg-white/14 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur sm:px-3 sm:py-1.5 sm:text-base">
              {property.price}
            </p>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-out ${expanded ? 'max-h-96' : 'max-h-0 group-hover:max-h-96'}`}>
          <div className="border-t border-white/10 bg-[rgba(2,18,34,0.88)] px-4 pb-5 pt-4 backdrop-blur-xl sm:px-6 sm:pb-6">
            <p className="line-clamp-2 text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
              {property.description}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
              {details.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="flex items-center gap-2 rounded-[0.75rem] border border-white/10 bg-white/8 px-2.5 py-2 sm:gap-3 sm:rounded-[0.9rem] sm:px-3 sm:py-2.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(212,175,55,0.18)] text-[var(--color-gold-400)] sm:h-9 sm:w-9">
                      <Icon size={13} aria-hidden="true" className="sm:size-[15px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="line-clamp-1 text-xs font-semibold text-white sm:text-sm">{d.value}</p>
                      <p className="mt-0.5 line-clamp-1 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-white/50 sm:text-[0.65rem]">
                        {d.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onInquire(property); }}
              className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.12)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-(--color-gold-500) hover:text-slate-900 sm:mt-4 sm:py-3 sm:text-sm"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Contact us
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function InquiryModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex min-h-[100dvh] items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-[rgba(21,43,71,0.6)] backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_28px_90px_rgba(21,43,71,0.28)] sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2rem] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-500)]">Property Inquiry</p>
            <h2 id={titleId} className="mt-3 text-xl font-semibold text-[var(--color-slate-900)] sm:text-3xl">
              Contact us about {property.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-slate-500)]">
              {property.location} | {property.price}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-slate-700)] transition hover:bg-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="mt-7">
          <ContactForm initialMessage={`Hello Emlak Real Estate LLC, I would like to know more about ${property.title}.`} rows={5} />
        </div>
      </div>
    </div>
  );
}

export function PropertiesListing({ properties }: { properties: Property[] }) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q),
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case 'location':
        result.sort((a, b) => a.location.localeCompare(b.location));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [properties, search, sort]);

  return (
    <>
      {/* Search & Sort bar */}
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex-1">
          <Search size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name or location…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-(--color-border) bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus:border-(--color-gold-500) focus:outline-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 hover:text-slate-900"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="relative shrink-0">
          <SlidersHorizontal size={14} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full appearance-none rounded-full border border-(--color-border) bg-white py-3 pl-10 pr-9 text-sm text-slate-900 focus:border-(--color-gold-500) focus:outline-none sm:w-auto"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        </div>
      </motion.div>

      {/* Count */}
      <motion.p
        className="mt-4 text-sm text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="font-semibold text-slate-900">{filtered.length}</span>{' '}
        {filtered.length === 1 ? 'property' : 'properties'} found
      </motion.p>

      {/* Grid */}
      <AnimatePresence mode="wait">
      {filtered.length > 0 ? (
        <motion.div
          key="grid"
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} onInquire={setSelected} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          className="mt-20 flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg font-semibold text-slate-900">No properties found</p>
          <p className="text-sm text-slate-500">Try a different search term or clear the filter.</p>
          <button
            type="button"
            onClick={() => setSearch('')}
            className="mt-2 rounded-full border border-[rgba(212,175,55,0.5)] px-6 py-2.5 text-sm font-semibold text-(--color-gold-500) transition hover:bg-(--color-gold-500) hover:text-slate-900"
          >
            Clear Search
          </button>
        </motion.div>
      )}
      </AnimatePresence>

      {selected && <InquiryModal property={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
