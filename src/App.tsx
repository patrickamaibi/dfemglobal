import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageLoader } from './components/common/PageLoader';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesIndex } from './pages/ServicesIndex';
import { FlightTickets } from './pages/FlightTickets';
import { CorporateTravel } from './pages/CorporateTravel';
import { AirportTransfers } from './pages/AirportTransfers';
import { ToursCruises } from './pages/ToursCruises';
import { HotelBookings } from './pages/HotelBookings';
import { StudyAbroad } from './pages/StudyAbroad';
import { JobsAbroad } from './pages/JobsAbroad';
import { EscortCars } from './pages/EscortCars';
import { ConferenceMgmt } from './pages/ConferenceMgmt';
import { SchoolExcursions } from './pages/SchoolExcursions';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  const location = useLocation();

  // Belt-and-suspenders: PageLoader below also removes #boot-splash on mount, but if it
  // ever fails to mount for any reason, this guarantees the static splash doesn't get
  // stuck on screen for its full 6-second safety-net timeout.
  useEffect(() => {
    document.getElementById('boot-splash')?.remove();
  }, []);

  return (
    <>
      {/* Rendered once here (not per-page) so the intro plays on any route's first load,
          including a hard refresh — not just on Home. */}
      <PageLoader />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Core 15 Pages as detailed in Section 03 of brief */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/flight-tickets" element={<FlightTickets />} />
          <Route path="/services/corporate-travel" element={<CorporateTravel />} />
          <Route path="/services/airport-transfers" element={<AirportTransfers />} />
          <Route path="/services/tours-cruises" element={<ToursCruises />} />
          <Route path="/services/hotel-bookings" element={<HotelBookings />} />
          <Route path="/services/study-abroad" element={<StudyAbroad />} />
          <Route path="/services/jobs-abroad" element={<JobsAbroad />} />
          <Route path="/services/escort-cars" element={<EscortCars />} />
          <Route path="/services/conference-management" element={<ConferenceMgmt />} />
          <Route path="/services/school-excursions" element={<SchoolExcursions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;