import React from 'react';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const HotelBookings: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'hotel-bookings')!;
  return <ServiceTemplate service={service} />;
};
