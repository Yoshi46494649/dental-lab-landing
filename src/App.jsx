import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout components (loaded immediately)
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy load main sections for better performance
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'));
const ConsultationSection = lazy(() => import('./components/sections/ConsultationSection'));
const VeneerHighlightSection = lazy(() => import('./components/sections/VeneerHighlightSection'));
const CrownBridgeSection = lazy(() => import('./components/sections/CrownBridgeSection'));
const ImplantSection = lazy(() => import('./components/sections/ImplantSection'));
const WhyChooseUsSection = lazy(() => import('./components/sections/WhyChooseUsSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

// Lazy load page components
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./components/TermsConditions'));
const Disclaimer = lazy(() => import('./components/Disclaimer'));

// Import images (these will be optimized by Vite)
import heroImage from '/assets/aY5m5QybSX05.jpg';
import shadeConsultationBefore from "/assets/shade-consultation-before.jpg";
import shadeConsultationAfter from "/assets/shade-consultation-after.jpg";
import exceptionalVeneerImage from "/assets/exceptional-veneer-craftsmanship.png";
import crownBridgeSolutionsImage from "/assets/crown-bridge-solutions.png";
import implantRestoration1 from "/assets/implant-restoration-1.png";
import implantRestoration2 from "/assets/implant-restoration-2.png";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// HomePage component
function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection heroImage={heroImage} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ConsultationSection 
          shadeConsultationBefore={shadeConsultationBefore}
          shadeConsultationAfter={shadeConsultationAfter}
        />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <VeneerHighlightSection exceptionalVeneerImage={exceptionalVeneerImage} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CrownBridgeSection crownBridgeSolutionsImage={crownBridgeSolutionsImage} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ImplantSection 
          implantRestoration1={implantRestoration1}
          implantRestoration2={implantRestoration2}
        />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <WhyChooseUsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Disclaimer />
      </Suspense>

      <Footer />
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={
          <Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<LoadingSpinner />}>
            <TermsConditions />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;