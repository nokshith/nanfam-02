'use client';

import { motion } from 'framer-motion';
import { Code, Database, Network, Shield, Cloud, Smartphone } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack developers, mobile app developers, and software engineers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Data scientists, analysts, and database administrators',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Network,
      title: 'Network Engineering',
      description: 'Network architects, telecom engineers, and infrastructure specialists',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security analysts, penetration testers, and compliance experts',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Cloud engineers, DevOps specialists, and system architects',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Technologies',
      description: 'iOS developers, Android developers, and mobile UI/UX designers',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Expertise Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We specialize in placing top-tier IT professionals across all critical technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 bg-white dark:bg-[#ffffff1a] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" 
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}