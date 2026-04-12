'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { SectionReveal } from '@/components/SectionReveal';
import { contactDetails } from '@/lib/data';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const details = useMemo(
    () => [
      { ...contactDetails.address, icon: MapPin },
      { ...contactDetails.email, icon: Mail },
      { ...contactDetails.phone, icon: Phone },
    ],
    [],
  );

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please tell us how we can help.';
    }

    return nextErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitted(true);
    setFormData(initialState);
  };

  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what you need and we will shape the next step."
            description="Whether you are buying, selling, comparing investment options, or exploring a property strategy tied to wider life goals, we are here to help."
          />

          <div className="mt-8 space-y-4">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex min-w-0 items-start gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(21,43,71,0.08)]"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-slate-700)] text-white">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-slate-500)]">
                      {detail.label}
                    </p>
                    <p className="mt-2 break-words text-base font-semibold text-[var(--color-slate-900)]">
                      {detail.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_24px_70px_rgba(21,43,71,0.08)] sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[var(--color-slate-900)]"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                    placeholder="Jordan Lee"
                    required
                  />
                  {errors.name ? (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-[rgb(170,53,42)]"
                    >
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[var(--color-slate-900)]"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                    placeholder="jordan@email.com"
                    required
                  />
                  {errors.email ? (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-[rgb(170,53,42)]"
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--color-slate-900)]"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className="mt-3 w-full rounded-[1.6rem] border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                  placeholder="Share your goals, budget, timeline, and whether you are exploring end-use, off-plan, resale, or investment opportunities."
                  required
                />
                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-[rgb(170,53,42)]"
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-slate-700)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-slate-900)] sm:w-auto"
              >
                Send Inquiry
              </button>

              <p
                className="min-h-6 text-sm text-[var(--color-slate-500)]"
                aria-live="polite"
              >
                {isSubmitted
                  ? 'Thanks for reaching out. Your inquiry is ready for backend wiring when you are.'
                  : 'All fields are required. This form is front-end only for now.'}
              </p>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
