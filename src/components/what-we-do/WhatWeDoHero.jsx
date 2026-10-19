import Link from 'next/link';
import { FaChevronRight, FaLayerGroup } from 'react-icons/fa';

export default function WhatWeDoHero() {
  return (
    <section className="w-full bg-[#050810] text-white pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-400/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-cyan-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-5">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[8px] text-gray-600" />
          <span className="text-gray-400">What We Do</span>
        </nav>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            <FaLayerGroup className="text-[10px]" />
            INTEGRATED ENTERPRISE OFFERINGS
          </span>
        </div>

        {/* Headline (two-tone) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          <span className="text-white">What We Do: </span>
          <span className="text-amber-400">
            Products, Services & Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
          Explore BEAPCapital's multi-disciplinary capabilities spanning infrastructure advisory, turnkey bio-industrial hardware products, decentralized utility solutions, enterprise software platforms, and pan-African project concessions.
        </p>

      </div>
    </section>
  );
}