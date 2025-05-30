
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityData, CITIES_DATA } from '@/lib/cityConstants.tsx'; // .tsx extension
import { TESTIMONIALS } from '@/lib/constants.tsx'; // .tsx extension

// Import City Specific Components
import { CityHeroSection } from '@/components/city-seo/CityHeroSection';
import { CityResultsHighlights } from '@/components/city-seo/CityResultsHighlights';
import { CityPageTestimonials } from '@/components/city-seo/CityPageTestimonials';
import { CityReadyToGrow } from '@/components/city-seo/CityReadyToGrow';
import { CityServicesGrid } from '@/components/city-seo/CityServicesGrid';
import { CityWhyChoose } from '@/components/city-seo/CityWhyChoose';
import { CityAwards } from '@/components/city-seo/CityAwards';
import { CityLocation } from '@/components/city-seo/CityLocation';
import { CityBottomForm } from '@/components/city-seo/CityBottomForm';


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

  if (!cityData) {
    return {
      title: 'City Not Found | TRAC',
      description: 'The city page you are looking for could not be found.',
    };
  }

  return {
    title: cityData.heroData.pageTitle,
    description: cityData.heroData.metaDescription,
    alternates: {
      canonical: `/city/${cityData.slug}`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const cityData = getCityData(params.slug);

  if (!cityData) {
    notFound();
  }

  return (
    <div className="bg-white"> {/* Base background for the page */}
      <CityHeroSection cityData={cityData.heroData} cityName={cityData.cityName} />
      <CityResultsHighlights headline={cityData.resultsHeadline} />
      <CityPageTestimonials testimonials={TESTIMONIALS} /> {/* Using general testimonials */}
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
        cityName={cityData.cityName}
      />
      <CityAwards 
        clutchAward={cityData.awards.clutch}
        upcityAward={cityData.awards.upcity}
        cityName={cityData.cityName}
      />
      <CityLocation locationData={cityData.location} cityName={cityData.cityName} />
      <section className="py-12 md:py-16 bg-white"> {/* Wrapper for bottom form with padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CityBottomForm cityName={cityData.cityName} formTitle={cityData.bottomFormTitle}/>
        </div>
      </section>
      {/* 
        The footer will be the standard app footer from RootLayout.
        No need to add a custom one here unless specifically requested for city pages.
      */}
    </div>
  );
}
