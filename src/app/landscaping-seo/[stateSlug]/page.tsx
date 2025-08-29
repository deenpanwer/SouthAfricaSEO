
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLandscapingStateData, LANDSCAPING_STATES_DATA } from '@/lib/landscapingStateConstants';

// Import Landscaping State Specific Components
import { LandscapingStateHeroSection } from '@/components/landscaping-seo/LandscapingStateHeroSection';
import { LandscapingStateResultsHighlights } from '@/components/landscaping-seo/LandscapingStateResultsHighlights';
import { LandscapingStateReadyToGrow } from '@/components/landscaping-seo/LandscapingStateReadyToGrow';
import { LandscapingStateServicesGrid } from '@/components/landscaping-seo/LandscapingStateServicesGrid';
import { LandscapingStateWhyChoose } from '@/components/landscaping-seo/LandscapingStateWhyChoose';
import { LandscapingStateAwards } from '@/components/landscaping-seo/LandscapingStateAwards';
import { LandscapingStateCoverage } from '@/components/landscaping-seo/LandscapingStateCoverage';
import { LandscapingStateBottomForm } from '@/components/landscaping-seo/LandscapingStateBottomForm';

interface LandscapingStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return LANDSCAPING_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: LandscapingStatePageProps): Promise<Metadata> {
  const stateData = getLandscapingStateData(params.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com'; 

  if (!stateData) {
    return {
      title: 'Landscaping SEO Services Not Found | TRAC',
      description: 'The landscaping SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle,
    description: stateData.heroData.metaDescription,
    alternates: {
      canonical: `${domain}/${stateData.slug}-landscaping-seo-company`,
    },
  };
}

export default function LandscapingStatePage({ params }: LandscapingStatePageProps) {
  const stateData = getLandscapingStateData(params.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-white"> 
      <LandscapingStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <LandscapingStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <LandscapingStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <LandscapingStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <LandscapingStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl} // Assuming hero video can be reused or made generic
        videoThumbnailUrl={stateData.heroData.heroImage.src} // Using hero image as thumbnail
        videoThumbnailAlt={`${stateData.stateName} Landscaping SEO Video Thumbnail`}
      />
      <LandscapingStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <LandscapingStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-white"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LandscapingStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle} />
        </div>
      </section>
    </div>
  );
}
