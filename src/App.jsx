import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import ContactModal from './components/ContactModal';
import { Disclaimer } from './components/Disclaimer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
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

function HomePage() {
  // Form submission now handled by ContactModal component

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header-sticky">
        <div className="container-max">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-heading text-gradient">
                Mirai Dental Graphics
              </h1>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
                Services
              </a>
              <a href="#consultation" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
                Consultation
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium smooth-transition">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-6">
              <a href="tel:0421791640" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600 smooth-transition">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">0421 791 640</span>
              </a>
              <ContactModal triggerText="Get Started">
                <Button className="btn-primary hidden md:inline-flex">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative gradient-subtle pt-12 md:pt-16 pb-20 md:pb-24 lg:pb-32 mt-14"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Mobile version - shorter text */}
              <Badge className="mb-0 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-medium block md:hidden">
                Young Dentists | Brisbane・Gold Coast
              </Badge>
              {/* Desktop version - full text */}
              <Badge className="mb-0 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 px-4 py-2 text-sm font-medium hidden md:block">
                For Young Dentists & Patients | Brisbane, Sunshine Coast & Gold Coast
              </Badge>
              <h1 className="heading-primary font-heading text-gray-900 mb-4 md:mb-6">
                Crafting Perfect <span className="text-gradient">Smiles</span>, Together.
              </h1>
              <p className="text-body-large text-gray-600 mb-8 md:mb-10 leading-relaxed">
                Your trusted partner for exceptional veneers, crowns, and implants. 
                Experience our commitment to quality, speed, and digital precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <ContactModal triggerText="Request a Case">
                  <Button className="btn-primary inline-flex items-center justify-center">
                    Request a Case
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </ContactModal>
                <a href="tel:0421791640">
                  <Button className="btn-secondary inline-flex items-center justify-center w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 0421 791 640
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern dental clinic interior" 
                className="rounded-2xl shadow-professional-lg hover-scale"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-professional">
                <div className="flex items-center">
                  <CheckCircle className="h-10 w-10 text-green-500 mr-4" />
                  <div>
                    <p className="font-bold text-lg">200+ Cases Completed</p>
                    <p className="text-gray-600">20+ Partner Clinics</p>
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

      {/* Online Consultation Section */}
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

      {/* Veneer Highlight Section */}
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
        className="section-padding gradient-subtle"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={crownBridgeSolutionsImage} 
                alt="Advanced crown and bridge solutions" 
                className="rounded-2xl shadow-professional-lg hover-scale w-full"
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

      {/* Implant Section */}
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
              <h2 className="heading-secondary font-heading text-gray-900 mb-6">
                Precision <span className="text-gradient">Implant Restorations</span>
              </h2>
              <p className="text-body-large text-gray-600 mb-8">
                Combining aesthetic excellence with functional precision for implant 
                restorations. Our premium approach ensures both beautiful results and 
                long-term reliability for your most demanding cases.
              </p>
              <div className="space-y-5">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-4" />
                  <span className="text-lg text-gray-700">Aesthetic and functional excellence</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-4" />
                  <span className="text-lg text-gray-700">Premium materials and techniques</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-4" />
                  <span className="text-lg text-gray-700">Precision-focused approach</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-4" />
                  <span className="text-lg text-gray-700">Reliability and trust</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img 
                src={implantRestoration1} 
                alt="Precision dental implant restoration - detailed view" 
                className="rounded-2xl shadow-professional hover-lift w-full h-64 object-cover"
              />
              <img 
                src={implantRestoration2} 
                alt="Precision dental implant restoration - final result" 
                className="rounded-2xl shadow-professional hover-lift w-full h-64 object-cover"
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

      {/* CTA + Form */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-white"
        id="contact">
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

      {/* Disclaimer Section */}
      <Disclaimer />

      {/* Footer */}
      <footer 
        className="section-padding bg-gray-900 text-white"
      >
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading text-gradient-white mb-6">Mirai Dental Graphics</h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
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
              <h4 className="text-xl font-heading mb-6">Contact Information</h4>
              <div className="space-y-4">
                <a href="tel:0421791640" className="flex items-center hover:text-blue-300 transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">0421 791 640</span>
                </a>
                <a href="mailto:futurity_gc@outlook.jp" className="flex items-center hover:text-blue-300 transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">futurity_gc@outlook.jp</span>
                </a>
                <div className="flex items-start hover:text-blue-300 transition-colors">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <div className="text-gray-300">
                    <p>123 Laboratory Street</p>
                    <p>Brisbane QLD 4000</p>
                    <p>Australia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-heading mb-6">Service Areas</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Brisbane & Greater Brisbane</li>
                <li>Sunshine Coast</li>
                <li>Gold Coast</li>
                <li>Ipswich & Logan</li>
                <li>Toowoomba</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center mb-4">
              <p className="text-gray-400 font-semibold">Mirai Dental Graphics | ABN: 79 716 365 017</p>
              <p className="text-gray-400">&copy; 2025 Mirai Dental Graphics. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-2">Crafting Perfect Smiles with 30 Years of Excellence</p>
            </div>
            
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
