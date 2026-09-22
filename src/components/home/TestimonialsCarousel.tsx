import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const MAX_DOTS = 8;

/* Avatar with a graceful fallback (initials) if the photo is missing or fails to load */
const Avatar: React.FC<{ src?: string; name: string }> = ({ src, name }) => {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  if (!src || failed) {
    return (
      <div
        aria-hidden="true"
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold-400 bg-navy-900 font-serif text-lg font-bold text-gold-300"
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-gold-400 object-cover shadow-sm"
    />
  );
};

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Nothing to show (empty data file): render nothing instead of crashing.
  if (!testimonials || testimonials.length === 0) return null;

  const total = testimonials.length;
  const activeIndex = Math.min(currentIndex, total - 1);
  const activeReview = testimonials[activeIndex];

  const prev = () => setCurrentIndex(activeIndex === 0 ? total - 1 : activeIndex - 1);
  const next = () => setCurrentIndex(activeIndex === total - 1 ? 0 : activeIndex + 1);

  // Use the real rating instead of a hard-coded "5.0"
  const rating =
    typeof activeReview.rating === 'number'
      ? Math.max(0, Math.min(5, Math.round(activeReview.rating)))
      : 5;

  const authorLine = [activeReview.role, activeReview.company].filter(Boolean).join(' • ');

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) prev();
      else next();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section
      className="relative bg-cream-100 py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id="testimonials-heading"
              className="font-serif text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl"
            >
              Real Experiences from Our Travelers
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              From business class flights to seamless study admissions, read how D'Kingsfems
              delivers peace of mind across the globe.
            </p>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 self-start rounded text-sm font-bold text-navy-900 transition-colors hover:text-gold-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 md:self-auto"
          >
            <span>View All Client Stories</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured testimonial (swipe on touch screens, arrow keys on keyboards) */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden rounded-3xl border border-gold-300/40 bg-white p-8 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 sm:p-12"
        >
          <Quote
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 h-24 w-24 text-gold-500/10"
          />

          <div className="max-w-3xl" aria-live="polite">
            {/* Rating */}
            <div className="mb-6 flex items-center gap-1">
              <div className="flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} aria-hidden="true" className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="ml-2 text-xs font-bold text-slate-500">{rating}.0 out of 5</span>
            </div>

            {/* Quote */}
            <blockquote className="mb-8 font-serif text-lg italic leading-relaxed text-navy-900 sm:text-2xl">
              “{activeReview.quote}”
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
              <Avatar src={activeReview.avatar} name={activeReview.name} />
              <div>
                <p className="text-base font-bold text-navy-900 sm:text-lg">{activeReview.name}</p>
                {authorLine && <p className="text-xs text-slate-500 sm:text-sm">{authorLine}</p>}
                {activeReview.destinationOrRoute && (
                  <span className="mt-1 inline-block rounded-full border border-gold-200 bg-gold-50 px-2.5 py-0.5 text-[11px] font-semibold text-gold-700">
                    {activeReview.destinationOrRoute}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Controls sit under the card, next to what they change */}
        {total > 1 && (
          <div className="mt-6 flex items-center justify-between">
            {total <= MAX_DOTS ? (
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Show testimonial ${i + 1} of ${total}: ${t.name}`}
                    aria-current={i === activeIndex}
                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 motion-reduce:transition-none ${
                      i === activeIndex ? 'w-8 bg-gold-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm font-semibold text-slate-500">
                {activeIndex + 1} / {total}
              </p>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-slate-200 bg-white p-2.5 text-navy-900 shadow-sm transition-colors hover:border-gold-400 hover:bg-gold-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-slate-200 bg-white p-2.5 text-navy-900 shadow-sm transition-colors hover:border-gold-400 hover:bg-gold-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};