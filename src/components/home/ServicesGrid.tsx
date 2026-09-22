import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Search } from 'lucide-react';
import { ServiceItem } from '../../types';
import { servicesData } from '../../data/servicesData';

type Layout = 'auto' | 'grid' | 'list';

interface ServicesGridProps {
  /** Show only the first N services (used for the homepage). */
  limit?: number;
  /** Show the category tabs. Defaults to true. */
  showFilters?: boolean;
  /**
   * 'auto' (default): card grid when `limit` is set (homepage), list otherwise (main services page).
   * Pass 'grid' or 'list' to force one.
   */
  layout?: Layout;
  /** Show a search box above the list. Defaults to false. */
  searchable?: boolean;
  /** Optional section heading. Leave out if the page already has one. */
  title?: string;
  /** Optional line under the heading. */
  description?: string;
}

const ALL = 'All';

/**
 * Grid view only: on the "All" view, cards at these positions are shown wide (image beside text).
 * They apply only when the count leaves no gaps in a 3-column grid (4, 7, 10 ...).
 */
const WIDE_POSITIONS = [0, 3];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

/** Image that quietly disappears if it fails, leaving the navy gradient behind it. */
const Photo: React.FC<{ src?: string }> = ({ src }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
    />
  );
};

/* ---------- Grid view (homepage) ---------- */

const ServiceCard: React.FC<{ service: ServiceItem; wide: boolean; showCategory: boolean }> = ({
  service,
  wide,
  showCategory,
}) => {
  const href = `/services/${service.slug}`;
  const summary = service.shortSummary || service.tagline;

  // Wide card: photo on the left, text on the right. The key benefits fill the space
  // beside the photo so the card never looks empty.
  if (wide) {
    const benefits = (service.keyBenefits || []).slice(0, 3);
    return (
      <li className="lg:col-span-2">
        <Link
          to={href}
          className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-gold-400 hover:shadow-lg lg:flex-row ${focusRing}`}
        >
          <span className="relative block aspect-[16/10] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 lg:aspect-auto lg:w-1/2">
            <Photo src={service.heroImage} />
          </span>

          <span className="flex flex-1 flex-col p-6 lg:p-8">
            {showCategory && service.category && (
              <span className="text-sm font-medium text-gold-600">{service.category}</span>
            )}
            <span className="mt-1 block font-serif text-xl font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 sm:text-2xl">
              {service.title}
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-slate-600 sm:text-base">
              {summary}
            </span>

            {benefits.length > 0 && (
              <span className="mt-5 hidden flex-col gap-2.5 border-t border-slate-200 pt-5 lg:flex">
                {benefits.map((benefit) => (
                  <span key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </span>
                ))}
              </span>
            )}

            <span className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
              <span className="hidden lg:inline">View details</span>
              <ArrowUpRight
                className="ml-auto h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </span>
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={href}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-gold-400 hover:shadow-lg ${focusRing}`}
      >
        <span className="relative block aspect-[16/10] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950">
          <Photo src={service.heroImage} />
        </span>

        <span className="flex flex-1 flex-col p-6">
          {showCategory && service.category && (
            <span className="text-sm font-medium text-gold-600">{service.category}</span>
          )}
          <span className="mt-1 block font-serif text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 sm:text-xl">
            {service.title}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-slate-600">{summary}</span>
          <span className="mt-auto flex justify-end pt-5" aria-hidden="true">
            <ArrowUpRight className="h-5 w-5 text-navy-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600 motion-reduce:transform-none" />
          </span>
        </span>
      </Link>
    </li>
  );
};

/* ---------- List view (main services page) ---------- */

/** Fades a row up as it scrolls into view. Skipped for reduced-motion visitors. */
const useReveal = () => {
  const ref = useRef<HTMLLIElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
};

