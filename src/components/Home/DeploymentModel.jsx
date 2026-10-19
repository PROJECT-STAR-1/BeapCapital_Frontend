import { FaArrowDown } from 'react-icons/fa';

const numberedItems = [
  {
    number: '1',
    title: 'Direct Deployment & Joint Venture SPVs',
    description: 'Special Purpose Vehicles (SPVs) de-risked by credit enhancements like NIRSAL 75% Credit Risk Guarantees to isolate liabilities.',
  },
  {
    number: '2',
    title: 'Turnkey 14-Week Operational Nodes',
    description: 'Standardized turn-key deployment of vertical farming, utility skids, and smart school spokes backed by automated split-fee settlement engines.',
  },
  {
    number: '3',
    title: 'Programmatic Software Cloud-Locks',
    description: 'Automated remote isolation within ≤15 seconds if local node operators deviate from biosecurity, financial, or operational protocols.',
  },
];

const tiers = [
  {
    label: 'TIER 1: SYSTEM PROVIDERS',
    location: 'Netherlands / Spain',
    description: 'BEAPCapital Holding U.A. & DLSi B.V. — Domiciles 100% of Master Patents, BEAPOne UBCS Code, and vPLC Firmware Vaults.',
    labelColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
  },
  {
    label: 'TIER 2: SYSTEM ORCHESTRATORS',
    location: 'BEAPCapital Nigeria',
    description: 'Abuja Execution Hub — Project Development, PPP Transactions, Energy Grid Management, Government Relations & Local PMO.',
    labelColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
  },
  {
    label: 'TIER 3: SYSTEM EXECUTORS',
    location: 'Sovereign Franchise SPVs',
    description: 'Local Operator Nodes — Local Physical CAPEX Assets, Outgrower Cooperatives, Retail Utility Billing & PAYGO Wallets.',
    labelColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
  },
];

export default function DeploymentModel() {
  return (
    <section className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div className="mb-4">
              <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                THE DEPLOYMENT MODEL
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4">
              "Unity in Orchestration" & Governance
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 max-w-xl">
              BEAPCapital operates as a decentralized execution network with centralized intellectual and strategic governance. By decoupling core intellectual property from localized execution, we achieve rapid scalability across diverse African jurisdictions while maintaining absolute sovereignty over capital flows, data integrity, and operational standards.
            </p>

            {/* Numbered Items */}
            <div className="flex flex-col gap-4">
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

          {/* RIGHT COLUMN — Command Architecture Card */}
          <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                ECOSYSTEM COMMAND ARCHITECTURE
              </span>
              <span className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                STANDARDIZED
              </span>
            </div>

            {/* Tiers */}
            <div className="flex flex-col gap-2">
              {tiers.map((tier, index) => (
                <div key={index}>
                  {/* Tier Box */}
                  <div className={`bg-[#0F0D3B] border ${tier.borderColor} rounded-lg p-4`}>
                    <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${tier.labelColor}`}>
                      [ {tier.label} — {tier.location} ]
                    </p>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Arrow + label between tiers */}
                  {index < tiers.length - 1 && (
                    <div className="flex items-center justify-center gap-2 py-3">
                      <FaArrowDown className="text-gray-600 text-[10px]" />
                      <span className="text-gray-500 text-[10px] italic">
                        {index === 0
                          ? 'Cross-Border Investment & Licensing Shield'
                          : 'Localized Last-Mile Concessions'}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}