import emailjs from '@emailjs/browser';

// EmailJS Configuration from environment variables
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mirai_dental',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_case_request',
  AUTO_REPLY_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_auto_reply',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send notification emails to both recipients
export const sendNotificationEmails = async (formData) => {
  try {
    const templateParams = {
      // Form data
      client_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone,
      clinic_name: formData.clinic || 'Not specified',
      case_details: formData.message,
      
      // System data
      submission_date: new Date().toLocaleString('en-AU', { 
        timeZone: 'Australia/Brisbane',
        dateStyle: 'full',
        timeStyle: 'short'
      }),
      
      // Recipients (for template customization)
      notification_recipients: 'futurity_gc@outlook.jp, yoshiyasu1304@gmail.com',
    };

    // Send email notification
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email notification sent successfully:', result);
    return { success: true, result };

  } catch (error) {
    console.error('Failed to send email notification:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send notification email' 
    };
  }
};

// Send auto-reply to the client
export const sendClientAutoReply = async (formData) => {
  const AUTO_REPLY_TEMPLATE = EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID;

  try {
    const templateParams = {
      client_name: formData.name,
      client_email: formData.email,
      clinic_name: formData.clinic || 'your practice',
      case_summary: formData.message.substring(0, 150) + '...',
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      AUTO_REPLY_TEMPLATE,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Auto-reply sent successfully:', result);
    return { success: true, result };

  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send auto-reply' 
    };
  }
};

/* 
EmailJS Setup Instructions:

1. Create an EmailJS account at https://www.emailjs.com/
2. Add an email service (Gmail, Outlook, etc.)
3. Create email templates:

Template for Notifications (template_case_request):
---
Subject: New Case Request - {{client_name}} from {{clinic_name}}

New case request received:

Client Information:
- Name: {{client_name}}
- Email: {{client_email}}
- Phone: {{client_phone}}
- Clinic: {{clinic_name}}
- Date: {{submission_date}}

Case Details:
{{case_details}}

Please respond within 24 hours.

Best regards,
Mirai Dental Graphics Website
---

Template for Auto-Reply (template_auto_reply):
---
Subject: Thank you for your case request - Mirai Dental Graphics

Dear {{client_name}},

Thank you for submitting your case request to Mirai Dental Graphics.

We have received your inquiry for {{clinic_name}} and our team will review your requirements:
"{{case_summary}}"

Our experienced technicians will respond within 24 hours with:
• Detailed quote and timeline
• Material recommendations  
• Any clarifying questions

For urgent cases, please call us directly at 0421 791 640.

Best regards,
Hiro Takada
Mirai Dental Graphics
30 Years of Excellence in Dental Technology

Phone: 0421 791 640
Email: futurity_gc@outlook.jp
---

4. Configure the service to send to multiple recipients:
   - futurity_gc@outlook.jp
   - yoshiyasu1304@gmail.com

5. Update the configuration constants above with your actual IDs and keys.
*/