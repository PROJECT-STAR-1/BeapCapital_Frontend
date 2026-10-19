import { FaShieldAlt, FaNetworkWired, FaBullseye, FaCheck } from 'react-icons/fa';

const subCards = [
  {
    icon: <FaShieldAlt />,
    iconColor: 'text-amber-400',
    title: 'Sovereign & Regulatory Defense',
    description: 'Insulating capital and IP under Dutch Holding structures and Bilateral Investment Treaties (BITs).',
  },
  {
    icon: <FaNetworkWired />,
    iconColor: 'text-emerald-400',
    title: 'Phygital Integration',
    description: 'Linking physical asset-theory utilities with asset-light digital software and edge IoT telemetry.',
  },
];

const mandateItems = [
  '99.99% Utility SLA Availability',
  'SIA-256 Telemetry Anonymization',
  'Programmatic Split-Fee Settlements',
  '1.5-Second Automated Cloud-Locks',
];

export default function CorporateVision() {
  return (
    <section id="vision" className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div className="mb-5">
              <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                01 / CORPORATE VISION
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-6 max-w-lg">
              Transforming Fragmented Landscapes into Bankable Economic Assets
            </h2>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 mb-8 max-w-lg">
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Rather than deploying isolated advisory practices or speculative paper assets, BEAPCapital cross-links <span className="text-white font-medium">financial structuring, regulatory isolation, macro-level programmatic interventions, and edge-automation networks</span>.
              </p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Our vision is to solve the fundamental friction points of emerging markets—macroeconomic volatility, currency devaluation, operational opacity, and capital leakage—by establishing a unified corporate envelope that decouples intellectual property from localized execution.
              </p>
            </div>

            {/* Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#0A0928] border border-white/10 rounded-lg p-4"
                >
                  <div className={`${card.iconColor} text-base mb-3`}>
                    {card.icon}
                  </div>
                  <h3 className="text-white text-xs font-bold mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Core Strategic Mandate Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8">

              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-6">
                <FaBullseye className="text-amber-400 text-lg" />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-bold leading-snug mb-3">
                The Core Strategic Mandate
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-6">
                To convert volatile real-economy sectors (power, water, gas, bio-refining, real estate) into predictable, standardized, and hard-currency indexed digital infrastructure assets.
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-3">
                {mandateItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-sm bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-emerald-400 text-[7px]" />
                    </span>
                    <span className="text-gray-300 text-[11px] md:text-xs leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}