import WhatWeDoHero from '@/components/what-we-do/WhatWeDoHero';
import OfferingCategories from '@/components/what-we-do/OfferingCategories';

export const metadata = {
  title: 'What We Do | BEAPCapital Ecosystem',
  description: 'Explore BEAPCapital\'s multi-disciplinary capabilities spanning infrastructure advisory, turnkey bio-industrial hardware products, decentralized utility solutions, enterprise software platforms, and pan-African project concessions.',
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-[#050810]">
      <WhatWeDoHero />
        <OfferingCategories />
     
    </div>
  );
}