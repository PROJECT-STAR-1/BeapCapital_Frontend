import Link from 'next/link';
import { FaMapMarkerAlt, FaGlobeEurope } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    {
      title: "ABOUT BEAPCAPITAL",
      links: [
        { label: "Who We Are & Vision", href: "/who-we-are#vision" },
        { label: "Business Mandate (BEAPCapital NG)", href: "/who-we-are#mandate" },
        { label: "Mission & Vision Statement", href: "/who-we-are#mission" },
        { label: "Operating Philosophy", href: "/who-we-are#philosophy" },
        { label: "The BEAPCapital Way", href: "/who-we-are#beapcapital-way" },
        { label: "Leadership & Governance", href: "/who-we-are#leadership" },
      ],
    },
 {
  title: "ECOSYSTEM HUBS",
  links: [
    { label: "DLS Bioscience Hub", href: "/hub-centre-matrix?tab=bioscience" },
    { label: "DLS Utility Hub (ARFAA)", href: "/hub-centre-matrix?tab=utility" },
    { label: "DLS Real Estate Hub", href: "/hub-centre-matrix?tab=real_estate" },
    { label: "DLS Digital Services Hub", href: "/hub-centre-matrix?tab=digital_services" },
    { label: "Standalone & Advisory Hub", href: "/hub-centre-matrix?tab=standalone" },
    { label: "Smart School SISA Framework", href: "/what-we-do" },
  ],
},
    {
      title: "CAPABILITIES & ADVISORY",
      links: [
        { label: "Infrastructure Development Advisory", href: "/what-we-do" },
        { label: "PPP Transaction Structuring", href: "/how-we-do-it" },
        { label: "Corporate Finance & Capital Sourcing", href: "/what-we-do" },
        { label: "Phygital PaaS / GaaS / WaaS Utilities", href: "/what-we-do" },
        { label: "BEAPOne UBCS SaaS Platform", href: "/what-we-do" },
        // { label: "MEARL & Risk Management", href: "/pipeline#mearl-framework" },
        { label: "MEARL & Risk Management", href: "#" },
      ],
    },
    {
      title: "INNOVATION & RESOURCE",
      links: [
        { label: "European Expansion Gateway", href: "/who-we-are#mandate" },
        { label: "InfraQubes Channel", href: "/what-we-do" },
        { label: "SocialQues Research", href: "/what-we-do" },
        // { label: "BEMTA Talent Ecosystem", href: "/careers#bemta-programs" },
        { label: "BEMTA Talent Ecosystem", href: "#" },
        // { label: "Corporate Downloads & Briefs", href: "/institutional-data-room" },
        { label: "Corporate Downloads & Briefs", href: "#" },
        // { label: "Careers & Internship Portals", href: "/careers" },
         { label: "Careers & Internship Portals", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#050810] text-gray-400 text-sm py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-white font-bold text-xs tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mb-8">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-green-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-xs mb-1">
                Active Operational Anchor (Africa):
              </p>
              <p className="text-xs leading-relaxed">
                BEAPCapital Nigeria Limited, Plot 1024, Utako District, Abuja, FCT, Nigeria.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaGlobeEurope className="text-amber-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-xs mb-1">
                European Innovation & R&D Expansion Gateway:
              </p>
              <p className="text-xs leading-relaxed">
                Amsterdam, Netherlands | Madrid Gateway, Spain.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs leading-relaxed">
            <span className="text-white font-semibold">Legal Notice & Disclaimer:</span> BEAPCapital refers to the global network of entities comprising BEAPCapital Nigeria Limited and its project development, utility, bioscience, and digital services hubs. Regional expansion to European innovation hubs (Netherlands / Spain) is underway under national Startup Visa frameworks.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-xs">© 2026 BEAPCapital Ecosystem. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-white transition-colors">Data Protection Notice (NDPA/GDPR)</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}