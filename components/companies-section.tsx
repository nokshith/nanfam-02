'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const companies = [
    { name: 'Verizon' },
    { name: 'AT&T',  },
    { name: 'T-Mobile',  },
    { name: 'Sprint',  },
    { name: 'Comcast',  },
    { name: 'Charter', },
    { name: 'Cox Communications',  },
    { name: 'CenturyLink',  },
    { name: 'Ascent Innovations', }, 
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
      className="py-20 transition-all duration-300 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We partner with the most respected names in telecommunications
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative">
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
                className="flex-shrink-0 flex items-center justify-center h-20 w-48 bg-gray-800 dark:bg-white/10 rounded-lg backdrop-blur-sm text-white font-semibold text-lg border border-gray-300 dark:border-white/20 hover:border-blue-500 dark:hover:border-blue-300 transition-all duration-300"
              >
                 <img 
  src={company.logo} 
  alt={company.name} 
  className="h-full w-full object-fill"/> 
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}