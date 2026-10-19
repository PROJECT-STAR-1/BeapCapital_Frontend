import HowWeDoItHero from '@/components/how-we-do-it/HowWeDoItHero';
import ExecutionTabs from '@/components/how-we-do-it/ExecutionTabs';

export const metadata = {
  title: 'How We Do It | BEAPCapital Ecosystem',
  description: 'A comprehensive, streamlined master document unifying BEAPCapital\'s execution models, platform governance, contracting frameworks, PPP concession mechanics, franchising hierarchies, and Phygital Architecture into a single cohesive operational reference.',
};

export default function HowWeDoItPage() {
  return (
    <div className="bg-[#050810]">
      <HowWeDoItHero />
      <ExecutionTabs />
    </div>
  );
}