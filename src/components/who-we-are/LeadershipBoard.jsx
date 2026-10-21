import Link from 'next/link';
import { FaUserTie, FaArrowRight, FaUsers } from 'react-icons/fa';

const leaders = [
  {
    icon: <FaUserTie />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    company: 'BEAPCAPITAL HOLDING U.A.',
    companyColor: 'text-amber-400',
    title: 'Executive Chairman & Group CEO',
    subtitle: 'Global Ecosystem Strategy & Capital Allocation',
    description: 'Architect of the BEAPCapital phygital framework, overseeing global corporate governance, European expansion, and master patent vault structures in the Netherlands.',
  },
  {
    icon: <FaUserTie />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    company: 'BEAPCAPITAL NIGERIA LTD',
    companyColor: 'text-emerald-400',
    title: 'Managing Director — West Africa',
    subtitle: 'Infrastructure Advisory & PPP Execution',
    description: 'Leads Abuja headquarters operations, driving PPP transaction preparation, corporate restructuring, NIRSAL credit guarantees, and energy grid concessions.',
  },
  {
    icon: <FaUserTie />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-400/30',
    company: 'DLSiLABS B.V. (NETHERLANDS)',
    companyColor: 'text-cyan-400',
    title: 'Chief Technology Officer',
    subtitle: 'BEAPOne UBCS & IoT Telemetry Architecture',
    description: 'Directs deep-tech R&D, edge sensor metrology, cryptographic tokenization engines, and automated software Cloud-Lock compliance systems.',
  },
];

export default function LeadershipBoard() {
  return (
    <section id="leadership" className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              05 / LEADERSHIP & BOARD
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Executive Leadership & Advisory Board
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            A multi-disciplinary team combining decades of expertise in infrastructure development, corporate finance, deep tech, and PPP execution.
          </p>
        </div>

        {/* LEADERSHIP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-lg ${leader.iconBg} border ${leader.iconBorder} flex items-center justify-center mb-6`}>
                <span className={`${leader.iconColor} text-2xl`}>{leader.icon}</span>
              </div>

              {/* Company */}
              <p className={`text-[9px] font-bold tracking-widest uppercase mb-2 ${leader.companyColor}`}>
                {leader.company}
              </p>

              {/* Title */}
              <h3 className="text-white text-base font-bold leading-snug mb-1">
                {leader.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-500 text-[10px] font-medium mb-4">
                {leader.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed flex-grow mb-5">
                {leader.description}
              </p>

              {/* CTA */}
              <button className="w-full bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/30 hover:border-amber-400/50 text-white text-[11px] font-bold tracking-wider uppercase py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors">
                View Detailed Profile
                <FaArrowRight className="text-[9px]" />
              </button>
            </div>
          ))}
        </div>

        {/* SENIOR ADVISORY COUNCIL PANEL */}
        <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            
            {/* Left: Text */}
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                <FaUsers className="text-[11px]" />
                SENIOR ADVISORY COUNCIL
              </p>
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-2">
                International Advisory & Compliance Board
              </h3>
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                Composed of former sovereign finance ministers, multilateral development bank executives, European legal scholars, and bio-industrial engineers guiding global governance.
              </p>
            </div>

            {/* Right: CTA */}
            <Link
              // href="/contact"
              href="#"
              className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-6 py-3 rounded-md flex items-center gap-2 transition-colors self-start md:self-auto whitespace-nowrap"
            >
              Inquire About Governance Board
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
} 