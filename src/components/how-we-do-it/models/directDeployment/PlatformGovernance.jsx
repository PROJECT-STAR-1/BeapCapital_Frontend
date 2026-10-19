import { FaCrown, FaUsers } from 'react-icons/fa';

const sections = [
  {
    label: 'SECTION A: BEAPCAPITAL U.A. MASTER PLATFORM',
    labelColor: 'text-amber-400',
    icon: <FaCrown />,
    iconColor: 'text-amber-400',
    description: 'Overall DLSI platform development and management. Acts as the master platform orchestrator, conducting R&D for various DLSI platform verticals and holding $100\\%$ of the DLSI platform franchise portfolio ownership.',
    type: 'paragraph',
  },
  {
    label: 'SECTION B: DLSI IP HOLDINGS & CENTRAL CORE',
    labelColor: 'text-emerald-400',
    icon: null,
    items: [
      'Operating standards, quality control & technical support',
      'DLSI franchise & platform hubs management',
      'Training & support services (stakeholders, partners, market actors)',
      'O&M services, EPC+F services & feasibility studies',
      'Production coordination & bulk ecosystem procurement (local/intl)',
      'Stakeholder management, international sales & bulk off-take',
      'Global logistics, supply chain & industrial relations',
      'Central portfolio risk management, audit & MEARL administration',
    ],
    type: 'list',
  },
  {
    label: 'SECTION C: DLSI REGIONAL HUBS',
    labelColor: 'text-cyan-400',
    icon: null,
    description: 'Regional market development, regional government relations management, input/output logistics management, operations coordination, order fulfilment, regional operations management, risk management, sustainability assessment, regional audits, and platform synergy management.',
    type: 'paragraph',
  },
  {
    label: 'SECTION D: LAST MILE PROJECTS & LEGO ARCHITECTURE',
    labelColor: 'text-indigo-400',
    icon: <FaUsers />,
    iconColor: 'text-indigo-400',
    description: 'Last-mile projects operating in various contracting structures and PPP project delivery structures with DLSI. Styled like Lego bricks, combining the DLS Utility Hub core with Bioscience, Real Estate, and Digital Services hubs into self-sustaining societies.',
    type: 'paragraph',
  },
];

export default function PlatformGovernance() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">
      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ PART II: PLATFORM GOVERNANCE & ARCHITECTURE ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          Source Main Brief: Sections A, B, C & D (DLSI Lego-Brick Architecture)
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          The holistic governance structure detailing how DLSI operates like Lego bricks—snapping together core utility hubs with bioscience, real estate, and digital services.
        </p>
      </div>

      {/* 2×2 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#0F0D3B] border border-white/10 rounded-lg p-6"
          >
            {/* Label row */}
            <div className="flex items-center gap-2 mb-5">
              {section.icon && (
                <span className={`${section.iconColor} text-sm`}>
                  {section.icon}
                </span>
              )}
              <p className={`text-[11px] font-bold tracking-widest uppercase ${section.labelColor}`}>
                {section.label}
              </p>
            </div>

            {/* Content */}
            {section.type === 'paragraph' ? (
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                {section.description}
              </p>
            ) : (
              <ul className="flex flex-col gap-2.5">
                {section.items.map((item, iIndex) => (
                  <li key={iIndex} className="flex items-start gap-2.5">
                    <span className="text-gray-500 text-[10px] mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}