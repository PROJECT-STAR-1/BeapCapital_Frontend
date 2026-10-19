'use client';

import { useState, useMemo } from 'react';
import {
  FaBolt,
  FaSeedling,
  FaFlask,
  FaLaptopCode,
  FaBuilding,
  FaBriefcase,
  FaDna,
  FaFire,
  FaWater,
  FaCoins,
  FaHardHat,
  FaMobileAlt,
  FaDatabase,
  FaBullhorn,
  FaGraduationCap,
  FaArrowRight,
  FaFilter
} from 'react-icons/fa';

// 👇 Status color mapping
const statusStyles = {
  ACTIVE: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
  'LAUNCHING SOON': 'bg-amber-400/15 border-amber-400/40 text-amber-400',
  'IN R&D': 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400',
};

// 👇 Filter definitions
const hubFilters = [
  { label: 'All Hubs', value: 'all' },
  { label: 'Bioscience', value: 'bioscience' },
  { label: 'Utility', value: 'utility' },
  { label: 'Real Estate', value: 'real_estate' },
  { label: 'Digital Services', value: 'digital_services' },
  { label: 'Advisory & Core', value: 'advisory_core' },
];

const stageFilters = [
  { label: 'All Stages', value: 'all' },
  { label: 'Active', value: 'ACTIVE' },
  { label: 'Launching Soon', value: 'LAUNCHING SOON' },
  { label: 'In R&D', value: 'IN R&D' },
];

// 👇 Portfolio data — one object per card
const portfolioItems = [
  {
    icon: <FaBolt />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'ACTIVE',
    hub: 'utility',
    hubLabel: 'DLS UTILITY HUB',
    title: 'Energy Vertical (ARFAA)',
    description: 'Turnkey clean grid development, PaaS microgrids, BESS trailers, and sub-4ms transient suppression.',
  },
  {
    icon: <FaSeedling />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'LAUNCHING SOON',
    hub: 'bioscience',
    hubLabel: 'DLS BIOSCIENCE HUB',
    title: 'Agricience (CEA Rhizomes)',
    description: '12-tier vertical H-Frame cultivation for shallow-root rhizomes (Ginger & Turmeric) with automated fertigation.',
  },
  {
    icon: <FaFlask />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'LAUNCHING SOON',
    hub: 'bioscience',
    hubLabel: 'DLS BIOSCIENCE HUB',
    title: 'Heliscience (Mucin Extract)',
    description: 'BEAP-50 space-compressed heliculture producing high-purity mucin for global pharma and cosmetics.',
  },
  {
    icon: <FaLaptopCode />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/25',
    status: 'LAUNCHING SOON',
    hub: 'digital_services',
    hubLabel: 'DLS DIGITAL SERVICES HUB',
    title: 'BEAPOne UBCS SaaS',
    description: 'AI-powered enterprise operating system with real-time multi-entity tracking and Cloud-Lock compliance.',
  },
  {
    icon: <FaBuilding />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'LAUNCHING SOON',
    hub: 'real_estate',
    hubLabel: 'DLS REAL ESTATE HUB',
    title: 'SquareQubes PropTech',
    description: 'Off-plan sales arbitrage, automated leasehold management, and short-let property operations.',
  },
  {
    icon: <FaBriefcase />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'ACTIVE',
    hub: 'advisory_core',
    hubLabel: 'BEAPCAPITAL NIGERIA',
    title: 'BEAPCapital Advisory',
    description: 'Infrastructure development advisory, PPP transaction structuring, corporate finance, and MEARL frameworks.',
  },
  {
    icon: <FaDna />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'bioscience',
    hubLabel: 'DLS BIOSCIENCE HUB',
    title: 'BioRefinery (Microalgae)',
    description: 'Closed-loop photobioreactor arrays producing high-purity Spirulina, lipids, and clean bio-feedstocks.',
  },
  {
    icon: <FaFlask />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'bioscience',
    hubLabel: 'DLS BIOSCIENCE HUB',
    title: 'Nutriscience (BSFL Protein)',
    description: 'High-throughput Black Soldier Fly larvae bioconversion producing uniform protein meal and oils.',
  },
  {
    icon: <FaFire />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'utility',
    hubLabel: 'DLS UTILITY HUB',
    title: 'Gas Vertical (GaaS)',
    description: 'Virtual gas pipelines, mobile cascades, and thermobaric-compensated metering for industrial LPG/CNG.',
  },
  {
    icon: <FaWater />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'utility',
    hubLabel: 'DLS UTILITY HUB',
    title: 'Water Vertical (WaaS)',
    description: 'Reverse Osmosis processing skids, atmospheric water generation, and BEAPWater telemetry tracking.',
  },
  {
    icon: <FaCoins />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'real_estate',
    hubLabel: 'DLS REAL ESTATE HUB',
    title: 'AfriQubes WealthTech',
    description: 'Democratic capital aggregation, fractionalized real estate ownership, and Dutch Cooperative trust structures.',
  },
  {
    icon: <FaHardHat />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'real_estate',
    hubLabel: 'DLS REAL ESTATE HUB',
    title: 'MaroonQubes DevTech',
    description: 'Modern Methods of Construction (MMC), pre-cast casing, IoT structural sensors, and drone LiDAR checks.',
  },
  {
    icon: <FaMobileAlt />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'LAUNCHING SOON',
    hub: 'digital_services',
    hubLabel: 'DLS DIGITAL SERVICES HUB',
    title: 'BEAPOne Lite SaaS',
    description: 'Modular, lean SaaS architecture tailored for small businesses, outgrowers, and franchise accounting.',
  },
  {
    icon: <FaDatabase />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'digital_services',
    hubLabel: 'DLS DIGITAL SERVICES HUB',
    title: 'DLSiLabs B.V. R&D',
    description: 'Proprietary Data Science models, edge IoT telemetry logic, predictive ML pipelines, and MERLA logic.',
  },
  {
    icon: <FaBullhorn />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'advisory_core',
    hubLabel: 'STANDALONE SEGMENT',
    title: 'RooksAfrica Media Nodes',
    description: 'Mass media, social commerce, specialized infrastructure mapping, and country-node operating shells.',
  },
  {
    icon: <FaGraduationCap />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    iconBorder: 'border-amber-400/25',
    status: 'IN R&D',
    hub: 'advisory_core',
    hubLabel: 'STANDALONE SEGMENT',
    title: 'Smart School (SISA)',
    description: 'STREAM International Scholars Academy — Hub-and-spoke smart school framework with asynchronous digital portfolios.',
  },
];

