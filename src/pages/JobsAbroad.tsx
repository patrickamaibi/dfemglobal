import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const JobsAbroad: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'jobs-abroad')!;
  return <ServiceTemplate service={service} />;
};
