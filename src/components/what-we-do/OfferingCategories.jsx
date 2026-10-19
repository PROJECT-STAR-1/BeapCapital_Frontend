import Link from 'next/link';
import {
  FaBoxOpen,
  FaHandshake,
  FaPuzzlePiece,
  FaMicrochip,
  FaIndustry,
  FaProjectDiagram,
  FaArrowRight,
} from 'react-icons/fa';

const categories = [
  {
    number: '01',
    label: 'TURNKEY HARDWARE & SOFTWARE',
    labelColor: 'text-amber-400',
    icon: <FaBoxOpen />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    title: 'Products',
    description: 'Standardized, modular physical hardware skids (PaaS solar BESS, RO water skids, CEA vertical H-Frames) and proprietary software platforms (BEAPOne UBCS).',
    cta: 'Explore Products Portfolio',
    ctaColor: 'text-amber-400 hover:text-amber-300',
    href: '/what-we-do/products',
  },
  {
    number: '02',
    label: 'ADVISORY & OPERATIONS',
    labelColor: 'text-emerald-400',
    icon: <FaHandshake />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    title: 'Services',
    description: 'Infrastructure development advisory, PPP transaction preparation, corporate restructuring, MEARL auditing, and managed utility operations (PaaS/GaaS/WaaS).',
    cta: 'Explore Advisory & Services',
    ctaColor: 'text-emerald-400 hover:text-emerald-300',
    href: '/what-we-do/services',
  },
  {
    number: '03',
    label: 'END-TO-END DELIVERY',
    labelColor: 'text-cyan-400',
    icon: <FaPuzzlePiece />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-400/30',
    title: 'Solutions',
    description: 'Integrated circular bio-refineries, off-grid industrial microgrids, diaspora property trust syndications, and K-12 smart school networks.',
    cta: 'Explore Integrated Solutions',
    ctaColor: 'text-cyan-400 hover:text-cyan-300',
    href: '/what-we-do/solutions',
  },
  {
    number: '04',
    label: 'DEEP-TECH & ENGINEERING',
    labelColor: 'text-indigo-400',
    icon: <FaMicrochip />,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15',
    iconBorder: 'border-indigo-400/30',
    title: 'Capabilities',
    description: 'SHA-256 telemetry tokenization, sub-4ms transient power suppression, automated 1.5-second Cloud-Locks, and 12-tier vertical CEA fertigation.',
    cta: 'Inspect Core Capabilities',
    ctaColor: 'text-indigo-400 hover:text-indigo-300',
    href: '/what-we-do/capabilities',
  },
  {
    number: '05',
    label: 'TARGETED DOMAIN PRACTICES',
    labelColor: 'text-amber-400',
    icon: <FaIndustry />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    title: 'Industry Focus Sectors',
    description: 'Targeted interventions across Agriculture & Bio-Tech, Renewable Energy & Power, Real Estate & Urban Dev, Municipal Utilities, and EdTech.',
    cta: 'Explore Industry Sectors',
    ctaColor: 'text-amber-400 hover:text-amber-300',
    href: '/what-we-do/industry-sectors',
  },
  {
    number: '06',
    label: 'REAL-WORLD CONCESSIONS',
    labelColor: 'text-emerald-400',
    icon: <FaProjectDiagram />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    title: 'Projects & Pipeline',
    description: 'Active concessions and pilots including the ARFAA Electricity Ring-Fence, Idodo Market City, CEA Ginger Pilot Nodes, and SISA Smart Campus.',
    cta: 'Inspect Active Projects',
    ctaColor: 'text-emerald-400 hover:text-emerald-300',
    href: '/what-we-do/projects',
  },
];

export default function OfferingCategories() {
  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Select an Offering Category to Explore
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Choose from our 6 primary delivery categories to inspect detailed business segment operations, technical specs, and downloadable assets.
          </p>
        </div>

        {/* CARDS GRID — 3×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-[#0A0928] border border-white/10 hover:border-white/20 rounded-xl p-6 flex flex-col transition-colors"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg ${item.iconBg} border ${item.iconBorder} flex items-center justify-center mb-6`}>
                <span className={`${item.iconColor} text-lg`}>{item.icon}</span>
              </div>

              {/* Number + Category */}
              <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${item.labelColor}`}>
                {item.number} / {item.label}
              </p>

              {/* Title */}
              <h3 className="text-white text-xl font-bold leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed flex-grow mb-6">
                {item.description}
              </p>

              {/* CTA */}
              <div className={`border-t border-white/10 pt-4 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase transition-colors ${item.ctaColor}`}>
                <span>{item.cta}</span>
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}