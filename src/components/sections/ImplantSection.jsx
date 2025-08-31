import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ImplantSection = ({ implantRestoration1, implantRestoration2 }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-secondary font-heading text-gray-900 mb-6">
              Precision <span className="text-gradient">Implant Restorations</span>
            </h2>
            <p className="text-body-large text-gray-600 mb-8">
              Combining aesthetic excellence with functional precision for implant 
              restorations. Our premium approach ensures both beautiful results and 
              long-term reliability for your most demanding cases.
            </p>
            <div className="space-y-5">
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-4" />
                <span className="text-lg text-gray-700">Aesthetic and functional excellence</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-4" />
                <span className="text-lg text-gray-700">Premium materials and techniques</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-4" />
                <span className="text-lg text-gray-700">Precision-focused approach</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-4" />
                <span className="text-lg text-gray-700">Reliability and trust</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img 
              src={implantRestoration1} 
              alt="Precision dental implant restoration - detailed view" 
              className="rounded-2xl shadow-professional hover-lift w-full h-64 object-cover"
              loading="lazy"
            />
            <img 
              src={implantRestoration2} 
              alt="Precision dental implant restoration - final result" 
              className="rounded-2xl shadow-professional hover-lift w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImplantSection;