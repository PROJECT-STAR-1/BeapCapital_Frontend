import WhoWeAreHero from '@/components/who-we-are/WhoWeAreHero';
import CorporateVision from '@/components/who-we-are/CorporateVision';
import BusinessMandate from '@/components/who-we-are/BusinessMandate';
import MissionAndValues from '@/components/who-we-are/MissionAndValues';
import ValuesGovernance from '@/components/who-we-are/ValuesGovernance';
import LeadershipBoard from '@/components/who-we-are/LeadershipBoard';
import OperatingPhilosophy from '@/components/who-we-are/OperatingPhilosophy';
import BeapcapitalWay from '@/components/who-we-are/BeapcapitalWay';

export const metadata = {
  title: 'Who We Are | BEAPCapital Ecosystem',
  description: 'Building Next-Generation Phygital Systems — BEAPCapital operates as an integrated multi-disciplinary advisory, project development, and asset-orchestration engine.',
};

export default function WhoWeArePage() {
  return (
    <div className="bg-[#050810]">
      <WhoWeAreHero />
      <CorporateVision />
      <BusinessMandate />
      <MissionAndValues />
      <ValuesGovernance />
      <LeadershipBoard />
      <OperatingPhilosophy />
      <BeapcapitalWay />
    </div>
  );
}