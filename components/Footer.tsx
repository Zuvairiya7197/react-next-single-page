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

function WazeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51 31.5c0-10.6-8.8-19.2-19.6-18.8-10.1.4-18.3 8.6-18.8 18.7-.2 4.9 1.4 9.4 4.3 13-.8 1.1-2.1 1.8-3.6 1.8-2.4 0-4.3 1.9-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3 2.9 0 5.6-1.3 7.4-3.5 2.1 1.1 4.5 1.8 7 2.1 1 3 3.8 5.1 7.1 5.1 3.4 0 6.2-2.3 7.1-5.4 2.3-.6 4.4-1.6 6.2-3.1 1.6 1.5 3.8 2.5 6.2 2.5 4.9 0 8.8-4 8.8-8.8 0-4.3-3-7.8-7.1-8.6.6-1.7 1-3.5 1-5.4Z"
        fill="#33CCFF"
      />
      <path
        d="M25.5 32.2c0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8Zm18.6 0c0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8Z"
        fill="#fff"
      />
      <path
        d="M23.5 40.7c2.2 2.7 5.3 4.2 8.7 4.2 3.4 0 6.5-1.5 8.7-4.2"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="54" r="4.5" fill="#33CCFF" />
      <circle cx="42" cy="54" r="4.5" fill="#33CCFF" />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 58c9.4-13.2 14.1-22.7 14.1-28.4C46.1 19 39.8 12 32 12s-14.1 7-14.1 17.6C17.9 35.3 22.6 44.8 32 58Z"
        fill="#EA4335"
      />
      <path
        d="M32 12c-7.8 0-14.1 7-14.1 17.6 0 1.8.3 3.6.9 5.5L32 22.4V12Z"
        fill="#FBBC04"
      />
      <path
        d="M45.1 22.7C42.7 16.3 37.8 12 32 12v10.4l13.1.3Z"
        fill="#4285F4"
      />
      <circle cx="32" cy="30" r="6.3" fill="#fff" />
      <circle cx="32" cy="30" r="3.2" fill="#4285F4" />
    </svg>
  );
}

function AppleMapsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="8" width="48" height="48" rx="14" fill="#F3F4F6" />
      <path
        d="M20 42h24"
        stroke="#60A5FA"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M24 46 40 18"
        stroke="#34D399"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M23 20h18"
        stroke="#F59E0B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 20c-4.6 0-8.3 3.6-8.3 8.1 0 5.1 6.4 12.5 7.6 13.8a1 1 0 0 0 1.4 0c1.2-1.3 7.6-8.7 7.6-13.8 0-4.5-3.7-8.1-8.3-8.1Z"
        fill="#EF4444"
      />
      <circle cx="32" cy="28.2" r="3.2" fill="#fff" />
    </svg>
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
              className="inline-flex min-w-0 items-center gap-2 break-all sm:break-normal"
            >
              <Mail size={16} aria-hidden="true" />
              {contactDetails.email.value}
            </a>
            <a
              href={contactDetails.phone.href}
              className="inline-flex min-w-0 items-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              {contactDetails.phone.value}
            </a>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-3.5 backdrop-blur">
          <div className="flex items-start gap-3 text-white">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
              <MapPin size={18} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.24em] text-white/56">
                Office Location
              </p>
              <p className="mt-1 break-words text-sm font-semibold leading-6 text-white">
                {contactDetails.address.value}
              </p>
            </div>
          </div>
          <div className="mt-3 overflow-hidden rounded-[1.2rem] border border-white/10 bg-white">
            <iframe
              title="Office location map"
              src={googleMapsEmbed}
              className="h-32 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
            <a
              href={wazeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <WazeIcon />
              Waze
            </a>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <GoogleMapsIcon />
              Google Maps
            </a>
            <a
              href={appleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-white transition hover:border-[rgba(212,175,55,0.45)] hover:bg-white/12"
            >
              <AppleMapsIcon />
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
