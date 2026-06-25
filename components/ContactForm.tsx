'use client';

import { ChangeEvent, FormEvent, useEffect, useId, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

type ContactFormProps = {
  initialMessage?: string;
  submitLabel?: string;
  className?: string;
  rows?: number;
};

const createInitialState = (message = ''): FormState => ({
  name: '',
  email: '',
  message,
});

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

export function ContactForm({
  initialMessage = '',
  submitLabel = 'Send Inquiry',
  className = 'space-y-6',
  rows = 6,
}: ContactFormProps) {
  const formId = useId();
  const [formData, setFormData] = useState<FormState>(() =>
    createInitialState(initialMessage),
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormReady, setIsFormReady] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState(
    'All fields are required.',
  );

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const messageId = `${formId}-message`;

  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      setIsFormReady(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitStatus('idle');
    setSubmitMessage('All fields are required.');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitStatus('sending');
    setSubmitMessage('Sending your inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong.');
      }

      setSubmitStatus('sent');
      setSubmitMessage('Thanks for reaching out. Your inquiry has been sent.');
      setFormData(createInitialState(initialMessage));
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your message right now.',
      );
    }
  };

  if (!isFormReady) {
    return <div className="min-h-[28rem]" aria-hidden="true" />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={className}
      autoComplete="off"
      data-lpignore="true"
      data-1p-ignore="true"
      data-form-type="other"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
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
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
            data-form-type="other"
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

        <div className="sm:col-span-1">
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
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className="mt-3 w-full rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
            placeholder="jordan@email.com"
            autoComplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
            data-form-type="other"
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
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="text-sm font-semibold text-[var(--color-slate-900)]"
        >
          Project details
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={rows}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error` : undefined}
          className="mt-3 w-full rounded-[1.6rem] border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-slate-900)] outline-none transition focus:border-[var(--color-gold-500)] focus:ring-2 focus:ring-[rgba(216,179,106,0.22)]"
          placeholder="Share your goal, budget, and timeline."
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore="true"
          data-form-type="other"
          required
        />
        {errors.message ? (
          <p
            id={`${messageId}-error`}
            className="mt-2 text-sm text-[rgb(170,53,42)]"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitStatus === 'sending'}
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-slate-700)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--color-slate-900)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitStatus === 'sending' ? 'Sending...' : submitLabel}
      </button>

      <p
        className={`min-h-6 text-sm ${
          submitStatus === 'error'
            ? 'text-[rgb(170,53,42)]'
            : 'text-[var(--color-slate-500)]'
        }`}
        aria-live="polite"
      >
        {submitMessage}
      </p>
    </form>
  );
}
