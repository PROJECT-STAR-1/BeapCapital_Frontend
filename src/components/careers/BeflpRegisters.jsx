'use client';

import { useState } from 'react';

// 👇 Tab definitions
const tabs = [
  {
    id: 'beflp',
    label: 'BEFLP REGISTERS',
    badge: 'PROGRAM GROUP A: BEFLP REGISTERS',
    headline: 'BEFLP Master Work Registers (Temp_1 - Temp_24)',
    description: 'Tailored PMO register architecture assigned specifically to Future Leaders & Digital Operations interns.',
    registers: [
      {
        title: 'Temp_1: Monthly Task Manager',
        description: 'Daily task execution, timelines, supervisor notes, and KPI progress.',
      },
      {
        title: 'Temp_4-6: Ecosystem Ads Registers',
        description: 'Multi-entity campaign tracking across BEAPCapital, BEAPUtility & UBOS.',
      },
      {
        title: 'Temp_7: Global Social Media Posting Register',
        description: 'Master scheduled feed, content types, asset links, and CTA links.',
      },
      {
        title: 'Temp_8: Subscriptions & Maturities Register',
        description: 'SaaS software inventory, cloud infra, and 30-day renewal alerts.',
      },
      {
        title: 'Temp_9: Corporate Email & BCP Register',
        description: 'Consolidated mailboxes, fallback Gmails, recovery phones, and 2FA.',
      },
      {
        title: 'Temp_10: Corporate Assets & Property Register',
        description: 'Hardware, credentials, and digital artifacts with 90-day CEO audits.',
      },
      {
        title: 'Temp_11: Minutes of Meeting & Attendance',
        description: 'Meeting metadata, embedded attendance logs, and action items.',
      },
      {
        title: 'Temp_12-15: WSR, Datiaxis, Archiving & Factsheets',
        description: 'Weekly status reports, documentation frameworks, and CMS factsheets.',
      },
    ],
  },
  {
    id: 'bmtdp',
    label: 'BMTDP REGISTERS',
    badge: 'PROGRAM GROUP B: BMTDP REGISTERS',
    headline: 'BMTDP Master Work Registers',
    description: 'Technical engineering registers for software, DevOps, and documentation interns.',
    registers: [
      { title: 'Temp_B1: Code Repository Register', description: 'Microservice repos, branch policies, PR review logs, and CI/CD pipelines.' },
      { title: 'Temp_B2: API Integration Tracker', description: 'Endpoint inventory, auth flows, webhook events, and rate-limit configurations.' },
      { title: 'Temp_B3: Datiaxis Documentation Register', description: 'Technical writing assignments, style guides, and publishing schedule.' },
      { title: 'Temp_B4: QA & Bug Register', description: 'Test case inventory, severity tracking, and regression logs.' },
      { title: 'Temp_B5: Cloud Infrastructure Register', description: 'Server inventory, IaC templates, secrets, and uptime SLAs.' },
      { title: 'Temp_B6: Design Systems Register', description: 'UI/UX components, Figma libraries, and design token mapping.' },
      { title: 'Temp_B7: Deployment Register', description: 'Release history, rollback plans, and environment matrices.' },
      { title: 'Temp_B8: Security & Compliance Register', description: 'Vulnerability scans, patch logs, and penetration test results.' },
    ],
  },
  {
    id: 'vdap',
    label: 'VDAP REGISTERS',
    badge: 'PROGRAM GROUP C: VDAP REGISTERS',
    headline: 'VDAP Master Work Registers',
    description: 'Investment and venture development registers for analysts and strategists.',
    registers: [
      { title: 'Temp_V1: Deal Pipeline Register', description: 'Active deals, stage, valuation, and investment committee notes.' },
      { title: 'Temp_V2: Asset & VDR Data Register', description: 'Due diligence artifacts, data room structure, and access logs.' },
      { title: 'Temp_V3: Financial Model Register', description: 'DCF models, scenario analysis, and sensitivity parameters.' },
      { title: 'Temp_V4: Investor Relations Register', description: 'LP contacts, capital call schedule, and distribution history.' },
      { title: 'Temp_V5: B2B Market Expansion Register', description: 'Partnership outreach, MOUs, and territory mapping.' },
      { title: 'Temp_V6: Investment Research Register', description: 'Sector reports, competitor benchmarks, and trend analysis.' },
      { title: 'Temp_V7: Teaser & Pitch Deck Register', description: 'Deck versions, feedback rounds, and final approved collateral.' },
      { title: 'Temp_V8: Portfolio Monitoring Register', description: 'KPI tracking, board meeting summaries, and exit readiness.' },
    ],
  },
];

export default function BeflpRegisters() {
  const [activeTab, setActiveTab] = useState('beflp');

  const active = tabs.find((t) => t.id === activeTab);

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER — flex on desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                {active.badge}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
              {active.headline}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              {active.description}
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap gap-2 lg:max-w-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md border transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 border-emerald-500 text-black'
                    : 'bg-[#0A0928] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* REGISTERS GRID — 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {active.registers.map((register, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-4 flex flex-col"
            >
              <h3 className="text-emerald-400 text-[12px] font-bold leading-snug mb-2">
                {register.title}
              </h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                {register.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}