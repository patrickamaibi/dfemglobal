import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  GraduationCap,
  Car,
  ShieldCheck,
  Clock,
  Users,
  ClipboardCheck,
  MapPin,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';

/**
 * Optional: add your CAC registration number (for example 'RC 1234567').
 * It is shown under "Registered in Nigeria" only when this is not empty.
 */
const CAC_RC_NUMBER = '';

const STORY_IMAGE = '/about.webp';

const WHAT_WE_DO = [
  {
    icon: Plane,
    title: 'Travel and tours',
    text: 'Flights, hotel bookings and school excursions, arranged around your dates and budget.',
  },
  {
    icon: GraduationCap,
    title: 'Study and career abroad',
    text: 'Guidance on choosing where to study or work abroad, and on preparing your applications and documents.',
  },
  {
    icon: Car,
    title: 'Events and ground support',
    text: 'Conference management and escort cars for arrivals, transfers and events.',
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Honest advice',
    text: 'We only promise what we can legally and practically deliver, and we explain fees, timelines and visa realities before you commit.',
  },
  {
    icon: Clock,
    title: 'Reliable timing',
    text: 'Flights, pickups and application deadlines leave little room for error, so we plan early and confirm details before you travel.',
  },
  {
    icon: Users,
    title: 'Personal attention',
    text: 'You deal with real people who know your plan, and you can reach us by phone, WhatsApp or email.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear follow-through',
    text: 'From your first consultation to your departure, we tell you plainly where things stand and put right anything that needs fixing.',
  },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

export const About: React.FC = () => {
  const [heroFailed, setHeroFailed] = useState(false);
  const [storyFailed, setStoryFailed] = useState(false);

  return (
    <PageLayout
      title="About Us | D'Kingsfems Global Ltd"
      description="D'Kingsfems Global Ltd is a registered travel and study-placement agency in Lagos, Nigeria, helping people with travel, study abroad and event support."
      canonicalPath="/about"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        {!heroFailed && (
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img
              src="/hero7.webp"
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
              Travel and study abroad, planned with care.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-xl">
              D&apos;Kingsfems Global Ltd is a Lagos-based travel and study-placement agency. We help
              individuals, families, students and organisations get where they are going.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
                Who we are
              </h2>
              <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  We help people travel and study abroad without the guesswork. Clients come to us for
                  flights and hotel bookings, for study abroad guidance, and for support with events and
                  ground transport.
                </p>
                <p>
                  A trip or an application involves fees, documents and deadlines that are easy to get
                  wrong. We explain each step in plain terms, tell you what is realistic, and stay in
                  touch until you have arrived.
                </p>
              </div>

              <dl className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                <div className="flex items-start gap-4 py-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-navy-900">Registered in Nigeria</dt>
                    <dd className="mt-0.5 text-sm text-slate-600">
                      D&apos;Kingsfems Global Ltd is a duly registered company
                      {CAC_RC_NUMBER ? ` (${CAC_RC_NUMBER})` : ''}.
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-navy-900">Based in Lagos</dt>
                    <dd className="mt-0.5 text-sm text-slate-600">
                      Our address and directions are on the contact page.
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold text-navy-900">Who we work with</dt>
                    <dd className="mt-0.5 text-sm text-slate-600">
                      Individuals, families, students, schools and organisations.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 shadow-xl">
                {!storyFailed ? (
                  <img
                    src={STORY_IMAGE}
                    alt="D'Kingsfems travel consultants at work"
                    className="h-[320px] w-full object-cover sm:h-[450px]"
                    loading="lazy"
                    onError={() => setStoryFailed(true)}
                  />
                ) : (
                  <div className="h-[320px] w-full sm:h-[450px]" aria-hidden="true" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-slate-200 bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="max-w-2xl font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
            What we do
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {WHAT_WE_DO.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-gold-500 pt-6">
                <Icon className="h-7 w-7 text-navy-900" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="max-w-2xl font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
            How we work
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-navy-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
              Ready to plan your trip?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us where you want to go and when, and we will come back with clear next steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className={`rounded-xl bg-gold-500 px-8 py-4 text-sm font-bold text-navy-950 shadow-lg transition-colors hover:bg-gold-600 ${focusRing}`}
              >
                Plan Your Trip
              </Link>
              <Link
                to="/services"
                className={`rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-gold-400 ${focusRing}`}
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};