// Security utilities for input sanitization and validation

/**
 * Sanitize HTML to prevent XSS attacks
 * @param {string} input - Raw input string
 * @returns {string} - Sanitized string
 */
export const sanitizeHTML = (input) => {
  if (typeof input !== 'string') return '';
  
  // Remove script tags and dangerous attributes
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<iframe/gi, '<')
    .replace(/<embed/gi, '<')
    .replace(/<object/gi, '<');
};

/**
 * Escape special characters for safe display
 * @param {string} input - Raw input string
 * @returns {string} - Escaped string
 */
export const escapeHTML = (input) => {
  if (typeof input !== 'string') return '';
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  
  return input.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Australian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone
 */
export const isValidPhone = (phone) => {
  // Remove spaces and dashes
  const cleaned = phone.replace(/[\s-]/g, '');
  // Australian phone number pattern
  const phoneRegex = /^(\+61|0)[2-478]\d{8}$/;
  return phoneRegex.test(cleaned);
};

/**
 * Sanitize form data before submission
 * @param {Object} formData - Form data object
 * @returns {Object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeHTML(value).trim();
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

/**
 * Rate limit checker for form submissions
 */
const submissionTimestamps = new Map();

/**
 * Check if submission is rate limited
 * @param {string} identifier - Unique identifier (email or IP)
 * @param {number} limitMs - Minimum time between submissions in milliseconds
 * @returns {boolean} - True if rate limited
 */
export const isRateLimited = (identifier, limitMs = 60000) => {
  const now = Date.now();
  const lastSubmission = submissionTimestamps.get(identifier);
  
  if (lastSubmission && (now - lastSubmission) < limitMs) {
    return true;
  }
  
  submissionTimestamps.set(identifier, now);
  return false;
};

/**
 * Clear old rate limit entries (cleanup)
 */
export const clearOldRateLimits = () => {
  const now = Date.now();
  const oneHourAgo = now - 3600000;
  
  for (const [key, timestamp] of submissionTimestamps.entries()) {
    if (timestamp < oneHourAgo) {
      submissionTimestamps.delete(key);
    }
  }
};

// Clear old entries every hour
setInterval(clearOldRateLimits, 3600000);