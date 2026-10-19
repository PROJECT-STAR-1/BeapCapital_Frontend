const numberedItems = [
  {
    number: '1',
    title: 'Centralized Intellectual Brain',
    description: 'Master patents, BEAPOne UBCS code, and bio-extraction formulas reside safely in Netherlands & Spain Holding structures.',
  },
  {
    number: '2',
    title: 'Localized Execution SPVs',
    description: 'BEAPCapital Nigeria Limited & regional country nodes own physical land, concession contracts, and local equipment leases.',
  },
  {
    number: '3',
    title: 'Programmatic Software Bridges',
    description: 'Real-time edge telemetry and automated split-settlements connect physical assets directly to the central Situation Room.',
  },
];

const rows = [
  {
    label: 'ROW A: NO ALTERNATIVE — BEDROCK',
    labelColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    bg: 'bg-amber-950/20',
    description: 'BEAPOne UBCS Control Plane, Netherlands IP Vault, Co-located PaaS/WaaS Inter-ties.',
  },
  {
    label: 'ROW B: DOMINANT INDUSTRIAL CORE',
    labelColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    bg: 'bg-emerald-950/20',
    description: 'BioRefinery Microalgae, Agricience 12-tier CEA, MaroonQubes MMC Prefabrication.',
  },
  {
    label: 'ROW C: HIGH-VALUE NICHE MODULES',
    labelColor: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    bg: 'bg-cyan-950/20',
    description: 'Heliscience Mucin, Nutriscience Insect Protein, AfriQubes WealthTech Syndicates.',
  },
  {
    label: 'ROW D: TALENT & VIRAL FRONTENDS',
    labelColor: 'text-indigo-400',
    borderColor: 'border-indigo-400/30',
    bg: 'bg-indigo-950/20',
    description: 'STREAM SISA Academies, RooksAfrica TaskCamps & Social Commerce Nodes.',
  },
];

export default function OperatingPhilosophy() {
  return (
    <section id="philosophy" className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                06 / OPERATING PHILOSOPHY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-6">
              "Unity in Orchestration": Decoupling IP from Local Execution
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 mb-8">
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Traditional multi-national expansion into emerging markets fails because asset ownership and intellectual property are blended into volatile local operating entities.
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                BEAPCapital solves this through "Unity in Orchestration". We decouple core IP, master software code, and European capital vaults from localized physical execution, achieving rapid scalability while preserving absolute capital sovereignty.
              </p>
            </div>

            {/* Numbered Items */}
            <div className="flex flex-col gap-3">
              {numberedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1E1B4B]/60 border border-indigo-500/20 rounded-lg p-4 flex items-start gap-4"
                >
                  {/* Number Badge */}
                  <div className="w-7 h-7 rounded-md bg-indigo-900/60 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-300 text-xs font-bold">{item.number}</span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-white text-sm font-bold leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Phygital Criticality Index Card */}
          <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                THE PHYGITAL CRITICALITY INDEX
              </span>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                LIEBREICH ADAPTATION
              </span>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-3">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`${row.bg} border ${row.borderColor} rounded-lg p-4`}
                >
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${row.labelColor}`}>
                    [ {row.label} ]
                  </p>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    {row.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}