const ServiceRow: React.FC<{ service: ServiceItem; index: number; showCategory: boolean }> = ({
  service,
  index,
  showCategory,
}) => {
  const { ref, shown } = useReveal();

  return (
    <li
      ref={ref}
      style={{ transitionDelay: shown ? `${Math.min(index, 2) * 80}ms` : '0ms' }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <Link
        to={`/services/${service.slug}`}
        className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl motion-reduce:transform-none sm:flex-row ${focusRing}`}
      >
        {/* Image */}
        <span className="relative block aspect-[16/10] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 sm:aspect-auto sm:min-h-[15rem] sm:w-2/5">
          <Photo src={service.heroImage} />
          <span
            className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0"
            aria-hidden="true"
          />
        </span>

        {/* Text */}
        <span className="flex flex-1 items-center gap-6 p-6 sm:p-8 lg:p-10">
          <span className="block min-w-0 flex-1">
            {showCategory && service.category && (
              <span className="flex items-center gap-2 text-sm font-medium text-gold-600">
                <span className="h-px w-6 bg-gold-500" aria-hidden="true" />
                {service.category}
              </span>
            )}
            <span className="mt-2 flex items-start justify-between gap-3">
              <span className="block font-serif text-2xl font-bold leading-snug text-navy-900 transition-colors duration-300 group-hover:text-gold-600 lg:text-3xl">
                {service.title}
              </span>
              <ArrowRight
                className="mt-2 h-5 w-5 flex-shrink-0 text-navy-900 sm:hidden"
                aria-hidden="true"
              />
            </span>
            <span
              className="mt-3 block h-0.5 w-12 bg-gold-500 transition-all duration-500 group-hover:w-24"
              aria-hidden="true"
            />
            <span className="mt-4 block max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
              {service.shortSummary || service.tagline}
            </span>
          </span>

          <span
            className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-navy-900 transition-all duration-300 group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 sm:flex"
            aria-hidden="true"
          >
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </span>
        </span>
      </Link>
    </li>
  );
};

/* ---------- Main component ---------- */

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  limit,
  showFilters = true,
  searchable = false,
  layout = 'auto',
  title,
  description,
}) => {
  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState('');

  const resolved: 'grid' | 'list' = layout === 'auto' ? (limit ? 'grid' : 'list') : layout;
  const isGrid = resolved === 'grid';

  const categories = useMemo(
    () => Array.from(new Set(servicesData.map((s) => s.category).filter(Boolean))),
    []
  );

  const filtersOn = showFilters && categories.length > 1;
  const activeCategory = filtersOn ? active : ALL;

  const q = searchable ? query.trim().toLowerCase() : '';
  const byCategory =
    activeCategory === ALL ? servicesData : servicesData.filter((s) => s.category === activeCategory);
  const filtered = q
    ? byCategory.filter((s) =>
        [s.title, s.shortSummary, s.tagline, s.category].filter(Boolean).join(' ').toLowerCase().includes(q)
      )
    : byCategory;

  const visible = limit ? filtered.slice(0, limit) : filtered;
  const hasMore = Boolean(limit) && filtered.length > visible.length;

  // Wide cards: grid view, "All" tab only, and only when they leave no gaps.
  const useWide = isGrid && activeCategory === ALL && visible.length >= 4 && visible.length % 3 === 1;

  if (servicesData.length === 0) return null;

  return (
    <section className={`py-16 sm:py-24 ${isGrid ? 'bg-white' : 'bg-cream-50'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {(title || description) && (
          <div className="mb-8 max-w-2xl sm:mb-10">
            {title && (
              <h2 className="font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
            )}
          </div>
        )}

        {searchable && (
          <label className="relative mb-6 block max-w-sm">
            <span className="sr-only">Search services</span>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services"
              className={`w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 placeholder:text-slate-400 ${focusRing}`}
            />
          </label>
        )}

        {filtersOn && (
          <div
            className={`-mx-4 flex gap-6 overflow-x-auto border-b border-slate-200 px-4 sm:mx-0 sm:px-0 ${
              'mb-8'
            }`}
            role="group"
            aria-label="Filter services by category"
          >
            {[ALL, ...categories].map((cat) => {
              const count =
                cat === ALL ? servicesData.length : servicesData.filter((s) => s.category === cat).length;
              const isActive = activeCategory === cat;
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

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-cream-50 px-6 py-12 text-center">
            <p className="text-slate-600">
              {q ? 'No services match your search.' : 'There are no services in this category yet.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActive(ALL);
                setQuery('');
              }}
              className={`mt-4 rounded-xl bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800 ${focusRing}`}
            >
              Show all services
            </button>
          </div>
        ) : isGrid ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                wide={useWide && WIDE_POSITIONS.includes(index)}
                showCategory={activeCategory === ALL}
              />
            ))}
          </ul>
        ) : (
          <ul className="space-y-6">
            {visible.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                showCategory={activeCategory === ALL}
              />
            ))}
          </ul>
        )}

        {hasMore && (
          <div className="mt-10">
            <Link
              to="/services"
              className={`inline-flex items-center gap-2 rounded-xl bg-navy-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800 ${focusRing}`}
            >
              <span>View all services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;