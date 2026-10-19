import { FaMicrochip, FaBalanceScale, FaRecycle } from "react-icons/fa";

const topCards = [
  {
    icon: <FaMicrochip />,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
    iconBorder: "border-amber-400/30",
    title: "Technical Precision",
    description:
      "We reject artisanal guesswork. Every process—from 12-tier vertical CEA agriculture to sub-4ms power transient suppression—is governed by precise metrology and automated G-code logic.",
  },
  {
    icon: <FaBalanceScale />,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-400/30",
    title: "Integrity & Accountability",
    description:
      "Through our programmatic split-fee clearinghouse and open-book MERLA audits, revenue streams are parsed automatically without manual interference or capital leakage.",
  },
  {
    icon: <FaRecycle />,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-400/30",
    title: "Circular Sustainability",
    description:
      "We practice zero-waste industrial upcycling—converting agricultural side-streams into Black Soldier Fly protein, biogenic fertilizers, and high-purity clean energy.",
  },
];

const mearlItems = [
  {
    letter: "M",
    label: "Monitoring",
    letterColor: "text-amber-400",
    description:
      "24/7 edge IoT telemetry streams tracking soil EC, pH, pressure, and inverter health.",
  },
  {
    letter: "E",
    label: "Evaluation",
    letterColor: "text-emerald-400",
    description:
      "Algorithmic benchmarking against yield means, thermal mass, and utility SLA contracts.",
  },
  {
    letter: "A",
    label: "Accountability",
    letterColor: "text-cyan-400",
    description:
      "Automated 1.5s Cloud-Locks on wallets if local nodes breach biosecurity protocols.",
  },
  {
    letter: "R",
    label: "Research",
    letterColor: "text-indigo-400",
    description:
      "DLSiLabs B.V. deep learning pipelines processing anonymized biogenic models.",
  },
  {
    letter: "L",
    label: "Learning",
    letterColor: "text-amber-400",
    description:
      "Continuous feedback loops training predictive AI compilers across all 16 verticals.",
  },
];

export default function ValuesGovernance() {
  return (
    <section
      id="governance"
      className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              04 / VALUES & GOVERNANCE
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            Corporate Values & MEARL Framework
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Driven by strict ethical standards and our continuous Monitoring,
            Evaluation, Accountability, Research, and Learning engine.
          </p>
        </div>

        {/* TOP ROW — 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-md ${card.iconBg} border ${card.iconBorder} flex items-center justify-center mb-5`}
              >
                <span className={`${card.iconColor} text-base`}>
                  {card.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-sm font-bold leading-snug mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* MEARL PANEL */}
        <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8">
          {/* Panel Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2">
                [ MEARL SYSTEM ARCHITECTURE ]
              </p>
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug">
                The MEARL Engine: Data Accountability in Action
              </h3>
            </div>
            <div className="bg-[#0F0D3B] border border-white/10 rounded-md px-4 py-2 self-start md:self-auto">
              <p className="text-gray-300 text-[10px] font-medium whitespace-nowrap">
                Monitoring • Evaluation • Accountability • Research • Learning
              </p>
            </div>
          </div>

          {/* MEARL Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {mearlItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F0D3B] border border-white/10 rounded-lg p-4"
              >
                {/* Letter + Label */}
                <p className="mb-2">
                  <span className={`text-sm font-bold ${item.letterColor}`}>
                    {item.letter}
                  </span>
                  <span className="text-gray-500 text-xs mx-1">—</span>
                  <span className="text-white text-xs font-bold">
                    {item.label}
                  </span>
                </p>
                {/* Description */}
                <p className="text-gray-400 text-[10px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
