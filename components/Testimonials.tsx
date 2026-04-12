import { Quote, Star } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { getTestimonials } from '@/lib/data';

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section
      id="testimonials"
      className="bg-[var(--color-surface-strong)] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients remember most is how supported they felt at every step."
            description="Our process is detail-driven, discreet, and relationship-first. Here is how that experience feels from the client side."
            align="center"
          />
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.name} delay={index * 0.08}>
              <article className="h-full rounded-[1.9rem] border border-[var(--color-border)] bg-white p-7 shadow-[0_20px_60px_rgba(21,43,71,0.06)]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[var(--color-gold-500)]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote size={28} className="text-[rgba(212,175,55,0.28)]" />
                </div>
                <p className="mt-6 text-base leading-8 text-[var(--color-slate-700)]">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                  <p className="text-base font-semibold text-[var(--color-slate-900)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-slate-500)]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
