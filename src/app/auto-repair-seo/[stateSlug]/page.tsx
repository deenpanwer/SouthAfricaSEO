
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAutoRepairStateData, AUTO_REPAIR_STATES_DATA } from '@/lib/autoRepairStateConstants';

// Import Auto Repair State Specific Components
import { AutoRepairStateHeroSection } from '@/components/auto-repair-seo/AutoRepairStateHeroSection';
import { AutoRepairStateResultsHighlights } from '@/components/auto-repair-seo/AutoRepairStateResultsHighlights';
import { AutoRepairStateReadyToGrow } from '@/components/auto-repair-seo/AutoRepairStateReadyToGrow';
import { AutoRepairStateServicesGrid } from '@/components/auto-repair-seo/AutoRepairStateServicesGrid';
import { AutoRepairStateWhyChoose } from '@/components/auto-repair-seo/AutoRepairStateWhyChoose';
import { AutoRepairStateAwards } from '@/components/auto-repair-seo/AutoRepairStateAwards';
import { AutoRepairStateCoverage } from '@/components/auto-repair-seo/AutoRepairStateCoverage';
import { AutoRepairStateBottomForm } from '@/components/auto-repair-seo/AutoRepairStateBottomForm';

interface AutoRepairStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return AUTO_REPAIR_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: AutoRepairStatePageProps): Promise<Metadata> {
  const stateData = getAutoRepairStateData(params.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!stateData) {
    return {
      title: 'Auto Repair SEO Services Not Found | TRAC',
      description: 'The auto repair SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle.replace('[StateName]', stateData.stateName),
    description: stateData.heroData.metaDescription.replace('[StateName]', stateData.stateName),
    alternates: {
      canonical: `${domain}/${stateData.slug}-auto-repair-seo-shop`,
    },
  };
}

export default function AutoRepairStatePage({ params }: AutoRepairStatePageProps) {
  const stateData = getAutoRepairStateData(params.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <AutoRepairStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <AutoRepairStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <AutoRepairStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <AutoRepairStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <AutoRepairStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl}
        videoThumbnailUrl={stateData.heroData.heroImage.src}
        videoThumbnailAlt={`${stateData.stateName} Auto Repair SEO Video Thumbnail`}
      />
      <AutoRepairStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <AutoRepairStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AutoRepairStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle.replace('[StateName]', stateData.stateName)} />
        </div>
      </section>
    </div>
  );
}
