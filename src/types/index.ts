export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  category: 'Flights' | 'Corporate' | 'Education' | 'Leisure' | 'Security & Logistics';
  heroImage: string;
  shortSummary: string;
  fullDescription: string;
  keyBenefits: string[];
  whatsIncluded: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  ctaText: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  serviceCategory: string;
  rating: number;
  quote: string;
  destinationOrRoute?: string;
  avatar?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  domain: string;
  phones: {
    primary: string;
    secondary?: string;
    display: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  email: {
    general: string;
    bookings: string;
  };
  office: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    hours: string;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceOfInterest: string;
  travelDate?: string;
  passengersOrDelegates?: string;
  message: string;
  companyName?: string;
  _honeypot?: string;
}
