import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitToGoogleSheets } from '../services/googleSheets';
import { sendNotificationEmails, sendClientAutoReply } from '../services/emailService';
import { sanitizeFormData, isRateLimited } from '../utils/sanitize';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  CheckCircle, 
  Send, 
  Loader2, 
  Award,
  Clock,
  Shield
} from 'lucide-react';

// Validation schema with enhanced security
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s\.\-']+$/, 'Name contains invalid characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Phone contains invalid characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long'),
  clinic: z.string()
    .max(200, 'Clinic name is too long')
    .optional(),
  message: z.string()
    .min(10, 'Please provide detailed case requirements (minimum 10 characters)')
    .max(2000, 'Message is too long (maximum 2000 characters)'),
});

export function ContactModal({ children, triggerText = "Get Started" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // Form submission handlers are now imported from services

  const onSubmit = async (data) => {
    // Check rate limiting
    if (isRateLimited(data.email)) {
      alert('Please wait at least 1 minute between submissions.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Sanitize form data before submission
      const sanitizedData = sanitizeFormData(data);
      
      // Submit to Google Sheets
      const sheetsResult = await submitToGoogleSheets(sanitizedData);
      
      // Send notification emails
      const emailResult = await sendNotificationEmails(sanitizedData);
      
      // Send auto-reply to client
      const autoReplyResult = await sendClientAutoReply(sanitizedData);
      
      // Consider successful if any method works (for redundancy)
      const anySuccess = sheetsResult?.success || emailResult?.success || autoReplyResult?.success || sheetsResult?.fallback;
      
      if (anySuccess) {
        setIsSuccess(true);
        reset();
        
        // Close modal after 4 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
        }, 4000);
      } else {
        throw new Error('All submission methods failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your request. Please try again or call us directly at 0421 791 640.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="btn-primary">
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-xl max-h-[80vh] md:max-h-[90vh] overflow-y-auto my-2 md:my-4 card-professional border-0 shadow-professional-lg">
        <DialogHeader className="text-center pb-1">
          <DialogTitle className="text-base md:text-lg font-heading text-gray-900">
            Request Your <span className="text-gradient">Case Quote</span>
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank You for Your Request!
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your case details and will respond within 24 hours.
            </p>
            <p className="text-sm text-gray-500">
              For urgent cases, please call us at{' '}
              <a href="tel:0421791640" className="text-blue-600 hover:underline font-medium">
                0421 791 640
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="name" className="label-professional">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  className="input-professional"
                  placeholder="Dr. John Smith"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="label-professional">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="input-professional"
                  placeholder="0421 791 640"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="email" className="label-professional">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="input-professional"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="clinic" className="label-professional">
                  Clinic Name
                </Label>
                <Input
                  id="clinic"
                  {...register('clinic')}
                  className="input-professional"
                  placeholder="Your Practice"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="label-professional">
                Case Details & Requirements *
              </Label>
              <Textarea
                id="message"
                {...register('message')}
                className="input-professional min-h-[40px] md:min-h-[50px] resize-none"
                placeholder="E.g., 3 zirconia crowns for upper anteriors, needed by end of month"
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-2 border-t border-gray-100">
              <Button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Case Request
                  </>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                By submitting, you agree to receive communications about your case. 
                We respect your privacy and won't share your information.
              </p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ContactModal;