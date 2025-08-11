'use client';

import { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

export interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
  companyName: string;
  onClose: () => void;
}

export default function ApplicationForm({ jobId, jobTitle, companyName, onClose }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, resume: e.target.files?.[0] || null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) {
      setError("Please upload your resume (PDF).");
      return;
    }
    setSubmitting(true);
    setError(null);

    try {
      const fileData = new FormData();
      fileData.append('files', formData.resume);
      const uploadRes = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`, fileData);
      const uploadedFileId = uploadRes.data[0].id;

      const applicationPayload = {
        data: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          resume: uploadedFileId,
          job: jobId,
        },
      };
      await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/job-applications`, applicationPayload);

      setSuccess(true);
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      setError('❌ Failed to submit application. Please try again.');
      console.error('Application submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg w-full relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          aria-label="Close form"
        >
          <X size={20} />
        </button>

        {/* Job Info */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-blue-600">{jobTitle}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{companyName}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            We’re excited to have you apply! Please fill in the details below and attach your resume.
          </p>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="text-center py-6">
            <p className="text-green-600 font-semibold text-lg">
              ✅ Application submitted successfully!
            </p>
            <p className="text-gray-500 text-sm mt-2">Closing in 2 seconds...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="experience"
              placeholder="Brief summary of your experience"
              value={formData.experience}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload Resume (PDF)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0 file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
