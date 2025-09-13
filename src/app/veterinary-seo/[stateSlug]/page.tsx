
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVeterinaryStateData, VETERINARY_STATES_DATA } from '@/lib/veterinaryStateConstants';

// Import Veterinary State Specific Components
import { VeterinaryStateHeroSection } from '@/components/veterinary-seo/VeterinaryStateHeroSection';
import { VeterinaryStateResultsHighlights } from '@/components/veterinary-seo/VeterinaryStateResultsHighlights';
import { VeterinaryStateReadyToGrow } from '@/components/veterinary-seo/VeterinaryStateReadyToGrow';
import { VeterinaryStateServicesGrid } from '@/components/veterinary-seo/VeterinaryStateServicesGrid';
import { VeterinaryStateWhyChoose } from '@/components/veterinary-seo/VeterinaryStateWhyChoose';
import { VeterinaryStateAwards } from '@/components/veterinary-seo/VeterinaryStateAwards';
import { VeterinaryStateCoverage } from '@/components/veterinary-seo/VeterinaryStateCoverage';
import { VeterinaryStateBottomForm } from '@/components/veterinary-seo/VeterinaryStateBottomForm';

interface VeterinaryStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return VETERINARY_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: VeterinaryStatePageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const stateData = getVeterinaryStateData(awaitedParams.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!stateData) {
    return {
      title: 'Veterinary SEO Services Not Found | TRAC',
      description: 'The veterinary SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle.replace('[StateName]', stateData.stateName),
    description: stateData.heroData.metaDescription.replace('[StateName]', stateData.stateName),
    alternates: {
      canonical: `${domain}/${stateData.slug}-veterinary-seo-clinic`, // Example canonical structure
    },
  };
}

export default async function VeterinaryStatePage({ params }: VeterinaryStatePageProps) {
  const awaitedParams = await params;
  const stateData = getVeterinaryStateData(awaitedParams.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <VeterinaryStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <VeterinaryStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <VeterinaryStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <VeterinaryStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <VeterinaryStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl}
        videoThumbnailUrl={stateData.heroData.heroImage.src}
        videoThumbnailAlt={`${stateData.stateName} Veterinary SEO Video Thumbnail`}
      />
      <VeterinaryStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <VeterinaryStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <VeterinaryStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle.replace('[StateName]', stateData.stateName)} />
        </div>
      </section>
    </div>
  );
}
