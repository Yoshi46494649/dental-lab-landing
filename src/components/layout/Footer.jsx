import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading text-gradient-white mb-6">Mirai Dental Graphics</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Premium dental laboratory services serving Brisbane, Sunshine Coast, 
              and Gold Coast with 30 years of expertise.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">Trusted by 20+ clinics</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-heading mb-6">Contact Information</h4>
            <div className="space-y-4">
              <a href="tel:0421791640" className="flex items-center hover:text-blue-300 transition-colors">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">0421 791 640</span>
              </a>
              <a href="mailto:futurity_gc@outlook.jp" className="flex items-center hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">futurity_gc@outlook.jp</span>
              </a>
              <div className="flex items-start hover:text-blue-300 transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>42 Redford St</p>
                  <p>Kingston QLD 4114</p>
                  <p>Australia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-heading mb-6">Service Areas</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Brisbane & Greater Brisbane</li>
              <li>Sunshine Coast</li>
              <li>Gold Coast</li>
              <li>Ipswich & Logan</li>
              <li>Toowoomba</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-400 font-semibold">Mirai Dental Graphics | ABN: 79 716 365 017</p>
            <p className="text-gray-400">&copy; 2025 Mirai Dental Graphics. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Crafting Perfect Smiles with 30 Years of Excellence</p>
          </div>
          
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;