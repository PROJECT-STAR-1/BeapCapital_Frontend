import VDRHeader from '@/components/institutional-data-room/VDRHeader';
import VDRPortal from '@/components/institutional-data-room/VDRPortal';

export const metadata = {
  title: 'Institutional Data Room | BEAPCapital Ecosystem',
  description: 'BEAPCapital VDR — 5-Tier Control Plane & Node Portal.',
};

export default function InstitutionalDataRoomPage() {
  return (
    <div className="bg-[#0A0928] min-h-screen text-white">
      <VDRHeader />
      <VDRPortal />
    </div>
  );
}