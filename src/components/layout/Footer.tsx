import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';
import { servicesData } from '../../data/servicesData';

// How many services to list in the footer. The full list lives on /services.
const FOOTER_SERVICE_COUNT = 6;

const COMPANY_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const linkStyle =
  'rounded text-sm text-slate-400 transition-colors hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400';

/* Brand icons drawn inline, so no icon-library version can remove them */
const SocialIcon: React.FC<{ name: 'instagram' | 'facebook' | 'linkedin' }> = ({ name }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {name === 'instagram' && (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" />
      </>
    )}
    {name === 'facebook' && (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    )}
    {name === 'linkedin' && (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    )}
  </svg>
);

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteSettings.whatsapp.number}?text=${encodeURIComponent(
    siteSettings.whatsapp.defaultMessage
  )}`;

  const socials = [
    { name: 'Instagram', icon: 'instagram' as const, href: siteSettings.socialLinks.instagram },
    { name: 'Facebook', icon: 'facebook' as const, href: siteSettings.socialLinks.facebook },
    { name: 'LinkedIn', icon: 'linkedin' as const, href: siteSettings.socialLinks.linkedin },
  ].filter((s) => Boolean(s.href));

  const footerServices = servicesData.slice(0, FOOTER_SERVICE_COUNT);

  const socialButton =
    'flex h-9 w-9 items-center justify-center rounded-lg border border-navy-800 bg-navy-900 text-slate-300 transition-colors hover:border-gold-400 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400';

  return (
    <footer className="border-t-2 border-gold-500/30 bg-navy-950 pb-8 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-navy-800 pb-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              aria-label="D'Kingsfems Global Ltd, home"
              className="group inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <img
                src="/dfems5.svg"
                alt="D'Kingsfems Global Ltd"
                className="h-16 w-auto object-contain transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 8px 16px rgba(0,0,0,0.5))',
                }}
              />
            </Link>

            <p className="-mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              International travel, study placements and corporate mobility, handled by one
              dedicated team.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={socialButton}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-800 bg-emerald-950/80 text-emerald-400 transition-colors hover:border-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={linkStyle}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className={linkStyle}>
                    {service.title}
                  </Link>
                </li>
              ))}
              {servicesData.length > FOOTER_SERVICE_COUNT && (
                <li>
                  <Link
                    to="/services"
                    className="rounded text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    View all services
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                <span>
                  {siteSettings.office.addressLine1}, {siteSettings.office.city},{' '}
                  {siteSettings.office.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <a href={`tel:${siteSettings.phones.primary}`} className={linkStyle}>
                  {siteSettings.phones.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <a href={`mailto:${siteSettings.email.general}`} className={`${linkStyle} break-all`}>
                  {siteSettings.email.general}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                <span>{siteSettings.office.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: copyright on the left, build credit on the right */}
        <div className="flex flex-col items-center gap-2 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteSettings.siteName}. All rights reserved.
          </p>
          <p>
            Designed and developed by{' '}
            <a
              href="https://www.discoverytechhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded font-medium text-slate-400 underline decoration-slate-600 underline-offset-2 transition-colors hover:text-gold-300 hover:decoration-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              DiscoveryTech Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};