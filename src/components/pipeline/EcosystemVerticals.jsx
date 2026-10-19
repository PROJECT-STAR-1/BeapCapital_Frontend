'use client';

import { useState, useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// 👇 Filter definitions
const filters = [
  { label: 'ALL VERTICALS', value: 'all' },
  { label: 'INFRASTRUCTURE & ENERGY', value: 'infrastructure' },
  { label: 'AGROTECHNOLOGY & BIO', value: 'agrotech' },
  { label: 'REAL ESTATE', value: 'real_estate' },
  { label: 'DIGITAL PLATFORMS', value: 'digital' },
];

// 👇 Status pill style variations (based on card status text)
const statusStyles = {
  'Active Execution': 'bg-amber-400/15 border-amber-400/40 text-amber-400',
  'Financing / Scaling': 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
  'Development Stage': 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400',
  'Active Rollout': 'bg-amber-400/15 border-amber-400/40 text-amber-400',
  'Concept & Feasibility': 'bg-gray-500/15 border-gray-400/40 text-gray-300',
  'Development Phase': 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400',
};

// 👇 Category pill style variations
const categoryStyles = {
  'INFRASTRUCTURE & ENERGY': 'bg-blue-500/15 border-blue-500/40 text-blue-300',
  'AGROTECHNOLOGY & BIO': 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
  'REAL ESTATE': 'bg-purple-500/15 border-purple-500/40 text-purple-300',
  'DIGITAL PLATFORMS': 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400',
};

// 👇 Project data
const projects = [
  {
    category: 'INFRASTRUCTURE & ENERGY',
    status: 'Active Execution',
    title: 'ARFAA Power Transition & Ring-Fenced Projects',
    description: 'Deployment of ring-fenced power distribution frameworks and gas-to-power infrastructure ensuring reliable industrial and urban electrification.',
    specs: [
      { label: 'Capacity Target:', value: '45 MW Network' },
      { label: 'Regulatory Status:', value: 'Concession Secured', highlight: true },
      { label: 'Hub:', value: 'Power Distribution & Transition' },
    ],
    milestone: 'Milestone: 75% Complete',
    filter: 'infrastructure',
  },
  {
    category: 'AGROTECHNOLOGY & BIO',
    status: 'Financing / Scaling',
    title: 'DLS Bioscience Hub: Heliscience & Microalgae',
    description: 'Advanced bio-industrial complex focusing on vertical ginger farming, microalgae/spirulina biorefineries, and BSFL bioconversion for sustainable feeds.',
    specs: [
      { label: 'Output Capacity:', value: '5,000 MT / Annum' },
      { label: 'Regulatory Status:', value: 'Environmental Clearance', highlight: true },
      { label: 'Hub:', value: 'DLS Bioscience Hub' },
    ],
    milestone: 'Milestone: Capital Syndication',
    filter: 'agrotech',
  },
  {
    category: 'REAL ESTATE',
    status: 'Development Stage',
    title: 'Idodo Market City & Moringafrica Hub',
    description: 'Next-generation commercial trading hubs and agro-logistics centers designed to streamline regional supply chains and modern retail infrastructure.',
    specs: [
      { label: 'Gross Leasable Area:', value: '120,000 sqm GLA' },
      { label: 'Footfall Projections:', value: '45,000 Daily Visitors', highlight: true },
      { label: 'Hub:', value: 'Urban Infrastructure Hub' },
    ],
    milestone: 'Milestone: Architectural Phasing',
    filter: 'real_estate',
  },
  {
    category: 'DIGITAL PLATFORMS',
    status: 'Active Rollout',
    title: 'BCAP Ecosystem & SISA Smart Schools',
    description: 'Unified Business Operating System (BCAP) integrated with STREAM International Scholars Academy (SISA) smart campus infrastructure.',
    specs: [
      { label: 'Institutional Adoption:', value: '25+ Campuses' },
      { label: 'Deployment Status:', value: 'Phase 2 Scaling', highlight: true },
      { label: 'Hub:', value: 'BCAP & Smart Systems Hub' },
    ],
    milestone: 'Milestone: Multi-Tenant Live',
    filter: 'digital',
  },
  {
    category: 'INFRASTRUCTURE & ENERGY',
    status: 'Concept & Feasibility',
    title: 'Regional Mini-Grid & Gas-to-Power Hubs',
    description: 'Decentralized solar-hybrid and compressed natural gas generation units engineered to power agrarian clusters and industrial parks.',
    specs: [
      { label: 'Target Capacity:', value: '15 MW Distributed' },
      { label: 'Regulatory Status:', value: 'Permitting Phase', highlight: 'amber' },
      { label: 'Hub:', value: 'Decentralized Energy Hub' },
    ],
    milestone: 'Milestone: Site Survey',
    filter: 'infrastructure',
  },
  {
    category: 'AGROTECHNOLOGY & BIO',
    status: 'Development Phase',
    title: 'Heliscience Phytochemical Extraction Facility',
    description: 'Specialized laboratory and processing plant extracting high-grade active ingredients from indigenous medicinal and aromatic flora for global export.',
    specs: [
      { label: 'Throughput:', value: '500 T Raw Material / Yr' },
      { label: 'Compliance:', value: 'GMP Standard Design', highlight: true },
      { label: 'Hub:', value: 'DLS Bioscience Hub' },
    ],
    milestone: 'Milestone: Equipment Procurement',
    filter: 'agrotech',
  },
];

export default function EcosystemVerticals() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    return activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section id="ecosystem-verticals" className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

       {/* HEADER — flex on desktop, stack on mobile */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
  <div className="max-w-md">
    <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
      Ecosystem Verticals & Hubs
    </h2>
    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
      Filter projects dynamically by operational stage or industrial vertical.
    </p>
  </div>

  {/* FILTER PILLS */}
  <div className="flex flex-wrap gap-2 lg:max-w-2xl">
    {filters.map((filter) => (
      <button
        key={filter.value}
        onClick={() => setActiveFilter(filter.value)}
        className={`text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md border transition-colors whitespace-nowrap ${
          activeFilter === filter.value
            ? 'bg-amber-400 border-amber-400 text-black'
            : 'bg-[#0A0928] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
        }`}
      >
        {filter.label}
      </button>
    ))}
  </div>
</div>

        {/* PROJECTS GRID */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#0A0928] border border-white/10 rounded-xl p-5 flex flex-col"
              >
                {/* Top pills row */}
                <div className="flex flex-wrap items-start gap-2 mb-5">
                  <span
                    className={`text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${categoryStyles[project.category]}`}
                  >
                    {project.category}
                  </span>
                  <span
                    className={`text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-base md:text-lg font-bold leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[11px] leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Specs table */}
                <div className="border-t border-white/10 pt-4 mb-4 flex flex-col gap-2">
                  {project.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center justify-between gap-3">
                      <span className="text-gray-500 text-[10px]">{spec.label}</span>
                      <span
                        className={`text-[10px] font-semibold text-right ${
                          spec.highlight === true
                            ? 'text-emerald-400'
                            : spec.highlight === 'amber'
                            ? 'text-amber-400'
                            : 'text-white'
                        }`}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-gray-500 text-[10px]">
                    {project.milestone}
                  </span>
                  <button className="text-amber-400 hover:text-amber-300 text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5">
                    View Brief
                    <FaArrowRight className="text-[9px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No projects match this filter.
          </div>
        )}

      </div>
    </section>
  );
}