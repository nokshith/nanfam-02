'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Slides with images and recruitment content
const slides = [
  {
    image: '/images/image-12.png',
    heading: 'Hire Smarter, Grow Faster',
    subtext: 'Streamline your recruitment process with AI-powered automation.',
  },
  {
    image: '/images/image-2.png',
    heading: 'Top Talent, Right On Time',
    subtext: 'Connect with qualified candidates across industries in minutes.',
  },
  {
    image: '/images/image-3.png',
    heading: 'Your Dream Job Awaits',
    subtext: 'Explore thousands of job openings tailored to your skills.',
  },
];

export default function BackgroundSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[current].image}
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Background Image */}
          <img
            src={slides[current].image}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-6 backdrop-brightness-50 pt-20">
            {/* pt-20 ensures text starts below navbar height */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {slides[current].heading}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl max-w-2xl"
            >
              {slides[current].subtext}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
