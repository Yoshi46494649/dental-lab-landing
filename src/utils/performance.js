// Performance monitoring utilities
export const measureLoadTime = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
      
      // You can send this to analytics
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          'event_category': 'Performance',
          'value': loadTime
        });
      }
    });
  }
};

// Lazy load images when they come into view
export const lazyLoadImage = (img, src, callback) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = src;
        image.onload = () => {
          image.style.opacity = '1';
          if (callback) callback();
        };
        observer.unobserve(image);
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  observer.observe(img);
};

// Preload critical images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

// Optimize animations by reducing motion for users who prefer it
export const respectReducedMotion = () => {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  }
  return false;
};

// Debounce function for scroll/resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for frequent events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if device is mobile for conditional loading
export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768;
  }
  return false;
};

// Get device connection speed
export const getConnectionSpeed = () => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt
    };
  }
  return null;
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Measure page load time
  measureLoadTime();
  
  // Preload critical images
  preloadImages([
    '/assets/aY5m5QybSX05.jpg' // Hero image
  ]);
  
  // Log connection info
  const connectionInfo = getConnectionSpeed();
  if (connectionInfo) {
    console.log('Connection info:', connectionInfo);
  }
};