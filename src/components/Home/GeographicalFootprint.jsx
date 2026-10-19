'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaGlobeAfrica, FaGlobeEurope, FaArrowRight, FaBuilding, FaBolt, FaSeedling, FaInfoCircle } from 'react-icons/fa';

const regions = {
  africa: {
    toggleLabel: 'Africa Footprint (Active Anchor)',
    toggleIcon: <FaGlobeAfrica />,
    // ...rest of africa content
    panelTitle: 'West Africa Operations & Advisory Hub',
    panelSubtitle: 'BEAPCapital Nigeria Limited (Abuja Regional Headquarters)',
    panelStatus: 'Active Operational Core',
    panelStatusColor: 'text-emerald-400 border-emerald-500/40',
    cards: [
      {
        icon: <FaBuilding />,
        iconColor: 'text-amber-400',
        title: 'Regional HQ & Advisory',
        description: 'Plot 1024, Usako District, Abuja, FCT, Nigeria.\nCoordinates infrastructure advisory, PPP transaction structuring, and corporate finance.',
      },
      {
        icon: <FaBolt />,
        iconColor: 'text-amber-400',
        title: 'Energy Grid Concessions',
        description: 'Abia State Electricity Transition & ARFAA Network.\nActive distribution ring-fencing, hybrid solar microgrids, and utility metering.',
      },
      {
        icon: <FaSeedling />,
        iconColor: 'text-amber-400',
        title: 'Bioscience & Trade Hubs',
        description: 'Idodo Market City & Regional CEA Pilot Facilities.\nHeliciculture extraction, vertical ginger farming, and regional trade infrastructure.',
      },
    ],
    footerLeft: 'Jurisdiction Scope: Full 54-Country Pan-African Concession & Advisory Footprint',
    footerRight: 'Anchor Jurisdiction: Federal Republic of Nigeria (Abuja HQ)',
  },
  europe: {
    toggleLabel: 'European Expansion Axis',
    toggleIcon: <FaGlobeEurope />,
    panelTitle: 'European Expansion & R&D Gateway',
    panelSubtitle: 'BEAPCapital Holding U.A. (Amsterdam / Madrid)',
    panelStatus: 'Expansion in Progress',
    panelStatusColor: 'text-amber-400 border-amber-400/40',
    cards: [
      {
        icon: <FaBuilding />,
        iconColor: 'text-amber-400',
        title: 'Holding & IP Domicile',
        description: 'Amsterdam, Netherlands.\nDomiciles master patents, BEAPOne UBCS code, and vPLC firmware vaults.',
      },
      {
        icon: <FaBolt />,
        iconColor: 'text-amber-400',
        title: 'R&D Innovation Axis',
        iconExtra: null,
        description: 'Madrid Gateway, Spain.\nEuropean startup visa framework under ENISA anchoring bio-extraction patents.',
      },
      {
        icon: <FaSeedling />,
        iconColor: 'text-amber-400',
        title: 'Capital & Partnerships',
        description: 'Dutch RVO Facilitator & Spanish ENISA.\nCross-border investment structuring and licensing shield operations.',
      },
    ],
    footerLeft: 'Jurisdiction Scope: EU Innovation Framework (Netherlands / Spain Axis)',
    footerRight: 'Anchor Jurisdiction: Kingdom of the Netherlands (Amsterdam HQ)',
  },
};

