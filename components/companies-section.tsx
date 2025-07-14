'use client';

import { motion } from 'framer-motion';

export default function CompaniesSection() {
  const companies = [
    { name: 'Verizon' },
    { name: 'AT&T' },
    { name: 'T-Mobile' },
    { name: 'Sprint' },
    { name: 'Comcast' },
    { name: 'Charter' },
  ];

  return (
    <section className="py-20 bg-white/10">
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

        {/* Grid with Company Names */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center h-20 bg-gray-100 dark:bg-white/10 rounded-lg backdrop-blur-sm text-black dark:text-white font-semibold text-lg"
            >
              {company.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
