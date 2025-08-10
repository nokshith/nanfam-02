'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // This effect sets up a consistent 5-second interval timer.
  useEffect(() => {
    const interval = setInterval(() => {
      // Use the functional update form to get the most recent state
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // The empty dependency array [] ensures this runs only once.

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence>
        <motion.div
          // Use the index as the key. When it changes, AnimatePresence
          // handles the exit of the old slide and entry of the new one.
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // A slightly longer fade feels smoother
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-6 backdrop-brightness-50 pt-20">
            <motion.h1
              // Add a key to the text to make it re-animate on each slide change
              key={slides[current].heading}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {slides[current].heading}
            </motion.h1>
            <motion.p
              // Add a key to the text to make it re-animate on each slide change
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

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}