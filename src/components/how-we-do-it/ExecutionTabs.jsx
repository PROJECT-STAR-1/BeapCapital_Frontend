'use client';

import { useState } from 'react';
import {
  FaRocket,
  FaSeedling,
  FaBalanceScale,
  FaProjectDiagram,
  FaSitemap,
  FaStore,
  FaHandshake,
} from 'react-icons/fa';

// Import each model's content component
import DirectDeployment from './models/directDeployment/DirectDeployment';
import EcosystemDev from './models/EcosystemDev';
import JointVentureSPVs from './models/JointVentureSPVs';
import ProjectDev from './models/ProjectDev';
import ProgramDev from './models/ProgramDev';
import FranchisePrograms from './models/FranchisePrograms';
import Partnerships from './models/Partnerships';

// 👇 Tab definitions — order matters
const tabs = [
  { id: 'direct_deployment', label: 'Direct Deployment', icon: <FaRocket />, Component: DirectDeployment },
  { id: 'ecosystem_dev', label: 'Ecosystem Dev', icon: <FaSeedling />, Component: EcosystemDev },
  { id: 'joint_venture_spvs', label: 'Joint Venture SPVs', icon: <FaBalanceScale />, Component: JointVentureSPVs },
  { id: 'project_dev', label: 'Project Dev', icon: <FaProjectDiagram />, Component: ProjectDev },
  { id: 'program_dev', label: 'Program Dev', icon: <FaSitemap />, Component: ProgramDev },
  { id: 'franchise_programs', label: 'Franchise Programs', icon: <FaStore />, Component: FranchisePrograms },
  { id: 'partnerships', label: 'Partnerships', icon: <FaHandshake />, Component: Partnerships },
];

export default function ExecutionTabs() {
  const [activeTab, setActiveTab] = useState('direct_deployment');

  const active = tabs.find((t) => t.id === activeTab);
  const ActiveComponent = active.Component;

  return (
    <section className="w-full bg-[#0F0D3B] text-white pt-10 md:pt-12 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* TAB HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              [ PART I: 7 STRATEGIC EXECUTION MODELS ]
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Select an Execution Model to Inspect
            </h2>
          </div>

          {/* Sovereign Shield label */}
          <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            Sovereign & Credit Risk Shielded
          </div>
        </div>

        {/* TAB BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center gap-2 py-4 px-3 rounded-lg border transition-colors text-center ${
                activeTab === tab.id
                  ? 'bg-amber-400 border-amber-400 text-black'
                  : 'bg-[#0A0928] border-white/10 text-gray-300 hover:border-white/20'
              }`}
            >
              <span className={`text-base ${activeTab === tab.id ? 'text-black' : 'text-gray-400'}`}>
                {tab.icon}
              </span>
              <span className="text-[11px] font-bold leading-tight">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div>
          <ActiveComponent />
        </div>

      </div>
    </section>
  );
}