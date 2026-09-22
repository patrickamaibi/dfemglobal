import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { PlaneTakeoff, Home, Compass, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <PageLayout
      title="Page Not Found (404) | D'Kingsfems Global Ltd"
      description="The travel page or flight route you requested could not be found. Return to D'Kingsfems Global Ltd homepage."
      canonicalPath="/404"
    >
      <section className="py-24 sm:py-32 bg-cream-50 flex items-center justify-center min-h-[70vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">
          
          {/* Airplane Off-course Graphic */}
          <div className="w-24 h-24 rounded-full bg-navy-900 border-2 border-gold-400 flex items-center justify-center text-gold-400 mx-auto mb-8 shadow-xl">
            <PlaneTakeoff className="w-12 h-12 rotate-45" />
          </div>

          <span className="text-sm font-mono font-bold tracking-widest text-gold-700 uppercase bg-gold-100 px-3.5 py-1 rounded-full border border-gold-300">
            Error 404 • Flight Diverted
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight mt-4 mb-4">
            Destination Not Found
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            The route or page you are looking for has moved or does not exist. Let us navigate you back to your intended departure point.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-950 text-gold-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-gold-600" />
              <span>Browse All Services</span>
            </Link>
          </div>

          {/* Quick links to top pillars */}
          <div className="pt-8 border-t border-slate-200 text-xs text-slate-500">
            <span className="font-semibold text-navy-900 block mb-3 uppercase tracking-wider">
              Popular Destinations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services/flight-tickets" className="hover:text-gold-600 underline">Flight Tickets</Link>
              <span>•</span>
              <Link to="/services/study-abroad" className="hover:text-gold-600 underline">Study Abroad</Link>
              <span>•</span>
              <Link to="/services/corporate-travel" className="hover:text-gold-600 underline">Corporate Travel</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-gold-600 underline">Contact Desk</Link>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};
