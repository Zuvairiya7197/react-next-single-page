import {
  Building2,
  Handshake,
  KeyRound,
  Landmark,
  Search,
  Sparkles,
} from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { services } from '@/lib/data';

const iconMap = {
  search: Search,
  key: KeyRound,
  building: Building2,
  landmark: Landmark,
  sparkles: Sparkles,
  handshake: Handshake,
};

export function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--color-surface-strong)] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive real estate support across every stage of the journey."
            description="From acquisition strategy to launch-ready listings, our services are designed to protect value, accelerate decisions, and elevate the client experience."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <SectionReveal key={service.title} delay={index * 0.05}>
                <article className="group h-full rounded-[1.75rem] border border-[var(--color-border)] bg-white p-7 shadow-[0_20px_60px_rgba(21,43,71,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(21,43,71,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(30,58,95,0.08)] text-[var(--color-slate-700)] transition duration-300 group-hover:bg-[var(--color-slate-700)] group-hover:text-white">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--color-slate-900)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate-500)]">
                    {service.description}
                  </p>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
