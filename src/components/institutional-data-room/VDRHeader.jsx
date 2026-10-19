import Link from 'next/link';
import { FaLock, FaSignOutAlt } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

export default function VDRHeader() {
  return (
    <>
      {/* TOP HEADER BAR */}
      <div className="w-full bg-[#0A0928] border-b border-white/10 px-6 md:px-10 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-md flex items-center justify-center">
              <BsShieldFillCheck className="text-black text-lg" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
                BEAPCAPITAL <span className="text-emerald-400">VDR</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase whitespace-nowrap">
                5-Tier Control Plane & Node Portal
              </span>
            </div>
          </div>

          {/* Right side: pills + terminate button */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Profile pill */}
            <div className="flex items-center gap-2 bg-[#0F0D3B] border border-white/10 rounded-md px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-gray-300 whitespace-nowrap">
                <span className="text-gray-500">Profile:</span> Tier-2 Institutional Lender (ECOWAS Hub)
              </span>
            </div>

            {/* mTLS Token pill */}
            <div className="flex items-center gap-2 bg-[#0F0D3B] border border-white/10 rounded-md px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-gray-300 whitespace-nowrap">
                <span className="text-gray-500">mTLS Token:</span> #X509-NL-NG-8849
              </span>
            </div>

            {/* Terminate Session button */}
            <Link
              href="#"
              className="flex items-center gap-2 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/40 text-rose-400 font-bold text-[11px] tracking-wider uppercase px-4 py-2 rounded-md transition-colors whitespace-nowrap"
            >
              <FaSignOutAlt className="text-xs" />
              Terminate Session
            </Link>
          </div>
        </div>
      </div>

      {/* SECURITY NOTICE STRIP */}
      <div className="w-full bg-[#050810] border-b border-white/10 px-6 md:px-10 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-[11px] text-gray-300">
          <FaLock className="text-emerald-400 text-[10px]" />
          <span>
            <span className="text-emerald-400 font-bold">Row-Level Security Active:</span>{' '}
            Access isolated between HoldCo (Amsterdam IP Vault), HubCo (Regional ROC/SOC), and OpCo SPVs. Utako, Abuja Operations.
          </span>
        </div>
      </div>
    </>
  );
}