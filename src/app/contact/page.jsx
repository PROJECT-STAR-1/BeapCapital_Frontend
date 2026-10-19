import ContactHero from '@/components/contact/ContactHero';
import InquirySection from '@/components/Home/InquirySection';

export const metadata = {
  title: 'Contact | BEAPCapital Ecosystem',
  description: 'Partner with BEAPCapital Ecosystem. Whether you are an institutional investor, municipal partner, off-taker, or technology partner, reach out to connect with our active advisory team or European expansion unit.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#050810]">
      <ContactHero />
      <InquirySection />
    </div>
  );
}