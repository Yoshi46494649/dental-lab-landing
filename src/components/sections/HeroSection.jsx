import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import ContactModal from '../ContactModal';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const HeroSection = ({ heroImage }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative gradient-subtle pt-12 md:pt-16 pb-20 md:pb-24 lg:pb-32 mt-14"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Mobile version - shorter text */}
            <Badge className="mb-0 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-medium block md:hidden">
              Young Dentists | Brisbane・Gold Coast
            </Badge>
            {/* Desktop version - full text */}
            <Badge className="mb-0 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-medium hidden md:block">
              For Young Dentists & Patients | Brisbane, Sunshine Coast & Gold Coast
            </Badge>
            <h1 className="heading-primary font-heading text-gray-900 mb-4 md:mb-6">
              Creating <span className="text-gradient">Smile Design</span> Together
            </h1>
            <p className="text-body-large text-gray-600 mb-8 md:mb-10 leading-relaxed">
              Your trusted partner for exceptional veneers, crowns, and implants. 
              Experience our commitment to quality, speed, and digital precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <ContactModal triggerText="Request a Case">
                <Button className="btn-primary inline-flex items-center justify-center">
                  Request a Case
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactModal>
              <a href="tel:0421791640">
                <Button className="btn-secondary inline-flex items-center justify-center w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0421 791 640
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Modern dental clinic interior" 
              className="rounded-2xl shadow-professional-lg hover-scale"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-professional">
              <div className="flex items-center">
                <CheckCircle className="h-10 w-10 text-green-500 mr-4" />
                <div>
                  <p className="font-bold text-lg">200+ Cases Completed</p>
                  <p className="text-gray-600">20+ Partner Clinics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;