import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from 'lucide-react';

import { navItems, socialLinks } from '@/lib/data';

const socialIconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(16,33,58,0.98)] px-6 py-12 text-[rgba(248,243,235,0.8)] lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto_auto]">
        <div className="max-w-md">
          <p className="font-display text-3xl text-white">
            Ibrahim Tisekar Estates
          </p>
          <p className="mt-4 text-sm leading-7 text-[rgba(248,243,235,0.7)]">
            Real estate guidance with a boutique mindset, a sharp marketing eye,
            and the local intelligence needed to move with certainty.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:hello@horizoncrestestates.com"
              className="inline-flex items-center gap-2"
            >
              <Mail size={16} aria-hidden="true" />
              hello@horizoncrestestates.com
            </a>
            <a
              href="tel:+14155550182"
              className="inline-flex items-center gap-2"
            >
              <Phone size={16} aria-hidden="true" />
              +1 (415) 555-0182
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:border-white/25 hover:bg-white/12"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[rgba(248,243,235,0.58)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Ibrahim Tisekar Estates. All rights reserved.</p>
        <p>
          Designed for modern real estate brands that value trust and
          presentation.
        </p>
      </div>
    </footer>
  );
}
