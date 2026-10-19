'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGlobeEurope, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-500/25',
    text: 'inquiries@beapcapital.africa',
  },
  {
    icon: <FaMapMarkerAlt />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-500/25',
    text: 'BEAPCapital Nigeria Limited, Plot 1024, Utako District, Abuja, FCT, Nigeria',
  },
  {
    icon: <FaGlobeEurope />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/25',
    text: 'Expansion Hubs: Amsterdam, The Netherlands | Madrid, Spain',
  },
];

const inquiryCategories = [
  'Infrastructure Advisory & PPPs',
  'Phygital Utility Networks',
  'Enterprise SaaS & AI Software',
  'Bioscience & Trade Hubs',
  'European Expansion / R&D Axis',
  'Investment & Capital Partnerships',
  'Careers & Talent (BEMTA)',
  'Other',
];

export default function InquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: inquiryCategories[0],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Wire this up to your backend / email service (e.g., Resend, Formspree, API route)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN — Info */}
          <div>
            {/* Badge */}
            <div className="mb-4">
              <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                GLOBAL INQUIRIES
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
              Partner with BEAPCapital Ecosystem
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 max-w-lg">
              Whether you are an institutional investor, municipal partner, off-taker, or technology partner, reach out to connect with our active advisory team or European expansion unit.
            </p>

            {/* Contact Info Rows */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-md ${info.iconBg} border ${info.iconBorder} flex items-center justify-center flex-shrink-0`}>
                    <span className={`${info.iconColor} text-xs`}>{info.icon}</span>
                  </div>
                  <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed pt-1.5">
                    {info.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white text-[11px] font-bold mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Chima Orneike"
                  required
                  className="w-full bg-gray-200 text-gray-900 placeholder-gray-500 text-xs px-3.5 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>

              {/* Corporate Email */}
              <div>
                <label htmlFor="email" className="block text-white text-[11px] font-bold mb-2">
                  Corporate Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-gray-200 text-gray-900 placeholder-gray-500 text-xs px-3.5 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                />
              </div>

              {/* Inquiry Category */}
              <div>
                <label htmlFor="category" className="block text-white text-[11px] font-bold mb-2">
                  Inquiry Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-gray-200 text-gray-900 text-xs px-3.5 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
                >
                  {inquiryCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white text-[11px] font-bold mb-2">
                  Message / Proposal Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your project scope, capital inquiry, or partnership objective..."
                  required
                  className="w-full bg-gray-200 text-gray-900 placeholder-gray-500 text-xs px-3.5 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs tracking-wider uppercase py-3 rounded-md flex items-center justify-center gap-2 transition-colors mt-1"
              >
                {submitted ? 'Inquiry Submitted ✓' : 'Submit Corporate Inquiry'}
                {!submitted && <FaPaperPlane className="text-[11px]" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}