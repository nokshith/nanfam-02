
'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We strive for excellence in every placement, ensuring the perfect match between talent and opportunity.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in the power of collaboration, working closely with both clients and candidates.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description:
        'We conduct business with the highest level of integrity and professional ethics.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'We are passionate about connecting great people with great opportunities.',
    },
  ];

  const team = [
    {
      name: 'Chaitanya Nanduri',
      role: 'CEO & Founder',
      bio: 'Former telecom executive with 15+ years in technology recruitment',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Sureka Nanduri',
      role: 'VP of Operations',
      bio: 'Expert in scaling recruitment operations and building high-performing teams',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Client Relations',
      bio: 'Building lasting partnerships with leading companies nationwide',
      image:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
  ];

  const milestones = [
    { year: '2021', event: 'Achieved 90%+ candidate retention rate' },
    { year: '2022', event: 'Opened offices in 5 major tech hubs' },
    { year: '2023', event: 'Placed 1,000+ professionals in dream roles' },
    { year: '2024', event: 'Recognized as "Top IT Recruiter" by Tech Weekly' },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section (First Section - Dark Theme via Overlay) */}
      <section
        className="h-[70vh] bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('/images/Gemini_Generated_Image_dc9ubmdc9ubmdc9u.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          {/* This div is now positioned absolutely within the container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-xl w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">
              About Nanfam
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-xl font-light leading-relaxed">
              Connecting exceptional IT talent with leading companies since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision (Second Section - Rich Blue) */}
      <section className="py-20 bg-[#000f3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To bridge the gap between exceptional IT talent and innovative
                companies, creating lasting partnerships that drive technological
                advancement and career growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To become the most trusted and innovative recruitment partner in
                the IT industry, known for our deep understanding of technology
                trends and exceptional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values (Third Section - Light Background for Contrast) */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900"
              >
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Fourth Section - Complementary Dark Navy) */}
      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The experienced professionals driving our success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg transition duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-blue-500/50 group-hover:border-cyan-400 transition duration-300"
                />
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan-400 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (Last Section - Rich Blue) */}
      <section className="py-20 bg-[#000f3D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our growth and success
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden md:block"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 flex w-full items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-5/12">
                  <div className="p-6 rounded-lg shadow-lg bg-[#192750] hover:shadow-blue-500/20 transition duration-300">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-800 rounded-full border-4 border-blue-500 z-10 hidden md:block"></div>
                <div className="w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}