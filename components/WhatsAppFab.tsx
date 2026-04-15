import { contactDetails } from '@/lib/data';

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.02 2C6.54 2 2.07 6.46 2.07 11.95c0 1.75.46 3.47 1.34 4.98L2 22l5.23-1.37a9.94 9.94 0 0 0 4.78 1.22h.01c5.48 0 9.95-4.47 9.95-9.95a9.86 9.86 0 0 0-2.92-6.96ZM12.02 20.17h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.2 8.2 0 0 1-1.27-4.37c0-4.59 3.73-8.32 8.33-8.32a8.23 8.23 0 0 1 5.89 2.45 8.2 8.2 0 0 1 2.43 5.87c0 4.59-3.73 8.32-8.32 8.32Zm4.56-6.22c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.83-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.16 1.74 2.66 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function WhatsAppFab() {
  const phoneNumber = contactDetails.phone.value.replace(/\D/g, '');
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hello Emlak Real Estate LLC, I would like to know more about your properties.',
  )}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:right-5 sm:bottom-5 sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-3"
    >
      <WhatsAppIcon />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
