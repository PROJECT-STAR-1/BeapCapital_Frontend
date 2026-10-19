import { FaLock, FaBolt, FaMoneyBillWave, FaUniversity, FaFire } from 'react-icons/fa';

const commandments = [
  {
    number: '01',
    icon: <FaLock />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    title: 'Mailslot Input Monopoly',
    description: 'Contractually mandating 100% proprietary substrates, breeder stocks, and hardware modules. Bypassing un-vetted third-party inputs guarantees universal quality and export brand protection.',
    // Spans 1 col
    colSpan: '',
  },
  {
    number: '02',
    icon: <FaBolt />,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconBorder: 'border-emerald-400/30',
    title: '1.5-Second Cloud-Lock Safety',
    description: 'If any local franchise or SPV breaches biosecurity, financial, or thermal protocols, the BEAPOne control plane algorithmically locks digital wallets and freezes hardware within ≤1.5 seconds.',
    colSpan: '',
  },
  {
    number: '03',
    icon: <FaMoneyBillWave />,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    iconBorder: 'border-cyan-400/30',
    title: 'Hard-Currency Indexation',
    description: 'All wholesale B2B off-take contracts and corporate advisory fees are indexed to hard currencies (USD, EUR, CNY), insulating our balance sheet from local currency devaluations.',
    colSpan: '',
  },
  {
    number: '04',
    icon: <FaUniversity />,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15',
    iconBorder: 'border-indigo-400/30',
    title: 'Credit Guarantees & ELRA Leases',
    description: 'Row B industrial assets are de-risked using NIRSAL 75% Credit Risk Guarantees and Equipment Leasing Registration Authority (ELRA) frameworks, ensuring zero asset abandonment.',
    colSpan: '',
  },
  {
    number: '05',
    icon: <FaFire />,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconBorder: 'border-amber-400/30',
    title: '14-Week Turnkey Node Standardization',
    description: 'Every physical node—whether a 12-tier ginger CEA unit, a WaaS water purification skid, or a STREAM SISA school spoke—is manufactured off-site using MaroonQubes pre-fabrication and deployed in standard 14-week execution cycles.',
    // Spans 2 cols on bottom row
    colSpan: 'lg:col-span-2',
  },
];

export default function BeapcapitalWay() {
  return (
    <section id="beapcapital-way" className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="inline-block border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
              07 / INSTITUTIONAL COMMANDMENTS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
            The BEAPCapital Way
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            The 5 uncompromised execution principles governing every consulting engagement, project SPV, and technology rollout across our ecosystem.
          </p>
        </div>

        {/* CARDS GRID — 3 top + 2 bottom (2nd spans wider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commandments.map((item, index) => (
            <div
              key={index}
              className={`bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col ${item.colSpan}`}
            >
              {/* Top Row: Icon + Number */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-9 h-9 rounded-md ${item.iconBg} border ${item.iconBorder} flex items-center justify-center`}>
                  <span className={`${item.iconColor} text-sm`}>{item.icon}</span>
                </div>
                <span className="text-amber-400/60 text-2xl font-extrabold leading-none tracking-tight">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-sm font-bold leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
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