import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { ServicesGrid } from '../components/home/ServicesGrid';

const HERO_IMAGE = '/hero6.webp';

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

export const ServicesIndex: React.FC = () => {
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <PageLayout
      title="Our Services | D'Kingsfems Global Ltd"
      description="Flights, hotels, tours, study abroad, jobs abroad advice, airport transfers, escort cars, conferences and school excursions from D'Kingsfems Global Ltd in Abuja, Nigeria."
      canonicalPath="/services"
    >
      {/* Hero (same treatment as the About page) */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        {!heroFailed && (
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              src={HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover opacity-30"
              onError={() => setHeroFailed(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
          </div>
        )}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything for your trip, in one place.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-xl">
              From flights and hotels to study abroad, airport transfers and events, choose a service to
              see what is included and how it works.
            </p>
          </div>
        </div>
      </section>

      {/* Services list: image on the left, short description on the right */}
      <ServicesGrid layout="list" searchable />

      {/* Closing call to action */}
      <section className="bg-navy-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us what you are planning and we will point you to the right one.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className={`inline-block rounded-xl bg-gold-500 px-8 py-4 text-sm font-bold text-navy-950 shadow-lg transition-colors hover:bg-gold-600 ${focusRing}`}
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesIndex;