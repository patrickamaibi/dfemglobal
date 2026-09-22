import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';

export const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  // Determine current page context to craft contextual greeting
  const getContextMessage = () => {
    const path = location.pathname;
    if (path.includes('flight-tickets')) return "Hi D'Kingsfems Global, I'd like to enquire about Flight Tickets.";
    if (path.includes('corporate-travel')) return "Hi D'Kingsfems Global, I'd like to enquire about Corporate Travel Management.";
    if (path.includes('airport-transfers')) return "Hi D'Kingsfems Global, I'd like to enquire about Airport Transfers.";
    if (path.includes('tours-cruises')) return "Hi D'Kingsfems Global, I'd like to enquire about Tours & Cruise Packages.";
    if (path.includes('hotel-bookings')) return "Hi D'Kingsfems Global, I'd like to enquire about Hotel Bookings.";
    if (path.includes('study-abroad')) return "Hi D'Kingsfems Global, I'd like to enquire about Study Abroad Admissions.";
    if (path.includes('jobs-abroad')) return "Hi D'Kingsfems Global, I'd like to enquire about Jobs Abroad Advisory.";
    if (path.includes('escort-cars')) return "Hi D'Kingsfems Global, I'd like to enquire about Escort Cars and VIP Convoy.";
    if (path.includes('conference-management')) return "Hi D'Kingsfems Global, I'd like to enquire about Conference Management.";
    if (path.includes('school-excursions')) return "Hi D'Kingsfems Global, I'd like to enquire about School Excursions.";
    return siteSettings.whatsapp.defaultMessage;
  };

  const handleOpenWhatsApp = (text?: string) => {
    const message = encodeURIComponent(text || getContextMessage());
    const url = `https://wa.me/${siteSettings.whatsapp.number}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 rounded-2xl bg-white p-4 shadow-2xl border border-gold-200 text-navy-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-900">D'Kingsfems Travel Desk</h4>
                  <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online • Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message bubble */}
            <div className="my-3 bg-slate-50 p-3 rounded-xl rounded-tl-none border border-slate-100 text-xs text-slate-700 leading-relaxed">
              Hello! 👋 Welcome to D'Kingsfems Global Ltd. How can our travel specialists assist your trip today?
            </div>

            {/* Starter buttons */}
            <div className="space-y-1.5 mb-3">
              <button
                onClick={() => handleOpenWhatsApp()}
                className="w-full text-left text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium px-3 py-2 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>💬 Quick Enquiry</span>
                <Send className="w-3 h-3 text-emerald-600" />
              </button>
            </div>

            {/* Input & Send button */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOpenWhatsApp(customText || undefined);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg shadow-sm transition-colors"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated ping ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75" />
          
          <MessageCircle className="w-7 h-7 relative z-10" />
        </button>

        {/* Hover Tooltip (when closed) */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-navy-900 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gold-500/20">
            Chat on WhatsApp
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-navy-900" />
          </div>
        )}
      </div>
    </div>
  );
};
