import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, MapPin } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { testimonials } from '../data/testimonialsData';
import { siteSettings } from '../data/siteSettings';

type Testimonial = (typeof testimonials)[number];

const HERO_IMAGE = '/hero8.webp';

const ALL = 'All';

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';
const focusRingDark =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';

const initialsOf = (name?: string) =>
  (name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || '?';

/** Round photo, falling back to the person's initials if it is missing or fails to load. */
const Avatar: React.FC<{ name?: string; src?: string }> = ({ name, src }) => {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-12 w-12 flex-shrink-0 rounded-full border-2 border-gold-300 object-cover"
      />
    );
  }
  return (
    <span
      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400"
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  );
};

const Stars: React.FC<{ rating?: number }> = ({ rating }) => {
  const count = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
  if (count === 0) return null;
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <li>
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-gold-400 hover:shadow-xl sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <Quote className="h-8 w-8 flex-shrink-0 text-gold-500/60" aria-hidden="true" />
        <Stars rating={item.rating} />
      </div>

      <blockquote className="mt-4 flex-1">
        {item.serviceCategory && (
          <p className="mb-3 text-sm font-medium text-gold-600">{item.serviceCategory}</p>
        )}
        <p className="text-base leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <Avatar name={item.name} src={item.avatar} />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-navy-900">{item.name}</p>
          {(item.role || item.company) && (
            <p className="truncate text-xs text-slate-500">
              {[item.role, item.company].filter(Boolean).join(' · ')}
            </p>
          )}
          {item.destinationOrRoute && (
            <p className="mt-1 flex items-center gap-1 truncate text-xs font-medium text-gold-700">
              <MapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              <span className="truncate">{item.destinationOrRoute}</span>
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  </li>
);

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState<string>(ALL);
  const [heroFailed, setHeroFailed] = useState(false);

  // Tabs come from the data, so a category never shows up empty.
  const categories = useMemo(
    () => Array.from(new Set(testimonials.map((t) => t.serviceCategory).filter(Boolean))),
    []
  );

  const filtered =
    active === ALL ? testimonials : testimonials.filter((t) => t.serviceCategory === active);

  const feedbackEmail = siteSettings?.email?.general;

  return (
    <PageLayout
      title="Client Testimonials | D'Kingsfems Global Ltd"
      description="Read feedback from travellers, students and organisations that have used D'Kingsfems Global Ltd's travel and study services in Abuja, Nigeria."
      canonicalPath="/testimonials"
    >
      {/* Hero (same treatment as the About and Services pages) */}
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
              What our clients say.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-xl">
              Feedback from the travellers, students and organisations we have worked with.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          {categories.length > 1 && (
            <div
              className="-mx-4 mb-10 flex gap-6 overflow-x-auto border-b border-slate-200 px-4 sm:mx-0 sm:px-0"
              role="group"
              aria-label="Filter reviews by service"
            >
              {[ALL, ...categories].map((cat) => {
                const count =
                  cat === ALL
                    ? testimonials.length
                    : testimonials.filter((t) => t.serviceCategory === cat).length;
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    aria-pressed={isActive}
                    className={`-mb-px flex-shrink-0 whitespace-nowrap border-b-2 py-3 text-sm font-semibold transition-colors ${focusRing} ${
                      isActive
                        ? 'border-gold-500 text-navy-900'
                        : 'border-transparent text-slate-500 hover:text-navy-900'
                    }`}
                  >
                    {cat}
                    <span className="ml-1.5 text-xs font-medium text-slate-400">{count}</span>
                  </button>
                );
              })}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
              <p className="text-slate-600">There are no reviews in this category yet.</p>
              <button
                type="button"
                onClick={() => setActive(ALL)}
                className={`mt-4 rounded-xl bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800 ${focusRing}`}
              >
                Show all reviews
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filtered.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-navy-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
              Travelled with us recently?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              We would like to hear how it went. Send us your feedback, and a photo if you have one.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {feedbackEmail && (
                <a
                  href={`mailto:${feedbackEmail}?subject=${encodeURIComponent('Client feedback')}`}
                  className={`rounded-xl bg-gold-500 px-8 py-4 text-sm font-bold text-navy-950 shadow-lg transition-colors hover:bg-gold-600 ${focusRingDark}`}
                >
                  Send us your feedback
                </a>
              )}
              <Link
                to="/contact"
                className={`rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-gold-400 ${focusRingDark}`}
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

export default Testimonials;