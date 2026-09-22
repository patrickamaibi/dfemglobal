import React from 'react';
import { Navigate } from 'react-router-dom';
import { ServiceTemplate } from '../components/services/ServiceTemplate';
import { servicesData } from '../data/servicesData';

export const CorporateTravel: React.FC = () => {
  const service = servicesData.find((s) => s.slug === 'corporate-travel');

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceTemplate service={service} />;
};