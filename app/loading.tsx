import {
  HeroSkeleton,
  ProjectsSkeleton,
  TestimonialsSkeleton,
  TextSectionSkeleton,
} from '@/components/SectionSkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="sticky top-0 z-40 border-b border-white/60 bg-[rgba(248,243,235,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="h-6 w-44 animate-pulse rounded-full bg-white/80" />
          <div className="hidden gap-3 md:flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-4 w-16 animate-pulse rounded-full bg-white/80"
              />
            ))}
          </div>
        </div>
      </div>
      <HeroSkeleton />
      <TextSectionSkeleton />
      <TextSectionSkeleton alternate />
      <ProjectsSkeleton />
      <TestimonialsSkeleton />
      <TextSectionSkeleton />
    </div>
  );
}
