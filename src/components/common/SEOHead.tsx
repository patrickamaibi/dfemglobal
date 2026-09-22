import React, { useEffect } from 'react';
import { siteSettings } from '../../data/siteSettings';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  image = '/assets/hero-bg.png',
  type = 'website',
  structuredData,
}) => {
  const fullTitle = title 
    ? `${title} | ${siteSettings.siteName}` 
    : `${siteSettings.siteName} | ${siteSettings.tagline}`;
  const fullDescription = description || "Premier travel agency in Lagos, Nigeria offering international & domestic flights, study abroad admissions, corporate travel, luxury tours, and VIP escort security.";
  const canonicalUrl = `https://${siteSettings.domain}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', fullDescription);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', fullDescription, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', type, true);
    setMeta('og:image', image, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDescription);
    setMeta('twitter:image', image);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Inject custom JSON-LD if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [fullTitle, fullDescription, canonicalUrl, image, type, structuredData]);

  return null;
};
