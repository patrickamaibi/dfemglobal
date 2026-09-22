import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const FlightTickets: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'flight-tickets')!;
  return <ServiceTemplate service={service} />;
};