export default function EcosystemMatrix() {
  const [activeHub, setActiveHub] = useState('all');
  const [activeStage, setActiveStage] = useState('all');

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const hubMatch = activeHub === 'all' || item.hub === activeHub;
      const stageMatch = activeStage === 'all' || item.status === activeStage;
      return hubMatch && stageMatch;
    });
  }, [activeHub, activeStage]);

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              {/* Badge */}
              <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-4">
                PORTFOLIO ARCHITECTURE
              </span>
              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-2">
                The BEAPCapital Ecosystem Matrix
              </h2>
              {/* Description */}
              <p className="text-gray-400 text-xs md:text-sm max-w-xl">
                Explore our 16 portfolio verticals categorized across 5 operating hubs and real-time lifecycle stages.
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border ${statusStyles.ACTIVE}`}>
                [ACTIVE]
              </span>
              <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border ${statusStyles['LAUNCHING SOON']}`}>
                [LAUNCHING]
              </span>
              <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border ${statusStyles['IN R&D']}`}>
                [IN R&D]
              </span>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="bg-[#0A0928] border border-white/10 rounded-lg p-3 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Hub filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-500 mr-2">
              <FaFilter className="text-amber-400" />
              Filter Hub:
            </span>
            {hubFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveHub(filter.value)}
                className={`text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded transition-colors ${
                  activeHub === filter.value
                    ? 'bg-amber-400 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Stage dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
              Stage:
            </span>
            <select
              value={activeStage}
              onChange={(e) => setActiveStage(e.target.value)}
              className="bg-[#0F0D3B] border border-white/10 text-white text-[11px] px-3 py-1.5 rounded focus:outline-none focus:border-amber-400/50 cursor-pointer"
            >
              {stageFilters.map((stage) => (
                <option key={stage.value} value={stage.value}>
                  {stage.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* GRID */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0928] border border-white/10 rounded-lg p-4 flex flex-col hover:border-amber-400/30 transition-colors"
              >
                {/* Top Row: Icon + Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-9 h-9 rounded-md ${item.iconBg} border ${item.iconBorder} flex items-center justify-center`}>
                    <span className={`${item.iconColor} text-sm`}>{item.icon}</span>
                  </div>
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm border ${statusStyles[item.status]}`}>
                    {item.status === 'LAUNCHING SOON' ? '[LAUNCHING SOON]' : `[${item.status}]`}
                  </span>
                </div>

                {/* Hub Label */}
                <p className="text-[9px] font-bold tracking-widest uppercase text-gray-500 mb-2">
                  {item.hubLabel}
                </p>

                {/* Title */}
                <h3 className="text-white text-sm font-bold leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[11px] leading-relaxed flex-grow mb-4">
                  {item.description}
                </p>

                {/* View Details */}
                <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-[10px] font-bold tracking-wider uppercase transition-colors self-start">
                  View Specs / Details
                  <FaArrowRight className="text-[9px]" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No portfolio items match the selected filters.
          </div>
        )}
      </div>
    </section>
  );
}