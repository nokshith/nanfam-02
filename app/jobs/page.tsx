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
  ChevronRight,
  Building2,
} from 'lucide-react';
import dynamic from 'next/dynamic';

const ApplicationForm = dynamic(() => import('./components/ApplicationForm'), { ssr: false });

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [floatingElements, setFloatingElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
        setError("API URL is not configured. Please check your .env.local file.");
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/jobs?populate=*`);
        if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.statusText}`);
        
        const json = await res.json();
        if (!json.data) throw new Error("Invalid API response format.");
        
        const parsed = json.data.map((item: any) => ({
          id: item.id,
          ...item.attributes,
          description: item.attributes.description?.[0]?.children?.[0]?.text || 'More details about this exciting role will be shared during the interview process.',
        }));
        setJobs(parsed);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
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
          animate={{ y: [0, -50, 0], x: [0, randomX, 0] }}
          transition={{ duration: randomDuration, repeat: Infinity, delay: randomDelay, repeatType: 'reverse' }}
          style={{ left: `${randomLeft}%`, top: `${randomTop}%` }}
        />
      );
    });
    setFloatingElements(elements);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation =
      !locationFilter ||
      job.location?.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesExperience =
      !experienceFilter || job.type === experienceFilter;
    return matchesSearch && matchesLocation && matchesExperience;
  });

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section 
        // --- THIS IS THE KEY CHANGE ---
        // I've changed h-screen to h-[70vh] to make the section smaller.
        className="relative w-full h-[70vh] bg-black overflow-hidden"
      >
        <img src="/images/immm.webp" alt="Find Your Dream Job" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">{floatingElements}</div>
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 text-left z-10">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white text-4xl md:text-6xl font-bold max-w-2xl">
            Find Your Dream Job
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-white text-lg md:text-2xl mt-4 max-w-xl">
            Discover exciting opportunities at leading IT companies
          </motion.p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="mb-12">
            <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-slate-200/80 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative"><Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /><input type="text" placeholder="Job title or company" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></div>
                <div className="relative"><MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /><input type="text" placeholder="Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/></div>
                <div className="relative"><Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /><select value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"><option value="">All Types</option><option value="Full-time">Full-time</option><option value="Part-time">Part-time</option><option value="Internship">Internship</option></select></div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"><Filter className="w-5 h-5" /><span>Search</span></button>
              </div>
            </div>
          </div>
          
          {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          
          {!loading && !error && (
            <>
              <div className="mb-8"><h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{filteredJobs.length} Jobs Available</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 h-full flex flex-col shadow-md">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                           <Building2 className="h-6 w-6 text-slate-400" />
                           <span className="font-semibold text-slate-600 dark:text-slate-300">{job.company}</span>
                        </div>
                        <span className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{job.location}</span></div>
                        <div className="flex items-center gap-2"><DollarSign className="w-4 h-4" /><span>{job.salary}</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{job.experience}</span></div>
                      </div>

                      <div className="flex-grow space-y-4">
                        {/* Main Description (line-clamp removed) */}
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <p>{job.description}</p>
                        </div>
                        
                        {/* Benefits/Responsibilities (line-clamp removed) */}
                        {job.benefits && (
                          <div>
                            <h4 className="font-bold text-sm text-slate-1000 dark:text-slate-100 mb-2">Benefits & Responsibilities</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">
                              {job.benefits}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto pt-6 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <CalendarDays className="w-4 h-4" />
                          <span>Posted {new Date(job.posted).toLocaleDateString()}</span>
                        </div>
                        <button
                          onClick={() => handleApplyClick(job)}
                          className="group/button bg-blue-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 active:scale-100 transition-all duration-200 flex items-center gap-2"
                        >
                          <span>Apply</span>
                          <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {showForm && selectedJob && (
        <ApplicationForm jobId={selectedJob.id} jobTitle={selectedJob.title} companyName={selectedJob.company} onClose={() => setShowForm(false)} />
      )}
    </main>
  );
}