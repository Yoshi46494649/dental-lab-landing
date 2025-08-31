import React, { useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyYouTube = ({ 
  videoId, 
  title, 
  className = "",
  thumbnailQuality = "maxresdefault" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  const handleClick = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (inView && isLoaded) {
    return (
      <div ref={ref} className={`relative aspect-video ${className}`}>
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
          title={title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className={`relative aspect-video cursor-pointer group ${className}`}
      onClick={inView ? handleClick : undefined}
    >
      <img 
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
      {inView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-40 transition-all duration-300">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyYouTube;