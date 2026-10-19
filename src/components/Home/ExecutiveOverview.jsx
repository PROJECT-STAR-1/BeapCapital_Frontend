import Link from 'next/link';
import { FaBriefcase, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const cards = [
  {
    icon: <FaBriefcase />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/25",
    category: "ACTIVE OPERATIONAL ANCHOR",
    title: "BEAPCapital Nigeria Limited",
    description: "Leading infrastructure development advisory, PPP transaction structuring, corporate finance, energy grid execution (ARFAA network), and internal treasury/MEARL frameworks.",
    footerLeft: "Jurisdiction: Abuja, Nigeria",
    footerRight: "100% Active",
    footerRightColor: "text-emerald-400",
    href: "/who-we-are#mandate",  // 👈 change this to your real route
  },
  {
    icon: <FaUsers />,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/15",
    iconBorder: "border-amber-400/25",
    category: "ECOSYSTEM SCALE",
    title: "5 Hubs | 16 Business Verticals",
    description: "Multi-sector architecture spanning DLS Bioscience, DLS Utility, DLS Real Estate, DLS Digital Services, and Standalone Education/Media segments.",
    footerLeft: "Framework: DangoDote-Model",
    footerRight: "Multi-Sector",
    footerRightColor: "text-amber-400",
    href: "/hub-centre-matrix",  // 👈 change this to your real route
  },
  {
    icon: <FaShieldAlt />,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/25",
    category: "CROSS-BORDER R&D AXIS",
    title: "European Expansion Gateway",
    description: "Active preparation under European Startup Visa frameworks (Dutch RVO Facilitator & Spanish ENISA) anchoring BEAPOne UBCS software code, vPLC metrology firmware, and bio-extraction patents.",
    footerLeft: "Target: NL / Spain Axis",
    footerRight: "R&D Gateway",
    footerRightColor: "text-cyan-400",
    href: "/what-we-do",  // 👈 change this to your real route
  },
];

export default function ExecutiveOverview() {
  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center mb-4">
          <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
            EXECUTIVE OVERVIEW
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-snug max-w-3xl mx-auto mb-4">
          Bridging Operational Execution in Africa with Global Tech Innovation
        </h2>

        <p className="text-gray-400 text-xs md:text-sm text-center max-w-3xl mx-auto leading-relaxed mb-10">
          BEAPCapital operates as an integrated multi-disciplinary advisory, project development, and asset-orchestration engine. Anchored by <span className="text-white font-semibold">BEAPCapital Nigeria Limited</span> in Abuja for West African market delivery, we are actively structuring our European expansion axis (Netherlands / Spain) to scale our proprietary digital, bio-industrial, and clean utility frameworks globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-9 h-9 rounded-md ${card.iconBg} border ${card.iconBorder} flex items-center justify-center mb-4`}>
                <span className={`${card.iconColor} text-sm`}>{card.icon}</span>
              </div>

              <p className="text-[9px] font-bold tracking-widest uppercase text-gray-500 mb-2">
                {card.category}
              </p>

              <h3 className="text-white text-base font-bold leading-snug mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 text-[11px] leading-relaxed flex-grow">
                {card.description}
              </p>

              {/* Existing footer: jurisdiction + status */}
              <div className="border-t border-white/10 pt-3 mt-4 flex items-center justify-between">
                <span className="text-gray-500 text-[10px]">{card.footerLeft}</span>
                <span className={`text-[10px] font-bold ${card.footerRightColor}`}>
                  {card.footerRight}
                </span>
              </div>

              {/* 👇 NEW: Learn More button */}
              <Link
                href={card.href}
                className={`mt-3 ${card.iconBg} border ${card.iconBorder} hover:bg-white/10 rounded-md py-2 px-3 flex items-center justify-between text-[10px] font-bold tracking-wider uppercase transition-colors group`}
              >
                <span className={card.iconColor}>Learn More</span>
                <FaArrowRight className={`${card.iconColor} text-[9px] group-hover:translate-x-1 transition-transform`} />
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}