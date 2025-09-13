
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAiSeoCityData, AI_SEO_CITIES_DATA } from '@/lib/aiSeoConstants';
import type { AiSeoCityPageData, AiSeoFaqItem } from '@/types/aiSeo';

// Import New Components
import { AiSeoHeroSection } from '@/components/ai-seo/AiSeoHeroSection';
import { AiSeoVisibilitySection } from '@/components/ai-seo/AiSeoVisibilitySection';
import { AiSeoIntroSection } from '@/components/ai-seo/AiSeoIntroSection';
import { AiSeoComparisonTable } from '@/components/ai-seo/AiSeoComparisonTable';
import { SgeGeoSection } from '@/components/ai-seo/SgeGeoSection';
import { AiSeoWhyNeedSection } from '@/components/ai-seo/AiSeoWhyNeedSection';
import { AiSeoFaqSection } from '@/components/ai-seo/AiSeoFaqSection';
import { AiSeoWhyChoose } from '@/components/ai-seo/AiSeoWhyChoose';

interface AiSeoPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return AI_SEO_CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: AiSeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityData: AiSeoCityPageData | undefined = getAiSeoCityData(slug);
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
  const { slug } = await params;
  const cityData: AiSeoCityPageData | undefined = getAiSeoCityData(slug);

  if (!cityData) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqData.items.map((item: AiSeoFaqItem) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="bg-background">
      <AiSeoHeroSection cityName={cityData.cityName} heroData={cityData.heroData} />
      <AiSeoVisibilitySection visibilityData={cityData.visibilityData} />
      <AiSeoIntroSection introData={cityData.introData} />
      <AiSeoComparisonTable headline={cityData.comparisonData.headline} items={cityData.comparisonData.items} ctaText={cityData.comparisonData.ctaText} />
      <SgeGeoSection cityName={cityData.cityName} />
      <AiSeoWhyNeedSection whyNeedData={cityData.whyNeedData} />
      <AiSeoWhyChoose whyChooseData={cityData.whyChooseData} />
      <AiSeoFaqSection
        headline={cityData.faqData.headline}
        items={cityData.faqData.items}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