// Simple stylized Africa SVG — replace with a more detailed path if desired
const AfricaMap = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full max-h-[420px]" xmlns="http://www.w3.org/2000/svg">
    {/* Grid lines */}
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E1B4B" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="500" height="500" fill="url(#grid)" />

    {/* Africa outline (simplified path) */}
    <path
      d="M 180 80 Q 220 60 260 70 Q 320 80 350 120 Q 380 160 380 200 Q 380 240 360 280 Q 340 320 320 380 Q 300 440 280 460 Q 270 470 260 470 Q 240 470 235 450 Q 220 410 200 370 Q 160 300 140 240 Q 130 200 135 160 Q 145 120 180 80 Z"
      fill="#0A0928"
      stroke="#34D399"
      strokeWidth="1.5"
      opacity="0.9"
    />

    {/* Dashed route (Abuja to other locations) */}
    <line x1="250" y1="280" x2="290" y2="180" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
    <line x1="250" y1="280" x2="300" y2="350" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
    <line x1="250" y1="280" x2="200" y2="220" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

    {/* Location markers */}
    <g>
      {/* Abuja (main anchor) */}
      <circle cx="250" cy="280" r="10" fill="#FBBF24" opacity="0.2" />
      <circle cx="250" cy="280" r="5" fill="#FBBF24" />
      <text x="262" y="276" fill="#FBBF24" fontSize="10" fontWeight="bold">Abuja HQ Anchor</text>
      <text x="262" y="288" fill="#9CA3AF" fontSize="8">Plot 1024, Usako</text>

      {/* Idodo */}
      <circle cx="290" cy="180" r="3" fill="#34D399" />
      <text x="298" y="178" fill="#9CA3AF" fontSize="8">Idodo Market City</text>

      {/* Umuahia (Abia) */}
      <circle cx="300" cy="350" r="3" fill="#22D3EE" />
      <text x="308" y="348" fill="#9CA3AF" fontSize="8">Umuahia, Abia</text>

      {/* West Africa Regional */}
      <circle cx="200" cy="220" r="3" fill="#34D399" opacity="0.7" />
      <text x="208" y="218" fill="#6B7280" fontSize="8">W. Africa Regional</text>
    </g>
  </svg>
);

export default function GeographicalFootprint() {
  const [activeRegion, setActiveRegion] = useState('africa');
  const data = regions[activeRegion];

  return (
    <section className="w-full bg-[#1E1B4B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-4">
              GEOGRAPHICAL FOOTPRINT
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-2">
              Pan-African Execution & European R&D Gateway
            </h2>
            <p className="text-gray-400 text-xs md:text-sm">
              Switch between our active operating hub in West Africa and our European expansion gateway.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex items-center bg-[#0A0928] border border-white/10 rounded-lg p-1 gap-1 self-start md:self-auto">
            <button
              onClick={() => setActiveRegion('africa')}
              className={`flex items-center gap-2 text-[11px] font-bold tracking-wide px-3 py-2 rounded-md transition-colors ${
                activeRegion === 'africa'
                  ? 'bg-amber-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaGlobeAfrica className="text-xs" />
              Africa Footprint (Active Anchor)
            </button>
            <button
              onClick={() => setActiveRegion('europe')}
              className={`flex items-center gap-2 text-[11px] font-bold tracking-wide px-3 py-2 rounded-md transition-colors ${
                activeRegion === 'europe'
                  ? 'bg-amber-400 text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaGlobeEurope className="text-xs" />
              European Expansion Axis
            </button>
          </div>
        </div>

        {/* MAIN PANEL */}
        <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6">

          {/* Panel Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-400 text-lg mt-1" />
              <div>
                <h3 className="text-white text-base font-bold">{data.panelTitle}</h3>
                <p className="text-gray-500 text-[11px]">{data.panelSubtitle}</p>
              </div>
            </div>
            <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm border ${data.panelStatusColor} self-start md:self-auto`}>
              {data.panelStatus}
            </span>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {data.cards.map((card, index) => (
              <div key={index} className="bg-[#0F0D3B] border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${card.iconColor} text-xs`}>{card.icon}</span>
                  <h4 className="text-white text-xs font-bold">{card.title}</h4>
                </div>
                <p className="text-gray-400 text-[11px] leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* MAP PANEL */}
          <div className="bg-[#050810] border border-white/10 rounded-lg overflow-hidden">
            {/* Map Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-white/10">
              <span className="flex items-center gap-2 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                PAN-AFRICAN JURISDICTION MAP (ENTIRE CONTINENT)
              </span>
              <div className="flex items-center gap-4 text-[10px]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Active Continent Scope
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                  Abuja Regional HQ Anchor
                </span>
              </div>
            </div>

            {/* Map Body */}
            <div className="flex items-center justify-center p-4 bg-[#070A1A]">
              <AfricaMap />
            </div>

            {/* Map Footer */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-5 py-3 border-t border-white/10">
              <span className="text-cyan-400 text-[10px] font-semibold">
                {data.footerLeft}
              </span>
              <span className="text-amber-400 text-[10px] font-semibold">
                {data.footerRight}
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-6 pt-5 border-t border-white/10">
            <span className="flex items-center gap-2 text-gray-500 text-[10px]">
              <FaInfoCircle className="text-gray-600" />
              Geographical coordination governed via BEAPOne UBCS Global Situation Room
            </span>
            <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-[10px] font-bold tracking-wider uppercase transition-colors">
              Inquire about regional partner locations
              <FaArrowRight className="text-[9px]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}