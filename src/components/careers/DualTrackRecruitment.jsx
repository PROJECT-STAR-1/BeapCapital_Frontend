"use client";
import { useApplicationModal } from "./ApplicationModalContext";
import { FaBriefcase, FaGraduationCap, FaCheck } from "react-icons/fa";

const tracks = [
  {
    icon: <FaBriefcase />,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
    iconBorder: "border-blue-500/30",
    label: "TRACK 1: LATERAL & EXECUTIVE HIRES",
    labelColor: "text-blue-400",
    title: "Experienced Professionals & Leadership",
    description:
      "For seasoned engineers, project directors, financial controllers, and sector heads ready to lead operating units (OpCo SPVs), HubCo ROCs, or executive oversight in Utako, Abuja or Amsterdam.",
    bullets: [
      "Direct senior management and technical leadership roles",
      "Competitive compensation packaged with equity/spv participation",
      "Multi-jurisdiction deployment across ECOWAS, EAC, and EU hubs",
    ],
    buttonLabel: "APPLY AS EXPERIENCED HIRE",
    buttonClass: "bg-blue-500 hover:bg-blue-400 text-white",
    modalTrack: "experienced_lateral",
  },
  {
    icon: <FaGraduationCap />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/30",
    label: "TRACK 2: TALENT FACTORY",
    labelColor: "text-emerald-400",
    title: "BEMTA Accelerator (Cohort 2026-A)",
    description:
      "Our structured 12-month modular progression model for emerging operators, developers, and analysts. Moves from unpaid foundational acquisition (Stage 1) to permanent absorption (Stage 4).",
    bullets: [
      "Rigorous 90-day rolling stage-gate evaluation funnels",
      "Multi-tier anonymous leaderboards and structured PMO work registers",
      "Direct pipeline into permanent staff or BEMTA alumni network",
    ],
    buttonLabel: "APPLY TO BEMTA ACCELERATOR",
    buttonClass: "bg-emerald-500 hover:bg-emerald-400 text-black",
    modalTrack: "beflp",
  },
];

export default function DualTrackRecruitment() {
  const { openModal } = useApplicationModal();

  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              DUAL-TRACK RECRUITMENT
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Experienced Hires vs. BEMTA Accelerator
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            We maintain two distinct pathways for joining the BEAP Ecosystem.
            Choose the track that matches your professional experience level.
          </p>
        </div>

        {/* CARDS GRID — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-7 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-lg ${track.iconBg} border ${track.iconBorder} flex items-center justify-center mb-6`}
              >
                <span className={`${track.iconColor} text-lg`}>
                  {track.icon}
                </span>
              </div>

              {/* Label */}
              <p
                className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${track.labelColor}`}
              >
                {track.label}
              </p>

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
                {track.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-6">
                {track.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {track.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <FaCheck
                      className={`${track.labelColor} text-[10px] mt-1 flex-shrink-0`}
                    />
                    <span className="text-gray-300 text-[11px] md:text-xs leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {/* <button
                className={`w-full font-bold text-[11px] tracking-wider uppercase py-3.5 rounded-md transition-colors ${track.buttonClass}`}
              >
                {track.buttonLabel}
              </button> */}
              <button
                onClick={() => openModal(track.modalTrack)}
                className={`w-full font-bold text-[11px] tracking-wider uppercase py-3.5 rounded-md transition-colors ${track.buttonClass}`}
              >
                {track.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
