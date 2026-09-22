import { createClient } from '@sanity/client';
import { servicesData } from '../data/servicesData';
import { heroSlides } from '../data/heroSlidesData';
import { testimonials } from '../data/testimonialsData';
import { siteSettings } from '../data/siteSettings';
import { ServiceItem, HeroSlide, TestimonialItem, SiteSettings } from '../types';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-03-01';

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

/**
 * Fetch all services either from Sanity CMS or fallback local dataset
 */
export async function getServices(): Promise<ServiceItem[]> {
  if (!sanityClient) {
    return servicesData;
  }
  try {
    const query = `*[_type == "service"] | order(order asc) {
      id,
      slug,
      title,
      tagline,
      iconName,
      category,
      "heroImage": heroImage.asset->url,
      shortSummary,
      fullDescription,
      keyBenefits,
      whatsIncluded,
      process,
      faqs,
      seoTitle,
      seoDescription,
      ctaText
    }`;
    const result = await sanityClient.fetch(query);
    return result && result.length > 0 ? result : servicesData;
  } catch (error) {
    console.warn("Error fetching services from Sanity, using fallback data:", error);
    return servicesData;
  }
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
  const allServices = await getServices();
  return allServices.find((s) => s.slug === slug);
}

/**
 * Fetch hero slides
 */
export async function getHeroSlides(): Promise<HeroSlide[]> {
  if (!sanityClient) {
    return heroSlides;
  }
  try {
    const query = `*[_type == "heroSlide"] | order(order asc) {
      id,
      title,
      subtitle,
      tagline,
      "image": image.asset->url,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      badge
    }`;
    const result = await sanityClient.fetch(query);
    return result && result.length > 0 ? result : heroSlides;
  } catch (error) {
    console.warn("Error fetching hero slides from Sanity, using fallback data:", error);
    return heroSlides;
  }
}

/**
 * Fetch testimonials
 */
export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!sanityClient) {
    return testimonials;
  }
  try {
    const query = `*[_type == "testimonial"] | order(_createdAt desc) {
      id,
      name,
      role,
      company,
      serviceCategory,
      rating,
      quote,
      destinationOrRoute,
      "avatar": avatar.asset->url
    }`;
    const result = await sanityClient.fetch(query);
    return result && result.length > 0 ? result : testimonials;
  } catch (error) {
    console.warn("Error fetching testimonials from Sanity, using fallback data:", error);
    return testimonials;
  }
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityClient) {
    return siteSettings;
  }
  try {
    const query = `*[_type == "siteSettings"][0]`;
    const result = await sanityClient.fetch(query);
    return result || siteSettings;
  } catch (error) {
    console.warn("Error fetching site settings from Sanity, using fallback data:", error);
    return siteSettings;
  }
}
