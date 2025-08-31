import React from 'react';
import { motion } from 'framer-motion';
import { Award, Microscope } from 'lucide-react';

const CrownBridgeSection = ({ crownBridgeSolutionsImage }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-padding gradient-subtle"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={crownBridgeSolutionsImage} 
              alt="Advanced crown and bridge solutions" 
              className="rounded-2xl shadow-professional-lg hover-scale w-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="heading-secondary font-heading text-gray-900 mb-6">
              Advanced <span className="text-gradient">Crown & Bridge</span> Solutions
            </h2>
            <p className="text-body-large text-gray-600 mb-8">
              Utilising premium materials from trusted manufacturers including Aidite, GC, 
              Ivoclar, and Amann Girbach. Our digital workflow incorporates exocad 
              design software, LabScanner technology, and precision 3D printing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 card-professional hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Premium Materials</h4>
                <p className="text-gray-600">Aidite, GC, Ivoclar, Amann Girbach</p>
              </div>
              <div className="text-center p-6 card-professional hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Microscope className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Digital Workflow</h4>
                <p className="text-gray-600">exocad, LabScanner, 3D Print</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CrownBridgeSection;