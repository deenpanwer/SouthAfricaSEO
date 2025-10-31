import { HomeHeroSection } from '@/components/home/HomeHeroSection';
import { PartnerLogosSection } from '@/components/home/PartnerLogosSection';
import dynamic from 'next/dynamic';

const ClientResultsSection = dynamic(() => import('@/components/home/ClientResultsSection').then(mod => mod.ClientResultsSection));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(mod => mod.TestimonialsSection));
const WhyChooseTracSection = dynamic(() => import('@/components/home/WhyChooseTracSection').then(mod => mod.WhyChooseTracSection));
const AwardWinningSection = dynamic(() => import('@/components/home/AwardWinningSection').then(mod => mod.AwardWinningSection));
const TracGrowthInsiderSection = dynamic(() => import('@/components/home/TracGrowthInsiderSection').then(mod => mod.TracGrowthInsiderSection));
const DigitalExpertiseSection = dynamic(() => import('@/components/home/DigitalExpertiseSection').then(mod => mod.DigitalExpertiseSection));
const ReadyToGrowSection = dynamic(() => import('@/components/home/ReadyToGrowSection').then(mod => mod.ReadyToGrowSection));

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <PartnerLogosSection />
      <ClientResultsSection />
      <TestimonialsSection />
      <WhyChooseTracSection />
      <AwardWinningSection />
      <TracGrowthInsiderSection />
      <DigitalExpertiseSection />
      <ReadyToGrowSection />
    </main>
  );
}
