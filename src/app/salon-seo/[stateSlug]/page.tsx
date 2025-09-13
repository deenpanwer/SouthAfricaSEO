
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSalonStateData, SALON_STATES_DATA } from '@/lib/salonStateConstants';

// Import Salon State Specific Components
import { SalonStateHeroSection } from '@/components/salon-seo/SalonStateHeroSection';
import { SalonStateResultsHighlights } from '@/components/salon-seo/SalonStateResultsHighlights';
import { SalonStateReadyToGrow } from '@/components/salon-seo/SalonStateReadyToGrow';
import { SalonStateServicesGrid } from '@/components/salon-seo/SalonStateServicesGrid';
import { SalonStateWhyChoose } from '@/components/salon-seo/SalonStateWhyChoose';
import { SalonStateAwards } from '@/components/salon-seo/SalonStateAwards';
import { SalonStateCoverage } from '@/components/salon-seo/SalonStateCoverage';
import { SalonStateBottomForm } from '@/components/salon-seo/SalonStateBottomForm';

interface SalonStatePageProps {
  params: { stateSlug: string };
}

export async function generateStaticParams() {
  return SALON_STATES_DATA.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({ params }: SalonStatePageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const stateData = getSalonStateData(awaitedParams.stateSlug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!stateData) {
    return {
      title: 'Salon & Spa SEO Services Not Found | TRAC',
      description: 'The salon and spa SEO service page for this state could not be found.',
    };
  }

  return {
    title: stateData.heroData.pageTitle.replace('[StateName]', stateData.stateName),
    description: stateData.heroData.metaDescription.replace('[StateName]', stateData.stateName),
    alternates: {
      canonical: `${domain}/${stateData.slug}-salon-seo-services`,
    },
  };
}

export default async function SalonStatePage({ params }: SalonStatePageProps) {
  const awaitedParams = await params;
  const stateData = getSalonStateData(awaitedParams.stateSlug);

  if (!stateData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <SalonStateHeroSection stateData={stateData.heroData} stateName={stateData.stateName} />
      <SalonStateResultsHighlights headline={stateData.resultsHeadline} stateName={stateData.stateName} />
      <SalonStateReadyToGrow headline={stateData.readyToGrowHeadline} stateName={stateData.stateName} stateSlug={stateData.slug} />
      <SalonStateServicesGrid
        headline={stateData.servicesSectionHeadline}
        subheadline={stateData.servicesSectionSubheadline}
        services={stateData.services}
        stateName={stateData.stateName}
      />
      <SalonStateWhyChoose
        headline={stateData.whyChooseSectionHeadline}
        intro={stateData.whyChooseIntro}
        points={stateData.whyChoosePoints}
        whyChooseParagraph1={stateData.whyChooseParagraph1}
        whyChooseParagraph2={stateData.whyChooseParagraph2}
        stateName={stateData.stateName}
        videoUrl={stateData.heroData.heroVideoUrl}
        videoThumbnailUrl={stateData.heroData.heroImage.src}
        videoThumbnailAlt={`${stateData.stateName} Salon SEO Video Thumbnail`}
      />
      <SalonStateAwards
        clutchAward={stateData.awards.clutch}
        upcityAward={stateData.awards.upcity}
        stateName={stateData.stateName}
      />
      <SalonStateCoverage coverageData={stateData.coverageData} stateName={stateData.stateName} />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SalonStateBottomForm stateName={stateData.stateName} formTitle={stateData.bottomFormTitle.replace('[StateName]', stateData.stateName)} />
        </div>
      </section>
    </div>
  );
}
