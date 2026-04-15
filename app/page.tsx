import { Suspense } from 'react';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import {
  ProjectsSkeleton,
  // TestimonialsSkeleton,
} from '@/components/SectionSkeleton';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Services } from '@/components/Services';
import { WhatsAppFab } from '@/components/WhatsAppFab';
// import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        {/* <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollToTop />
    </>
  );
}
