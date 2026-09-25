import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappUrl = `https://wa.me/${siteSettings.whatsapp.number}?text=${encodeURIComponent(
    siteSettings.whatsapp.defaultMessage
  )}`;

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu with the Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  // Track scroll position for sticky background styling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll(); // correct state if the page loads already scrolled (refresh, back button)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main navigation bar */}
      <nav
        aria-label="Main"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'border-b border-gold-500/20 bg-navy-900/95 py-3 shadow-xl backdrop-blur-md'
            : 'border-b border-navy-800 bg-navy-900 py-4 sm:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Brand */}
          <Link
            to="/"
            aria-label="D'Kingsfems Global Ltd, home"
            className={`group flex items-center rounded-lg ${focusRing}`}
          >
            <img
              src="/dfems5.svg"
              alt="D'Kingsfems Global Ltd"
              className="h-20 w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:drop-shadow-[0_14px_24px_rgba(0,0,0,0.55)] sm:h-20"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative rounded py-1 text-sm font-semibold tracking-wide transition-colors ${focusRing} ${
                    isActive ? 'text-gold-400' : 'text-slate-200 hover:text-gold-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gold-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Header action: goes to the enquiry page */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to="/contact"
              className={`rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-md transition-colors hover:bg-gold-600 ${focusRing}`}
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`rounded-lg p-2 text-slate-200 transition-colors hover:bg-navy-800 hover:text-white lg:hidden ${focusRing}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="max-h-[75vh] space-y-4 overflow-y-auto border-t border-navy-800 bg-navy-950/95 px-6 py-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'border-l-4 border-gold-400 bg-navy-800/80 font-bold text-gold-400'
                        : 'text-slate-200 hover:bg-navy-900 hover:text-gold-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="space-y-3 border-t border-navy-800 pt-4">
              <a
                href={`tel:${siteSettings.phones.primary}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-navy-700 bg-navy-800 px-4 py-3 text-sm font-semibold text-slate-100"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                <span>Call {siteSettings.phones.display}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};