
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAiSeoCityData, AI_SEO_CITIES_DATA } from '@/lib/aiSeoConstants';
import type { AiSeoCityPageData } from '@/types/aiSeo';

// Import New Components
import { AiSeoHeroSection } from '@/components/ai-seo/AiSeoHeroSection';
import { AiSeoProblemSolution } from '@/components/ai-seo/AiSeoProblemSolution';
import { AiSeoServiceGrid } from '@/components/ai-seo/AiSeoServiceGrid';
import { AiSeoProcessVisual } from '@/components/ai-seo/AiSeoProcessVisual';
import { AiSeoResultsHighlights } from '@/components/ai-seo/AiSeoResultsHighlights';
import { AiSeoTechnologyShowcase } from '@/components/ai-seo/AiSeoTechnologyShowcase';
import { AiSeoFaqSection } from '@/components/ai-seo/AiSeoFaqSection';
import { AiSeoFinalCTA } from '@/components/ai-seo/AiSeoFinalCTA';

interface AiSeoPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return AI_SEO_CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: AiSeoPageProps): Promise<Metadata> {
  const cityData: AiSeoCityPageData | undefined = getAiSeoCityData(params.slug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!cityData) {
    return {
      title: 'AI SEO Company Not Found',
      description: 'The AI SEO company page you are looking for could not be found.',
    };
  }

  return {
    title: cityData.heroData.pageTitle,
    description: cityData.heroData.metaDescription,
    alternates: {
      canonical: `${domain}/${cityData.slug}`,
    },
  };
}

export default async function AiSeoPage({ params }: AiSeoPageProps) {
  const cityData: AiSeoCityPageData | undefined = getAiSeoCityData(params.slug);

  if (!cityData) {
    notFound();
  }

  return (
    <div className="bg-background">
      <AiSeoHeroSection cityName={cityData.cityName} heroData={cityData.heroData} />
      <AiSeoProblemSolution
        headline={cityData.problemSolutionData.headline}
        items={cityData.problemSolutionData.items}
      />
      <AiSeoServiceGrid
        headline={cityData.servicesData.headline}
        items={cityData.servicesData.items}
      />
      <AiSeoProcessVisual
        headline={cityData.processData.headline}
        steps={cityData.processData.steps}
      />
      <AiSeoResultsHighlights
        headline={cityData.resultsData.headline}
        stats={cityData.resultsData.stats}
        testimonials={cityData.resultsData.testimonials}
      />
      <AiSeoTechnologyShowcase
        headline={cityData.technologyData.headline}
        items={cityData.technologyData.items}
      />
      <AiSeoFaqSection
        headline={cityData.faqData.headline}
        items={cityData.faqData.items}
      />
      <AiSeoFinalCTA finalCtaData={cityData.finalCtaData} />
    </div>
  );
}
