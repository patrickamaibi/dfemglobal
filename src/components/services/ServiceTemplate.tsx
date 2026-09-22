import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { PageLayout } from '../layout/PageLayout';
import { ContactForm } from '../common/ContactForm';
import { siteSettings } from '../../data/siteSettings';
import { servicesData } from '../../data/servicesData';

interface ServiceTemplateProps {
  service: ServiceItem;
}

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950';
const focusRingLight =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

/** Image that quietly disappears if it fails to load, so no broken-image icon shows. */
const SafeImg: React.FC<{ src?: string; className?: string }> = ({ src, className }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt=""
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ service }) => {
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);
  const paragraphs = (service.fullDescription || '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const whatsappHref = `https://wa.me/${siteSettings.whatsapp.number}?text=${encodeURIComponent(
    `Hi D'Kingsfems Global, I would like to enquire about ${service.title}.`
  )}`;

  return (
    <PageLayout
      title={service.seoTitle}
      description={service.seoDescription}
      canonicalPath={`/services/${service.slug}`}
    >
      {/* Hero — one clean overlay, one primary action, image does the rest of the talking */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <SafeImg src={service.heroImage} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/35" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs font-medium text-slate-300 sm:text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className={`rounded transition-colors hover:text-gold-300 ${focusRing}`}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              </li>
              <li>
                <Link
                  to="/services"
                  className={`rounded transition-colors hover:text-gold-300 ${focusRing}`}
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              </li>
              <li aria-current="page" className="font-semibold text-gold-400">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {service.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-form"
                className={`inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400 ${focusRing}`}
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 ${focusRing}`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview and key benefits */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                Overview
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                {paragraphs.map((p, i) => (
                  <p key={i} className="whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {service.keyBenefits?.length > 0 && (
              <aside className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-10">
                <h3 className="font-serif text-lg font-bold text-navy-900">Key benefits</h3>
                <ul className="mt-5 space-y-3.5">
                  {service.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* What's included */}
      {service.whatsIncluded?.length > 0 && (
        <section className="border-t border-slate-200 bg-cream-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <h2 className="font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
              What&apos;s included
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {service.whatsIncluded.map((item, idx) => (
                <div key={idx} className="border-t border-slate-300 pt-5">
                  <h3 className="font-serif text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process — a real sequence, so numbered steps carry real meaning here */}
      {service.process?.length > 0 && (
        <section className="bg-navy-950 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <h2 className="font-serif text-2xl font-bold leading-tight text-white sm:text-4xl">
              How it works
            </h2>

            <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
              {service.process.map((step) => (
                <li key={step.step} className="border-t border-white/20 pt-5">
                  <div className="font-serif text-2xl font-bold text-gold-400">{step.step}</div>
                  <h3 className="mt-2 font-serif text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs?.length > 0 && (
        <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <h2 className="font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Frequently asked questions
            </h2>

            <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <dt className="text-base font-bold text-navy-900 sm:text-lg">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Enquiry form */}
      <section id="enquiry-form" className="scroll-mt-24 bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <ContactForm
            preselectedService={service.title}
            isCompact={true}
            title="Start your enquiry"
            subtitle={`Share a few details and our team will follow up with options and pricing for ${service.title.toLowerCase()}.`}
          />
        </div>
      </section>

      {/* Other services */}
      {otherServices.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h2 className="font-serif text-lg font-bold text-navy-900 sm:text-xl">Other services</h2>
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 rounded text-sm font-bold text-navy-900 transition-colors hover:text-gold-600 ${focusRingLight}`}
              >
                <span>View all services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.slug}`}
                  className={`group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-gold-400 hover:bg-cream-50 ${focusRingLight}`}
                >
                  <span className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-navy-900">
                    <SafeImg src={other.heroImage} className="h-full w-full object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-navy-900 transition-colors group-hover:text-gold-600">
                      {other.title}
                    </span>
                    <span className="block truncate text-xs text-slate-500">{other.category}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};