import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Shield, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-padding gradient-subtle"
      id="about"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-secondary font-heading text-gray-900 mb-6">
            Why Choose <span className="text-gradient">Mirai Dental Graphics?</span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            Three decades of excellence, innovation, and reliability
          </p>
        </div>
        
        {/* Testimonial */}
        <div className="mb-16 card-professional p-10 text-center">
          <div>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-body-large italic text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
              "It is always a pleasure to collaborate with my friend and talented Ceramist, Hiro Takada.

              Hiro is a great exponent of the use of monolithic eMax, creating quite outstanding restorations with this predictable and inspiring material.

              He continues to stay up to date with the latest material improvements, and most recently, he is venturing into the use of ultra-thin zirconia veneers — a field that complements the digital workflow and is likely to grow in the coming years."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-gray-900">Dr. Michael Mandikos</p>
                <p className="text-sm text-gray-600">BDSc (Hons),MS(New York),Cert Pros, FRACDS, FPFA,</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Proven Track Record</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>200+</strong> successful cases completed across <strong>20+</strong> partner dental clinics 
              throughout Queensland
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quality Guarantee</h3>
            <p className="text-gray-600 leading-relaxed">
              3-year remake policy ensuring your confidence in every restoration 
              we deliver
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
              <Award className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-4">Expert Craftsmanship</h3>
            <p className="text-gray-600 leading-relaxed">
              30 years of experience with qualifications from Osaka Dental 
              Technology College
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;