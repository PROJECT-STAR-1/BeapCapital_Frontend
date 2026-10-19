import { Suspense } from 'react';
import HubCentreMatrixHero from '@/components/hub-centre-matrix/HubCentreMatrixHero';
import HubCentreTabs from '@/components/hub-centre-matrix/HubCentreTabs';

export const metadata = {
  title: 'Hub Centre Matrix | BEAPCapital Ecosystem',
  description: 'An upgraded professional web version of the BEAPCapital Hub Centre. Explore how our 5 specialized operating hubs and 16 business verticals snap together like Lego bricks to deliver clean energy, circular bio-refining, advanced real estate, and enterprise software control.',
};

export default function HubCentreMatrixPage() {
  return (
    <div className="bg-[#050810]">
      <HubCentreMatrixHero />
      <Suspense fallback={
        <div className="w-full bg-[#0F0D3B] text-white py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-gray-400 text-sm text-center">
            Loading hub centre…
          </div>
        </div>
      }>
        <HubCentreTabs />
      </Suspense>
    </div>
  );
}