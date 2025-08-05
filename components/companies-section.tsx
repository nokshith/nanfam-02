'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const companies = [
    { name: 'Verizon' },
    { name: 'AT&T' },
    { name: 'T-Mobile' },
    { name: 'Sprint' },
    { name: 'Comcast' },
    { name: 'Charter' },
    { name: 'Cox Communications' },
    { name: 'CenturyLink' },
    { name: 'Frontier Communications' },
    { name: 'Windstream' },
    { name: 'Mediacom' },
    { name: 'Altice USA' },
    { name: 'Cable One' },
    { name: 'WideOpenWest' },
    { name: 'RCN' },
    { name: 'Grande Communications' },
    { name: 'MetroNet' },
    { name: 'Google Fiber' },
    { name: 'Starry' },
    { name: 'Viasat' },
    { name: 'HughesNet' },
    { name: 'Dish Network' },
    { name: 'DirecTV' },
    { name: 'Optimum' },
    { name: 'Spectrum' },
    { name: 'Xfinity' },
    { name: 'Fios' },
    { name: 'U-verse' },
    { name: 'Optimum' },
    { name: 'Cox Business' },
    { name: 'CenturyLink Business' },
    { name: 'Frontier Business' },
    { name: 'Windstream Business' },
    { name: 'Mediacom Business' },
    { name: 'Altice Business' },
    { name: 'Cable One Business' },
    { name: 'WideOpenWest Business' },
    { name: 'RCN Business' },
    { name: 'Grande Business' },
    { name: 'MetroNet Business' },
    { name: 'Google Fiber Business' },
    { name: 'Starry Business' },
    { name: 'Viasat Business' },
    { name: 'HughesNet Business' },
    { name: 'Dish Business' },
    { name: 'DirecTV Business' },
    { name: 'Optimum Business' },
    { name: 'Spectrum Business' },
    { name: 'Xfinity Business' },
    { name: 'Fios Business' },
    { name: 'U-verse Business' },
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 2; // pixels per frame

    const animateScroll = () => {
      if (isHovering) {
        scrollPosition += scrollSpeed;
        
        // Reset to beginning when reaching halfway point for seamless loop
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovering]);

  return (
    <section className="py-20 bg-white/10 dark:bg-gray-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We partner with the most respected names in telecommunications
          </p>
        </motion.div>

        {/* Hover Scrollable Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/10 dark:from-gray-900/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/10 dark:from-gray-900/10 to-transparent z-10 pointer-events-none"></div>
          
          {/* Hover-Triggered Scrolling Companies */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-pointer"
            style={{ 
              scrollBehavior: 'auto',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 flex items-center justify-center h-20 w-48 bg-gray-100 dark:bg-white/10 rounded-lg backdrop-blur-sm text-black dark:text-white font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 transition-all duration-300"
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
