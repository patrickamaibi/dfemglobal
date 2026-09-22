import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { ContactForm } from '../components/common/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteSettings } from '../data/siteSettings';

const HERO_IMAGE = '/hero9.webp';

const FAQS = [
  {
    q: 'How quickly can you issue an urgent ticket?',
    a: 'Often the same day, depending on the airline, the route and seat availability. Contact us with your details and we will tell you what is possible.',
  },
  {
    q: 'Do I need an appointment to visit your office?',
    a: 'Walk-ins are welcome during office hours. Booking ahead means the right person is free to speak with you when you arrive.',
  },
  {
    q: 'What payment options do you offer?',
    a: 'We confirm the payment options for your booking when we send your quote, and every fee is shown before you pay.',
  },
  {
    q: 'Can you help clients outside Abuja or abroad?',
    a: 'Yes. We work with clients across Nigeria and abroad by phone, WhatsApp, video call and email.',
  },
];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2';

export const Contact: React.FC = () => {
  const [heroFailed, setHeroFailed] = useState(false);

  const office = siteSettings.office;
  const phones = siteSettings.phones;
  const emails = siteSettings.email;

  const addressRest = [office?.addressLine2, office?.city, office?.country].filter(Boolean).join(', ');
  const showBookingsEmail = emails?.bookings && emails.bookings !== emails.general;

  const whatsappHref = `https://wa.me/${siteSettings.whatsapp.number}?text=${encodeURIComponent(
    siteSettings.whatsapp.defaultMessage
  )}`;

  return (
    <PageLayout
      title="Contact Us | D'Kingsfems Global Ltd"
      description="Contact D'Kingsfems Global Ltd in Abuja, Nigeria about flights, hotels, study abroad, tours and events, by form, phone, WhatsApp or email."
      canonicalPath="/contact"
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
              Tell us about your trip.
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-xl">
              Send your questions about flights, hotels, study abroad or events, and we will come back
              with clear next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Details and form */}
      <section className="bg-cream-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-serif text-xl font-bold text-navy-900 sm:text-2xl">
                  Contact details
                </h2>

                <dl className="mt-6 divide-y divide-slate-200 text-sm text-slate-700">
                  {(office?.name || office?.addressLine1 || addressRest) && (
                    <div className="flex items-start gap-4 py-4">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-navy-900">Office</dt>
                        <dd className="mt-0.5">
                          {office?.name && <span className="block">{office.name}</span>}
                          {office?.addressLine1 && <span className="block">{office.addressLine1}</span>}
                          {addressRest && <span className="block text-slate-500">{addressRest}</span>}
                        </dd>
                      </div>
                    </div>
                  )}

                  {phones?.primary && (
                    <div className="flex items-start gap-4 py-4">
                      <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-navy-900">Phone</dt>
                        <dd className="mt-0.5">
                          <a
                            href={`tel:${phones.primary}`}
                            className={`block rounded font-medium hover:text-gold-600 ${focusRing}`}
                          >
                            {phones.display || phones.primary}
                          </a>
                          {phones.secondary && (
                            <a
                              href={`tel:${phones.secondary}`}
                              className={`block rounded text-slate-500 hover:text-gold-600 ${focusRing}`}
                            >
                              {phones.secondary}
                            </a>
                          )}
                        </dd>
                      </div>
                    </div>
                  )}

                  {emails?.general && (
                    <div className="flex items-start gap-4 py-4">
                      <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-navy-900">Email</dt>
                        <dd className="mt-0.5">
                          <a
                            href={`mailto:${emails.general}`}
                            className={`block break-all rounded hover:text-gold-600 ${focusRing}`}
                          >
                            {emails.general}
                          </a>
                          {showBookingsEmail && (
                            <a
                              href={`mailto:${emails.bookings}`}
                              className={`block break-all rounded text-slate-500 hover:text-gold-600 ${focusRing}`}
                            >
                              {emails.bookings}
                            </a>
                          )}
                        </dd>
                      </div>
                    </div>
                  )}

                  {office?.hours && (
                    <div className="flex items-start gap-4 py-4">
                      <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-navy-900">Office hours</dt>
                        <dd className="mt-0.5">{office.hours}</dd>
                      </div>
                    </div>
                  )}
                </dl>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-emerald-700 ${focusRing}`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm
                isCompact={false}
                title="Send us an enquiry"
                subtitle="Tell us about your itinerary, destination or study plans."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="max-w-2xl font-serif text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <dl className="mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="text-base font-bold text-navy-900 sm:text-lg">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;