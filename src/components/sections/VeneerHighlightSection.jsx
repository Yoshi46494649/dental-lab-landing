import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { CheckCircle } from 'lucide-react';

const VeneerHighlightSection = ({ exceptionalVeneerImage }) => {
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
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-medium">
              Our Specialty
            </Badge>
            <h2 className="heading-secondary font-heading text-gray-900 mb-6">
              Exceptional <span className="text-gradient">Veneer Craftsmanship</span>
            </h2>
            <p className="text-body-large text-gray-600 mb-8">
              Specialising in premium veneers using the finest materials including 
              Zirconia and e-Max. Our focus on aesthetics, occlusion, and precise fit 
              ensures outstanding results every time.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Superior Aesthetics</h4>
                  <p className="text-gray-600 leading-relaxed">Natural-looking results with perfect colour matching</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Precise Occlusion</h4>
                  <p className="text-gray-600 leading-relaxed">Optimal bite alignment for long-term comfort</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Perfect Fit</h4>
                  <p className="text-gray-600 leading-relaxed">Digital precision for seamless integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={exceptionalVeneerImage} 
              alt="Exceptional veneer craftsmanship showcase" 
              className="rounded-2xl shadow-professional-lg hover-scale w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VeneerHighlightSection;