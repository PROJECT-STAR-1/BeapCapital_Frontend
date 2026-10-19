import CareersHero from '@/components/careers/CareersHero';
import OpenPositions from '@/components/careers/OpenPositions';
import DualTrackRecruitment from '@/components/careers/DualTrackRecruitment';
import BemtaPrograms from '@/components/careers/BemtaPrograms';
import BeflpRegisters from '@/components/careers/BeflpRegisters';
import ProgressionModel from '@/components/careers/ProgressionModel';
import Leaderboards from '@/components/careers/Leaderboards';
import { ApplicationModalProvider } from '@/components/careers/ApplicationModalContext';
import ApplicationModal from '@/components/careers/ApplicationModal';

export const metadata = {
  title: 'Careers | BEAPCapital Ecosystem',
  description: 'Whether you are an experienced lateral executive joining our operating hubs across Netherlands, Nigeria, and Kenya, or an ambitious intern entering the BEMTA Accelerator, we offer elite pathways to build Africa\'s digital and physical economy.',
};

export default function CareersPage() {
  return (
    <ApplicationModalProvider>
      <div className="bg-[#050810]">
        <CareersHero />
        <OpenPositions />
        <DualTrackRecruitment />
        <BemtaPrograms />
        <BeflpRegisters />
        <ProgressionModel />
        <Leaderboards />
        <ApplicationModal />
      </div>
    </ApplicationModalProvider>
  );
}