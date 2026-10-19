const contractingModels = [
  {
    title: 'Fixed Price / Lump Sum',
    titleColor: 'text-amber-400',
    description: 'Provider completes scope for set total price. High budget certainty for client; high risk for provider if project overruns.',
  },
  {
    title: 'Time & Materials (T&M)',
    titleColor: 'text-emerald-400',
    description: 'Client pays actual time spent plus materials. Maximum flexibility for R&D/agile projects; low budget certainty.',
  },
  {
    title: 'Turnkey / Design-Build',
    titleColor: 'text-cyan-400',
    description: 'One contractor handles design and execution. Single point of responsibility and streamlined communication.',
  },
  {
    title: 'Incentivized Target Cost (ITC)',
    titleColor: 'text-indigo-400',
    description: 'Reimbursed actual costs plus margin against target budget with gain-share/pain-share mechanisms. Requires open-book accounting.',
  },
];

const pppFunctions = [
  { code: 'DBFOM / DBFO:', text: 'Comprehensive private responsibility from inception through long-term operations (schools, hospitals).' },
  { code: 'BOT:', text: 'Private builds and operates for set period to recoup costs before transferring ownership back to state (toll roads, bridges).' },
  { code: 'BOOT:', text: 'Private entity explicitly owns physical asset during franchise term to secure project financing.' },
  { code: 'BOO:', text: 'Private builds and operates permanently; ownership never transfers (water treatment, power plants).' },
  { code: 'ROT:', text: 'Rehabilitate-Operate-Transfer for legacy brownfield assets (upgrading water grids).' },
];

export default function CommercialLegalFrameworks() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">

      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ PART III: COMMERCIAL & LEGAL FRAMEWORKS ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          Contracting Models & Public-Private Partnerships (PPPs)
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          Allocation of responsibilities, risks, payments, and lifecycle governance across traditional contracts and 20-to-30-year PPP concessions.
        </p>
      </div>

      {/* TRADITIONAL CONTRACTING MODELS */}
      <div className="mb-10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-4">
          [ TRADITIONAL CONTRACTING MODELS ]
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {contractingModels.map((model, index) => (
            <div
              key={index}
              className="bg-[#0F0D3B] border border-white/10 rounded-lg p-4 flex flex-col"
            >
              <h4 className={`text-[11px] font-bold leading-snug mb-3 ${model.titleColor}`}>
                {model.title}
              </h4>
              <p className="text-gray-400 text-[10px] leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PPP CLASSIFICATION */}
      <div>
        <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
          [ PUBLIC-PRIVATE PARTNERSHIP (PPP) CLASSIFICATION ]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* LEFT — Classification by Transferred Functions */}
          <div className="lg:col-span-3 bg-[#050810] border border-white/10 rounded-lg p-6">
            <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-5">
              CLASSIFICATION BY TRANSFERRED FUNCTIONS (ASSET LIFECYCLE)
            </p>

            <ul className="flex flex-col gap-3">
              {pppFunctions.map((item, index) => (
                <li key={index} className="text-gray-400 text-[11px] leading-relaxed">
                  <span className="text-white font-bold">{item.code}</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Payment Mechanisms + SPV Shield */}
          <div className="lg:col-span-2 bg-[#050810] border border-white/10 rounded-lg p-6">
            {/* Payment Mechanisms */}
            <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
              PAYMENT MECHANISMS
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-gray-500 text-[10px] mt-1.5 flex-shrink-0">•</span>
                <span className="text-gray-400 text-[11px] leading-relaxed">
                  <span className="text-white font-bold">User-Pays (Concessions):</span> Fees charged directly to public; private assumes demand risk.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gray-500 text-[10px] mt-1.5 flex-shrink-0">•</span>
                <span className="text-gray-400 text-[11px] leading-relaxed">
                  <span className="text-white font-bold">Government-Pays (Availability):</span> Regular performance-linked fees; government retains demand risk.
                </span>
              </li>
            </ul>

            {/* Divider */}
            <div className="border-t border-white/10 pt-5">
              <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                THE SPV SHIELD
              </p>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Special Purpose Vehicles are formed to sign PPP agreements, raise debt, and shield parent companies from direct liabilities.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}