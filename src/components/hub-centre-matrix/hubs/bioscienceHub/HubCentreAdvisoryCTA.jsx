import Link from 'next/link';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';

export default function HubCentreAdvisoryCTA() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8 mt-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* LEFT — Text */}
        <div className="max-w-2xl">
          <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            [ HUB CENTRE ADVISORY DESK ]
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold leading-snug mb-3">
            Ready to Deploy a Specific Hub or Vertical in Your Region?
          </h3>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
            Request our complete Hub Centre Dossier or schedule a technical briefing with our Abuja and European expansion teams.
          </p>
        </div>

        {/* RIGHT — Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
          {/* Secondary button — Hub Dossier PDF */}
          <button className="bg-[#050810] hover:bg-[#0F0D3B] border border-white/15 hover:border-white/25 text-white font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
            <FaFilePdf className="text-xs text-gray-400" />
            Hub Dossier PDF
          </button>

          {/* Primary button — Inquire Hub Partnership */}
          <Link
            href="/contact"
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-[11px] tracking-wider uppercase px-5 py-3 rounded-md flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            Inquire Hub Partnership
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </div>
  );
}