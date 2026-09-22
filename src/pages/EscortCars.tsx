import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const EscortCars: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'escort-cars')!;
  return <ServiceTemplate service={service} />;
};
