import { Suspense } from 'react';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { CoreValues } from '@/components/CoreValues';
import { DevelopersMarquee } from '@/components/DevelopersMarquee';
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
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { WhyDubaiStrip } from '@/components/WhyDubaiStrip';
// import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CoreValues />
        <WhyChooseUs />
        <Services />
        <DevelopersMarquee />
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        {/* <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense> */}
        <WhyDubaiStrip />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollToTop />
    </>
  );
}
