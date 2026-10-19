import { FaSeedling, FaCog, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const cards = [
  {
    icon: <FaSeedling />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-500/25',
    title: 'Infrastructure Advisory & PPPs',
    // We'll render the description with a highlighted company name
    description: (
      <>
        Led by <span className="text-white font-semibold">BEAPCapital Nigeria Limited</span>, we deliver bankable project preparation, corporate finance, PPP transaction structuring, turnaround management, and internal treasury/MEARL frameworks.
      </>
    ),
    bullets: [
      { text: 'PPP Transaction Preparation', color: 'text-emerald-400' },
      { text: 'Credit Risk Enhancements (NIRSAL CRG)', color: 'text-emerald-400' },
      { text: 'MEARL & Data Accountability', color: 'text-emerald-400' },
    ],
  },
  {
    icon: <FaCog />,
    // Note: The middle card has a distinct muted amber bg (matches "Utility Hub" style)
    iconColor: 'text-amber-500/70',
    iconBg: 'bg-amber-900/40',
    iconBorder: 'border-amber-800/40',
    title: 'Phygital Utility Networks',
    description: 'Managing fundamental delivery infrastructure for natural resources and alternative energy solutions as fluid, swapable commodities with utility-grade SLA availability.',
    bullets: [
      { text: 'Power-as-a-Service (PaaS — ARFAA)', color: 'text-amber-400' },
      { text: 'Gas-as-a-Service (GaaS Virtual Pipelines)', color: 'text-amber-400' },
      { text: 'Water-as-a-Service (WaaS HydroGrid)', color: 'text-amber-400' },
    ],
  },
  {
    icon: <FaLaptopCode />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-500/25',
    title: 'Enterprise SaaS & AI Software',
    description: 'The BEAPOne UBCS enterprise control plane coordinates real-time multi-entity tracking, programmatic split-settlements, predictive IoT telemetry, and remote Cloud-Locks.',
    bullets: [
      { text: 'BEAPOne UBCS & BEAPOne Lite', color: 'text-cyan-400' },
      { text: 'DLSiLabs IoT Telemetry Models', color: 'text-cyan-400' },
      { text: 'Remote Software Cloud-Locks', color: 'text-cyan-400' },
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              CAPABILITIES & OFFERINGS
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Integrated Products, Delivery & Advisory Engine
          </h2>

          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Converting fragmented economic landscapes into bankable, resilient, and technologically optimized phygital systems.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-md ${card.iconBg} border ${card.iconBorder} flex items-center justify-center mb-4`}>
                <span className={`${card.iconColor} text-base`}>{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base font-bold leading-snug mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed mb-5 flex-grow">
                {card.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2">
                    <FaCheckCircle className={`${bullet.color} text-[11px] mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-300 text-[11px] leading-snug">
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}