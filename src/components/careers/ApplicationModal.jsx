'use client';

import { useState, useEffect } from 'react';
import {
  FaPaperPlane,
  FaTimes,
  FaLinkedinIn,
  FaCloudUploadAlt,
  FaFilePdf,
  FaCheckCircle,
  FaTrash,
} from 'react-icons/fa';
import { useApplicationModal } from './ApplicationModalContext';

// 👇 Master list of Application Track options
const TRACK_OPTIONS = [
  // ===== General Tracks =====
  { value: '', label: '— Select an option —' },
  {
    group: 'General Tracks',
    options: [
      { value: 'experienced_lateral', label: 'Experienced Lateral / Executive Hire' },
      { value: 'beflp', label: 'BEFLP Cohort 2026-A (Future Leaders Program)' },
      { value: 'bmtdp', label: 'BMTDP Cohort 2026-A (Modular Talent Dev Program)' },
      { value: 'vdap', label: 'VDAP Cohort 2026-A (Ventures Development Program)' },
    ],
  },
  // ===== Specific Roles =====
  {
    group: 'Specific Positions',
    options: [
      { value: 'role_infrastructure_director', label: 'Senior Infrastructure & Energy Project Director' },
      { value: 'role_financial_controller', label: 'Chief Financial Controller & HoldCo Treasury Lead' },
      { value: 'role_digital_ops_intern', label: 'Digital Operations & PMO Intern (BEFLP)' },
      { value: 'role_fullstack_intern', label: 'Full-Stack Software Engineer Intern (BMTDP)' },
      { value: 'role_venture_analyst', label: 'Venture Development & Advisory Analyst (VDAP)' },
    ],
  },
];

// 👇 Country options
const COUNTRIES = [
  'Nigeria (Abuja / Lagos Hub)',
  'Kenya (Nairobi Hub)',
  'Netherlands (Amsterdam HQ)',
  'Spain (Madrid Gateway)',
  'United Kingdom',
  'United States',
  'Ghana',
  'South Africa',
  'Other / Remote',
];

export default function ApplicationModal() {
  const { isOpen, defaultTrack, closeModal } = useApplicationModal();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    track: '',
    country: COUNTRIES[0],
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Sync the incoming default track into the form when modal opens
  useEffect(() => {
    if (isOpen && defaultTrack) {
      setFormData((prev) => ({ ...prev, track: defaultTrack }));
    }
  }, [isOpen, defaultTrack]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          linkedin: '',
          track: '',
          country: COUNTRIES[0],
        });
        setResumeFile(null);
        setSubmitted(false);
        setError('');
      }, 300);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File handling
  const handleFile = (file) => {
    setError('');
    if (!file) return;
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Only PDF, DOC, or DOCX files are accepted.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be under 10 MB.');
      return;
    }
    setResumeFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.email || !formData.track || !resumeFile) {
      setError('Please fill in all required fields and upload a resume.');
      return;
    }

    // 👇 TODO: Replace with a POST to your backend/API route later
    const payload = {
      ...formData,
      resumeFileName: resumeFile.name,
      resumeFileSize: resumeFile.size,
      resumeFileType: resumeFile.type,
      submittedAt: new Date().toISOString(),
    };
    console.log('Candidate Dossier Submitted:', payload);

    setSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Panel */}
      <div className="relative bg-[#0A0928] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-md hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <div className="p-7 md:p-8">

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <FaPaperPlane className="text-emerald-400 text-lg" />
            </div>
            <div className="pt-1">
              <h2 className="text-white text-lg md:text-xl font-bold leading-snug mb-1">
                BEAPCapital Candidate Dossier Application
              </h2>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Submit your professional credentials, resume, and LinkedIn profile for experienced positions or BEMTA Cohort 2026-A.
              </p>
            </div>
          </div>

          {/* Success state */}
          {submitted ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-emerald-400 text-2xl" />
              </div>
              <h3 className="text-white text-base font-bold mb-2">
                Dossier Submitted Successfully
              </h3>
              <p className="text-gray-400 text-[11px]">
                Your application has been logged. Our deal team will review and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Florence Kemunto"
                  required
                  className="w-full bg-[#0F0D3B] border border-white/10 text-white placeholder-gray-500 text-[12px] px-3.5 py-3 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  Professional Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="candidate@domain.com"
                  required
                  className="w-full bg-[#0F0D3B] border border-white/10 text-white placeholder-gray-500 text-[12px] px-3.5 py-3 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedin" className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-400 text-sm">
                    <FaLinkedinIn />
                  </span>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-[#0F0D3B] border border-white/10 text-white placeholder-gray-500 text-[12px] pl-10 pr-3.5 py-3 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Application Track */}
              <div>
                <label htmlFor="track" className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  Application Track & Program Group
                </label>
                <select
                  id="track"
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0F0D3B] border border-white/10 text-white text-[12px] px-3.5 py-3 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer"
                >
                  {TRACK_OPTIONS.map((group, gi) =>
                    group.group ? (
                      <optgroup key={gi} label={group.group}>
                        {group.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </optgroup>
                    ) : (
                      <option key={gi} value={group.value}>
                        {group.label}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  Country of Residence / Remote Base
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-[#0F0D3B] border border-white/10 text-white text-[12px] px-3.5 py-3 rounded-md focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer"
                >
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  Upload Resume / Curriculum Vitae (PDF)
                </label>

                {resumeFile ? (
                  <div className="bg-[#0F0D3B] border border-emerald-500/40 rounded-md p-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <FaFilePdf className="text-emerald-400 text-lg flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-white text-[11px] font-semibold truncate">
                          {resumeFile.name}
                        </p>
                        <p className="text-gray-500 text-[10px]">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setResumeFile(null)}
                      className="w-7 h-7 rounded-md hover:bg-rose-500/15 text-gray-400 hover:text-rose-400 flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label="Remove file"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                ) : (
                  <label
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="block bg-[#0F0D3B] border-2 border-dashed border-white/15 hover:border-emerald-500/40 rounded-md p-6 text-center cursor-pointer transition-colors"
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(e) => handleFile(e.target.files?.[0])}
                      className="hidden"
                    />
                    <FaCloudUploadAlt className="text-emerald-400 text-2xl mx-auto mb-2" />
                    <p className="text-white text-[11px] font-semibold mb-1">
                      Click to upload resume <span className="text-gray-500 font-normal">or drag and drop</span>
                    </p>
                    <p className="text-gray-500 text-[10px]">
                      PDF, DOCX (Max 10MB)
                    </p>
                  </label>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="bg-rose-500/10 border border-rose-500/40 text-rose-400 text-[11px] px-3 py-2 rounded-md">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[11px] tracking-wider uppercase py-3.5 rounded-md transition-colors mt-2"
              >
                Transmit Candidate Dossier (Gate 0)
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}