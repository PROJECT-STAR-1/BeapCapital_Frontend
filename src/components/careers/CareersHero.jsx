"use client";
import { useApplicationModal } from "./ApplicationModalContext";
import {
  FaArrowDown,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaUserTie,
  FaCrown,
  FaCompass,
} from "react-icons/fa";

const stats = [
  {
    label: "ACTIVE INTAKE STREAMS",
    value: "Cohort 2026-A",
    footer: "Abuja, Lagos & Nairobi",
    footerIcon: <FaMapMarkerAlt className="text-emerald-400" />,
  },
  {
    label: "PROGRAM GROUPS",
    value: "BEFLP | BMTDP | VDAP",
    footer: "Dynamic Register Tracks",
    footerIcon: <FaLayerGroup className="text-cyan-400" />,
  },
  {
    label: "EXPERIENCED HIRES",
    value: "Direct Lateral",
    footer: "Executive & Technical Roles",
    footerIcon: <FaUserTie className="text-purple-400" />,
  },
  {
    label: "PERMANENT ABSORPTION",
    value: "Stage 4",
    footer: "Leadership Succession",
    footerIcon: <FaCrown className="text-amber-400" />,
  },
];

export default function CareersHero() {
  const { openModal } = useApplicationModal();

  return (
    <section className="w-full bg-[#050810] text-white pt-16 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-amber-400/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            <FaCompass className="text-[10px]" />
            SOLVE COMPLEX MULTI-COUNTRY CHALLENGES
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          Careers: Solve the World's Hardest Infrastructure & Digital Problems
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          Whether you are an experienced lateral executive joining our operating
          hubs across Netherlands, Nigeria, and Kenya, or an ambitious intern
          entering the BEMTA Accelerator, we offer elite pathways to build
          Africa's digital and physical economy.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-16">
          {/* Primary — View Open Positions */}
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md transition-colors"
          >
            View Open Positions
            <FaArrowDown className="text-xs" />
          </a>

          {/* Secondary — Apply to BEMTA Cohort */}
          {/* <a
            href="#bemta-programs"
            className="inline-flex items-center gap-2 bg-[#0A0928] hover:bg-[#0F0D3B] border border-white/15 hover:border-white/25 text-white font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md transition-colors"
          >
            Apply to BEMTA Cohort 2026-A
          </a> */}
          <button
            onClick={() => openModal("beflp")}
            className="inline-flex items-center gap-2 bg-[#0A0928] hover:bg-[#0F0D3B] border border-white/15 hover:border-white/25 text-white font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md transition-colors"
          >
            Apply to BEMTA Cohort 2026-A
          </button>
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

              {/* Value */}
              <p className="text-white text-lg md:text-xl font-extrabold leading-tight mb-3">
                {stat.value}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-1.5">
                {stat.footerIcon}
                <span className="text-[10px] text-gray-400 ">
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
