import Link from 'next/link';
import { FaLock, FaArrowDown, FaBolt, FaLeaf, FaLayerGroup } from 'react-icons/fa';

const stats = [
  {
    label: 'TOTAL PIPELINE VALUE',
    value: '$145M+',
    icon: null,
    footer: 'Active Capital Deployed',
    footerIcon: '✓',
    footerColor: 'text-amber-400',
  },
  {
    label: 'POWER INFRASTRUCTURE',
    value: '45 MW',
    icon: <FaBolt className="text-amber-400" />,
    footer: 'ARFAA & Mini-Grid Capacity',
    footerIcon: null,
    footerColor: 'text-gray-400',
  },
  {
    label: 'AGRI-BIO & REAL ESTATE',
    value: '1,200+',
    icon: <FaLeaf className="text-emerald-400" />,
    footer: 'Hectares & GLA Footprint',
    footerIcon: null,
    footerColor: 'text-gray-400',
  },
  {
    label: 'ACTIVE HUBS',
    value: '4 Verticals',
    icon: <FaLayerGroup className="text-cyan-400" />,
    footer: 'Synergistic Ecosystem',
    footerIcon: null,
    footerColor: 'text-gray-400',
  },
];

export default function PipelineHero() {
  return (
    <section className="w-full bg-[#050810] text-white pt-12 md:pt-16 pb-16 md:pb-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-amber-400/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP-RIGHT: Institutional Data Room button */}
        <div className="flex justify-end mb-10 md:mb-12">
          <Link
            href="/institutional-data-room"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-md transition-colors whitespace-nowrap"
          >
            <FaLock className="text-xs" />
            Institutional Data Room
          </Link>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            DYNAMIC ECOSYSTEM PORTFOLIO & PIPELINE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          Engineering Sustainable Growth Across African Infrastructure, Bio-Industries & Digital Ecosystems.
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          Welcome to the BEAPCapital Project Pipeline. Designed to provide institutional partners, lenders, and strategic collaborators with transparent visibility into our multi-vertical asset base across Nigeria and regional markets.
        </p>

        {/* Buttons */}
<div className="flex flex-wrap gap-3 mb-16">
  {/* Primary — Explore Project Hubs */}
  <a
    href="#ecosystem-verticals"
    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md transition-colors"
  >
    Explore Project Hubs
    <FaArrowDown className="text-xs" />
  </a>

  {/* Secondary — MEARL Governance Framework */}
  <a
    href="#mearl-framework"
    className="inline-flex items-center gap-2 bg-[#0A0928] hover:bg-[#0F0D3B] border border-white/15 hover:border-white/25 text-white font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md transition-colors"
  >
    MEARL Governance Framework
  </a>
</div>

        {/* STATS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5"
            >
              {/* Label */}
              <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                {stat.label}
              </p>

              {/* Value + optional icon */}
              <div className="flex items-center gap-2 mb-3">
                <p className="text-white text-2xl font-extrabold leading-none">
                  {stat.value}
                </p>
                {stat.icon && <span className="text-base">{stat.icon}</span>}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-1.5">
                {stat.footerIcon && (
                  <span className={`text-[10px] font-bold ${stat.footerColor}`}>
                    {stat.footerIcon}
                  </span>
                )}
                <span className={`text-[10px] ${stat.footerColor}`}>
                  {stat.footer}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}