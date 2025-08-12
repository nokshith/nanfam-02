'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Updated company list with Wipro added.
  const companies = [
    { name: 'Coca-Cola', logo: '/images/cocacola.png' },
    // { name: 'TCS', logo: '/images/tcs.png' }, // Corrected logo path
    // { name: 'Mindtree', logo: 'https://www.vectorlogo.zone/logos/mindtree/mindtree-ar21.svg' },
    // { name: 'Ernst & Young', logo: 'https://www.vectorlogo.zone/logos/ey/ey-ar21.svg' },
    // { name: 'Accenture', logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg' },
    // { name: 'Verizon', logo: 'https://www.vectorlogo.zone/logos/verizon/verizon-ar21.svg' },
    // { name: 'AT&T', logo: 'https://www.vectorlogo.zone/logos/att/att-ar21.svg' },
    // { name: 'T-Mobile', logo: 'https://cdn.worldvectorlogo.com/logos/t-mobile-5.svg' },
    // { name: 'Comcast', logo: 'https://www.vectorlogo.zone/logos/comcast/comcast-ar21.svg' },
    { name: 'Intel', logo: 'https://www.vectorlogo.zone/logos/intel/intel-ar21.svg' },
    // { name: 'Mastercard', logo: 'https://www.vectorlogo.zone/logos/mastercard/mastercard-ar21.svg' },
    { name: 'PayPal', logo: 'https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg' },
    // { name: 'Wipro', logo: 'https://www.vectorlogo.zone/logos/wipro/wipro-ar21.svg' },
    // { name: 'Adobe', logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg' },
    { name: 'Nvidia', logo: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg' },
    { name: 'Oracle', logo: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg' },
    // { name: 'Visa', logo: 'https://www.vectorlogo.zone/logos/visa/visa-ar21.svg' },
        { name: 'IBM', logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg' },
            { name: 'Salesforce', logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg' },
                { name: 'SAP', logo: 'https://www.vectorlogo.zone/logos/sap/sap-ar21.svg' },
                    { name: 'Microsoft', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },


  



  ];

  const duplicatedCompanies = [...companies, ...companies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const animateScroll = () => {
      if (!isHovering) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
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
    <section className="py-20 transition-all duration-300 bg-slate-100 dark:bg-slate-950">
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
            We partner with the most respected names in the industry
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-8 overflow-x-auto no-scrollbar pb-4"
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 flex items-center justify-center h-24 w-48 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Self-contained CSS to hide the scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}