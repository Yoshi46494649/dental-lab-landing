import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Microscope, Shield, Zap, Clock } from 'lucide-react';

const ServicesSection = () => {
  // Mobile-optimized animation settings
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const animationDuration = isMobile ? 0.3 : 0.6;
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
      transition={{ duration: animationDuration, ease: "easeOut" }}
      className="section-padding bg-gray-50"
      id="services"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-secondary font-heading text-gray-900 mb-6">
            Our <span className="text-gradient">Specialised Services</span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            Premium quality restorations with transparent pricing through your dental practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Veneers */}
          <Card className="card-professional hover-lift text-center">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                <Microscope className="h-10 w-10 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-heading mb-2">Veneers</CardTitle>
              <CardDescription className="text-base text-gray-600">Premium aesthetic solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Materials Available:</p>
                  <ul className="space-y-1">
                    <li>• Zirconia Veneers</li>
                    <li>• e-Max Veneers</li>
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Usually 1 week delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crowns */}
          <Card className="card-professional hover-lift text-center">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-heading mb-2">Crowns & Bridges</CardTitle>
              <CardDescription className="text-base text-gray-600">Durable restoration solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Materials Available:</p>
                  <ul className="space-y-1">
                    <li>• Zirconia Crowns</li>
                    <li>• e-Max Crowns</li>
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Usually 1 week delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implants */}
          <Card className="card-professional hover-lift text-center">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-heading mb-2">Implant Restorations</CardTitle>
              <CardDescription className="text-base text-gray-600">Precision implant solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Solutions Available:</p>
                  <ul className="space-y-1">
                    <li>• Single Implant Crowns</li>
                    <li>• Implant Bridges</li>
                    <li>• All-on-4 Solutions</li>
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Usually 1 week delivery
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment System Explanation */}
        <div className="mt-16 bg-white rounded-2xl p-10 shadow-professional">
          <div className="text-center">
            <h3 className="heading-tertiary font-heading text-gray-900 mb-6">
              Simple <span className="text-gradient">Payment Process</span>
            </h3>
            <p className="text-body text-gray-600 mb-10 max-w-2xl mx-auto">
              We work directly with your dental practice for seamless billing
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Visit Your Dentist</h4>
                <p className="text-gray-600">
                  Receive treatment and consultation at your dental practice
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">Practice Handles Payment</h4>
                <p className="text-gray-600">
                  Your dentist includes our laboratory fees in their treatment cost
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">We Deliver Excellence</h4>
                <p className="text-gray-600">
                  High-quality restorations delivered directly to your practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;