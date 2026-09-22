import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';
import { SEOHead } from '../common/SEOHead';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalPath?: string;
  structuredData?: object;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  canonicalPath,
  structuredData,
}) => {
  const { pathname } = useLocation();

  // Scroll to top upon route transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream-50 text-navy-900 selection:bg-gold-500 selection:text-navy-950">
      {/* Dynamic SEO Meta & Head Tags */}
      <SEOHead
        title={title}
        description={description}
        canonicalPath={canonicalPath || pathname}
        structuredData={structuredData}
      />

      {/* Main Header */}
      <Header />

      {/* Page Content with unified subtle fade & vertical shift transition (Section 06) */}
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {children}
      </motion.main>

      {/* Global Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
