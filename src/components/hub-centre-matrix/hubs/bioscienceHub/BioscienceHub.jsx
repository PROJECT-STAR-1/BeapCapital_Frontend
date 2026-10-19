import Link from 'next/link';
import { FaFlask, FaEnvelope } from 'react-icons/fa';
import LegoBrickSynergy from './LegoBrickSynergy';
import HubCentreAdvisoryCTA from './HubCentreAdvisoryCTA';

// Status colors
const statusStyles = {
  'LAUNCHING SOON': 'bg-amber-500/15 border-amber-400/40 text-amber-400',
  'IN R&D': 'bg-cyan-500/15 border-cyan-400/40 text-cyan-400',
  'ACTIVE': 'bg-emerald-500/15 border-emerald-400/40 text-emerald-400',
};

const verticals = [
  {
    icon: '🌱',
    status: 'LAUNCHING SOON',
    title: 'Agricience (CEA Rhizomes)',
    description: '12-tier vertical H-Frame cultivation for shallow-root rhizomes (Ginger & Turmeric) with automated fertigation, LED spectral tuning, and >99.2% oleoresin purity.',
    integration: 'Plug-and-Play Skid',
  },
  {
    icon: '🧪',
    status: 'LAUNCHING SOON',
    title: 'Heliscience (Mucin Extraction)',
    description: 'Climate-decoupled BEAP-50 space-compressed heliculture producing high-purity functional mucin for global cosmetic and pharmaceutical manufacturing.',
    integration: 'Plug-and-Play Skid',
  },
  {
    icon: '🦠',
    status: 'IN R&D',
    title: 'DLS BioRefinery (Microalgae)',
    description: 'Industrial closed-loop photobioreactor (PBR) arrays cultivating high-yield Spirulina, bio-lipids, and clean protein feedstocks for aquaculture and human nutrition.',
    integration: 'Plug-and-Play Skid',
  },
  {
    icon: '🪰',
    status: 'IN R&D',
    title: 'Nutriscience (BSFL Protein)',
    description: 'High-throughput Black Soldier Fly Larvae (BSFL) bioconversion units transforming organic municipal and agricultural side-streams into uniform animal protein meal and lauric oils.',
    integration: 'Plug-and-Play Skid',
  },
];

export default function BioscienceHub() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8">

      {/* TOP HEADER ROW */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 pb-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Category badge */}
          <div>
            <span className="inline-block bg-amber-400/15 border border-amber-400/40 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
              BIOGENIC & AGRISCIENCE CORE
            </span>
          </div>
          {/* Governance info */}
          <div className="flex items-start gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500/25 border border-emerald-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <p className="text-gray-400 text-[10px] leading-relaxed">
              <span className="text-gray-500">Governance:</span> DLSiLabs B.V. (Netherlands IP Vault) & Abuja Execution Anchor
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md flex items-center gap-2 transition-colors self-start whitespace-nowrap"
        >
          <FaEnvelope className="text-xs" />
          Inquire About DLS Bioscience Hub
        </Link>
      </div>

      {/* HUB TITLE + DESCRIPTION */}
      <div className="mb-8">
        <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-extrabold leading-snug mb-4">
          <FaFlask className="text-amber-400 text-xl md:text-2xl" />
          DLS Bioscience Hub
        </h3>
        <p className="text-amber-400 text-xs md:text-sm font-semibold leading-relaxed mb-4 max-w-3xl">
          Controlled Environment Agriculture (CEA), closed-loop photobioreactors, industrial mucin extraction, and Black Soldier Fly Larvae protein bioconversion.
        </p>
        <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed max-w-3xl">
          The DLS Bioscience Hub engineers climate-decoupled biological production systems. By integrating vertical H-Frame cultivation with closed-loop microalgae PBRs and biogenic extraction, we achieve pharma-grade purity and zero-waste circular feedstocks.
        </p>
      </div>

      {/* VERIFIED VERTICALS */}
      <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">
        [ VERIFIED VERTICALS ( 4 DEPLOYMENT MODULES ) ]
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {verticals.map((vertical, index) => (
          <div
            key={index}
            className="bg-[#0F0D3B] border border-white/10 rounded-lg p-5 flex flex-col"
          >
            {/* Icon + Status */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-md bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-lg">
                {vertical.icon}
              </div>
              <span
                className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm border ${statusStyles[vertical.status]}`}
              >
                [{vertical.status}]
              </span>
            </div>

            {/* Title */}
            <h4 className="text-white text-sm font-bold leading-snug mb-3">
              {vertical.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 text-[11px] leading-relaxed flex-grow mb-5">
              {vertical.description}
            </p>

            {/* Footer: Integration + CTA */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-gray-500 text-[10px]">
                Integration: <span className="text-gray-400">{vertical.integration}</span>
              </span>
              <button className="text-amber-400 hover:text-amber-300 text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1">
                Request Brief →
              </button>
            </div>
          </div>
        ))}
      </div>
<LegoBrickSynergy />
    <HubCentreAdvisoryCTA />
    </div>
  );
}