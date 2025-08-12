'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/image-1234.webp',
    heading: 'Hire Smarter, Grow Faster',
    subtext: 'Streamline your recruitment process with AI-powered automation.',
  },
  {
    image: '/images/image-2.webp',
    heading: 'Top Talent, Right On Time',
    subtext: 'Connect with qualified candidates across industries in minutes.',
  },
  {
    image: '/images/image-3.webp',
    heading: 'Your Dream Job Awaits',
    subtext: 'Explore thousands of job openings tailored to your skills.',
  },
];

export default function BackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-6 backdrop-brightness-50 pt-20">
            <motion.h1
              key={slides[current].heading}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {slides[current].heading}
            </motion.h1>
            <motion.p
              key={slides[current].subtext}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl"
            >
              {slides[current].subtext}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Clickable Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
