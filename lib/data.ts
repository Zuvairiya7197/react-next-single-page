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
    label: 'career transaction value advised',
  },
  {
    value: '10+',
    label: 'years of expert real estate guidance',
  },
  {
    value: '100%',
    label: 'transparency from sourcing to signature',
  },
];

export const heroHighlights = [
  {
    label: 'Buy',
    title: 'Shortlist with confidence',
    description: 'Goal-led sourcing across Dubai and the UAE.',
  },
  {
    label: 'Invest',
    title: 'Compare the right signals',
    description: 'Pricing, yield, location, and exit context.',
  },
];

export const companyValues = [
  {
    title: 'Property sourcing',
    description: 'Goal-focused opportunities.',
  },
  {
    title: 'Golden Visa support',
    description: 'Residency-aligned guidance.',
  },
  {
    title: 'Legal coordination',
    description: 'Organised transaction process.',
  },
  {
    title: 'After-sales support',
    description: 'Continued liaison after purchase.',
  },
];

export const services = [
  {
    title: 'Buy, Sell & Rent',
    description: 'Guided transactions from inquiry to handover.',
    icon: 'search',
  },
  {
    title: 'Investment Advisory',
    description: 'Strategic opportunities across the UAE.',
    icon: 'handshake',
  },
  {
    title: 'Off-Plan Sales',
    description: 'Developer launches and growth-focused opportunities.',
    icon: 'sparkles',
  },
  {
    title: 'Asset & Leasing Management',
    description: 'Ongoing ownership and tenant support.',
    icon: 'building',
  },
  {
    title: 'Mortgage & Finance',
    description: 'Financing guidance and lender coordination.',
    icon: 'landmark',
  },
  {
    title: 'Golden Visa Assistance',
    description: 'Property-linked residency guidance.',
    icon: 'key',
  },
  {
    title: 'Legal & Documentation',
    description: 'Contracts, compliance, transfers, and paperwork.',
    icon: 'building',
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
  handoverLabel: string;
  status: string;
  image: string;
  imagePosition?: string;
  imageAlt: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: 'Lagoon Views 2 BR Apartment',
    location: 'Dubailand, Dubai',
    price: 'From AED 1.82M',
    description:
      'Spacious lagoon-facing residences with resort-style amenities and Golden Visa eligibility.',
    beds: '2',
    baths: '2',
    area: 'Up to 1,797 sq ft',
    areaLabel: 'Sq Ft',
    handover: 'Q1 / 2029',
    handoverLabel: 'Completion',
    status: 'Golden Visa',
    image: '/images/projects/lagoon-views-2br.jpg',
    imageAlt: 'Interior view of a DAMAC Lagoon Views two bedroom apartment',
  },
  {
    id: 2,
    title: 'The Edit at d3',
    location: 'Dubai Design District',
    price: 'From AED 2.00M',
    description:
      'Design-led city living by Meraas, set in Dubai Design District with curated residences and penthouses.',
    beds: '1-4',
    baths: '2',
    area: 'Penthouses',
    areaLabel: 'Exclusive',
    handover: 'Q2 / 2030',
    handoverLabel: 'Completion',
    status: 'Properties Available',
    image: '/images/projects/the-edit-at-d3.jpg',
    imagePosition: 'center top',
    imageAlt: 'The Edit at d3 residential towers in Dubai Design District',
  },
  {
    id: 3,
    title: 'The Brooks',
    location: 'Dubai Land, Dubai',
    price: 'From AED 4.16M',
    description:
      'Elegant Sobha villas with generous layouts, refined finishes, and a calm family-focused setting.',
    beds: '4 & 5',
    baths: '5',
    area: '2,520.9-4,106.8 sq ft',
    areaLabel: 'Sq Ft',
    handover: '2029',
    handoverLabel: 'Completion',
    status: 'Villas',
    image: '/images/projects/the-brooks.webp',
    imagePosition: 'center center',
    imageAlt: 'The Brooks villa facade in Dubai Land by Sobha Realty',
  },
  {
    id: 4,
    title: 'Greenz by Danube',
    location: 'Academic City, Dubai',
    price: 'From AED 3.5M',
    description:
      'Modern Danube homes in a green community, paired with an easy 1% monthly payment plan.',
    beds: '3, 4 & 5',
    baths: '3',
    area: '700',
    areaLabel: 'Apartments',
    handover: 'Q4 / 2029',
    handoverLabel: 'Completion',
    status: 'Payment Plan',
    image: '/images/projects/greenz-exterior.webp',
    imageAlt: 'Exterior view of Greenz by Danube in Academic City Dubai',
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
    href: 'https://maps.google.com/?q=Dubai+National+Insurance+Building+Office+506+Dubai+UAE',
  },
  email: {
    label: 'Email',
    value: 'contactus@emlakrealestatellc.com',
    href: 'mailto:contactus@emlakrealestatellc.com',
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
