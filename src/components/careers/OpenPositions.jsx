"use client";
import { useApplicationModal } from "./ApplicationModalContext";

import { useState, useMemo } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// 👇 Filter definitions
const filters = [
  { label: "ALL OPENINGS", value: "all" },
  { label: "EXPERIENCED HIRES", value: "experienced" },
  { label: "BEMTA INTERNS", value: "bemta" },
];

// 👇 Category pill styles
const categoryStyles = {
  experienced: "bg-blue-500/15 border-blue-500/40 text-blue-300",
  bemta: "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
};

// 👇 Button color variants
const buttonStyles = {
  blue: "bg-blue-500 hover:bg-blue-400 text-white",
  purple: "bg-purple-500 hover:bg-purple-400 text-white",
  emerald: "bg-emerald-500 hover:bg-emerald-400 text-black",
  outline_cyan:
    "bg-[#0A0928] hover:bg-[#0F0D3B] border border-cyan-500/50 text-cyan-400",
  outline_purple:
    "bg-[#0A0928] hover:bg-[#0F0D3B] border border-purple-500/50 text-purple-400",
};

// 👇 Job data
const positions = [
  {
    category: "EXPERIENCED LATERAL",
    categoryKey: "experienced",
    location: "Abuja / Remote",
    title: "Senior Infrastructure & Energy Project Director",
    description:
      "Lead execution of ARFAA power distribution frameworks, gas-to-power grid integration, and mini-grid deployment across regional operation hubs.",
    tags: ["Full-Time", "Power & Utilities", "10+ Years Exp"],
    buttonLabel: "APPLY FOR POSITION",
    buttonStyle: "blue",
    filter: "experienced",
    modalTrack: "role_infrastructure_director",
  },
  {
    category: "EXPERIENCED LATERAL",
    categoryKey: "experienced",
    location: "Amsterdam / Remote",
    title: "Chief Financial Controller & HoldCo Treasury Lead",
    description:
      "Manage Dutch Coöperatief financial clearinghouse operations, Dutch Bilateral Investment Treaty compliance, and cross-border SaaS royalty sweeps.",
    tags: ["Full-Time", "HoldCo Finance", "8+ Years Exp"],
    buttonLabel: "APPLY FOR POSITION",
    buttonStyle: "purple",
    filter: "experienced",
    modalTrack: "role_financial_controller",
  },
  {
    category: "BEMTA ACCELERATOR",
    categoryKey: "bemta",
    location: "Abuja / Lagos / Nairobi",
    title: "Digital Operations & PMO Intern (BEFLP Cohort 2026-A)",
    description:
      "Join Program Group A (BEFLP). Master the Monthly Task Manager (Temp_I), WSR registers, ad tracking, and executive support operations.",
    tags: ["12-Month Modular Track", "Program Group A", "Entry Level / NYSC"],
    buttonLabel: "APPLY TO BEFLP",
    buttonStyle: "emerald",
    filter: "bemta",
    modalTrack: "role_digital_ops_intern",
  },
  {
    category: "BEMTA ACCELERATOR",
    categoryKey: "bemta",
    location: "Remote / Hybrid",
    title: "Full-Stack Software Engineer Intern (BMTDP Cohort 2026-A)",
    description:
      "Join Program Group B (BMTDP). Build and test microservices for BEAPOne UBOS & Lite, API integrations, and Datiaxis technical documentation.",
    tags: ["12-Month Modular Track", "Program Group B", "Software & DevOps"],
    buttonLabel: "APPLY TO BMTDP",
    buttonStyle: "outline_cyan",
    filter: "bemta",
    modalTrack: "role_fullstack_intern",
  },
  {
    category: "BEMTA ACCELERATOR",
    categoryKey: "bemta",
    location: "Abuja / Lagos Hub",
    title: "Venture Development & Advisory Analyst (VDAP Cohort 2026-A)",
    description:
      "Join Program Group C (VDAP). Conduct asset register audits, financial modeling, VDR data room management, and B2B market expansion strategies.",
    tags: [
      "12-Month Modular Track",
      "Program Group C",
      "Investment & Advisory",
    ],
    buttonLabel: "APPLY TO VDAP",
    buttonStyle: "outline_purple",
    filter: "bemta",
    modalTrack: "role_venture_analyst",
  },
];

export default function OpenPositions() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { openModal } = useApplicationModal();

  const filteredPositions = useMemo(() => {
    return activeFilter === "all"
      ? positions
      : positions.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="open-positions"
      className="w-full bg-[#1E1B4B] text-white py-12 md:py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="max-w-md">
            <div className="mb-4">
              <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                CAREER OPPORTUNITIES
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
              Current Open Positions
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Browse open roles across our hubs, infrastructure verticals, and
              BEMTA accelerator tracks.
            </p>
          </div>

          {/* FILTER PILLS */}
          <div className="flex flex-wrap gap-2 lg:max-w-2xl">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md border transition-colors whitespace-nowrap ${
                  activeFilter === filter.value
                    ? "bg-amber-400 border-amber-400 text-black"
                    : "bg-[#0A0928] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* POSITIONS GRID */}
        {filteredPositions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className="bg-[#0A0928] border border-white/10 rounded-xl p-5 md:p-6 flex flex-col"
              >
                {/* Top row: category + location */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <span
                    className={`text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${categoryStyles[position.categoryKey]}`}
                  >
                    {position.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400">
                    <FaMapMarkerAlt className="text-emerald-400 text-[9px]" />
                    {position.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-3">
                  {position.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-5 flex-grow">
                  {position.description}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {position.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#0F0D3B] border border-white/10 text-gray-400 text-[10px] px-2.5 py-1 rounded-md whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Apply button */}
                {/* <button
                  className={`w-full font-bold text-[11px] tracking-wider uppercase py-3 rounded-md transition-colors ${buttonStyles[position.buttonStyle]}`}
                >
                  {position.buttonLabel}
                </button> */}
                <button
                  onClick={() => openModal(position.modalTrack)}
                  className={`w-full font-bold text-[11px] tracking-wider uppercase py-3 rounded-md transition-colors ${buttonStyles[position.buttonStyle]}`}
                >
                  {position.buttonLabel}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No positions match this filter.
          </div>
        )}
      </div>
    </section>
  );
}
