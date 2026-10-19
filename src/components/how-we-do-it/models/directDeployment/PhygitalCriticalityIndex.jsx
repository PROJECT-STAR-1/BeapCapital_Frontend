const rows = [
  {
    label: 'ROW A: NO ALTERNATIVE (INFRASTRUCTURE BEDROCK)',
    labelColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    bg: 'bg-amber-950/15',
    // Rich content with bold inline highlights
    content: (
      <>
        Mandatory foundational Lego bricks for regional node activation:{' '}
        <span className="text-white font-bold">BEAPOne UBCS</span> (Kafka event fabric),{' '}
        <span className="text-white font-bold">Netherlands Master IP Vault</span> (BIT shields), and{' '}
        <span className="text-white font-bold">Utility Hub Inter-ties</span> (PaaS/WaaS grid independence).
      </>
    ),
  },
  {
    label: 'ROW C: HIGH-VALUE NICHES & ROW D: VIRAL FRONTENDS',
    labelColor: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    bg: 'bg-cyan-950/15',
    content: (
      <>
        <span className="text-white font-bold">Row C:</span> Heliscience mucin, Nutriscience insect protein, AfriQubes WealthTech.{' '}
        <span className="text-white font-bold">Row D:</span> SISA Smart Schools &amp; RooksAfrica TaskCamps functioning as digital portfolio and talent generation layers.
      </>
    ),
  },
  {
    label: 'ROW B: DOMINANT INDUSTRIAL CORE (HIGH-THROUGHPUT)',
    labelColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    bg: 'bg-emerald-950/15',
    content: (
      <>
        High-concurrency verticals with massive cost-leadership:{' '}
        <span className="text-white font-bold">DLS BioRefinery</span> (Spirulina &amp; lipids),{' '}
        <span className="text-white font-bold">Agricience</span> (12-tier CEA ginger/turmeric &gt; $99.2\%$ purity), and{' '}
        <span className="text-white font-bold">MaroonQubes DevTech</span> (MMC off-site pre-fabrication compression).
      </>
    ),
  },
  {
    label: 'ROW G: THE ROW OF DOOM (STRATEGIC EXCLUSIONS)',
    labelColor: 'text-rose-400',
    borderColor: 'border-rose-400/30',
    bg: 'bg-rose-950/15',
    content: (
      <>
        Strictly banned to prevent brand contamination: Open-Air/Unmonitored Assets, Non-Proprietary Supply Schemes bypassing the Mailslot Input Loop, and Capital-Intensive Direct B2C Retail.
      </>
    ),
  },
];

export default function PhygitalCriticalityIndex() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">

      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ PART V: STRATEGIC PRIORITY FRAMEWORK ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          The Phygital Criticality Index (Liebreich Adaptation)
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          Ranking ecosystem verticals and modules based on strategic necessity, no-alternative status for resilient development, and emerging market bankability.
        </p>
      </div>

      {/* 2×2 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`${row.bg} border ${row.borderColor} rounded-lg p-5`}
          >
            <p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${row.labelColor}`}>
              {row.label}
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              {row.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}