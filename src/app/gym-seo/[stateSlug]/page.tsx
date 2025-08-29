
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGymStateData, GYM_STATES_DATA } from '@/lib/gymStateConstants';

// Import Gym State Specific Components
import { GymStateHeroSection } from '@/components/gym-seo/GymStateHeroSection';
import { GymStateResultsHighlights } from '@/components/gym-seo/GymStateResultsHighlights';
import { GymStateReadyToGrow } from '@/components/gym-seo/GymStateReadyToGrow';
import { GymStateServicesGrid } from '@/components/gym-seo/GymStateServicesGrid';
import { GymStateWhyChoose } from '@/components/gym-seo/GymStateWhyChoose';
import { GymStateAwards } from '@/components/gym-seo/GymStateAwards';
import { GymStateCoverage } from '@/components/gym-seo/GymStateCoverage';
import { GymStateBottomForm } from '@/components/gym-seo/GymStateBottomForm';

interface GymStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return GYM_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: GymStatePageProps): Promise<Metadata> {
  const stateData = getGymStateData(params.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!stateData) {
    return {
      title: 'Gym & Fitness SEO Services Not Found | TRAC',
      description: 'The gym and fitness SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle.replace('[StateName]', stateData.stateName),
    description: stateData.heroData.metaDescription.replace('[StateName]', stateData.stateName),
    alternates: {
      canonical: `${domain}/${stateData.slug}-gym-seo-strategies`,
    },
  };
}

export default function GymStatePage({ params }: GymStatePageProps) {
  const stateData = getGymStateData(params.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <GymStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <GymStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <GymStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <GymStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <GymStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl}
        videoThumbnailUrl={stateData.heroData.heroImage.src}
        videoThumbnailAlt={`${stateData.stateName} Gym SEO Video Thumbnail`}
      />
      <GymStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <GymStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GymStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle.replace('[StateName]', stateData.stateName)} />
        </div>
      </section>
    </div>
  );
}
