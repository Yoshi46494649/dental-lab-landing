import React from 'react';
import { Button } from '../ui/button';
import ContactModal from '../ContactModal';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-sticky">
      <div className="container-max">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-heading text-gradient">
              Mirai Dental Graphics
            </h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
              Services
            </a>
            <a href="#consultation" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
              Consultation
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <ContactModal triggerText="Get Started">
              <Button className="btn-primary hidden md:inline-flex">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ContactModal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;