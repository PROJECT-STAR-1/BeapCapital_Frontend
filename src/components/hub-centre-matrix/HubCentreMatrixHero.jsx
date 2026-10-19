import Link from 'next/link';
import { FaChevronRight, FaLayerGroup } from 'react-icons/fa';

export default function HubCentreMatrixHero() {
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
            HUB CENTRE & ECOSYSTEM ARCHITECTURE
          </span>
        </nav>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
            <FaLayerGroup className="text-[10px]" />
            DLSI LEGO-BRICK ECOSYSTEM • 5 OPERATING HUBS & 16 VERTICALS
          </span>
        </div>

        {/* Headline (two-tone) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          <span className="text-white">Hub Centre Matrix: </span>
          <span className="text-amber-400">
            Orchestrating Phygital Infrastructure across Africa
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
          An upgraded professional web version of the BEAPCapital Hub Centre. Explore how our 5 specialized operating hubs and 16 business verticals snap together like Lego bricks to deliver clean energy, circular bio-refining, advanced real estate, and enterprise software control.
        </p>

      </div>
    </section>
  );
}