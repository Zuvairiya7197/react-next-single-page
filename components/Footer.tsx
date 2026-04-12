import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

import { contactDetails, navItems, socialLinks } from '@/lib/data';

const socialIconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
};

function MapLinkIcon({
  label,
  bgClassName,
}: {
  label: string;
  bgClassName: string;
}) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold text-white ${bgClassName}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

export function Footer() {
  const googleMapsQuery = encodeURIComponent(contactDetails.address.value);
  const googleMapsEmbed = `https://www.google.com/maps?q=${googleMapsQuery}&output=embed`;
  const googleMapsLink = contactDetails.address.href;
  const appleMapsLink = `https://maps.apple.com/?q=${googleMapsQuery}`;
  const wazeLink = `https://www.waze.com/ul?q=${googleMapsQuery}`;

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[var(--color-slate-900)] px-6 py-14 text-white/78 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,0.95fr)_auto_auto] lg:items-start">
        <div className="max-w-lg">
          <div className="relative h-[4.5rem] w-48 rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(10,20,35,0.28)]">
            <Image
              src="/images/emlak-logo.png"
              alt="Emlak logo"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
          <p className="mt-5 text-sm leading-7 text-white/68">
            Real estate guidance shaped by clearer advice, practical execution,
            and end-to-end support around search, documentation, and
            ownership-related decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href={contactDetails.email.href}
              className="inline-flex items-center gap-2"
            >
              <Mail size={16} aria-hidden="true" />
              {contactDetails.email.value}
            </a>
            <a
              href={contactDetails.phone.href}
              className="inline-flex items-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              {contactDetails.phone.value}
            </a>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4 backdrop-blur">
          <div className="flex items-center gap-3 text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <MapPin size={18} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/56">
                Office Location
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {contactDetails.address.value}
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-white/10 bg-white">
            <iframe
              title="Office location map"
              src={googleMapsEmbed}
              className="h-40 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href={wazeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2.5 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <MapLinkIcon label="W" bgClassName="bg-[#33ccff]" />
              Waze
            </a>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2.5 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <MapLinkIcon label="G" bgClassName="bg-[#34a853]" />
              Google Maps
            </a>
            <a
              href={appleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2.5 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <MapLinkIcon label="A" bgClassName="bg-[#a3aaae]" />
              Apple Maps
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
            Sections
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
            Social
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Emlak Real Estate LLC. All rights reserved.</p>
        <p>
          Designed for modern real estate brands that value trust and
          presentation.
        </p>
      </div>
    </footer>
  );
}
