import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HeroSlide } from '../../types';
import { heroSlides } from '../../data/heroSlidesData';

// Time each slide stays on screen (ms). Keep between 6000 and 10000.
const SLIDE_INTERVAL = 8000;
// Length of the dissolve between two slides (seconds)
const DISSOLVE_DURATION = 1.8;

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const slides: HeroSlide[] = heroSlides;
  const activeSlide = slides[currentIndex];

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);

  // Auto-advance; timer restarts on every slide change (auto or manual)
  // and stops while the mouse hovers over the hero.
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(nextSlide, SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, slides.length]);

  // Text block: soft fade in, one element after another
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.5 },
    },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const textItem: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="relative w-full h-[650px] sm:h-[720px] lg:h-[780px] bg-navy-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background crossfade (dissolve).
          The incoming slide fades in on top while the outgoing slide stays
          fully visible underneath until the fade completes, so the two
          images blend without a dark dip in the middle. */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: DISSOLVE_DURATION, ease: 'easeInOut' },
          }}
          exit={{
            opacity: 0.99, // stays visible under the incoming slide, then unmounts
            transition: { duration: DISSOLVE_DURATION },
          }}
        >
          {/* Very slow zoom for a cinematic feel */}
          <motion.img
            src={activeSlide.image}
            alt={activeSlide.title}
            draggable={false}
            className="w-full h-full object-cover object-center"
            initial={{ scale: reduceMotion ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: SLIDE_INTERVAL / 1000 + 2, ease: 'linear' }}
          />

          {/* Deep Navy Gradient Overlays for Luxury Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Golden Flight Orbit Accent in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200,650 C300,550 600,250 1100,200 C1350,180 1550,80 1700,-50"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              variants={textContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-6"
            >
              {/* Slide Headline (Cinzel Serif) */}
              <motion.h1
                variants={textItem}
                className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]"
              >
                {activeSlide.title}
              </motion.h1>

              {/* Subtitle description */}
              <motion.p
                variants={textItem}
                className="text-base sm:text-lg lg:text-xl text-slate-200 font-sans font-normal leading-relaxed max-w-2xl"
              >
                {activeSlide.subtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={textItem}
                className="pt-3 flex flex-wrap items-center gap-4"
              >
                <Link
                  to={activeSlide.primaryCtaLink}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-gold-500/25 hover:shadow-gold-glow flex items-center gap-2 group"
                >
                  <span>{activeSlide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to={activeSlide.secondaryCtaLink}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/25 hover:border-gold-400 transition-all duration-200"
                >
                  {activeSlide.secondaryCtaText}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls: prev / next arrows only */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-gold-400 border border-gold-500/30 backdrop-blur-md transition-colors shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-200 hover:text-gold-400 border border-gold-500/30 backdrop-blur-md transition-colors shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};