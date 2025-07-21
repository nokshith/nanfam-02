'use client';

import { useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

export interface ApplicationFormProps {
  jobId: number;
  jobTitle: string;
  companyName: string;
  onClose: () => void;
}

export default function ApplicationForm({
  jobId,
  jobTitle,
  companyName,
  onClose,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let uploadedFileId: number | null = null;
      let resumeUrl: string | null = null;

      // Upload resume to Strapi
      if (formData.resume) {
        const fileData = new FormData();
        fileData.append('files', formData.resume);

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`,
          fileData
        );

        const uploaded = res.data[0];
        uploadedFileId = uploaded.id;
        resumeUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/${uploaded.hash}${uploaded.ext}`;
      }

      // Submit application to Strapi
      const applicationPayload = {
        data: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          resume: uploadedFileId ? [uploadedFileId] : [],
          job: jobId,
        },
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/job-applications`,
        applicationPayload
      );

      // Trigger backend email route
      await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          jobTitle,
          companyName,
          resumeUrl,
        }),
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Application error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Apply for this Job</h2>

        {success ? (
          <p className="text-green-600 font-semibold">
            Application submitted successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <textarea
              name="experience"
              placeholder="Brief summary of experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
