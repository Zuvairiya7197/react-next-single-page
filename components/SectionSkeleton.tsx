function SkeletonBlock({
  className,
  rounded = 'rounded-2xl',
}: {
  className: string;
  rounded?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-white/80 ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
}

export function HeroSkeleton() {
  return (
    <section className="px-6 pb-18 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <SkeletonBlock className="h-10 w-44 rounded-full" />
          <SkeletonBlock className="mt-6 h-20 w-full max-w-2xl rounded-[2rem]" />
          <SkeletonBlock className="mt-4 h-20 w-full max-w-xl rounded-[2rem]" />
          <div className="mt-8 flex gap-4">
            <SkeletonBlock className="h-14 w-44 rounded-full" />
            <SkeletonBlock className="h-14 w-52 rounded-full" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonBlock
                key={index}
                className="h-28 w-full rounded-[1.75rem]"
              />
            ))}
          </div>
        </div>
        <SkeletonBlock className="h-[42rem] w-full rounded-[2rem]" />
      </div>
    </section>
  );
}

export function TextSectionSkeleton({
  alternate = false,
}: {
  alternate?: boolean;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div
        className={`mx-auto grid max-w-7xl gap-8 ${
          alternate ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
        }`}
      >
        <SkeletonBlock className="h-72 w-full rounded-[2rem]" />
        <div className={alternate ? 'lg:col-span-2' : ''}>
          <SkeletonBlock className="h-8 w-36 rounded-full" />
          <SkeletonBlock className="mt-6 h-14 w-full rounded-[1.5rem]" />
          <SkeletonBlock className="mt-4 h-14 w-10/12 rounded-[1.5rem]" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock
                key={index}
                className="h-36 w-full rounded-[1.5rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SkeletonBlock className="h-8 w-40 rounded-full" />
        <SkeletonBlock className="mt-6 h-16 w-full max-w-3xl rounded-[1.8rem]" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] border border-white/70 bg-[rgba(255,255,255,0.55)] p-4"
            >
              <SkeletonBlock className="h-72 w-full rounded-[1.6rem]" />
              <SkeletonBlock className="mt-5 h-8 w-7/12" />
              <SkeletonBlock className="mt-3 h-5 w-5/12" />
              <SkeletonBlock className="mt-4 h-16 w-full rounded-[1.4rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SkeletonBlock className="mx-auto h-8 w-44 rounded-full" />
        <SkeletonBlock className="mx-auto mt-6 h-16 w-full max-w-3xl rounded-[1.8rem]" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonBlock
              key={index}
              className="h-72 w-full rounded-[1.9rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
