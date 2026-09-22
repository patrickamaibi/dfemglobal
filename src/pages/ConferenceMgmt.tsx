import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const ConferenceMgmt: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'conference-management')!;
  return <ServiceTemplate service={service} />;
};
