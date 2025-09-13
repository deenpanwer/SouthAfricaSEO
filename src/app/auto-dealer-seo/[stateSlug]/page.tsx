
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAutoDealerStateData, AUTO_DEALER_STATES_DATA } from '@/lib/autoDealerStateConstants';

// Import Auto Dealer State Specific Components
import { AutoDealerStateHeroSection } from '@/components/auto-dealer-seo/AutoDealerStateHeroSection';
import { AutoDealerStateResultsHighlights } from '@/components/auto-dealer-seo/AutoDealerStateResultsHighlights';
import { AutoDealerStateReadyToGrow } from '@/components/auto-dealer-seo/AutoDealerStateReadyToGrow';
import { AutoDealerStateServicesGrid } from '@/components/auto-dealer-seo/AutoDealerStateServicesGrid';
import { AutoDealerStateWhyChoose } from '@/components/auto-dealer-seo/AutoDealerStateWhyChoose';
import { AutoDealerStateAwards } from '@/components/auto-dealer-seo/AutoDealerStateAwards';
import { AutoDealerStateCoverage } from '@/components/auto-dealer-seo/AutoDealerStateCoverage';
import { AutoDealerStateBottomForm } from '@/components/auto-dealer-seo/AutoDealerStateBottomForm';

interface AutoDealerStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return AUTO_DEALER_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: AutoDealerStatePageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const stateData = getAutoDealerStateData(awaitedParams.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!stateData) {
    return {
      title: 'Auto Dealer SEO Services Not Found | TRAC',
      description: 'The auto dealer SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle.replace('[StateName]', stateData.stateName),
    description: stateData.heroData.metaDescription.replace('[StateName]', stateData.stateName),
    alternates: {
      canonical: `${domain}/${stateData.slug}-auto-dealer-seo-marketing`,
    },
  };
}

export default async function AutoDealerStatePage({ params }: AutoDealerStatePageProps) {
  const awaitedParams = await params;
  const stateData = getAutoDealerStateData(awaitedParams.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <AutoDealerStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <AutoDealerStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <AutoDealerStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <AutoDealerStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <AutoDealerStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl}
        videoThumbnailUrl={stateData.heroData.heroImage.src}
        videoThumbnailAlt={`${stateData.stateName} Auto Dealer SEO Video Thumbnail`}
      />
      <AutoDealerStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <AutoDealerStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AutoDealerStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle.replace('[StateName]', stateData.stateName)} />
        </div>
      </section>
    </div>
  );
}
