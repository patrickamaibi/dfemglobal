import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, Globe2, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';

export const TrustSection: React.FC = () => {
  const stats = [
    { label: 'Airline & Visa Booking Accuracy', value: '99.8%' },
    { label: 'Partner Universities & Colleges', value: '50+' },
    { label: 'Satisfied Travelers & Students', value: '10,000+' },
    { label: 'Human Concierge Availability', value: '24/7/365' },
  ];

  const valueProps = [
    {
      icon: Award,
      title: 'Accredited Excellence',
      description: 'Fully certified travel agency operating in strict compliance with IATA, NCAA, and global aviation regulatory frameworks.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Surcharges',
      description: 'Clear, transparent upfront pricing on all flight fares, visa consultations, hotel stays, and escort logistics.',
    },
    {
      icon: Clock,
      title: 'Rapid Turnaround',
      description: 'Same-day urgent flight ticketing, immediate flight delay resolution, and proactive travel management.',
    },
    {
      icon: Globe2,
      title: 'End-to-End Care',
      description: 'From your first WhatsApp enquiry to touchdown and post-trip check-ins, our specialists oversee every step.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trust & Reputation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              A Platform Built to be Found, Trusted, and Booked From.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Travel should never be left to luck. Whether relocating your child for degree studies in the United Kingdom or moving an executive delegation with armored escort across Nigeria, D'Kingsfems Global delivers uncompromising professionalism.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Our Story & Mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-gold-400 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Visit Headquarters
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Key Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-navy-900/80 border border-gold-500/20 backdrop-blur-md mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800 hover:border-gold-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
