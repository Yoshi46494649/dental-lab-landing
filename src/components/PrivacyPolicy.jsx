import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Users, Mail, Globe, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function PrivacyPolicy() {
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
            <h1 className="text-2xl font-heading text-gray-900">Privacy Policy</h1>
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
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-heading text-gray-900">Your Privacy Matters</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mirai Dental Graphics is committed to protecting your privacy in accordance with the 
                Privacy Act 1988 (Cth) and the Australian Privacy Principles.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Effective Date: 1 January 2025 | Last Updated: 1 January 2025
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Information We Collect</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>We collect personal information only as necessary to provide our dental laboratory services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Details:</strong> Name, email address, phone number</li>
                  <li><strong>Professional Information:</strong> Dental practice name, practitioner details, ABN</li>
                  <li><strong>Case Information:</strong> Patient case requirements, specifications, and clinical notes (de-identified where possible)</li>
                  <li><strong>Business Records:</strong> Transaction history, invoicing details, and service preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">How We Use Your Information</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>Your information is used exclusively for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processing and fulfilling dental restoration orders</li>
                  <li>Communicating about case progress and delivery</li>
                  <li>Quality assurance and service improvement</li>
                  <li>Maintaining accurate business records as required by law</li>
                  <li>Sending relevant updates about our services (with your consent)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Data Protection & Security</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>We implement robust security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure, encrypted data storage systems</li>
                  <li>Access controls limiting data to authorised personnel only</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure disposal of physical and digital records when no longer required</li>
                  <li>Staff training on privacy and data protection obligations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Third Party Disclosure</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>We do not sell, trade, or transfer your personal information to third parties except:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To trusted partners who assist in providing our services (under strict confidentiality agreements)</li>
                  <li>When required by law or to comply with legal processes</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">International Data Transfers</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  We primarily store and process data within Australia. If any data is transferred 
                  internationally for backup or processing purposes, we ensure it receives equivalent 
                  protection through appropriate safeguards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-6 card-professional">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Your Rights</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>Under Australian privacy law, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint about our privacy practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="card-professional bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-heading text-gray-900">Contact Our Privacy Officer</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>For privacy-related enquiries or to exercise your rights, please contact:</p>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="font-semibold">Privacy Officer</p>
                  <p>Mirai Dental Graphics</p>
                  <p>Email: <a href="mailto:futurity_gc@outlook.jp" className="text-blue-600 hover:underline">futurity_gc@outlook.jp</a></p>
                  <p>Phone: <a href="tel:0421791640" className="text-blue-600 hover:underline">0421 791 640</a></p>
                  <p>Address: 123 Laboratory Street, Brisbane QLD 4000</p>
                </div>
                <p className="text-sm mt-4">
                  If you're not satisfied with our response, you may contact the Office of the 
                  Australian Information Commissioner at <a href="https://www.oaic.gov.au" className="text-blue-600 hover:underline">www.oaic.gov.au</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates to Policy */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              This policy may be updated periodically. We will notify you of any material changes 
              via email or through our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;