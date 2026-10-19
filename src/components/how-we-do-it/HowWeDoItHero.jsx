import Link from 'next/link';
import { FaChevronRight, FaFileAlt } from 'react-icons/fa';

export default function HowWeDoItHero() {
  return (
    <section className="w-full bg-[#050810] text-white pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-400/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-cyan-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] mb-5">
          <Link href="/" className="text-gray-500 hover:text-gray-300 transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[8px] text-gray-600" />
          <span className="text-amber-400 font-bold tracking-wider uppercase">
            MASTER EXECUTION & METHODOLOGY DOSSIER
          </span>
        </nav>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            <FaFileAlt className="text-[10px]" />
            STREAMLINED MASTER DOCUMENT • BEAPCAPITAL & DLSI ECOSYSTEM
          </span>
        </div>

        {/* Headline (two-tone) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          <span className="text-white">Unified Master Dossier: </span>
          <span className="text-amber-400">
            Execution Models, Governance, PPPs & Phygital Architecture
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
          A comprehensive, streamlined master document unifying BEAPCapital's execution models, platform governance (Sections A–D), contracting frameworks, PPP concession mechanics, franchising hierarchies, Liebreich's Phygital Criticality Index, and venture builder podcast blueprints into a single, cohesive operational reference.
        </p>

      </div>
    </section>
  );
}