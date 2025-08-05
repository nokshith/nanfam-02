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
        'Reimagine HR with Ma Foi’s Managed Services, combining tech-driven payroll, compliance, and HRMS for aligned, scalable business success.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-gray-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider mb-2">
            END-TO-END BUSINESS CONSULTING SERVICES
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative flex flex-col h-full p-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 flex-1">{service.description}</p>
                <a
                  href={service.link}
                  className="flex items-center text-blue-600 hover:underline font-semibold mt-auto"
                >
                  <span className="mr-2">Learn more</span>
                  <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 7L7 17M17 7V17M17 7H7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
