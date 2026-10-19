const gates = [
  {
    gate: 'GATE 0 (DAYS -10 TO 0)',
    gateColor: 'text-emerald-400',
    stage: 'Pre-Onboarding & Compliance',
    description: 'Offer letter execution, Appendix 3 compliance verification (Govt ID, proof of address), and Google Workspace provisioning.',
  },
  {
    gate: 'GATE 1 (MONTHS 1-3)',
    gateColor: 'text-emerald-400',
    stage: 'Stage 1: Foundational Internship',
    description: 'Unpaid skill acquisition & platform immersion. Focus on Temp_1 through Temp_15 PMO registers and Datiaxis writing.',
  },
  {
    gate: 'GATE 2 (MONTHS 4-6)',
    gateColor: 'text-emerald-400',
    stage: 'Stage 2: Execution Internship',
    description: 'Monetized monthly stipend. Active daily execution, webinar hosting, ads management (Temp_4-6), and client portal co-piloting.',
  },
  {
    gate: 'GATE 3 (MONTHS 7-12)',
    gateColor: 'text-emerald-400',
    stage: 'Stage 3: Contract Employment',
    description: 'Paid fixed-term remote salary. Full operational ownership over customer success channels and community hubs.',
  },
  {
    gate: 'GATE 4 (POST-MONTH 12)',
    gateColor: 'text-emerald-400',
    stage: 'Stage 4: Permanent Absorption',
    description: 'Full-time permanent staff enrolments, regional ecosystem leadership, and incoming cohort supervision.',
  },
  {
    gate: 'GATE 5 (ANY BOUNDARY)',
    gateColor: 'text-rose-400',
    stage: 'Offboarding & Alumni Network',
    description: 'Structured handovers, asset surrenders (Temp_10), access revocations (Temp_9), and transition to BEMTA Alumni Directory.',
  },
];

export default function ProgressionModel() {
  return (
    <section className="w-full bg-[#1E1B4B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              INTERNSHIP FACTORY ENGINE
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            6-Stage Progression & Funnel Elimination Model
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Our structured 12-month progression model utilizes rolling 90-day evaluation cycles, anonymous peer leaderboards, and explicit managerial handshakes to trim and advance talent.
          </p>
        </div>

        {/* GATES GRID — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gates.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              {/* Gate label */}
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${item.gateColor}`}>
                {item.gate}
              </p>

              {/* Stage title */}
              <h3 className="text-white text-base md:text-lg font-bold leading-snug mb-3">
                {item.stage}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}