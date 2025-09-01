import React, { useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({ 
  videoSrc, 
  title, 
  className = "",
  poster = null // Optional poster image
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });

  const handlePlayClick = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  const handleVideoClick = useCallback(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    } else {
      handlePlayClick();
    }
  }, [isLoaded, handlePlayClick]);

  const handleVideoPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleVideoPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  if (inView && isLoaded) {
    return (
      <div ref={ref} className={`relative aspect-video ${className}`}>
        <video 
          ref={videoRef}
          width="100%" 
          height="100%" 
          src={videoSrc}
          title={title}
          className="absolute inset-0 w-full h-full rounded-lg object-cover"
          controls={false}
          preload="metadata"
          playsInline
          muted={false}
          poster={poster}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onClick={handleVideoClick}
        />
        
        {/* Custom play/pause overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handlePlayClick}
        >
          {!isPlaying && (
            <div className="w-16 h-16 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className={`relative aspect-video cursor-pointer group ${className}`}
      onClick={inView ? handleVideoClick : undefined}
    >
      {/* Video poster/thumbnail */}
      {poster ? (
        <img 
          src={poster}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM10 7a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
            <p className="text-sm opacity-75">Click to load video</p>
          </div>
        </div>
      )}
      
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

export default LazyVideo;