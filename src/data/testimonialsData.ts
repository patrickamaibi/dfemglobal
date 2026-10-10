import { TestimonialItem } from '../types';

export const testimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Shaibu Ibrahim',
    role: 'Senior Consultant',
    company: 'GloTech',
    serviceCategory: 'Corporate Travel',
    rating: 5,
    quote: "D'Kingsfems Global took complete ownership of our 18-person delegation to London and Geneva. From business class flight tickets to prompt hotel bookings and on-ground transfers, the entire trip ran without a single hitch. Their 24/7 responsiveness is truly gold standard.",
    destinationOrRoute: 'Lagos → London & Geneva',
    avatar: '/test1.webp',
  },
  {
    id: 'test-2',
    name: 'Martins Nweke',
    role: 'Study Abroad Student',
    serviceCategory: 'Study Abroad',
    rating: 5,
    quote: "Navigating my daughter's Canadian university admission and student visa seemed overwhelming until we met the team at D'Kingsfems. They structured her statement of purpose, secured her offer letter in record time, and guided us through biometric and visa approvals seamlessly.",
    destinationOrRoute: 'University of Toronto Placement',
    avatar: '/test2.webp',
  },
  {
    id: 'test-3',
    name: 'Patrick Amaibi',
    role: 'COP29 Delegate',
    company: 'Azerbaijan',
    serviceCategory: 'Corporate Travel',
    rating: 5,
    quote: "Our trip coordination for COP29 in Azerbaijan was handled with exceptional professionalism. D'Kingsfems Global ensured every detail, from flights to logistics, was managed with clarity and care, making the delegate experience smooth and stress-free.",
    destinationOrRoute: 'Azerbaijan COP29 Delegation',
    avatar: '/test3.webp',
  },
];