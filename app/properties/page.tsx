import Image from 'next/image';
import Link from 'next/link';

import { ChevronLeft } from 'lucide-react';

import { PropertiesListing } from '@/components/PropertiesListing';
import { PropertiesPageHeader } from '@/components/PropertiesPageHeader';
import { getProperties } from '@/lib/data';

export const metadata = {
  title: 'All Properties | Emlak Real Estate LLC',
  description: 'Browse all available Dubai properties curated for lifestyle demand, yield potential, and long-term value.',
};

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen bg-(--color-background)">
      {/* Page header */}
      <div className="relative bg-slate-900 px-4 pb-12 pt-[calc(var(--navbar-height,6.5rem)+2rem)] sm:px-6 sm:pb-16 lg:px-8">
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
          <PropertiesPageHeader />
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
