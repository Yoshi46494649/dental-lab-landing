import React from 'react';
import { AlertCircle, Users, Stethoscope } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Disclaimer() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <Card className="card-professional border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
          <CardContent className="pt-8 pb-8">
            <div className="flex items-center justify-center mb-6">
              <AlertCircle className="h-8 w-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-heading text-gray-900">Important Notice</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Services Only</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Mirai Dental Graphics is a dental laboratory</strong> providing technical 
                    fabrication services exclusively to registered dental practitioners and dental practices. 
                    We work in partnership with dentists to create custom restorations based on their 
                    clinical specifications and treatment plans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <Stethoscope className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Direct Patient Treatment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We <strong>do not provide direct clinical treatment to patients</strong>. All dental 
                    restorations and prosthetic devices are supplied through licensed dental professionals 
                    who maintain the clinical relationship with patients. If you are a patient seeking 
                    dental treatment, please consult with a registered dentist in your area.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-center text-gray-600 italic">
                  All clinical decisions, treatment planning, and patient care remain the sole 
                  responsibility of the treating dental practitioner. Our role is limited to the 
                  technical fabrication of dental restorations according to professional specifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Disclaimer;