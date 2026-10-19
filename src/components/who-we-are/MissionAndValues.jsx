import { FaEye, FaBullseye } from 'react-icons/fa';

const panels = [
  {
    icon: <FaEye />,
    label: 'INSTITUTIONAL VISION',
    labelColor: 'text-amber-400',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    title: 'To be the preeminent phygital infrastructure orchestrator connecting Africa with global capital.',
    description: 'We envision an African continent where infrastructure deficit is replaced by standardized, data-verified, and bankable utility and bio-industrial networks —enabling seamless economic integration, energy independence, and sustainable wealth creation.',
  },
  {
    icon: <FaBullseye />,
    label: 'INSTITUTIONAL MISSION',
    labelColor: 'text-emerald-400',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    title: 'To engineer, de-risk, and scale resilient phygital platforms that eradicate economic leakage.',
    description: 'Our mission is to deploy turnkey, modular infrastructure nodes backed by hard-currency off-take agreements, credit risk guarantees, and real-time enterprise software—ensuring absolute operational integrity, bio-security, and high capital velocity for our investors and municipal partners.',
  },
];

const values = [
  {
    number: '01',
    title: 'Bankability',
    titleColor: 'text-amber-400',
    description: 'NIRSAL CRG guarantees & structured project finance.',
  },
  {
    number: '02',
    title: 'Resilience',
    titleColor: 'text-emerald-400',
    description: 'Off-grid PaaS/GaaS/WaaS 99.99% SLA uptime.',
  },
  {
    number: '03',
    title: 'Sovereignty',
    titleColor: 'text-cyan-400',
    description: 'Dutch BIT protection & local NDPA compliance.',
  },
  {
    number: '04',
    title: 'Transparency',
    titleColor: 'text-indigo-400',
    description: 'Open-book MEARL telemetry & software Cloud-Locks.',
  },
];

export default function MissionAndValues() {
  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* TOP — Vision & Mission Panels */}
        <div id="mission" className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-lg ${panel.iconBg} border ${panel.iconBorder} flex items-center justify-center mb-6`}>
                <span className={`${panel.iconColor} text-lg`}>{panel.icon}</span>
              </div>

              {/* Label */}
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${panel.labelColor}`}>
                {panel.label}
              </p>

              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-4">
                {panel.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                {panel.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM — Values Row */}
        <div id="values-mearl" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-lg p-4"
            >
              {/* Number + Title */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-[11px] font-bold ${value.titleColor}`}>
                  {value.number}.
                </span>
                <h4 className={`text-sm font-bold ${value.titleColor}`}>
                  {value.title}
                </h4>
              </div>
              {/* Description */}
              <p className="text-gray-400 text-[10px] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}