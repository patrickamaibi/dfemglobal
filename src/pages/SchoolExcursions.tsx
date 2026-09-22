import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const SchoolExcursions: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'school-excursions')!;
  return <ServiceTemplate service={service} />;
};
