import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { HeroSlider } from '../components/home/HeroSlider';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { ContactForm } from '../components/common/ContactForm';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Content (edit copy, links and images here without touching the layout)     */
/* -------------------------------------------------------------------------- */

interface Destination {
  name: string;
  region: string;
  blurb: string;
  image: string;
}

// First item is displayed large. Images are served from /public.
const DESTINATIONS: Destination[] = [
  {
    name: 'Dubai',
    region: 'United Arab Emirates',
    blurb: 'Flights, hotels, city tours and desert experiences arranged as one seamless trip.',
    image: '/home1.webp',
  },
  {
    name: 'London',
    region: 'United Kingdom',
    blurb: 'Business, family and leisure trips to one of the most-visited cities in the world.',
    image: '/home2.webp',
  },
  {
    name: 'Toronto',
    region: 'Canada',
    blurb: 'Tourist, family and student trips, from the flight to the first night.',
    image: '/home3.webp',
  },
  {
    name: 'Istanbul',
    region: 'Türkiye',
    blurb: 'Culture, shopping and medical-visit itineraries at fair prices.',
    image: '/home4.webp',
  },
  {
    name: 'Paris',
    region: 'France',
    blurb: 'Leisure breaks, honeymoons and group tours across Europe.',
    image: '/home5.webp',
  },
];

const STUDY_POINTS = [
  'School and course selection matched to your grades and budget',
  'Applications, documents and visa guidance',
  'Flights, pre-departure briefing and arrival support',
];

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                      */
/* -------------------------------------------------------------------------- */

const CoverImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = '',
}) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    onError={(e) => {
      // Falls back to the navy gradient behind the image if a photo fails to load.
      e.currentTarget.style.display = 'none';
    }}
    className={`absolute inset-0 h-full w-full object-cover ${className}`}
  />
);

const DestinationCard: React.FC<{ destination: Destination; featured?: boolean }> = ({
  destination,
  featured = false,
}) => (
  <Link
    to="/contact"
    aria-label={`Enquire about travel to ${destination.name}`}
    className={`group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 ${
      featured ? 'min-h-[380px] lg:col-span-2 lg:row-span-2' : 'min-h-[240px]'
    }`}
  >
    <CoverImage
      src={destination.image}
      alt={`${destination.name}, ${destination.region}`}
      className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/25 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
      <p className="text-xs font-semibold text-gold-300">{destination.region}</p>
      <h3
        className={`mt-1 font-serif font-bold text-white ${
          featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
        }`}
      >
        {destination.name}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed text-white/85 ${
          featured ? 'max-w-md' : 'max-w-xs'
        }`}
      >
        {destination.blurb}
      </p>
    </div>

    <span
      aria-hidden="true"
      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors group-hover:bg-gold-300 group-hover:text-navy-900"
    >
      <ArrowRight className="h-4 w-4 -rotate-45" />
    </span>
  </Link>
);

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/*  Order: hero, services teaser, destinations, study abroad, testimonials,    */
/*  enquiry. The full services catalogue lives on /services.                   */
/* -------------------------------------------------------------------------- */

export const Home: React.FC = () => {
  const [featured, ...others] = DESTINATIONS;

  return (
    <PageLayout
      title="Premier International Travel, Tours & Study Placements"
      description="D'Kingsfems Global Ltd is your premier travel platform for international flight tickets, corporate travel management, study abroad admissions, bespoke tours, and VIP escort security in Abuja, Nigeria."
      canonicalPath="/"
    >
        {/* 1. Hero */}
        <HeroSlider />

        {/* 2. Services teaser: first four services only, then a link to the dedicated /services page */}
        <ServicesGrid
          limit={4}
          showFilters={false}
          title="What we handle"
          description="Flights, corporate travel, study placement, tours and logistics — ten services in all. Here are a few; see the full list for everything we offer."
        />

        {/* 3. Destinations: one large feature card and four supporting cards */}
        <section className="bg-white py-16 sm:py-24" aria-labelledby="destinations-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="destinations-heading"
                  className="font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl"
                >
                  Popular destinations
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  City breaks, family visits and business trips, planned around your dates and
                  budget.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 self-start rounded text-sm font-bold text-navy-900 transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 md:self-auto"
              >
                <span>Ask for a custom itinerary</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
              <DestinationCard destination={featured} featured />
              {others.map((d) => (
                <DestinationCard key={d.name} destination={d} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Study abroad */}
        <section className="bg-navy-900 py-16 sm:py-24" aria-labelledby="study-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-navy-900 sm:min-h-[420px]">
                <CoverImage
                  src="/home6.webp"
                  alt="Graduates celebrating at a university ceremony"
                />
              </div>

              {/* Content */}
              <div>
                <h2
                  id="study-heading"
                  className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Study abroad, guided from application to arrival.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Our admissions advisers work with you and your family at every stage.
                </p>

                <ul className="mt-8 space-y-4">
                  {STUDY_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-7 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                  >
                    <span>Book a study consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Testimonials & client stories */}
        <TestimonialsCarousel />

        {/* 6. Homepage contact / inquiry section: one heading, one line, one link, then the form */}
        <section className="relative bg-cream-50 py-16 sm:py-24" aria-labelledby="enquiry-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Left column: kept deliberately light */}
              <div className="lg:col-span-5">
                <h2
                  id="enquiry-heading"
                  className="font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl"
                >
                  Let's make your next destination a reality.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
                  Flights, tours, study placements or corporate travel. Tell us what you need.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded text-sm font-bold text-navy-900 transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2"
                >
                  <span>Prefer to visit? Office address & directions</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right column: reused contact form */}
              <div className="lg:col-span-7">
                <ContactForm
                  title="Plan Your Trip or Placement"
                  subtitle="Share a few details and a specialist will take it from there."
                />
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
  );
};