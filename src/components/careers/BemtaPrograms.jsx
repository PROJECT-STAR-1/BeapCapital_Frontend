"use client";
import { useApplicationModal } from "./ApplicationModalContext";

import { FaChartLine, FaCode, FaSeedling, FaCheck } from "react-icons/fa";

const programs = [
  {
    label: "PROGRAM GROUP A",
    labelColor: "text-emerald-400",
    icon: <FaChartLine />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/30",
    title: "BEAP Ecosystem Future Leaders Program (BEFLP)",
    description:
      "Focuses on cross-functional operations, PMO administration, customer lifecycle management, and executive succession planning across the ecosystem.",
    bullets: [
      "Digital Operations & PMO Pods",
      "Master Task & WSR Management",
      "Executive Advisory & Town Halls",
    ],
    cta: "APPLY TO BEFLP",
    ctaClass: "bg-emerald-500 hover:bg-emerald-400 text-black",
    featured: true,
    modalTrack: "beflp",
  },
  {
    label: "PROGRAM GROUP B",
    labelColor: "text-cyan-400",
    icon: <FaCode />,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/30",
    title: "BEAP Modular Talent Development Program (BMTDP)",
    description:
      "Engineered for software engineers, UI/UX designers, cloud DevOps specialists, and technical writers powering BEAPOne UBOS & Lite.",
    bullets: [
      "Datiaxis Documentation Framework",
      "Full-Stack & Microservices Pods",
      "API Integration & QA Tracking",
    ],
    cta: "APPLY TO BMTDP",
    ctaClass:
      "bg-[#0A0928] hover:bg-[#0F0D3B] border border-cyan-500/50 text-cyan-400",
    featured: false,
    modalTrack: "bmtdp",
  },
  {
    label: "PROGRAM GROUP C",
    labelColor: "text-purple-400",
    icon: <FaSeedling />,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
    iconBorder: "border-purple-500/30",
    title: "Ventures Development Advisory Program (VDAP)",
    description:
      "Dedicated to investment research, asset register audits, B2B market expansion, and venture building across infrastructure and agritech hubs.",
    bullets: [
      "Asset & VDR Data Audits",
      "B2B Market Expansion Strategies",
      "Investment Research & Teaser Decks",
    ],
    cta: "APPLY TO VDAP",
    ctaClass:
      "bg-[#0A0928] hover:bg-[#0F0D3B] border border-purple-500/50 text-purple-400",
    featured: false,
    modalTrack: "vdap",
  },
];

export default function BemtaPrograms() {
  const { openModal } = useApplicationModal();

  return (
    <section
      id="bemta-programs"
      className="w-full bg-[#1E1B4B] text-white py-12 md:py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              PROGRAM GROUPS & TRACKS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Core BEMTA Accelerator Programs
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            BEMTA houses specialized program tracks with distinct operational
            focuses. Select a program group below to inspect its tailored PMO
            work registers and deliverables.
          </p>
        </div>

        {/* CARDS GRID — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-[#0A0928] rounded-xl p-6 flex flex-col transition-all ${
                program.featured
                  ? "border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/10"
                  : "border border-white/10"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-lg ${program.iconBg} border ${program.iconBorder} flex items-center justify-center mb-5`}
              >
                <span className={`${program.iconColor} text-base`}>
                  {program.icon}
                </span>
              </div>

              {/* Label */}
              <p
                className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${program.labelColor}`}
              >
                {program.label}
              </p>

              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-3">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed mb-5">
                {program.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-grow">
                {program.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2.5">
                    <FaCheck
                      className={`${program.labelColor} text-[9px] mt-1 flex-shrink-0`}
                    />
                    <span className="text-gray-300 text-[11px] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {/* <button
                className={`w-full font-bold text-[10px] tracking-wider uppercase py-3 rounded-md transition-colors ${program.ctaClass}`}
              >
                {program.cta}
              </button> */}
              <button
                onClick={() => openModal(program.modalTrack)}
                className={`w-full font-bold text-[10px] tracking-wider uppercase py-3 rounded-md transition-colors ${program.ctaClass}`}
              >
                {program.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
