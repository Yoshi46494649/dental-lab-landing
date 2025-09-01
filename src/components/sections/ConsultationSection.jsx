import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import ContactModal from '../ContactModal';
import LazyVideo from '../ui/LazyVideo';
import { CheckCircle, Calendar } from 'lucide-react';

const ConsultationSection = ({ shadeConsultationBefore, shadeConsultationAfter }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-gradient-to-br from-purple-50 to-blue-50"
      id="consultation"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 hover:from-purple-200 hover:to-blue-200 px-4 py-2 text-sm font-medium">
              New Service
            </Badge>
            <h2 className="heading-secondary font-heading text-gray-900 mb-6">
              Shape & Shade <span className="text-gradient">Consultation Online</span>
            </h2>
            <p className="text-body-large text-gray-600 mb-8">
              Experience personalised consultations from the comfort of your home or clinic. 
              Our expert technicians provide detailed shape and shade guidance through 
              secure online meetings, ensuring perfect results for your restorations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Personalised Consultations</h4>
                  <p className="text-gray-600 leading-relaxed">One-on-one sessions with experienced dental technicians</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Perfect Colour Matching</h4>
                  <p className="text-gray-600 leading-relaxed">Advanced digital shade analysis and recommendations</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Convenient Scheduling</h4>
                  <p className="text-gray-600 leading-relaxed">Flexible appointment times to suit your schedule</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <ContactModal triggerText="Book Online Consultation">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                  Book Online Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </ContactModal>
            </div>
          </div>
          <div className="space-y-8">
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative group">
                <img 
                  src={shadeConsultationBefore} 
                  alt="Before: Shade consultation with color matching tabs" 
                  className="rounded-lg shadow-lg w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg">
                  Before: Consultation
                </div>
              </div>
              <div className="relative group">
                <img 
                  src={shadeConsultationAfter} 
                  alt="After: Perfect smile with natural-looking veneers" 
                  className="rounded-lg shadow-lg w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg">
                  After: Results
                </div>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div className="text-center">
                    <p className="font-semibold text-sm text-gray-900">Available Now</p>
                    <p className="text-xs text-gray-600">Online Shape & Shade Consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Video */}
            <div className="max-w-3xl mx-auto">
              <LazyVideo 
                videoSrc="/assets/moview.mp4"
                title="Shape & Shade Consultation Process - See How We Perfect Your Smile"
                className="rounded-lg overflow-hidden shadow-xl"
                poster="/assets/video-thumbnail.jpg"
              />
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Watch our consultation process in action
                </p>
                <ContactModal triggerText="Schedule Your Consultation">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-purple-600 border-purple-600 hover:bg-purple-50"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Your Consultation
                  </Button>
                </ContactModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultationSection;