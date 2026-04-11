type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-2xl text-left';

  return (
    <div className={alignment}>
      <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-slate-700)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl leading-tight text-[var(--color-slate-900)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-slate-500)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
