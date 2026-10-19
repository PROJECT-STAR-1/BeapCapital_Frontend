import { FaSitemap, FaGlobe, FaBuilding, FaServer, FaCloud, FaLock } from 'react-icons/fa';

const tiers = [
  {
    label: 'TIER 1: GLOBAL HOLDING',
    labelColor: 'text-amber-400',
    title: 'BEAPCapital Holding U.A.',
    description: 'Domiciled in Amsterdam, The Netherlands. Anchors strategic investment, global IP holding, master patent vaults, and Bilateral Investment Treaty (BIT) protections.',
    tag: 'Jurisdiction: Netherlands',
    tagColor: 'text-amber-400 border-amber-400/40',
  },
  {
    label: 'TIER 2: OPERATIONAL ANCHOR',
    labelColor: 'text-emerald-400',
    title: 'BEAPCapital Nigeria Limited',
    description: 'Abuja Headquarters. The commercial engine delivering localized infrastructure advisory, PPP transaction structuring, corporate finance, and energy grid execution (ARFAA network).',
    tag: 'Jurisdiction: Abuja, Nigeria',
    tagColor: 'text-emerald-400 border-emerald-400/40',
  },
  {
    label: 'TIER 3: SHARED TECH PLATFORM',
    labelColor: 'text-cyan-400',
    title: 'DLSi B.V., RooksAfrica & SISA',
    description: 'Digital Life Support Infrastructure B.V. governs the 4 shared industrial hubs (Utility, Bioscience, Real Estate, Digital) alongside RooksAfrica regional nodes and STREAM SISA academies.',
    tag: 'Operating Hub Engine',
    tagColor: 'text-cyan-400 border-cyan-400/40',
  },
];

const classes = [
  {
    label: 'CLASS 1: 100% OFFSHORE',
    labelColor: 'text-cyan-400',
    icon: <FaCloud />,
    iconColor: 'text-cyan-400',
    title: 'DLSiLabs B.V. & IP Vault',
    description: 'Keeps high-value wealth tracking, master patents, and BEAPOne software code offshore under strict GDPR compliance, insulated from regional currency volatility.',
  },
  {
    label: 'CLASS 2: 100% ONSHORE',
    labelColor: 'text-amber-400',
    icon: <FaServer />,
    iconColor: 'text-amber-400',
    title: 'BEAPOne Country SBUs',
    description: 'Operates completely inside local cloud servers (such as AWS Lagos or local data centres), satisfying NDPA and regional data localization mandates.',
  },
  {
    label: 'CLASS 3: FUSED CORE',
    labelColor: 'text-emerald-400',
    icon: <FaLock />,
    iconColor: 'text-emerald-400',
    title: 'BEAPOne UBCS & Telemetry',
    description: 'Anonymizes machine performance telemetry using non-reversible SHA-256 cryptographic tokens for global AI modeling, keeping user PII locked in local vaults.',
  },
];

export default function BusinessMandate() {
  return (
    <section id="mandate" className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              02 / BUSINESS MANDATE
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            BEAPCapital Holdings Organizational Architecture
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            A multi-layered corporate structure designed for cross-border capital security, operational flexibility, and localized compliance.
          </p>
        </div>

        {/* OUTER PANEL — Master Holding & Operating Subsidiaries */}
        <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mb-6">

          {/* Panel Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-white/10">
            <span className="flex items-center gap-2 text-amber-400 text-[10px] font-bold tracking-widest uppercase">
              <FaSitemap className="text-[11px]" />
              MASTER HOLDING & OPERATING SUBSIDIARIES
            </span>
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
              TIER 1 TO TIER 3 ARCHITECTURE
            </span>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="bg-[#0F0D3B] border border-white/10 rounded-lg p-5 flex flex-col"
              >
                <p className={`text-[9px] font-bold tracking-widest uppercase mb-3 ${tier.labelColor}`}>
                  {tier.label}
                </p>
                <h3 className="text-white text-sm font-bold leading-snug mb-3">
                  {tier.title}
                </h3>
                <p className="text-gray-400 text-[11px] leading-relaxed flex-grow mb-4">
                  {tier.description}
                </p>
                <div>
                  <span className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm border bg-black/30 ${tier.tagColor}`}>
                    {tier.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW — Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              <p className={`text-[9px] font-bold tracking-widest uppercase mb-4 ${item.labelColor}`}>
                {item.label}
              </p>
              <div className="flex items-start gap-3 mb-3">
                <span className={`${item.iconColor} text-sm mt-0.5`}>{item.icon}</span>
                <h3 className="text-white text-sm font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
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