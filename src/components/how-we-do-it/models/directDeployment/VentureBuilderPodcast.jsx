const cards = [
  {
    number: '1.',
    title: 'Holdco & Subsidiary Blueprint',
    pill: 'Cross-Border',
    description: 'Deconstructing BEAPCapital Holding U.A. (Netherlands IP Vault) and BEAPCapital Nigeria Ltd (Abuja Execution Anchor) as a multi-tier risk-shielded entity protected by Dutch Bilateral Investment Treaties (BITs).',
    question: 'How do you protect foreign equity against sovereign currency depreciation?',
    answer: 'Hard-currency indexed off-take contracts and Netherlands Holdco tax shields.',
  },
  {
    number: '2.',
    title: 'The 5 Hubs & 16 Verticals Matrix',
    pill: 'Modular Scale',
    description: 'How DLS Bioscience, Utility, Real Estate, Digital Services, and Standalone Education snap together like Lego bricks to achieve a $35\\%$ CapEx reduction through shared circular utility loops.',
    question: 'What prevents individual vertical silos from failing independently?',
    answer: 'Circular co-location sharing of PaaS/WaaS utilities and unified Ledgering.',
  },
  {
    number: '3.',
    title: 'De-Risking via NIRSAL & ELRA',
    pill: 'Bankability',
    description: 'De-Risking CapEx through NIRSAL\'s $75\\%$ Credit Risk Guarantee (CRG) and ELRA leasebacks to achieve a $0\\%$ asset abandonment baseline across all deployed modular nodes.',
    question: 'What are the default risk metrics on local outgrower loans?',
    answer: '75% principal protection backed by NIRSAL CRG syndication.',
  },
  {
    number: '4.',
    title: 'BEAPOne UBCS Control Plane',
    pill: 'Telemetry',
    description: 'Real-time telemetry, SHA-256 tokenization, $\\le 50\\text{ms}$ split-fee settlements, and the $\\le 1.5\\text{s}$ programmatic Cloud-Lock enforcement mechanism.',
    question: 'How does the control plane enforce a 1.5-second automated Cloud-Lock without violating local data sovereignty laws (NDPA/GDPR)?',
    answer: 'PII stays on local servers while anonymized telemetry triggers remote locks.',
  },
  {
    number: '5.',
    title: 'PPPs and Franchising Scalability',
    pill: 'Concessions',
    description: 'Structuring DBFOM/BOOT concessions alongside Master and Area Development franchise models for rapid territorial expansion without 100% corporate balance sheet exposure.',
    question: 'How long is the typical concession payback period?',
    answer: 'Standardized 20-to-30-year DBFOM cycles with quarterly availability payments.',
  },
  {
    number: '6.',
    title: 'Phygital Criticality Index',
    pill: 'Prioritization',
    description: 'Applying Liebreich\'s ladder to prioritize capital allocation toward Row A bedrock (UBCS, IP vaults) and Row B industrial core assets (BioRefinery, CEA, MaroonQubes).',
    question: 'Why exclude direct B2C retail (Row of Doom)?',
    answer: 'High capital leakage and brand dilution risk; we focus strictly on B2B and sovereign off-take.',
  },
];

export default function VentureBuilderPodcast() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">

      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ PART VI: VENTURE BUILDER & INVESTOR PODCAST ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          Recommended Podcast Title & Hard-Hitting Investor Q&A Synthesis
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          An executive narrative and investor pitch synthesis designed for venture builders, institutional investors, and accelerators exploring granular phygital orchestration.
        </p>
      </div>

      {/* PODCAST TITLE CALLOUT */}
      <div className="bg-[#050810] border-2 border-amber-400/60 rounded-xl p-6 md:p-8 mb-8 text-center">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-4">
          RECOMMENDED PODCAST TITLE
        </p>
        <h4 className="text-white text-xl md:text-2xl font-extrabold leading-snug mb-3">
          "The Phygital Lego-Bricks: Orchestrating Bankable Infrastructure across Africa & Global Markets"
        </h4>
        <p className="text-gray-400 text-xs md:text-sm italic">
          Subtitle: Inside BEAPCapital's Holdco Architecture, NIRSAL Guarantees, and Decentralized Utility Hubs
        </p>
      </div>

      {/* CARDS GRID — 3×2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0F0D3B] border border-white/10 rounded-lg p-5 flex flex-col"
          >
            {/* Title row with pill */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h4 className="text-amber-400 text-[12px] font-bold leading-snug">
                {card.number} {card.title}
              </h4>
              <span className="flex-shrink-0 bg-white/5 border border-white/10 text-gray-400 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                {card.pill}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[11px] leading-relaxed mb-5 flex-grow">
              {card.description}
            </p>

            {/* Investor Q&A */}
            <div className="border-t border-white/10 pt-4">
              <p className="text-amber-400 text-[10px] italic leading-relaxed mb-2">
                <span className="text-amber-500/70 not-italic font-semibold">Investor Q&A:</span> "{card.question}"{' '}
                <span className="text-amber-500/70 not-italic font-semibold">→ Answer:</span>
              </p>
              <p className="text-emerald-400 text-[10px] italic leading-relaxed">
                {card.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}