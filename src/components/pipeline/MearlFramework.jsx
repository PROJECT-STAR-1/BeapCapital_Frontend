import { FaShieldAlt, FaSeedling, FaMicrochip } from 'react-icons/fa';

const cards = [
  {
    icon: <FaShieldAlt />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    title: 'Accountability & Transparency',
    description: 'Rigorous audit trails, real-time IoT monitoring on energy assets, and transparent milestone tracking for coinvestors and lenders.',
  },
  {
    icon: <FaSeedling />,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15',
    iconBorder: 'border-blue-400/30',
    title: 'Environmental & ESG Metrics',
    description: 'Alignment with global climate finance standards, zero-waste bio-industrial processing, and renewable energy substitution.',
  },
  {
    icon: <FaMicrochip />,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/15',
    iconBorder: 'border-purple-400/30',
    title: 'Research & Scalability',
    description: 'Continuous R&D through DLS Bioscience and BCAP platforms to ensure rapid replication of successful project models across regional hubs.',
  },
];

export default function MearlFramework() {
  return (
    <section id="mearl-framework" className="w-full bg-[#050810] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-emerald-500/50 text-emerald-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              INSTITUTIONAL RIGOR
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            The MEARL Impact & Governance Framework
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Unlike traditional stock-market entities driven solely by quarterly earnings, BEAPCapital integrates a stringent Monitoring, Evaluation, Accountability, Research, and Learning system across every vertical.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0A0928] border border-white/10 rounded-xl p-6 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-lg ${card.iconBg} border ${card.iconBorder} flex items-center justify-center mb-5`}>
                <span className={`${card.iconColor} text-base`}>{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-base md:text-lg font-bold leading-snug mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}