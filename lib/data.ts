import { cache } from 'react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const marketStats = [
  {
    value: '$480M+',
    label:
      'transaction value managed across residential and commercial portfolios',
  },
  {
    value: '220+',
    label:
      'buyers, sellers, and investors advised with tailored search strategies',
  },
  {
    value: '28 days',
    label: 'average timeline to secure qualified offers on premium listings',
  },
];

export const heroHighlights = [
  {
    label: 'Signature Approach',
    title: 'Curated, not crowded',
    description:
      'Every listing and buyer brief is positioned with precision to attract the right momentum quickly.',
  },
  {
    label: 'Investor Lens',
    title: 'Value beyond the closing table',
    description:
      'We help clients weigh neighborhood growth, rental upside, and long-term appreciation before they commit.',
  },
];

export const companyValues = [
  {
    title: 'Market intelligence',
    description:
      'We analyze pricing patterns, absorption rates, and buyer behavior so your decisions rest on real context.',
  },
  {
    title: 'Presentation that performs',
    description:
      'Listings are elevated through design-led staging advice, compelling copy, and premium visual direction.',
  },
  {
    title: 'Negotiation with composure',
    description:
      'From offer strategy to contingency planning, we protect leverage without adding unnecessary friction.',
  },
  {
    title: 'Relationships that last',
    description:
      'Clients rely on us before, during, and after the transaction because service does not stop at the signature.',
  },
];

export const services = [
  {
    title: 'Buyer Representation',
    description:
      'Personalized property searches, off-market introductions, and strategic offer preparation for confident acquisitions.',
    icon: 'search',
  },
  {
    title: 'Seller Advisory',
    description:
      'Pricing strategy, listing preparation, photography direction, and launch planning built to maximize demand.',
    icon: 'key',
  },
  {
    title: 'Luxury Residences',
    description:
      'Specialized support for architecturally notable homes, private estates, and premium lifestyle properties.',
    icon: 'sparkles',
  },
  {
    title: 'Commercial Assets',
    description:
      'Office, retail, and mixed-use opportunities sourced with tenant potential and long-term performance in mind.',
    icon: 'building',
  },
  {
    title: 'Investment Strategy',
    description:
      'Targeted acquisition analysis for clients expanding rental portfolios or entering new growth markets.',
    icon: 'landmark',
  },
  {
    title: 'Closing Coordination',
    description:
      'End-to-end transaction management with lenders, inspectors, legal teams, and vendors for a smooth finish.',
    icon: 'handshake',
  },
] as const;

export type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  beds: string;
  baths: string;
  area: string;
  status: string;
  image: string;
  imageAlt: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: 'Oceanview Crest Residence',
    location: 'Pacific Heights, San Francisco',
    price: '$4.85M',
    description:
      'A light-filled five-bedroom home with expansive terraces, smart-home features, and seamless indoor-outdoor entertaining spaces.',
    beds: '5',
    baths: '4.5',
    area: '4,380 sq ft',
    status: 'For Sale',
    image: '/images/property-oceanview.svg',
    imageAlt:
      'Modern oceanview residence with layered terraces and landscaping',
  },
  {
    id: 2,
    title: 'Harbor Point Lofts',
    location: 'South Lake Union, Seattle',
    price: '$2.15M',
    description:
      'Contemporary penthouse loft with skyline views, designer finishes, and a private rooftop lounge built for hosting.',
    beds: '3',
    baths: '3',
    area: '2,180 sq ft',
    status: 'New Listing',
    image: '/images/property-harbor.svg',
    imageAlt: 'Sophisticated loft development near an urban waterfront skyline',
  },
  {
    id: 3,
    title: 'Stonegate Family Estate',
    location: 'Highland Park, Dallas',
    price: '$3.3M',
    description:
      'Elegant estate living with a resort-style pool, expansive garden court, and refined interiors tailored for family life.',
    beds: '6',
    baths: '5.5',
    area: '5,120 sq ft',
    status: 'Private Tour',
    image: '/images/property-stonegate.svg',
    imageAlt: 'Estate property with landscaped grounds and warm stone facade',
  },
  {
    id: 4,
    title: 'Summit Square Retail Hub',
    location: 'Scottsdale, Arizona',
    price: '$6.9M',
    description:
      'A fully leased mixed-use retail and office destination positioned in one of the region’s strongest foot-traffic corridors.',
    beds: '12 suites',
    baths: 'Multi',
    area: '18,400 sq ft',
    status: 'Investment',
    image: '/images/property-summit.svg',
    imageAlt:
      'Modern mixed-use commercial property with landscaped pedestrian plaza',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Amelia Rodriguez',
    role: 'Luxury Home Seller',
    quote:
      'The team handled every detail with calm precision. Our home launched beautifully, attracted the right buyers, and closed above expectations.',
  },
  {
    name: 'Nathan Chen',
    role: 'First-Time Investor',
    quote:
      'They translated complex market data into a clear acquisition strategy. I felt informed, never overwhelmed, and we found a property with real upside.',
  },
  {
    name: 'Priya Mehta',
    role: 'Relocating Buyer',
    quote:
      'From virtual tours to neighborhood guidance, Horizon Crest made a long-distance move feel organized and genuinely personal.',
  },
];

export const contactDetails = {
  address: {
    label: 'Office',
    value: '88 Harbor Avenue, Suite 410, San Francisco, CA',
    href: 'https://maps.google.com/?q=88+Harbor+Avenue+Suite+410+San+Francisco+CA',
  },
  email: {
    label: 'Email',
    value: 'hello@horizoncrestestates.com',
    href: 'mailto:hello@horizoncrestestates.com',
  },
  phone: {
    label: 'Phone',
    value: '+1 (415) 555-0182',
    href: 'tel:+14155550182',
  },
};

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: 'facebook',
  },
  {
    label: 'Twitter',
    href: 'https://www.x.com',
    icon: 'twitter',
  },
] as const;

export const getProperties = cache(async () => properties);

export const getTestimonials = cache(async () => testimonials);
