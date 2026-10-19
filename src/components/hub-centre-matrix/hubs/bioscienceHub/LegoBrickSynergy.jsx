import { FaSyncAlt, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

const cards = [
  {
    number: '1.',
    title: 'Circular Utility Loops',
    titleColor: 'text-amber-400',
    icon: <FaSyncAlt />,
    iconColor: 'text-amber-400',
    description: 'The DLS Utility Hub provides grid-independent solar power (PaaS) and Reverse Osmosis water (WaaS) directly to co-located DLS Bioscience CEA units and MaroonQubes pre-cast plants, eliminating transmission loss.',
  },
  {
    number: '2.',
    title: 'The SPV & NIRSAL Shield',
    titleColor: 'text-emerald-400',
    icon: <FaShieldAlt />,
    iconColor: 'text-emerald-400',
    description: 'Each hub operates as a ring-fenced Special Purpose Vehicle (SPV) de-risked by NIRSAL 75% Credit Risk Guarantees and Equipment Leasing Registration Authority (ELRA) leasebacks.',
  },
  {
    number: '3.',
    title: 'BEAPOne UBOS Control',
    titleColor: 'text-cyan-400',
    icon: <FaMicrochip />,
    iconColor: 'text-cyan-400',
    description: 'All 16 verticals stream real-time IoT telemetry through the BEAPOne UBOS operating system, enabling $\\le 50\\text{ms}$ split-fee settlements and $\\le 1.5\\text{s}$ programmatic Cloud-Locks.',
  },
];

export default function LegoBrickSynergy() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">

      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ LEGO-BRICK SYNERGY MATRIX ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          How the 5 Hubs Interlock & Share Circular Loops
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          By co-locating utility hubs with bioscience and real estate nodes, BEAPCapital reduces CapEx by up to 35% through shared clean power, purified water, and automated software ledgering.
        </p>
      </div>

      {/* CARDS GRID — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0F0D3B] border border-white/10 rounded-lg p-5 flex flex-col"
          >
            {/* Icon + Title row */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`${card.iconColor} text-sm`}>{card.icon}</span>
              <h4 className={`text-[12px] font-bold leading-snug tracking-wide ${card.titleColor}`}>
                {card.number} {card.title}
              </h4>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[11px] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}