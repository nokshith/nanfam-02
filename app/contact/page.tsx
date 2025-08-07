'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general',
  });

  const [floatingElements, setFloatingElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
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
          animate={{
            y: [0, -50, 0],
            x: [0, randomX, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: randomDuration,
            repeat: Infinity,
            delay: randomDelay,
          }}
          style={{
            left: `${randomLeft}%`,
            top: `${randomTop}%`,
          }}
        />
      );
    });
    setFloatingElements(elements);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks! Your message was submitted.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nomail@nanfam.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (949) 701-5396',
      description: 'Call us during business hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '8600 Freeport Pkwy Suite # 220, Irving, TX 75063, United States',
      description: 'Visit our headquarters',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/company/nanfam',
      description: 'Connect with us professionally',
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section
        className="py-40 bg-cover bg-center text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/technology-large.webp')",
        }}
      >
        {/* SVG Pattern Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements}
        </div>

        {/* Text Content Aligned Right */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Let&apos;s Connect
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-md">
              Ready to find your next great hire or dream job? We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company (optional)"
          className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          <option value="general">General</option>
          <option value="hire">Looking to Hire</option>
          <option value="job">Looking for Job</option>
          <option value="partner">Partnership</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded flex items-center gap-2"
        >
          <Send className="w-5 h-5" /> Send
        </button>
      </form>
    </motion.div>

    {/* Contact Info */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
        >
          <div className="p-2 bg-blue-500 text-white rounded">
            {<info.icon className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h3>
            <p className="text-blue-500 dark:text-cyan-400">{info.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{info.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Visit Our Office</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Located in the heart of Irving, Texas</p>
            <div className="h-96 rounded-xl overflow-hidden">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.101362125486!2d78.37401757533185!3d17.454861983443873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bb7dec9cb882131%3A0xce527b77e8848a2c!2sVirtueServe%20R%26D%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752214935670!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0125646912347!2d-97.01686842418567!3d32.92426627360252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2975f4400001%3A0xe8d9994191f9d6ec!2sVirtueS!5e0!3m2!1sen!2sin!4v1754387751976!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
