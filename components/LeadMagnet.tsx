'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useId, useState } from 'react';

import { ArrowRight, CheckCircle2, Download, FileText } from 'lucide-react';

import { SectionReveal } from '@/components/SectionReveal';

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormState, string>>;

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const interestOptions = [
  'Buying for end-use',
  'Investment property',
  'Golden Visa planning',
  'Off-plan comparison',
] as const;

const createInitialState = (): LeadFormState => ({
  name: '',
  email: '',
  phone: '',
  interest: interestOptions[0],
});

const validate = (values: LeadFormState): LeadFormErrors => {
  const nextErrors: LeadFormErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    nextErrors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = 'Please enter a valid email address.';
  }

  return nextErrors;
};

export function LeadMagnet() {
  const formId = useId();
  const [formData, setFormData] = useState<LeadFormState>(createInitialState);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState(
    'Get the checklist and a sharper next step for your search.',
  );

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const phoneId = `${formId}-phone`;
  const interestId = `${formId}-interest`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitStatus('idle');
    setSubmitMessage(
      'Get the checklist and a sharper next step for your search.',
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitStatus('sending');
    setSubmitMessage('Preparing your checklist request...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Dubai Buyer Checklist Lead Magnet',
          message: [
            'Lead magnet request: Dubai Buyer and Investor Checklist.',
            `Primary interest: ${formData.interest}`,
            formData.phone
              ? `Preferred phone or WhatsApp: ${formData.phone}`
              : 'Preferred phone or WhatsApp: Not provided',
            '',
            'Please send the checklist and follow up with relevant property guidance.',
          ].join('\n'),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong.');
      }

      setSubmitStatus('sent');
      setSubmitMessage(
        'Your request is in. Start with the checklist while we prepare the follow-up.',
      );
      setFormData(createInitialState());
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your request right now.',
      );
    }
  };

  return (
    <section id="guide" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-slate-900)] shadow-[0_28px_80px_rgba(21,43,71,0.14)] lg:grid-cols-[1.05fr_0.95fr]">
        <SectionReveal className="relative min-h-[30rem] overflow-hidden p-6 text-white sm:p-10 lg:p-12">
          <Image
            src="/images/projects/aeon-creek-harbour.jpg"
            alt="Dubai waterfront residential towers"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[rgba(21,43,71,0.78)]" />
          <div className="relative z-10 flex min-h-[25rem] flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.14)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-400)] sm:tracking-[0.28em]">
                Free Buyer Guide
              </span>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
                Get the Dubai buyer and investor checklist before you shortlist.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                A practical filter for comparing communities, payment plans,
                Golden Visa pathways, transfer costs, developer strength, and
                exit potential before a viewing takes over the decision.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                'Budget and cost filters',
                'Developer due diligence',
                'Viewing questions',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/12 bg-white/8 p-4 backdrop-blur"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[var(--color-gold-400)]"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold leading-6 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal
          className="min-w-0 bg-[var(--color-surface)] p-5 sm:p-8 lg:p-10"
          delay={0.1}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(212,175,55,0.14)] text-[var(--color-slate-700)]">
              <FileText size={22} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-500)]">
                Instant Qualification
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--color-slate-900)]">
                Request the checklist
              </h3>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-7 space-y-5"
            autoComplete="off"
          >
            <div>
              <label
                htmlFor={nameId}
                className="text-sm font-semibold text-[var(--color-slate-900)]"
              >
                Full name
              </label>
              <input
                id={nameId}
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${nameId}-error` : undefined}
                className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                placeholder="Jordan Lee"
                required
              />
              {errors.name ? (
                <p
                  id={`${nameId}-error`}
                  className="mt-2 text-sm text-[rgb(170,53,42)]"
                >
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="text-sm font-semibold text-[var(--color-slate-900)]"
              >
                Email address
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? `${emailId}-error` : undefined
                }
                className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                placeholder="jordan@email.com"
                required
              />
              {errors.email ? (
                <p
                  id={`${emailId}-error`}
                  className="mt-2 text-sm text-[rgb(170,53,42)]"
                >
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={phoneId}
                  className="text-sm font-semibold text-[var(--color-slate-900)]"
                >
                  WhatsApp number
                </label>
                <input
                  id={phoneId}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                  placeholder="+971 50 000 0000"
                />
              </div>

              <div>
                <label
                  htmlFor={interestId}
                  className="text-sm font-semibold text-[var(--color-slate-900)]"
                >
                  Primary interest
                </label>
                <select
                  id={interestId}
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-3 w-full cursor-pointer rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
                >
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-slate-700)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-slate-900)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Download size={17} aria-hidden="true" />
              {submitStatus === 'sending'
                ? 'Sending...'
                : 'Send Me the Checklist'}
            </button>

            <div className="min-h-12">
              <p
                className={`text-sm leading-6 ${
                  submitStatus === 'error'
                    ? 'text-[rgb(170,53,42)]'
                    : 'text-[var(--color-slate-500)]'
                }`}
                aria-live="polite"
              >
                {submitMessage}
              </p>
              {submitStatus === 'sent' ? (
                <Link
                  href="/buyer-checklist"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-slate-700)] transition hover:text-[var(--color-gold-500)]"
                >
                  Open the checklist
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
