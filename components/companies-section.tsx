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

  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 2;

    const animateScroll = () => {
      if (isHovering) {
        scrollPosition += scrollSpeed;
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
    <section
      className="py-20 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #002285 0%, #2d7db6 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We partner with the most respected names in telecommunications
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Removed left and right diagonal covers */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-pointer"
            style={{
              scrollBehavior: 'auto',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="flex-shrink-0 flex items-center justify-center h-20 w-48 bg-white/10 rounded-lg backdrop-blur-sm text-white font-semibold text-lg border border-white/20 hover:border-blue-300 transition-all duration-300"
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