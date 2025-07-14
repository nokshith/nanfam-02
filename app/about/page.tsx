'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every placement, ensuring the perfect match between talent and opportunity.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with both clients and candidates.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct business with the highest level of integrity and professional ethics.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about connecting great people with great opportunities.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former telecom executive with 15+ years in technology recruitment',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Sarah Kim',
      role: 'VP of Operations',
      bio: 'Expert in scaling recruitment operations and building high-performing teams',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Marcus Williams',
      role: 'Senior Technical Recruiter',
      bio: 'Specialized in placing senior engineers and technical leadership roles',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Client Relations',
      bio: 'Building lasting partnerships with leading telecom companies nationwide',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
  ];

  const milestones = [
    { year: '2018', event: 'Founded Namfam with a vision to revolutionize IT recruitment' },
    { year: '2019', event: 'Reached 100 successful placements in first year' },
    { year: '2020', event: 'Expanded to serve Fortune 500 telecom companies' },
    { year: '2021', event: 'Achieved 90%+ candidate retention rate' },
    { year: '2022', event: 'Opened offices in 5 major tech hubs' },
    { year: '2023', event: 'Placed 1,000+ professionals in dream roles' },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section
        className="py-40 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: "url('/images/benefits-large.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Namfam
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md">
              Connecting exceptional IT talent with leading telecom companies since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To bridge the gap between exceptional IT talent and innovative telecom companies, 
                creating lasting partnerships that drive technological advancement and career growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe that the right match between talent and opportunity creates exponential 
                value for both individuals and organizations.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To become the most trusted and innovative recruitment partner in the telecom industry, 
                known for our deep understanding of technology trends and exceptional service.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We envision a future where every placement we make contributes to advancing 
                telecommunications technology and enriching professional careers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
          <section className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                            border border-gray-300 dark:border-gray-600 
                            bg-white dark:bg-gray-950"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                    style={{
                      backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))',
                    }}
                  ></div>

                  <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The experienced professionals driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative text-center p-8 rounded-2xl transition-all duration-300
                          bg-white dark:bg-gray-950 
                          border border-gray-300 dark:border-gray-600 
                          shadow-lg hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--tw-gradient-stops))',
                  }}
                ></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-cyan-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our growth and success
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            {milestones.map((milestone, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
  >
    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
      <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-[#ffffff1a] dark:hover:bg-[#ffffff1a] hover:bg-white transition-none">
        <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
          {milestone.year}
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {milestone.event}
        </p>
      </div>
    </div>
    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
  </motion.div>
))}



          </div>
        </div>
      </section>
    </main>
  );
}