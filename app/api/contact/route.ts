import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'ibrahim.tisekar@outlook.com';
const MAX_MESSAGE_LENGTH = 3000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  source?: unknown;
  message?: unknown;
};

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  source: string;
  message: string;
};

type SmtpError = {
  code?: unknown;
  response?: unknown;
  responseCode?: unknown;
};

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const normalizePayload = (payload: ContactPayload): ContactValues => ({
  name: typeof payload.name === 'string' ? payload.name.trim() : '',
  email: typeof payload.email === 'string' ? payload.email.trim() : '',
  phone: typeof payload.phone === 'string' ? payload.phone.trim() : '',
  interest: typeof payload.interest === 'string' ? payload.interest.trim() : '',
  source: typeof payload.source === 'string' ? payload.source.trim() : '',
  message: typeof payload.message === 'string' ? payload.message.trim() : '',
});

const validatePayload = (values: ContactValues) => {
  if (!values.name || !values.email || !values.message) {
    return 'Please complete all required fields.';
  }

  if (values.name.length > 100) {
    return 'Please keep your name under 100 characters.';
  }

  if (!emailPattern.test(values.email) || values.email.length > 254) {
    return 'Please enter a valid email address.';
  }

  if (values.phone.length > 40) {
    return 'Please keep your phone number under 40 characters.';
  }

  if (values.interest.length > 120) {
    return 'Please keep your interest under 120 characters.';
  }

  if (values.source.length > 120) {
    return 'Please keep your request source under 120 characters.';
  }

  if (values.message.length > MAX_MESSAGE_LENGTH) {
    return `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return null;
};

const isSmtpAuthError = (error: unknown) => {
  const smtpError = error as SmtpError;

  return smtpError.code === 'EAUTH' || smtpError.responseCode === 535;
};

const getSmtpConfig = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    return null;
  }

  return { from, host, pass, port, secure, user };
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 },
    );
  }

  const values = normalizePayload(payload);
  const validationError = validatePayload(values);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return NextResponse.json(
      { error: 'Email service is not configured yet.' },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
  });

  const safeName = escapeHtml(values.name);
  const safeEmail = escapeHtml(values.email);
  const safePhone = escapeHtml(values.phone);
  const safeInterest = escapeHtml(values.interest);
  const safeSource = escapeHtml(values.source);
  const safeMessage = escapeHtml(values.message).replace(/\n/g, '<br />');
  const subjectPrefix = values.source || 'New Emlak inquiry';

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: RECIPIENT_EMAIL,
      replyTo: values.email,
      subject: `${subjectPrefix} from ${values.name}`,
      text: [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : '',
        values.interest ? `Interest: ${values.interest}` : '',
        values.source ? `Source: ${values.source}` : '',
        '',
        'Message:',
        values.message,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #152b47;">
          <h2 style="margin: 0 0 16px;">New Emlak Website Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${values.phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
          ${
            values.interest
              ? `<p><strong>Interest:</strong> ${safeInterest}</p>`
              : ''
          }
          ${values.source ? `<p><strong>Source:</strong> ${safeSource}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email failed:', error);

    if (isSmtpAuthError(error)) {
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === 'production'
              ? 'We could not send your message right now.'
              : 'Email login failed. Please check SMTP_USER and SMTP_PASS on the server.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: 'We could not send your message right now.' },
      { status: 500 },
    );
  }
}
