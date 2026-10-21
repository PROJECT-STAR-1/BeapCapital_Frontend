import Link from 'next/link';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import PlatformGovernance from './PlatformGovernance';
import CommercialLegalFrameworks from './CommercialLegalFrameworks';
import CommercialScalingFranchise from './CommercialScalingFranchise';
import PhygitalCriticalityIndex from './PhygitalCriticalityIndex';
import VentureBuilderPodcast from './VentureBuilderPodcast';
import ExecutiveAdvisoryCTA from './ExecutiveAdvisoryCTA';

const mechanics = [
  'Off-site pre-fabrication in MaroonQubes DevTech yards',
  'Standardized 14-week installation to revenue-ready state',
  '24/7 direct telemetry link to central Situation Room',
  '100% BEAPCapital ownership & operated under strict SLA',
];

const specs = [
  { label: 'Governance Layer:', value: 'BEAPCapital Nigeria / DLSiLabs B.V.' },
  { label: 'Key Technical Feature:', value: '14-Week Off-Site Pre-Fabrication & On-Site Turnkey Commissioning', highlight: true },
  { label: 'Ideal Partner Profile:', value: 'Commercial trade hubs, industrial estates, agricultural concessions, and municipal utility zones.' },
];

export default function DirectDeployment() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT — Main content */}
        <div className="lg:col-span-2">
          {/* Small badge */}
          <span className="inline-block bg-amber-400/15 border border-amber-400/40 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm mb-5">
            EXECUTION MODEL 01 / TURNKEY CAPEX
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
            Direct Deployment (Turnkey EPC+F)
          </h3>

          {/* Highlighted lead paragraph */}
          <p className="text-amber-400 text-sm font-semibold leading-relaxed mb-5 max-w-2xl">
            100% BEAPCapital-funded or EPC+F balance-sheet deployment of <span className="font-bold">standardized off-site pre-fabricated utility and bio-refining nodes</span>.
          </p>

          {/* Body paragraph */}
          <p className="text-gray-400 text-[12px] md:text-sm leading-relaxed mb-8 max-w-2xl">
            BEAPCapital directly finances, manufactures, installs, and operates infrastructure nodes on a turnkey EPC+F basis. Utilizing MaroonQubes pre-cast modular construction, containerized PaaS/WaaS/GaaS skids, and 12-tier vertical CEA arrays, direct deployment bypasses local supply-chain bottlenecks and establishes 100% operational compliance from day one.
          </p>

          {/* Core Operational Mechanics */}
          <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">
            [ CORE OPERATIONAL MECHANICS ]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {mechanics.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#0F0D3B] border border-white/10 rounded-lg p-3.5"
              >
                <FaCheckCircle className="text-emerald-400 text-xs mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-[11px] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            // href="/contact"
            href="#"
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-6 py-3 rounded-md flex items-center gap-3 transition-colors"
          >
            <FaEnvelope className="text-xs" />
            Inquire About Direct Deployment (Turnkey EPC+F)
          </Link>
        </div>

        {/* RIGHT — Engagement Specifications */}
        <div className="lg:col-span-1">
          <div className="bg-[#050810] border border-white/10 rounded-xl p-6">
            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-5">
              [ ENGAGEMENT SPECIFICATIONS ]
            </p>

            <div className="flex flex-col gap-5">
              {specs.map((spec, index) => (
                <div key={index} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-gray-500 text-[10px] font-semibold mb-1.5">
                    {spec.label}
                  </p>
                  <p className={`text-[11px] leading-relaxed ${
                    spec.highlight ? 'text-emerald-400 font-semibold' : 'text-gray-300'
                  }`}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PART II — Platform Governance */}
      <PlatformGovernance />
      {/* PART III — Commercial & Legal Frameworks */}
      <CommercialLegalFrameworks />
 {/* PART IV — Commercial Scaling & Franchise Tiers */}
      <CommercialScalingFranchise />
      {/* PART V — Phygital Criticality Index */}
      <PhygitalCriticalityIndex />
      {/* PART VI — Venture Builder & Investor Podcast */}
      <VentureBuilderPodcast />
      {/* PART VII — Executive Advisory CTA */}
      <ExecutiveAdvisoryCTA />
   
   
    </div>
  );
}