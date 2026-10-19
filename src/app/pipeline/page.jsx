import PipelineHero from '@/components/pipeline/PipelineHero';
import EcosystemVerticals from '@/components/pipeline/EcosystemVerticals';
import MearlFramework from '@/components/pipeline/MearlFramework';

export const metadata = {
  title: 'Pipeline | BEAPCapital Ecosystem',
  description: 'Welcome to the BEAPCapital Project Pipeline. Designed to provide institutional partners, lenders, and strategic collaborators with transparent visibility into our multi-vertical asset base across Nigeria and regional markets.',
};

export default function PipelinePage() {
  return (
    <div className="bg-[#050810]">
      <PipelineHero />
       <EcosystemVerticals />
       <MearlFramework />
    </div>
  );
}