'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { ArrowRight, BadgeCheck, MapPin, ShieldCheck, Zap } from 'lucide-react';

const highlights = [
  { icon: ShieldCheck, text: 'RERA Licensed & Regulated' },
  { icon: Zap,         text: '30–60 Day Average to Offer' },
  { icon: BadgeCheck,  text: '100% Transparent Process' },
] as const;

const heroProperties = [
  {
    location: 'Dubailand',
    title: 'Lagoon Views',
    type: '2 Bed Apartment',
    price: 'AED 1.82M',
    specs: '2 Bed · 2 Bath · 1,797 Sqft',
    image: '/images/projects/lagoon-views-2br.jpg',
  },
  {
    location: 'Dubai Design District',
    title: 'The Edit at d3',
    type: 'Design-Led Residences',
    price: 'AED 2.00M',
    specs: '1–4 Bed · Penthouses · Q2 2030',
    image: '/images/projects/the-edit-at-d3.jpg',
  },
  {
    location: 'Dubai Land',
    title: 'The Brooks',
    type: 'Sobha Villa Community',
    price: 'AED 4.16M',
    specs: '4–5 Bed · 5 Bath · 4,106 Sqft',
    image: '/images/projects/the-brooks.webp',
  },
  {
    location: 'Academic City',
    title: 'Greenz by Danube',
    type: 'Townhouse Community',
    price: 'AED 3.5M',
    specs: '3–5 Bed · 1% Monthly Plan',
    image: '/images/projects/greenz-exterior.webp',
  },
] as const;


export function Hero() {
  // -1 = hero main image (initial state), 0..3 = property images
  const [active, setActive] = useState(-1);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (index === active || animating) return;
    setActive(index);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 700);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((cur) => {
        // cycle: -1 → 0 → 1 → 2 → 3 → -1 → ...
        const next = cur >= heroProperties.length - 1 ? -1 : cur + 1;
        setAnimating(true);
        setTimeout(() => setAnimating(false), 700);
        return next;
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const property = heroProperties[active === -1 ? 0 : active];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      {/* ── Background images with crossfade ── */}
      <div className="absolute inset-0">
        {/* Initial hero image */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: active === -1 ? 1 : 0 }}
        >
          <Image
            src="/images/hero-emlak-main.png"
            alt="Dubai luxury property"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        {/* Property images */}
        {heroProperties.map((p, i) => (
          <div
            key={p.title}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="100vw"
              priority={false}
              className="object-cover"
            />
          </div>
        ))}
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,18,34,0.97)_0%,rgba(2,18,34,0.80)_38%,rgba(2,18,34,0.30)_62%,rgba(2,18,34,0.10)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,18,34,0.50)_0%,transparent_30%,rgba(2,18,34,0.65)_100%)]" />
      </div>

      {/* ── Gold hairline top accent ── */}
      <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-[#d4af37] via-[rgba(212,175,55,0.4)] to-transparent" />

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-rows-[1fr_auto] px-4 pt-24 pb-8 sm:px-6 sm:pt-28 lg:grid-cols-[1fr_420px] lg:grid-rows-1 lg:items-center lg:gap-16 lg:px-8 lg:pb-0 lg:pt-28">

        {/* ── Left: Copy ── */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#d4af37]">
              Dubai Property Advisory
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-display text-[clamp(2.8rem,10vw,6rem)] uppercase leading-[0.90] tracking-tight text-white">
            Invest Smart,
            <span className="block text-[#e3c96c]">Live Premium.</span>
          </h1>

          {/* Gold rule */}
          <div className="mt-7 h-px w-24 bg-gradient-to-r from-[#d4af37] to-transparent" />

          {/* Subheading */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Emlak Real Estate LLC helps clients buy, sell, lease, invest, and
            relocate — with clear guidance from search to signature.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#060f1c] shadow-[0_0_40px_rgba(212,175,55,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3c96c] hover:shadow-[0_0_56px_rgba(212,175,55,0.42)]"
            >
              Explore Properties
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.55)] hover:bg-white/14"
            >
              Book Consultation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* ── Right: Property card ── */}
        <div className="mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/14 bg-[rgba(2,18,34,0.62)] shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:rounded-[2rem]">

            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden sm:h-64">
              {/* Initial: hero main image */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: active === -1 ? 1 : 0 }}
              >
                <Image
                  src="/images/hero-emlak-main.png"
                  alt="Emlak Real Estate Dubai"
                  fill
                  sizes="420px"
                  priority
                  className="object-cover"
                />
              </div>
              {/* Property images */}
              {heroProperties.map((p, i) => (
                <div
                  key={p.title}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === active ? 1 : 0 }}
                >
                  <Image src={p.image} alt={p.title} fill sizes="420px" className="object-cover" />
                </div>
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(2,18,34,0.7)_100%)]" />

              {/* Location badge — hidden on initial */}
              <div
                className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(2,18,34,0.65)] px-3 py-1.5 backdrop-blur transition-opacity duration-500"
                style={{ opacity: active === -1 ? 0 : 1 }}
              >
                <MapPin size={12} className="text-[#d4af37]" aria-hidden="true" />
                <span className="text-xs font-semibold text-white">{property.location}</span>
              </div>

              {/* Price badge — hidden on initial */}
              <div
                className="absolute top-3 right-3 rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(2,18,34,0.7)] px-3 py-1.5 backdrop-blur transition-opacity duration-500"
                style={{ opacity: active === -1 ? 0 : 1 }}
              >
                <span className="text-xs font-semibold text-[#e3c96c]">{property.price}</span>
              </div>

              {/* Initial overlay label */}
              <div
                className="absolute inset-x-0 bottom-0 px-4 pb-4 transition-opacity duration-500"
                style={{ opacity: active === -1 ? 1 : 0 }}
              >
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">Emlak Real Estate LLC</p>
                <p className="mt-0.5 font-display text-lg uppercase text-white">Dubai, UAE</p>
              </div>
            </div>

            {/* Info — switches between highlights and property details */}
            <div className="px-5 py-5 sm:px-6">
              {active === -1 ? (
                /* Initial state: brand highlights */
                <div className="space-y-3">
                  {highlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.1)] text-[#d4af37]">
                        <Icon size={13} aria-hidden="true" />
                      </div>
                      <p className="text-xs font-medium text-white/80">{text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Property state */
                <>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#d4af37]">{property.type}</p>
                  <h3 className="mt-1.5 font-display text-xl uppercase text-white sm:text-2xl">{property.title}</h3>
                  <p className="mt-2 text-xs text-white/50">{property.specs}</p>
                </>
              )}

              {/* Divider */}
              <div className="my-4 h-px bg-white/10" />

              {/* Thumbnails */}
              <div className="flex gap-2">
                {heroProperties.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`View ${p.title}`}
                    className={`relative h-12 w-14 overflow-hidden rounded-[0.6rem] border-2 transition duration-300 sm:h-14 sm:w-16 ${
                      i === active
                        ? 'border-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.5)]'
                        : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'
                    }`}
                  >
                    <Image src={p.image} alt={p.title} fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-px w-full bg-white/8">
              <div
                key={active}
                className="h-full bg-[#d4af37]"
                style={{
                  animation: 'hero-progress 5s linear forwards',
                }}
              />
            </div>
          </div>

          {/* View all link */}
          <a
            href="#projects"
            className="group mt-4 flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 transition hover:text-[#d4af37]"
          >
            View all properties
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

      </div>

      {/* Progress bar keyframes */}
      <style>{`
        @keyframes hero-progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
