import HeroSection from '@/components/Home/HeroSection';
import ExecutiveOverview from '@/components/Home/ExecutiveOverview';
import HubCentre from '@/components/Home/HubCentre';
import EcosystemMatrix from '@/components/Home/EcosystemMatrix';
import CapabilitiesSection from '@/components/Home/CapabilitiesSection';
import DeploymentModel from '@/components/Home/DeploymentModel';
import GeographicalFootprint from '@/components/Home/GeographicalFootprint';
import InnovationMediaHub from '@/components/Home/InnovationMediaHub';
import InquirySection from '@/components/Home/InquirySection';

export default function Home() {
  return (
    <div className="bg-[#050810]">
      <HeroSection />
      <ExecutiveOverview />
      <HubCentre />
      <EcosystemMatrix />
      <CapabilitiesSection />
      <DeploymentModel />
      <GeographicalFootprint />
      <InnovationMediaHub />
      <InquirySection />
    </div>
  );
}