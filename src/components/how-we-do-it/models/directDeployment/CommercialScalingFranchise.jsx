const franchiseTiers = [
  {
    title: 'Single-Unit Franchise',
    titleColor: 'text-amber-400',
    description: 'Right to operate one single business location. Direct entry-level model for local owner-operators.',
  },
  {
    title: 'Multi-Unit Franchise',
    titleColor: 'text-emerald-400',
    description: 'Purchases right to open and operate multiple locations within a specific territory on a strict timeline.',
  },
  {
    title: 'Area Development',
    titleColor: 'text-cyan-400',
    description: 'Exclusive rights to a specific geographic territory to build a set number of units without sub-franchising rights.',
  },
  {
    title: 'Master Franchise',
    titleColor: 'text-indigo-400',
    description: 'Buys an entire country territory, acting as local franchisor and selling sub-franchises to local operators.',
  },
];

const franchiseComponents = [
  {
    title: 'Business Format Franchising',
    titleColor: 'text-amber-400',
    description: 'Franchisee receives entire business system including branding, marketing, training, supply chains, and operational procedures.',
  },
  {
    title: 'Product / Trade Name Distribution',
    titleColor: 'text-emerald-400',
    description: 'Franchisee acts as licensed distributor of manufacturer product using trademark without strict day-to-day operational systems.',
  },
  {
    title: 'Financial & Compliance Components',
    titleColor: 'text-cyan-400',
    description: 'Upfront franchise fees, ongoing royalty fees ($4\\%$ to $8\\%$ gross sales), and marketing levies ($1\\%$ to $4\\%$) funding regional campaigns.',
  },
];

export default function CommercialScalingFranchise() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">

      {/* HEADER */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
          [ PART IV: COMMERCIAL SCALING & FRANCHISE TIERS ]
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
          Franchising Structures & Financial Components
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-3xl">
          Licensing intellectual property, branding, and operational systems for rapid commercial expansion without 100% corporate capital deployment.
        </p>
      </div>

      {/* TOP ROW — 4 Franchise Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {franchiseTiers.map((tier, index) => (
          <div
            key={index}
            className="bg-[#050810] border border-white/10 rounded-lg p-4 flex flex-col"
          >
            <h4 className={`text-[11px] font-bold leading-snug mb-3 ${tier.titleColor}`}>
              {tier.title}
            </h4>
            <p className="text-gray-400 text-[10px] leading-relaxed">
              {tier.description}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW — 3 Franchise Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {franchiseComponents.map((item, index) => (
          <div
            key={index}
            className="bg-[#050810] border border-white/10 rounded-lg p-5 flex flex-col"
          >
            <h4 className={`text-[11px] font-bold leading-snug mb-3 ${item.titleColor}`}>
              {item.title}
            </h4>
            <p className="text-gray-400 text-[10px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}