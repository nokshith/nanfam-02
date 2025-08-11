'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Users,
  CalendarDays,
  Filter,
  X,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const ApplicationForm = dynamic(() => import('./components/ApplicationForm'), { ssr: false });

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [floatingElements, setFloatingElements] = useState<JSX.Element[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/jobs`);
        const json = await res.json();
        const parsed = json.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          company: item.company,
          location: item.location,
          type: item.type,
          experience: item.experience,
          salary: item.salary,
          description: item.description?.[0]?.children?.[0]?.text || '',
          benefits: item.benefits || [],
          posted: item.posted || 'Recently posted',
        }));
        setJobs(parsed);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();

    const elements = [...Array(15)].map((_, i) => {
      const randomX = Math.random() * 50 - 25;
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const randomDuration = 4 + Math.random() * 2;
      const randomDelay = Math.random() * 2;

      return (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-20"
          animate={{ y: [0, -50, 0], x: [0, randomX, 0], rotate: [0, 360, 0] }}
          transition={{ duration: randomDuration, repeat: Infinity, delay: randomDelay }}
          style={{ left: `${randomLeft}%`, top: `${randomTop}%` }}
        />
      );
    });
    setFloatingElements(elements);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesExperience = !experienceFilter || job.experience === experienceFilter;
    return matchesSearch && matchesLocation && matchesExperience;
  });

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <img
          src="/images/immm.webp"
          alt="Find Your Dream Job"
          className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Floating Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingElements}
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg max-w-2xl"
          >
            Find Your Dream Job
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-lg md:text-2xl mt-4 drop-shadow-md max-w-xl"
          >
            Discover exciting opportunities at leading IT companies
          </motion.p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title or company"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    value={experienceFilter}
                    onChange={(e) => setExperienceFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  >
                    <option value="">All Experience</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Jobs Listing */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {filteredJobs.length} Jobs Available
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find your next opportunity in IT industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-medium">{job.company}</p>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">{job.type}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(job.benefits || []).map((benefit: string, i: number) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleApplyClick(job)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl max-w-xl w-full shadow-lg relative">
            <ApplicationForm
              jobId={selectedJob.id}
              jobTitle={selectedJob.title}
              companyName={selectedJob.company}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
              aria-label="Close image view"
            >
              <X size={24} />
            </button>
            <img
              src="/images/immm.png"
              alt="Find Your Dream Job"
              className="max-w-screen max-h-screen object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
