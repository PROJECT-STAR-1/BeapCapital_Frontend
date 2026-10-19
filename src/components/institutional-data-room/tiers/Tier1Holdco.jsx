import { FaEye, FaDownload, FaCheckCircle } from 'react-icons/fa';

const files = [
  {
    name: 'Master Capital Root & Dutch Bilateral Investment Treaty (BIT) Structuring',
    access: 'Tier-1 Root',
    accessColor: 'emerald',
    format: 'PDF',
    size: '5.2 MB',
  },
  {
    name: 'DLSiLabs B.V. Master IP Vault & X.509 Certificate Authority Source Code Specs',
    access: 'Restricted IP',
    accessColor: 'cyan',
    format: 'PDF',
    size: '14.1 MB',
  },
  {
    name: 'Global Financial Clearinghouse & 15 Global Operating Divisions Charter',
    access: 'Confidential',
    accessColor: 'amber',
    format: 'PDF',
    size: '4.8 MB',
  },
];

const accessColors = {
  emerald: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
  cyan: 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400',
  amber: 'bg-amber-400/15 border-amber-400/40 text-amber-400',
};

export default function Tier1Holdco() {
  return (
    <div className="bg-[#0A0928] border border-white/10 rounded-xl p-6 md:p-8">

      {/* TIER BADGE */}
      <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
        TIER 1: HOLDCO & IP VAULT (GOC)
      </p>

      {/* TOP ROW: Title (left) + Export (right) */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-8 pb-6 border-b border-white/10">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-extrabold leading-snug">
            BEAPCapital Holdings U.A. (Amsterdam) & DLSiLabs B.V. Master IP Vault
          </h2>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* File count pill */}
          <span className="bg-[#0F0D3B] border border-white/10 text-gray-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md whitespace-nowrap">
            3 Files Available
          </span>

          {/* Export button */}
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[10px] tracking-wider uppercase px-4 py-2 rounded-md flex items-center gap-2 transition-colors whitespace-nowrap">
            <FaDownload className="text-[11px]" />
            Export Package (Zip)
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase pb-4 pr-4">
                Package / Document Name
              </th>
              <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase pb-4 px-4">
                Access Tier / Security Key
              </th>
              <th className="text-left text-gray-500 text-[10px] font-bold tracking-widest uppercase pb-4 px-4">
                Format / Size
              </th>
              <th className="text-right text-gray-500 text-[10px] font-bold tracking-widest uppercase pb-4 pl-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-b border-white/5 last:border-b-0">
                {/* Document name */}
                <td className="py-5 pr-4 align-top">
                  <p className="text-white text-[12px] font-semibold leading-snug max-w-md">
                    {file.name}
                  </p>
                </td>

                {/* Access badge */}
                <td className="py-5 px-4 align-top">
                  <span
                    className={`inline-block text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${accessColors[file.accessColor]}`}
                  >
                    {file.access}
                  </span>
                </td>

                {/* Format / size */}
                <td className="py-5 px-4 align-top">
                  <p className="text-gray-400 text-[11px] whitespace-nowrap">
                    {file.format} • {file.size}
                  </p>
                </td>

                {/* Actions */}
                <td className="py-5 pl-4 align-top">
                  <div className="flex flex-col items-end gap-2">
                    <button className="bg-[#0F0D3B] hover:bg-[#1a1750] border border-white/10 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap">
                      <FaEye className="text-[9px]" />
                      View
                    </button>
                    <button className="bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap">
                      <FaDownload className="text-[9px]" />
                      DL
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-6 pt-5 border-t border-white/10">
        <span className="flex items-center gap-2 text-emerald-400 text-[10px]">
          <FaCheckCircle className="text-[10px]" />
          Tenant Isolation Active: Row-Level Security (RLS) token verified.
        </span>
        <span className="text-gray-500 text-[10px]">
          BEAPCapital VDR v5.0 (mTLS Enabled)
        </span>
      </div>

    </div>
  );
}