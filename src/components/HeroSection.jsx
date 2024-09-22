/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { motion, } from 'framer-motion';


import { BANNER } from '../db';

export  const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const images = BANNER.map((banner) => banner);
  
    useEffect(() => {
      if (!isHovered) {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    }, [isHovered]);
  
    return (
      <div 
        className="relative h-screen" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Car banner ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        
        
      </div>
    );
  };