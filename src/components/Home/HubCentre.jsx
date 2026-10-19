import { FaDna, FaCog, FaBuilding, FaLaptopCode, FaProjectDiagram, FaCubes } from 'react-icons/fa';

const hubs = [
  { 
    icon: <FaDna />, 
    title: "Bioscience Hub",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/25",
  },
  { 
    icon: <FaCog />, 
    title: "Utility Hub",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/15",
    iconBorder: "border-amber-400/25",
  },
  { 
    icon: <FaBuilding />, 
    title: "Real Estate Hub",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/25",
  },
  { 
    icon: <FaLaptopCode />, 
    title: "Digital Hub",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/25",
  },
  { 
    icon: <FaProjectDiagram />, 
    title: "Project Development Advisory",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/25",
  },
  { 
    icon: <FaCubes />, 
    title: "Other Physical Solutions Hub",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
    iconBorder: "border-cyan-500/25",
  },
];

export default function HubCentre() {
  return (
    <section className="w-full bg-[#0F0D3B] text-white py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-center mb-4">
          <span className="border border-amber-400/50 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
            ECOSYSTEM ORCHESTRATION CENTRE
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-snug mb-4">
          Hub Centre
        </h2>

        <p className="text-gray-400 text-xs md:text-sm text-center max-w-3xl mx-auto leading-relaxed mb-10">
          The Hub Centre serves as the navigational and functional core of the BEAPCapital ecosystem. Styled like modular Lego bricks, these six interconnected hubs snap together to form self-sustaining, bankable, and risk-shielded phygital infrastructure precincts across Africa and global expansion gateways.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hubs.map((hub, index) => (
            <div 
              key={index} 
              className="bg-[#0A0928] border border-white/10 rounded-lg p-5 flex flex-col gap-4 hover:border-amber-400/40 transition-colors cursor-pointer"
            >
              <div className={`w-9 h-9 rounded-md ${hub.iconBg} border ${hub.iconBorder} flex items-center justify-center`}>
                <span className={`${hub.iconColor} text-sm`}>{hub.icon}</span>
              </div>

              <h3 className="text-white text-sm font-bold leading-snug">
                {hub.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}