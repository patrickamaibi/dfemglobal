import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const ToursCruises: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'tours-cruises')!;
  return <ServiceTemplate service={service} />;
};
