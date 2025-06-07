
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityData, CITIES_DATA } from '@/lib/cityConstants.tsx'; 

// Import City Specific Components
import { CityHeroSection } from '@/components/city-seo/CityHeroSection';
import { CityResultsHighlights } from '@/components/city-seo/CityResultsHighlights';
import { CityReadyToGrow } from '@/components/city-seo/CityReadyToGrow';
import { CityServicesGrid } from '@/components/city-seo/CityServicesGrid';
import { CityWhyChoose } from '@/components/city-seo/CityWhyChoose';
import { CityAwards } from '@/components/city-seo/CityAwards';
import { CityLocation } from '@/components/city-seo/CityLocation';
import { CityBottomForm } from '@/components/city-seo/CityBottomForm';
import { CityPageTestimonials } from '@/components/city-seo/CityPageTestimonials'; // Assuming this was created

interface CityPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityData = getCityData(params.slug);
  const domain = process.env.WEBSITE_URL || 'https://www.tracprotect.online';

  if (!cityData) {
    return {
      title: 'City SEO Services Not Found | TRAC',
      description: 'The city SEO service page you are looking for could not be found.',
    };
  }

  return {
    title: cityData.heroData.pageTitle,
    description: cityData.heroData.metaDescription,
    alternates: {
      canonical: `${domain}/${cityData.slug}-seo-service-agency`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const cityData = getCityData(params.slug);

  if (!cityData) {
    notFound();
  }

  return (
    <div className="bg-white"> 
      <CityHeroSection cityData={cityData.heroData} cityName={cityData.cityName} />
      <CityResultsHighlights headline={cityData.resultsHeadline} />
      {/* Testimonials integrated into CityResultsHighlights or can be a separate call here */}
      {/* <CityPageTestimonials cityName={cityData.cityName} /> */} 
      <CityReadyToGrow headline={cityData.readyToGrowHeadline} cityName={cityData.cityName} />
      <CityServicesGrid
        headline={cityData.servicesSectionHeadline}
        subheadline={cityData.servicesSectionSubheadline}
        services={cityData.services}
      />
      <CityWhyChoose
        headline={cityData.whyChooseSectionHeadline}
        intro={cityData.whyChooseIntro}
        points={cityData.whyChoosePoints}
        whyChooseParagraph1={cityData.whyChooseParagraph1}
        whyChooseParagraph2={cityData.whyChooseParagraph2}
        cityName={cityData.cityName}
      />
      <CityAwards
        clutchAward={cityData.awards.clutch}
        upcityAward={cityData.awards.upcity}
        cityName={cityData.cityName}
      />
      <CityLocation locationData={cityData.location} cityName={cityData.cityName} />
      <section className="py-12 md:py-16 bg-white"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CityBottomForm cityName={cityData.cityName} formTitle={cityData.bottomFormTitle} />
        </div>
      </section>
    </div>
  );
}
