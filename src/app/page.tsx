import { HomeHeroSection } from '@/components/home/HomeHeroSection';
import { PartnerLogosSection } from '@/components/home/PartnerLogosSection';
import { ClientResultsSection } from '@/components/home/ClientResultsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { WhyChooseThriveSection } from '@/components/home/WhyChooseTracSection';
import { AwardWinningSection } from '@/components/home/AwardWinningSection';
import { TracGrowthInsiderSection } from '@/components/home/TracGrowthInsiderSection';
import { DigitalExpertiseSection } from '@/components/home/DigitalExpertiseSection';
import { ReadyToGrowSection } from '@/components/home/ReadyToGrowSection';

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <PartnerLogosSection />
      <ClientResultsSection />
      <TestimonialsSection />
      <WhyChooseThriveSection />
      <AwardWinningSection />
      <TracGrowthInsiderSection />
      <DigitalExpertiseSection />
      <ReadyToGrowSection />
    </main>
  );
}