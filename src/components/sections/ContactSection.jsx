import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import ContactModal from '../ContactModal';
import { Calendar, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="section-padding bg-white"
      id="contact"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-secondary font-heading text-gray-900 mb-6">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-body-large text-gray-600 mb-10">
              Submit your case details and we'll respond within 24 hours with 
              a detailed quote and timeline.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Fast Turnaround</h4>
                  <p className="text-gray-600 leading-relaxed">Usually 1 week delivery for most cases</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Direct Communication</h4>
                  <p className="text-gray-600 leading-relaxed">Speak directly with our experienced technicians</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Quality Assured</h4>
                  <p className="text-gray-600 leading-relaxed">Every case backed by our 3-year guarantee</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="card-professional text-center">
            <CardContent className="pt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-heading text-gray-900 mb-3">
                  Request Your <span className="text-gradient">Case Quote</span>
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  Get a detailed quote and timeline for your dental restoration case. 
                  We'll respond within 24 hours.
                </p>
              </div>
              
              <ContactModal triggerText="Get My Quote Now">
                <Button className="btn-primary text-lg px-10 py-4">
                  Get My Quote Now
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </ContactModal>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Or call us directly for urgent cases: 
                  <a href="tel:0421791640" className="text-blue-600 hover:underline font-medium ml-1">
                    0421 791 640
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;