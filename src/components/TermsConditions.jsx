import React from 'react';
import { ArrowLeft, Scale, Shield, AlertCircle, Clock, FileCheck, Briefcase, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <Button 
              onClick={() => window.history.back()} 
              variant="ghost" 
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-heading text-gray-900">Terms & Conditions</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <Card className="mb-8 card-professional">
            <CardContent className="pt-8">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-heading text-gray-900">Terms of Service</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms and Conditions govern your use of Mirai Dental Graphics' services. 
                By engaging our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Effective Date: 1 January 2025 | Last Updated: 1 January 2025
              </p>
            </CardContent>
          </Card>

          {/* Service Scope */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">1. Scope of Services</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">1.1 Business-to-Business Services</p>
                <p>
                  Mirai Dental Graphics provides dental laboratory services exclusively to registered 
                  dental practices and dental professionals. We do not provide direct treatment or 
                  services to patients.
                </p>
                
                <p className="font-semibold mt-4">1.2 Services Provided</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dental restorations (crowns, bridges, veneers, implants)</li>
                  <li>Custom shade matching and characterisation</li>
                  <li>Digital dentistry solutions</li>
                  <li>Case consultation and planning</li>
                  <li>Technical support and guidance</li>
                </ul>

                <p className="font-semibold mt-4">1.3 Professional Requirements</p>
                <p>
                  All clients must be registered dental practitioners or authorised representatives 
                  of dental practices with valid Australian registration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Delivery */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">2. Ordering & Delivery</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">2.1 Order Placement</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Orders must include complete specifications and impressions/scans</li>
                  <li>Clear shade selection and special instructions must be provided</li>
                  <li>Rush orders are subject to availability and additional charges</li>
                </ul>

                <p className="font-semibold mt-4">2.2 Turnaround Times</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Standard cases: 5-7 business days</li>
                  <li>Complex cases: 10-14 business days</li>
                  <li>Express service: 2-3 business days (additional fees apply)</li>
                </ul>

                <p className="font-semibold mt-4">2.3 Delivery</p>
                <p>
                  Delivery is via secure courier service. Risk passes to the client upon dispatch. 
                  We are not responsible for delays caused by courier services or circumstances 
                  beyond our control.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Remakes */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">3. Warranty & Remake Policy</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">3.1 Three-Year Warranty</p>
                <p>
                  All restorations are covered by our 3-year remake warranty from the date of delivery, 
                  subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Restoration failure due to manufacturing defects</li>
                  <li>Original impressions/scans and specifications were accurate</li>
                  <li>Proper clinical protocols were followed</li>
                  <li>Patient maintained reasonable oral hygiene</li>
                </ul>

                <p className="font-semibold mt-4">3.2 Warranty Exclusions</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Damage due to patient neglect or trauma</li>
                  <li>Changes in patient's oral condition</li>
                  <li>Improper cementation or clinical procedures</li>
                  <li>Modifications made by other laboratories</li>
                  <li>Normal wear and tear</li>
                </ul>

                <p className="font-semibold mt-4">3.3 Remake Procedure</p>
                <p>
                  Remake requests must be submitted within 30 days of delivery with detailed 
                  explanation and photographic evidence where applicable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">4. Payment Terms</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">4.1 Pricing</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prices are quoted in Australian Dollars (AUD)</li>
                  <li>GST is included in all quoted prices</li>
                  <li>Prices subject to change with 30 days notice</li>
                </ul>

                <p className="font-semibold mt-4">4.2 Payment Methods</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bank transfer (preferred)</li>
                  <li>Credit card (Visa/Mastercard)</li>
                  <li>Account customers: 30-day terms (approved clients only)</li>
                </ul>

                <p className="font-semibold mt-4">4.3 Late Payment</p>
                <p>
                  Overdue accounts may incur interest at 1.5% per month. We reserve the right 
                  to suspend services for accounts more than 60 days overdue.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability and Indemnity */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">5. Liability & Indemnity</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">5.1 Limitation of Liability</p>
                <p>
                  While we strive for the highest quality in all our work, Mirai Dental Graphics 
                  is not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clinical treatment outcomes</li>
                  <li>Patient acceptance or satisfaction</li>
                  <li>Consequences of inaccurate impressions or specifications</li>
                  <li>Delays in treatment due to remake requirements</li>
                </ul>

                <p className="font-semibold mt-4">5.2 Maximum Liability</p>
                <p>
                  Our total liability for any claim shall not exceed the cost of the specific 
                  restoration(s) in question.
                </p>

                <p className="font-semibold mt-4">5.3 Professional Responsibility</p>
                <p>
                  The treating dentist retains full professional responsibility for diagnosis, 
                  treatment planning, and clinical procedures. Our role is limited to technical 
                  fabrication based on provided specifications.
                </p>

                <p className="font-semibold mt-4">5.4 Indemnification</p>
                <p>
                  Clients agree to indemnify Mirai Dental Graphics against any claims arising 
                  from clinical treatment or patient care.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">6. Intellectual Property</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  All designs, techniques, and processes developed by Mirai Dental Graphics remain 
                  our intellectual property. Clients receive a licence to use completed restorations 
                  for their intended clinical purpose only.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">7. Confidentiality</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Both parties agree to maintain confidentiality regarding patient information, 
                  business practices, and proprietary techniques. This obligation survives 
                  termination of the business relationship.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">8. Dispute Resolution</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold">8.1 Initial Resolution</p>
                <p>
                  Parties agree to attempt good faith negotiation to resolve any disputes before 
                  pursuing formal proceedings.
                </p>

                <p className="font-semibold mt-4">8.2 Mediation</p>
                <p>
                  If negotiation fails, disputes shall be submitted to mediation through the 
                  Australian Commercial Disputes Centre.
                </p>

                <p className="font-semibold mt-4">8.3 Jurisdiction</p>
                <p>
                  These terms are governed by the laws of Queensland, Australia. Any legal 
                  proceedings shall be brought in Queensland courts.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">9. Termination</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Either party may terminate the business relationship with 30 days written notice. 
                  Outstanding orders will be completed and all accounts must be settled.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-professional bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Contact Information</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>For questions about these terms, please contact:</p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-semibold">Mirai Dental Graphics</p>
                  <p>ABN: 12 345 678 901</p>
                  <p>Address: 123 Laboratory Street, Brisbane QLD 4000</p>
                  <p>Phone: <a href="tel:0421791640" className="text-blue-600 hover:underline">0421 791 640</a></p>
                  <p>Email: <a href="mailto:futurity_gc@outlook.jp" className="text-blue-600 hover:underline">futurity_gc@outlook.jp</a></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <div className="mt-8 text-center">
            <Card className="card-professional border-2 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-gray-700 font-semibold">
                  By engaging our services, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and Conditions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Updates Notice */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              These terms may be updated periodically. Continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;