'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaSitemap,
  FaFlask,
  FaBuilding,
  FaBolt,
  FaCode,
  FaIndustry,
  FaHeadset,
  FaArrowRight,
} from 'react-icons/fa';

// Import each tab's content
import Tier1Holdco from './tiers/Tier1Holdco';
import Tier2HubCo from './tiers/Tier2HubCo';
import Tier4SubCo from './tiers/Tier4SubCo';
import HubBioscience from './tiers/HubBioscience';
import HubRealEstate from './tiers/HubRealEstate';
import HubUtility from './tiers/HubUtility';
import HubDigital from './tiers/HubDigital';
import Tier5OpCo from './tiers/Tier5OpCo';

// 👇 Sidebar navigation
const sidebarItems = [
  {
    id: 'tier1',
    label: 'Tier 1: HoldCo & IP Vault (GOC)',
    icon: <FaSitemap />,
    Component: Tier1Holdco,
  },
  {
    id: 'tier2',
    label: 'Tier 2/3: HubCo ROC/SOC',
    icon: <FaSitemap />,
    Component: Tier2HubCo,
  },
  {
    id: 'tier4',
    label: 'Tier 4: SubCo COC & Sinks',
    icon: <FaSitemap />,
    Component: Tier4SubCo,
  },
  {
    id: 'hub_bioscience',
    label: 'Hub: DLS Bioscience Hub',
    icon: <FaFlask />,
    iconColor: 'text-emerald-400',
    Component: HubBioscience,
  },
  {
    id: 'hub_real_estate',
    label: 'Hub: DLS Real Estate Hub',
    icon: <FaBuilding />,
    iconColor: 'text-purple-400',
    Component: HubRealEstate,
  },
  {
    id: 'hub_utility',
    label: 'Hub: DLS Utility (PaaS/GaaS/WaaS)',
    icon: <FaBolt />,
    iconColor: 'text-amber-400',
    Component: HubUtility,
  },
  {
    id: 'hub_digital',
    label: 'Hub: DLS Digital & SaaS',
    icon: <FaCode />,
    iconColor: 'text-cyan-400',
    Component: HubDigital,
  },
  {
    id: 'tier5',
    label: 'Tier 5: OpCo SPVs & ELRA Leases',
    icon: <FaIndustry />,
    iconColor: 'text-rose-400',
    Component: Tier5OpCo,
  },
];

export default function VDRPortal() {
  const [activeTab, setActiveTab] = useState('tier1');

  const active = sidebarItems.find((t) => t.id === activeTab);
  const ActiveComponent = active.Component;

  return (
    <div className="w-full px-6 md:px-10 py-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR — sticky */}
        <aside className="lg:col-span-3 lg:sticky lg:top-6 lg:self-start">
          <div className="flex flex-col gap-5">

            {/* Navigation Card */}
            <div className="bg-[#0F0D3B] border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4 px-2">
                <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
                  Hierarchical Control Plane
                </p>
                <FaSitemap className="text-emerald-400 text-xs" />
              </div>

              <nav className="flex flex-col gap-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-left text-[11px] font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-emerald-900/40 border border-emerald-500/40 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className={item.iconColor || 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Support Card */}
            <div className="bg-[#0F0D3B] border border-white/10 rounded-xl p-5">
              <p className="flex items-center gap-2 text-emerald-400 text-[11px] font-bold tracking-wider uppercase mb-3">
                <FaHeadset className="text-xs" />
                Deal Team Support Desk
              </p>
              <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                Need custom node-level access rights or executive coordination in Utako, Abuja?
              </p>
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[10px] tracking-wider uppercase py-2.5 rounded-md transition-colors">
                Contact Lead Deal Partner
              </button>
            </div>

          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="lg:col-span-9">
          <ActiveComponent />
        </main>

      </div>
    </div>
  );
}