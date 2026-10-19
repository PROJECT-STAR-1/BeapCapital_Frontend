import {
  FaShieldAlt,
  FaEye,
  FaBalanceScale,
  FaBullseye,
  FaChartBar,
  FaUsers,
  FaLightbulb,
  FaCog,
} from 'react-icons/fa';

const pills = [
  { icon: <FaEye />, label: 'Vision', href: '#vision' },
  { icon: <FaBalanceScale />, label: 'Mandate', href: '#mandate' },
  { icon: <FaBullseye />, label: 'Mission', href: '#mission' },
  { icon: <FaChartBar />, label: 'Values & MEARL', href: '#values-mearl' },
  { icon: <FaUsers />, label: 'Leadership', href: '#leadership' },
  { icon: <FaLightbulb />, label: 'Philosophy', href: '#philosophy' },
  { icon: <FaCog />, label: 'The BEAPCapital Way', href: '#beapcapital-way' },
];

export default function WhoWeAreHero() {
  return (
    <section className="w-full bg-[#050810] text-white pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background glow (top-right) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            <FaShieldAlt className="text-[10px]" />
            DEDICATED INSTITUTIONAL PROFILE
          </span>
        </div>

        {/* Headline (two-tone) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          <span className="text-white">Who We Are: </span>
          <span className="text-amber-400">
            Building Next-Generation Phygital Systems
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
          BEAPCapital operates as an integrated multi-disciplinary advisory, project development, and asset-orchestration engine. We bridge operational execution across West Africa with European tech innovation, converting fragmented economic landscapes into bankable, resilient, and audit-ready infrastructure platforms.
        </p>

        {/* Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          {pills.map((pill, index) => (
            <a
              key={index}
              href={pill.href}
              className="group inline-flex items-center gap-2 bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/30 hover:border-amber-400/50 text-white text-[11px] font-semibold px-3.5 py-2 rounded-md transition-colors"
            >
              <span className="text-amber-400 text-[10px] group-hover:scale-110 transition-transform">
                {pill.icon}
              </span>
              {pill.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}