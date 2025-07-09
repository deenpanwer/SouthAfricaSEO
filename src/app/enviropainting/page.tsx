
import { HeroSection } from './components/HeroSection';
import { ValueProps } from './components/ValueProps';
import { ServicesPreview } from './components/ServicesPreview';
import { HowItWorks } from './components/HowItWorks';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ResourcesHighlight } from './components/ResourcesHighlight';
import { FinalCTA } from './components/FinalCTA';

export default function EnviroPaintingHomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ValueProps />
      <ServicesPreview />
      <HowItWorks />
      <ProjectsShowcase />
      <ResourcesHighlight />
      <FinalCTA />
    </div>
  );
}
