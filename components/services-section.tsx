'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      image: '/images/f_3_11zon.jpg',
      title: 'HR Advisory',
      description:
        'Our strategic HR advisory services drive sustainable growth and success by delivering innovative talent solutions that strengthen organizational readiness across people, leadership, and strategy.',
      link: '#',
    },
    {
      image: '/images/22_2_11zon.jpg',
      title: 'Business Growth & Transformation',
      description:
        'Ma Foi drives your business growth and transformation with cutting-edge strategies for success.',
      link: '#',
    },
    {
      image: '/images/ms_1_11zon.jpg',
      title: 'Managed Services',
      description:
        'Reimagine HR with Ma Foi\'s Managed Services, combining tech-driven payroll, compliance, and HRMS for aligned, scalable business success.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold uppercase tracking-wider mb-2 text-gray-900 dark:text-white">
            END-TO-END BUSINESS CONSULTING SERVICES
          </h2>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col h-full p-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mb-6 flex-1 text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
