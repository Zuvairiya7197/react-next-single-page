import { cache } from 'react';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#projects' },
  // { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const marketStats = [
  {
    value: 'AED 75M+',
    label:
      'transaction value advised across residential, commercial, and investment portfolios',
  },
  {
    value: '100+',
    label:
      'buyers, sellers, and investors supported with tailored search and acquisition strategies',
  },
  {
    value: '28 days',
    label:
      'average window to move serious inquiries into qualified offers on premium listings',
  },
];

export const heroHighlights = [
  {
    label: 'Golden Visa Support',
    title: 'Property choices that fit broader goals',
    description:
      'We help clients shortlist homes and investment assets that align with residency, family, and long-term planning priorities.',
  },
  {
    label: 'Transaction Guidance',
    title: 'Documentation handled with clarity',
    description:
      'From seller coordination to legal paperwork and handover prep, every stage is managed with calm, step-by-step support.',
  },
];

export const companyValues = [
  {
    title: 'Property sourcing with intent',
    description:
      'We narrow the market around your actual goals, whether that means end-use comfort, rental income, resale upside, or developer reputation.',
  },
  {
    title: 'Golden Visa and family support',
    description:
      'When a purchase is part of a wider relocation or residency plan, we help clients understand the property and documentation implications early.',
  },
  {
    title: 'Legal and transfer coordination',
    description:
      'We keep communication moving between buyers, sellers, legal representatives, and service providers so the process stays organized.',
  },
  {
    title: 'After-sales continuity',
    description:
      'Support does not stop at the signature. We stay useful after the deal with practical next-step guidance and ownership support.',
  },
];

export const services = [
  {
    title: 'Buy, Sell, and Rent',
    description:
      'End-to-end support for buying, selling, and leasing with guided property selection, seller communication, and transaction planning.',
    icon: 'search',
  },
  {
    title: 'Golden Visa Assistance',
    description:
      'Guidance on property pathways that can support residency goals, with practical help around the process and required documentation.',
    icon: 'key',
  },
  {
    title: 'Asset Management',
    description:
      'Hands-on help for owners who want smoother oversight, stronger tenant continuity, and dependable day-to-day property coordination.',
    icon: 'sparkles',
  },
  {
    title: 'Legal and Documentation',
    description:
      'We help clients stay on top of contracts, compliance steps, transfer requirements, and the paperwork surrounding each transaction.',
    icon: 'building',
  },
  {
    title: 'Relocation and Family Setup',
    description:
      'Additional support for the practical side of settling in, from utilities and insurance to school and lifestyle-related coordination.',
    icon: 'landmark',
  },
  {
    title: 'Investment Advisory',
    description:
      'Targeted guidance for clients comparing off-plan, ready, rental-yield, and capital-growth opportunities across the market.',
    icon: 'handshake',
  },
] as const;

export const topDevelopers = [
  { name: 'Nakheel' },
  { name: 'Damac' },
  { name: 'Emaar' },
  { name: 'Danube' },
  { name: 'Meraas' },
  { name: 'Select Group' },
  { name: 'Sobha' },
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
  areaLabel: string;
  handover: string;
  status: string;
  image: string;
  imageAlt: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: 'Lagoon Views 2 BR Apartment',
    location: 'Dubailand, Dubai',
    price: 'AED 1,826,000',
    description:
      'A Golden Visa-eligible apartment in DAMAC Lagoon Views, combining resort-style community living, contemporary interiors, and a Q1 2029 handover timeline.',
    beds: '2',
    baths: '2',
    area: 'Up to 1,797 sq ft',
    areaLabel: 'Sq Ft',
    handover: 'Q1 / 2029',
    status: 'Golden Visa',
    image: '/images/projects/lagoon-views-2br.jpg',
    imageAlt: 'Interior view of a DAMAC Lagoon Views two bedroom apartment',
  },
  {
    id: 2,
    title: 'Greenz by Danube',
    location: 'Academic City, Dubai',
    price: 'AED 3.5M',
    description:
      'A townhouse-focused Danube community in Dubai International Academic City, planned around greenery, open spaces, and a 1% monthly payment plan.',
    beds: '3, 4 & 5',
    baths: '3',
    area: '700',
    areaLabel: 'Apartments',
    handover: 'Q4 / 2029',
    status: 'Payment Plan',
    image: '/images/projects/greenz-exterior.webp',
    imageAlt: 'Exterior view of Greenz by Danube in Academic City Dubai',
  },
  {
    id: 3,
    title: 'Emerald Hills Family Estate',
    location: 'Dubai Hills Estate, Dubai',
    price: 'AED 9.1M',
    description:
      'A spacious family-oriented villa with landscaped outdoor living, generous entertaining areas, and long-term appeal for both residents and investors.',
    beds: '6',
    baths: '5.5',
    area: '5,120 sq ft',
    areaLabel: 'Interior',
    handover: 'Ready',
    status: 'Private Tour',
    image: '/images/4th.jpeg',
    imageAlt: 'Estate property with landscaped grounds and warm stone facade',
  },
  {
    id: 4,
    title: 'Canal Gate Mixed-Use Offices',
    location: 'Business Bay, Dubai',
    price: 'AED 10.3M',
    description:
      'A mixed-use commercial asset in a high-activity district, positioned for tenant demand, visibility, and long-term income resilience.',
    beds: '12 suites',
    baths: 'Multi',
    area: '18,400 sq ft',
    areaLabel: 'Interior',
    handover: 'Ready',
    status: 'Investment',
    image: '/images/5th.jpeg',
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
    name: 'Sara Al Mansoori',
    role: 'End-User Buyer',
    quote:
      'The process felt fully guided from shortlist to paperwork. Every step was explained clearly, and I never felt like I was chasing updates.',
  },
  {
    name: 'Omar Khoury',
    role: 'Property Investor',
    quote:
      'They helped me compare yield, location, payment structure, and exit potential in a practical way. It felt like real advisory support, not just a sales pitch.',
  },
  {
    name: 'Aisha Raman',
    role: 'Relocating Family',
    quote:
      'From virtual viewings to documentation guidance, Emlak Real Estate LLC made a cross-border move feel structured, responsive, and manageable.',
  },
];

export const contactDetails = {
  address: {
    label: 'Office',
    value: 'Dubai National Insurance Building, Office 506, Dubai, UAE',
    href: 'https://maps.google.com/?q=Office+1007+Sidra+Tower+Al+Sufouh+1+Dubai+UAE',
  },
  email: {
    label: 'Email',
    value: 'hello@emlakrealestate.com',
    href: 'mailto:hello@emlakrealestate.com',
  },
  phone: {
    label: 'Phone',
    value: '+971 50 210 9592',
    href: 'tel:+971502109592',
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
