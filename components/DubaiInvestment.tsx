import { SectionReveal } from '@/components/SectionReveal';

const stats = [
  {
    value: '0%',
    label: 'Capital Gains Tax',
  },
  {
    value: '6–9%',
    label: 'Average Rental Yield',
  },
  {
    value: '100%',
    label: 'Foreign Freehold Ownership',
  },
  {
    value: 'Top 5',
    label: 'Global Luxury Real Estate Market',
  },
] as const;

export function DubaiInvestment() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d1f38 40%, #091422 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-[rgba(212,175,55,0.07)] blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[rgba(30,58,95,0.5)] blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(212,175,55,0.04)] blur-[60px]" />
      </div>

      {/* Gold border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />
      {/* Gold border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d4af37]">
                Dubai Investment Opportunity
              </span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-white sm:text-5xl">
              Why Invest in
              <span className="block text-[#e3c96c]">Dubai</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              Dubai remains one of the world's most attractive real estate markets, offering unmatched stability, strong returns, and long-term value.
            </p>
          </div>
        </SectionReveal>

        {/* Stats grid */}
        <SectionReveal delay={0.12}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl p-px transition duration-500 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.04) 60%, rgba(255,255,255,0.04))',
                }}
              >
                {/* Inner card */}
                <div
                  className="relative flex h-full flex-col items-center justify-center rounded-2xl px-6 py-8 text-center sm:px-8 sm:py-10"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(160deg, rgba(18,34,58,0.95) 0%, rgba(10,22,40,0.98) 100%)'
                      : 'linear-gradient(160deg, rgba(12,26,46,0.98) 0%, rgba(16,30,52,0.95) 100%)',
                  }}
                >
                  {/* Subtle inner glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="relative font-display text-4xl uppercase leading-none text-[#e3c96c] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] sm:text-5xl">
                    {stat.value}
                  </p>

                  <div className="mx-auto mt-5 h-px w-8 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                  <p className="relative mt-4 text-sm font-medium leading-6 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
