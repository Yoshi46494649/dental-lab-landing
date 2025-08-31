import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle, 
  Award,
  Microscope,
  Zap,
  Shield,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';

// Import images
import heroImage from '/assets/aY5m5QybSX05.jpg';
import veneerImage from "/assets/new_veneer_image.png";
import crownImage from "/assets/new_crown_image.png";
import implantImage from "/assets/new_implant_image.png";
import labWorkImage from "/assets/new_lab_work_image.png";
import beforeAfterImage from "/assets/new_before_after_image.png";
import happyPatientImage from "/assets/new_happy_patient_image.png";
import shadeConsultationBefore from "/assets/shade-consultation-before.jpg";
import shadeConsultationAfter from "/assets/shade-consultation-after.jpg";
import exceptionalVeneerImage from "/assets/exceptional-veneer-craftsmanship.png";
import crownBridgeSolutionsImage from "/assets/crown-bridge-solutions.png";
import implantRestoration1 from "/assets/implant-restoration-1.png";
import implantRestoration2 from "/assets/implant-restoration-2.png";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your enquiry! We\'ll respond within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Mirai Dental Graphics</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>0421791640</span>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative bg-gradient-to-br from-blue-50 to-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                For Young Dentists & Patients | Brisbane, Sunshine Coast & Gold Coast
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Crafting Perfect Smiles, Together.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your trusted partner for exceptional veneers, crowns, and implants. 
                Experience our commitment to quality, speed, and digital precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="bg-blue-600 hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Request a Case
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0421791640
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern dental clinic interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold">200+ Cases Completed</p>
                    <p className="text-sm text-gray-600">20+ Partner Clinics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Specialised Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality restorations with transparent pricing through your dental practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Veneers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Veneers</CardTitle>
                <CardDescription>Premium aesthetic solutions</CardDescription>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Crowns & Bridges</CardTitle>
                <CardDescription>Durable restoration solutions</CardDescription>
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Implant Restorations</CardTitle>
                <CardDescription>Precision implant solutions</CardDescription>
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
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Simple Payment Process
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We work directly with your dental practice for seamless billing
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Visit Your Dentist</h4>
                  <p className="text-sm text-gray-600">
                    Receive treatment and consultation at your dental practice
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Practice Handles Payment</h4>
                  <p className="text-sm text-gray-600">
                    Your dentist includes our laboratory fees in their treatment cost
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">We Deliver Excellence</h4>
                  <p className="text-sm text-gray-600">
                    High-quality restorations delivered directly to your practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Online Consultation Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                New Service
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Shape & Shade Consultation Online
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience personalised consultations from the comfort of your home or clinic. 
                Our expert technicians provide detailed shape and shade guidance through 
                secure online meetings, ensuring perfect results for your restorations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Personalised Consultations</h4>
                    <p className="text-gray-600">One-on-one sessions with experienced dental technicians</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Perfect Colour Matching</h4>
                    <p className="text-gray-600">Advanced digital shade analysis and recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Convenient Scheduling</h4>
                    <p className="text-gray-600">Flexible appointment times to suit your schedule</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Book Online Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
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

              {/* YouTube Video */}
              <div className="max-w-3xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/lGoBJQUgu0U" 
                    title="Shape & Shade Consultation Process - See How We Perfect Your Smile" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Watch our consultation process in action
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-purple-600 border-purple-600 hover:bg-purple-50"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Your Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Veneer Highlight Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Our Specialty
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Exceptional Veneer Craftsmanship
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Specialising in premium veneers using the finest materials including 
                Zirconia and e-Max. Our focus on aesthetics, occlusion, and precise fit 
                ensures outstanding results every time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Superior Aesthetics</h4>
                    <p className="text-gray-600">Natural-looking results with perfect colour matching</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Precise Occlusion</h4>
                    <p className="text-gray-600">Optimal bite alignment for long-term comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Perfect Fit</h4>
                    <p className="text-gray-600">Digital precision for seamless integration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={exceptionalVeneerImage} 
                alt="Exceptional veneer craftsmanship showcase" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Crown & Bridge Solutions */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={crownBridgeSolutionsImage} 
                alt="Advanced crown and bridge solutions" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Crown & Bridge Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Utilising premium materials from trusted manufacturers including Aidite, GC, 
                Ivoclar, and Amann Girbach. Our digital workflow incorporates exocad 
                design software, LabScanner technology, and precision 3D printing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Premium Materials</h4>
                  <p className="text-sm text-gray-600">Aidite, GC, Ivoclar, Amann Girbach</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Microscope className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Digital Workflow</h4>
                  <p className="text-sm text-gray-600">exocad, LabScanner, 3D Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Implant Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Precision Implant Restorations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Combining aesthetic excellence with functional precision for implant 
                restorations. Our premium approach ensures both beautiful results and 
                long-term reliability for your most demanding cases.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Aesthetic and functional excellence</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Premium materials and techniques</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Precision-focused approach</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Reliability and trust</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src={implantRestoration1} 
                alt="Precision dental implant restoration - detailed view" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src={implantRestoration2} 
                alt="Precision dental implant restoration - final result" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Mirai Dental Graphics?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three decades of excellence, innovation, and reliability
            </p>
          </div>
          
          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                **200+** successful cases completed across **20+** partner dental clinics 
                throughout Queensland
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                3-year remake policy ensuring your confidence in every restoration 
                we deliver
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                30 years of experience with qualifications from Osaka Dental 
                Technology College
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA + Form */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-16"
        id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Submit your case details and we'll respond within 24 hours with 
                a detailed quote and timeline.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Fast Turnaround</h4>
                    <p className="text-gray-600">Usually 1 week delivery for most cases</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Direct Communication</h4>
                    <p className="text-gray-600">Speak directly with our experienced technicians</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Quality Assured</h4>
                    <p className="text-gray-600">Every case backed by our 3-year guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Request a Case Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="clinic">Clinic Name</Label>
                    <Input id="clinic" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Case Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your case requirements, preferred materials, and any specific instructions..."
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Case Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer 
        className="py-16 bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mirai Dental Graphics</h3>
              <p className="text-gray-300 mb-4">
                Premium dental laboratory services serving Brisbane, Sunshine Coast, 
                and Gold Coast with 30 years of expertise.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Trusted by 20+ clinics</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>0421791640</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>futurity_gc@outlook.jp</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <div>
                    <p>123 Laboratory Street</p>
                    <p>Brisbane QLD 4000</p>
                    <p>Australia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Brisbane & Greater Brisbane</li>
                <li>Sunshine Coast</li>
                <li>Gold Coast</li>
                <li>Ipswich & Logan</li>
                <li>Toowoomba</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mirai Dental Graphics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
