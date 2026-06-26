import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from 'lucide-react';

import { contactDetails, navItems, socialLinks } from '@/lib/data';

const socialIconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
};

function WazeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M51 31.5c0-10.6-8.8-19.2-19.6-18.8-10.1.4-18.3 8.6-18.8 18.7-.2 4.9 1.4 9.4 4.3 13-.8 1.1-2.1 1.8-3.6 1.8-2.4 0-4.3 1.9-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3 2.9 0 5.6-1.3 7.4-3.5 2.1 1.1 4.5 1.8 7 2.1 1 3 3.8 5.1 7.1 5.1 3.4 0 6.2-2.3 7.1-5.4 2.3-.6 4.4-1.6 6.2-3.1 1.6 1.5 3.8 2.5 6.2 2.5 4.9 0 8.8-4 8.8-8.8 0-4.3-3-7.8-7.1-8.6.6-1.7 1-3.5 1-5.4Z" fill="#33CCFF" />
      <path d="M25.5 32.2c0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8Zm18.6 0c0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8Z" fill="#fff" />
      <path d="M23.5 40.7c2.2 2.7 5.3 4.2 8.7 4.2 3.4 0 6.5-1.5 8.7-4.2" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="22.5" cy="54" r="4.5" fill="#33CCFF" />
      <circle cx="42" cy="54" r="4.5" fill="#33CCFF" />
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 58c9.4-13.2 14.1-22.7 14.1-28.4C46.1 19 39.8 12 32 12s-14.1 7-14.1 17.6C17.9 35.3 22.6 44.8 32 58Z" fill="#EA4335" />
      <path d="M32 12c-7.8 0-14.1 7-14.1 17.6 0 1.8.3 3.6.9 5.5L32 22.4V12Z" fill="#FBBC04" />
      <path d="M45.1 22.7C42.7 16.3 37.8 12 32 12v10.4l13.1.3Z" fill="#4285F4" />
      <circle cx="32" cy="30" r="6.3" fill="#fff" />
      <circle cx="32" cy="30" r="3.2" fill="#4285F4" />
    </svg>
  );
}

function AppleMapsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="48" height="48" rx="14" fill="#F3F4F6" />
      <path d="M20 42h24" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 46 40 18" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
      <path d="M23 20h18" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 20c-4.6 0-8.3 3.6-8.3 8.1 0 5.1 6.4 12.5 7.6 13.8a1 1 0 0 0 1.4 0c1.2-1.3 7.6-8.7 7.6-13.8 0-4.5-3.7-8.1-8.3-8.1Z" fill="#EF4444" />
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
    <footer className="border-t border-white/8 bg-[rgb(2,18,34)] px-4 py-14 text-white/55 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_auto_auto] lg:items-start lg:gap-12">

          {/* ── Col 1: Brand ── */}
          <div>
            <div className="relative h-14 w-36 rounded-xl bg-white p-2.5">
              <Image
                src="/images/emlak-logo.png"
                alt="Emlak Real Estate LLC"
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-white/45">
              Dubai property advisory — buying, selling, leasing &amp; investment.
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <a href={contactDetails.email.href} className="block break-all transition hover:text-white">
                {contactDetails.email.value}
              </a>
              <a href={contactDetails.phone.href} className="block transition hover:text-white">
                {contactDetails.phone.value}
              </a>
            </div>
          </div>

          {/* ── Col 2: Map ── */}
          <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/70">
                <MapPin size={15} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Office Location
                </p>
                <p className="mt-1 text-xs leading-5 text-white/70">
                  {contactDetails.address.value}
                </p>
              </div>
            </div>
            <div className="mt-3 overflow-hidden rounded-[0.8rem] border border-white/10">
              <iframe
                title="Office location map"
                src={googleMapsEmbed}
                className="h-32 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-2 text-xs">
              {[
                { href: wazeLink, icon: <WazeIcon />, label: 'Waze' },
                { href: googleMapsLink, icon: <GoogleMapsIcon />, label: 'Google' },
                { href: appleMapsLink, icon: <AppleMapsIcon />, label: 'Apple' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2 py-1.5 text-white/60 transition hover:border-[rgba(212,175,55,0.35)] hover:text-white"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 3: Nav ── */}
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/30">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Social ── */}
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/30">
              Follow
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2.5 text-sm transition hover:text-white"
                  >
                    <Icon size={14} aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Emlak Real Estate LLC. All rights reserved.</p>
          <p>
            Built by{' '}
            <a
              href="https://webuildyourbrands.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/60"
            >
              WBYB
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
