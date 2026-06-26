import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft } from 'lucide-react';

import { PropertiesListing } from '@/components/PropertiesListing';
import { getProperties } from '@/lib/data';

export const metadata = {
  title: 'All Properties | Emlak Real Estate LLC',
  description: 'Browse all available Dubai properties curated for lifestyle demand, yield potential, and long-term value.',
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Page header */}
      <div className="relative bg-[var(--color-slate-900)] px-4 pb-12 pt-[calc(var(--navbar-height,6.5rem)+2rem)] sm:px-6 sm:pb-16 lg:px-8">
        <Image
          src="/images/2nd.jpeg"
          alt="Dubai property skyline"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,18,34,0.92)_0%,rgba(2,18,34,0.5)_50%,transparent_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] transition hover:bg-white/20"
            style={{ color: '#ffffff' }}
          >
            <ChevronLeft size={14} />
            Back to Home
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-400)]">
            <span>Prime Opportunities</span>
            <span className="h-px w-12 bg-[var(--color-gold-500)]" />
            <span className="h-2 w-2 rotate-45 bg-[var(--color-gold-500)]" />
          </div>

          <h1 className="mt-5 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            All
            <span className="block text-[var(--color-gold-400)]">Properties</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Curated for lifestyle demand, yield potential, and long-term value across Dubai and the UAE.
          </p>
        </div>
      </div>

      {/* Listing */}
      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PropertiesListing properties={properties} />
        </div>
      </div>
    </main>
  );
}
