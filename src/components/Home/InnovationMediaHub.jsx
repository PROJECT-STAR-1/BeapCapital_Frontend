'use client';

import { useState, useMemo } from 'react';
import {
  FaShieldAlt,
  FaPlane,
  FaChartLine,
  FaNewspaper,
  FaBookOpen,
  FaFileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
  FaDownload,
} from 'react-icons/fa';

// 👇 Filter tabs
const filters = [
  { label: 'All Modules', value: 'all' },
  { label: 'IP & EU Gateway', value: 'ip_eu' },
  { label: 'InfraQubes & SocialQues', value: 'infraq_socialq' },
  { label: 'Resources & ESG', value: 'resources_esg' },
  { label: 'BEMTA & Careers', value: 'bemta_careers' },
];

// 👇 Card data
const modules = [
  {
    index: '01',
    category: 'PROPRIETARY IP',
    categoryColor: 'text-amber-400',
    icon: <FaShieldAlt />,
    iconColor: 'text-amber-500/60',
    iconBg: 'bg-amber-900/30',
    iconBorder: 'border-amber-800/40',
    title: 'Innovation Pipeline & IP Vault',
    description:
      'Master patent vault domiciled under Dutch structures protecting BEAPOne UBCS G-code compilers, vPLC metrology firmware, 12-tier vertical CEA H-Frames, and mucin extraction formulas.',
    cta: 'Inspect Patent Portfolio',
    ctaColor: 'text-amber-400 hover:text-amber-300',
    filter: 'ip_eu',
  },
  {
    index: '02',
    category: 'EU R&D AXIS',
    categoryColor: 'text-cyan-400',
    icon: <FaPlane />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/25',
    title: 'European Gateway (RVO/ENISA)',
    description:
      'Active preparation under Dutch RVO Facilitator and Spanish ENISA Startup Visa frameworks, bridging European technology transfer into pan-African deployment corridors.',
    cta: 'Read Expansion Brief',
    ctaColor: 'text-cyan-400 hover:text-cyan-300',
    filter: 'ip_eu',
  },
  {
    index: '03',
    category: 'TECHNICAL MEDIA',
    categoryColor: 'text-emerald-400',
    icon: <FaChartLine />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-500/25',
    title: 'InfraQubes Channel (Analytics)',
    description:
      'Deep-dive technical video analytics and engineering papers detailing sub-4ms power transient suppression, ARFAA grid ring-fencing, and PaaS/WaaS telemetry.',
    cta: 'Watch Technical Briefs',
    ctaColor: 'text-emerald-400 hover:text-emerald-300',
    filter: 'infraq_socialq',
  },
  {
    index: '04',
    category: 'SOCIETAL POLICY',
    categoryColor: 'text-amber-400',
    icon: <FaNewspaper />,
    iconColor: 'text-amber-500/60',
    iconBg: 'bg-amber-900/30',
    iconBorder: 'border-amber-800/40',
    title: 'SocialQues Channel (Research)',
    description:
      'Publishing policy insights on municipal trade hub activation, spatial economics, outgrower community empowerment, and regional economic corridor development.',
    cta: 'Access Policy Papers',
    ctaColor: 'text-amber-400 hover:text-amber-300',
    filter: 'infraq_socialq',
  },
  {
    index: '05',
    category: 'KNOWLEDGE BASE',
    categoryColor: 'text-cyan-400',
    icon: <FaBookOpen />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/25',
    title: 'Knowledge Resource Centre',
    description:
      'Central digital library housing technical whitepapers, feasibility studies, operational SOPs, and multi-vertical infrastructure deployment blueprints.',
    cta: 'Explore Resource Library',
    ctaColor: 'text-cyan-400 hover:text-cyan-300',
    filter: 'resources_esg',
  },
  {
    index: '06',
    category: 'COMPLIANCE & ESG',
    categoryColor: 'text-emerald-400',
    icon: <FaFileAlt />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-500/25',
    title: 'Corporate Downloads & ESG Reports',
    description:
      'Direct download access to Annual ESG & Impact Reports, NIRSAL 75% Credit Risk Guarantee structures, SOC2 audit certificates, and investor presentation decks.',
    cta: 'Download ESG Pack',
    ctaColor: 'text-emerald-400 hover:text-emerald-300',
    ctaIcon: <FaDownload className="text-[9px]" />,
    filter: 'resources_esg',
  },
  {
    index: '07',
    category: 'TALENT ACCELERATOR',
    categoryColor: 'text-indigo-400',
    icon: <FaGraduationCap />,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15',
    iconBorder: 'border-indigo-500/25',
    title: 'BEMTA Talent Accelerator',
    description:
      'BEAPCapital Ecosystem Modular Talent Acceleration portal governing intern onboarding, engineering hackathons, task registers, and young professional fast-track programs.',
    cta: 'Explore BEMTA Portal',
    ctaColor: 'text-indigo-400 hover:text-indigo-300',
    filter: 'bemta_careers',
  },
  {
    index: '08',
    category: 'GLOBAL CAREERS',
    categoryColor: 'text-amber-400',
    icon: <FaBriefcase />,
    iconColor: 'text-amber-500/60',
    iconBg: 'bg-amber-900/30',
    iconBorder: 'border-amber-800/40',
    title: 'Careers (Experienced Hires)',
    description:
      'Direct full-time career opportunities for senior infrastructure advisors, project directors, power grid engineers, bioscience researchers, and software architects across Abuja HQ and global hubs.',
    cta: 'View Open Positions',
    ctaColor: 'text-amber-400 hover:text-amber-300',
    filter: 'bemta_careers',
  },
];

export default function InnovationMediaHub() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredModules = useMemo(() => {
    return activeFilter === 'all'
      ? modules
      : modules.filter((m) => m.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              ECOSYSTEM INTELLIGENCE & FUTURE TALENT
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Innovation & Media Hub
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Connecting proprietary IP development, European expansion frameworks, technical analytics, societal research, and career acceleration pipelines.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center gap-1 bg-[#0A0928] border border-white/10 rounded-lg p-1.5">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`text-[11px] font-semibold px-4 py-2 rounded-md transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-amber-400 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredModules.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0928] border border-white/10 rounded-lg p-4 flex flex-col hover:border-white/20 transition-colors"
              >
                {/* Icon */}
                <div className={`w-9 h-9 rounded-md ${item.iconBg} border ${item.iconBorder} flex items-center justify-center mb-4`}>
                  <span className={`${item.iconColor} text-sm`}>{item.icon}</span>
                </div>

                {/* Index + Category */}
                <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${item.categoryColor}`}>
                  {item.index} / {item.category}
                </p>

                {/* Title */}
                <h3 className="text-white text-sm font-bold leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[11px] leading-relaxed flex-grow mb-4">
                  {item.description}
                </p>

                {/* CTA */}
                <button className={`flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase transition-colors self-start ${item.ctaColor}`}>
                  {item.cta}
                  {item.ctaIcon || <FaArrowRight className="text-[9px]" />}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No modules match this filter.
          </div>
        )}
      </div>
    </section>
  );
}