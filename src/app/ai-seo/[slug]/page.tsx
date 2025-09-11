import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAiSeoCityData, AI_SEO_CITIES_DATA } from '@/lib/aiSeoConstants';
import { AiSeoCityPageData } from '../../types/aiSeo';

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
    <div>
      <h1>{cityData.heroData.pageTitle}</h1>
      <p>This is the AI SEO company page for {cityData.cityName}.</p>
      <p>Slug: {cityData.slug}</p>
    </div>
  );
}
