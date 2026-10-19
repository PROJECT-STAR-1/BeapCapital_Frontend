'use client';

import { useState } from 'react';

// 👇 Tab definitions with mock data for each view
const views = [
  {
    id: 'team_pod',
    label: 'TEAM POD VIEW',
    scope: 'ACTIVE SCOPE: DIGITAL OPERATIONS POD (TEAM ALPHA)',
    rows: [
      { rank: '#1', identifier: 'BEMTA-X79K', stream: 'BEFLP (Digital Ops)', country: 'Nairobi, KEN', score: '96.8%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#2', identifier: 'BEMTA-A12B', stream: 'BEFLP (Digital Ops)', country: 'Abuja, NGA', score: '94.1%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#3', identifier: 'BEMTA-F44M', stream: 'BEFLP (Digital Ops)', country: 'Lagos, NGA', score: '91.5%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#4', identifier: 'BEMTA-P09L', stream: 'BEFLP (Digital Ops)', country: 'Nairobi, KEN', score: '88.2%', status: 'Under Review', statusColor: 'amber' },
    ],
  },
  {
    id: 'program_group',
    label: 'PROGRAM GROUP VIEW',
    scope: 'ACTIVE SCOPE: PROGRAM GROUP A — BEFLP (ALL PODS)',
    rows: [
      { rank: '#1', identifier: 'BEMTA-X79K', stream: 'BEFLP (Digital Ops)', country: 'Nairobi, KEN', score: '96.8%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#2', identifier: 'BEMTA-C05T', stream: 'BEFLP (Strategy)', country: 'Abuja, NGA', score: '95.4%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#3', identifier: 'BEMTA-A12B', stream: 'BEFLP (Digital Ops)', country: 'Abuja, NGA', score: '94.1%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#4', identifier: 'BEMTA-N88R', stream: 'BEFLP (Marketing)', country: 'Lagos, NGA', score: '90.3%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#5', identifier: 'BEMTA-F44M', stream: 'BEFLP (Digital Ops)', country: 'Lagos, NGA', score: '89.7%', status: 'Under Review', statusColor: 'amber' },
    ],
  },
  {
    id: 'cohort',
    label: 'COHORT 2026-A VIEW',
    scope: 'ACTIVE SCOPE: FULL COHORT 2026-A (ALL PROGRAMS)',
    rows: [
      { rank: '#1', identifier: 'BEMTA-X79K', stream: 'BEFLP (Digital Ops)', country: 'Nairobi, KEN', score: '96.8%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#2', identifier: 'BEMTA-C05T', stream: 'BEFLP (Strategy)', country: 'Abuja, NGA', score: '95.4%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#3', identifier: 'BEMTA-A12B', stream: 'BEFLP (Digital Ops)', country: 'Abuja, NGA', score: '94.1%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#4', identifier: 'BEMTA-J33D', stream: 'BMTDP (Engineering)', country: 'Remote / Hybrid', score: '93.0%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#5', identifier: 'BEMTA-M77V', stream: 'VDAP (Investment)', country: 'Lagos, NGA', score: '91.6%', status: 'Qualified - Top Tier', statusColor: 'emerald' },
      { rank: '#6', identifier: 'BEMTA-F44M', stream: 'BEFLP (Digital Ops)', country: 'Lagos, NGA', score: '88.2%', status: 'Under Review', statusColor: 'amber' },
    ],
  },
];

const statusStyles = {
  emerald: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
  amber: 'bg-amber-400/15 border-amber-400/40 text-amber-400',
};

export default function Leaderboards() {
  const [activeTab, setActiveTab] = useState('team_pod');
  const active = views.find((v) => v.id === activeTab);

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                COMPETITIVE INTELLIGENCE
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
              Anonymous Multi-Tier Leaderboards
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Real-time performance rankings across teams, programs, and cohort intakes with privacy masking.
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap gap-2 lg:max-w-2xl">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveTab(view.id)}
                className={`text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md border transition-colors whitespace-nowrap ${
                  activeTab === view.id
                    ? 'bg-emerald-500 border-emerald-500 text-black'
                    : 'bg-[#0A0928] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* LEADERBOARD PANEL */}
        <div className="bg-[#0A0928] border border-white/10 rounded-xl overflow-hidden">

          {/* Panel Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-6 py-4 border-b border-white/10">
            <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
              {active.scope}
            </p>
            <p className="text-gray-500 text-[10px]">
              Composite Score = (Tasks 35% + Quality 35% + Schedule 15% + Audit 15%)
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Rank</th>
                  <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Participant Identifier</th>
                  <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Stream / Program</th>
                  <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Country Base</th>
                  <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Composite Score</th>
                  <th className="text-right text-gray-500 text-[10px] font-bold tracking-widest uppercase py-4 px-6">Gate Status</th>
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row, index) => (
                  <tr key={index} className="border-b border-white/5 last:border-b-0">
                    {/* Rank */}
                    <td className="py-4 px-6">
                      <span className="text-white text-[12px] font-bold">{row.rank}</span>
                    </td>
                    {/* Identifier */}
                    <td className="py-4 px-6">
                      <span className="text-emerald-400 text-[12px] font-semibold">{row.identifier}</span>
                    </td>
                    {/* Stream */}
                    <td className="py-4 px-6">
                      <span className="text-gray-300 text-[12px]">{row.stream}</span>
                    </td>
                    {/* Country */}
                    <td className="py-4 px-6">
                      <span className="text-gray-400 text-[12px]">{row.country}</span>
                    </td>
                    {/* Score */}
                    <td className="py-4 px-6">
                      <span className="text-white text-[12px] font-bold">{row.score}</span>
                    </td>
                    {/* Status pill */}
                    <td className="py-4 px-6 text-right">
                      <span
                        className={`inline-block text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${statusStyles[row.statusColor]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}