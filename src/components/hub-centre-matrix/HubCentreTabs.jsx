'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  FaFlask,
  FaBolt,
  FaBuilding,
  FaMicrochip,
  FaBriefcase,
} from 'react-icons/fa';

// Import hub content components
import BioscienceHub from './hubs/bioscienceHub/BioscienceHub';
import UtilityHub from './hubs/UtilityHub';
import RealEstateHub from './hubs/RealEstateHub';
import DigitalServicesHub from './hubs/DigitalServicesHub';
import StandaloneAdvisoryHub from './hubs/StandaloneAdvisoryHub';

// 👇 Tab definitions — 5 hubs
const tabs = [
  {
    id: 'bioscience',
    label: 'DLS BIOSCIENCE HUB',
    count: '4 Verticals',
    icon: <FaFlask />,
    Component: BioscienceHub,
  },
  {
    id: 'utility',
    label: 'DLS UTILITY HUB',
    count: '3 Verticals (ARFAA)',
    icon: <FaBolt />,
    Component: UtilityHub,
  },
  {
    id: 'real_estate',
    label: 'DLS REAL ESTATE HUB',
    count: '3 Verticals',
    icon: <FaBuilding />,
    Component: RealEstateHub,
  },
  {
    id: 'digital_services',
    label: 'DIGITAL SERVICES HUB',
    count: '3 Verticals (UBOS)',
    icon: <FaMicrochip />,
    Component: DigitalServicesHub,
  },
  {
    id: 'standalone',
    label: 'STANDALONE & ADVISORY',
    count: '3 Verticals',
    icon: <FaBriefcase />,
    Component: StandaloneAdvisoryHub,
  },
];

const DEFAULT_TAB = 'bioscience';

export default function HubCentreTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 👇 Initial tab from ?tab=xxx, fallback to default
  const initialTab = searchParams.get('tab') || DEFAULT_TAB;
  const validInitial = tabs.some((t) => t.id === initialTab)
    ? initialTab
    : DEFAULT_TAB;

  const [activeTab, setActiveTab] = useState(validInitial);

  // 👇 Sync: URL → state (handles back/forward navigation)
  useEffect(() => {
    const urlTab = searchParams.get('tab') || DEFAULT_TAB;
    const validTab = tabs.some((t) => t.id === urlTab) ? urlTab : DEFAULT_TAB;
    setActiveTab(validTab);
  }, [searchParams]);

  // 👇 Sync: state → URL (with replace so no full navigation)
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.replace(`${pathname}?tab=${tabId}`, { scroll: false });
  };

  const active = tabs.find((t) => t.id === activeTab) || tabs[0];
  const ActiveComponent = active.Component;

  return (
    <section className="w-full bg-[#0F0D3B] text-white pt-10 md:pt-12 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* TAB HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              [ HUB CENTRE COMMAND DECK ]
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Select an Ecosystem Hub to Inspect Verticals
            </h2>
          </div>

          {/* Sync status pill */}
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold px-3 py-1.5 rounded-md self-start md:self-auto">
            <span className="w-4 h-4 rounded-full bg-emerald-500/25 border border-emerald-500/50 flex items-center justify-center">
              <span className="text-[7px]">✓</span>
            </span>
            16 Verticals Synchronized
          </div>
        </div>

        {/* TAB BAR — 5 hub cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-3 py-5 px-3 rounded-xl border transition-all duration-300 text-center ${
                activeTab === tab.id
                  ? 'bg-amber-400 border-amber-400 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-[#0A0928] border-white/10 text-gray-300 hover:border-white/20'
              }`}
            >
              <span
                className={`text-xl ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-400'
                }`}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] font-bold leading-tight tracking-wide">
                {tab.label}
              </span>
              <span
                className={`text-[10px] ${
                  activeTab === tab.id ? 'text-black/70' : 'text-gray-500'
                }`}
              >
                {tab.count}
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