type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-2xl text-left';
  const isDark = variant === 'dark';

  return (
    <div className={alignment}>
      <span className="inline-flex max-w-full flex-wrap rounded-full border border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.1)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-500)] sm:tracking-[0.3em]">
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-4xl uppercase leading-tight sm:text-5xl ${
          isDark ? 'text-white' : 'text-[var(--color-slate-900)]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 sm:text-lg ${
          isDark ? 'text-white/70' : 'text-[var(--color-slate-500)]'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
