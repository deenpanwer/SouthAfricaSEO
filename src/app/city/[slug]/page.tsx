
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityData, CITIES_DATA } from '@/lib/cityConstants'; 
import { APP_NAME, CONTACT_DETAILS, REVIEW_COUNT } from '@/lib/constants.tsx';
import { cityTestimonials } from '@/components/city-seo/CityResultsHighlights';

// Import City Specific Components
import { CityHeroSection } from '@/components/city-seo/CityHeroSection';
import { CityResultsHighlights } from '@/components/city-seo/CityResultsHighlights';
import { CityReadyToGrow } from '@/components/city-seo/CityReadyToGrow';
import { CityServicesGrid } from '@/components/city-seo/CityServicesGrid';
import { CityWhyChoose } from '@/components/city-seo/CityWhyChoose';
import { CityAwards } from '@/components/city-seo/CityAwards';
import { CityLocation } from '@/components/city-seo/CityLocation';
import { CityBottomForm } from '@/components/city-seo/CityBottomForm';
import { CityFAQSection } from '@/components/city-seo/CityFAQSection';
import { CityRoadmap } from '@/components/city-seo/CityRoadmap';
import { CityTeam } from '@/components/city-seo/CityTeam';
import { CityROICalculator } from '@/components/city-seo/CityROICalculator';
import { CityBlogSection } from '@/components/city-seo/CityBlogSection';

interface CityPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const cityData = getCityData(awaitedParams.slug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!cityData) {
    return {
      title: 'City SEO Services Not Found | TRAC',
      description: 'The city SEO service page you are looking for could not be found.',
    };
  }

  return {
    title: cityData.heroData.pageTitle,
    description: cityData.heroData.metaDescription,
    keywords: cityData.metaKeywords,
    alternates: {
      canonical: `${domain}/${cityData.slug}-seo-service-agency`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const awaitedParams = await params;
  const cityData = getCityData(awaitedParams.slug);

  if (!cityData) {
    notFound();
  }

  const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': `TRAC, a ${cityData.cityName} SEO Agency`,
  'additionalType': 'https://www.productontology.org/id/Search_engine_optimization',
  'image': typeof cityData.heroData.heroImage === 'string' ? cityData.heroData.heroImage : cityData.heroData.heroImage.src,
  'telephone': cityData.location.phone,
  'email': cityData.location.email,
  'priceRange': '$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': cityData.location.streetAddress,
    'addressLocality': cityData.location.addressLocality,
    'addressRegion': cityData.location.addressRegion,
    'postalCode': cityData.location.postalCode,
    'addressCountry': cityData.location.addressCountry,
  },
  'geo': cityData.location.geo ? {
    '@type': 'GeoCoordinates',
    'latitude': cityData.location.geo.latitude,
    'longitude': cityData.location.geo.longitude,
  } : undefined,
  'url': `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/${cityData.slug}-seo-service-agency`,
  'hasMap': cityData.location.hasMap,
  'description': cityData.heroData.metaDescription,
};

  // Product Schema with AggregateRating and a single Review
  const firstTestimonial = cityTestimonials[0]; // Get the first testimonial

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${cityData.cityName} SEO Services`,
    "description": cityData.heroData.metaDescription,
    "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/${cityData.slug}-seo-service-agency`,
    "image": typeof cityData.heroData.heroImage === 'string' ? cityData.heroData.heroImage : cityData.heroData.heroImage.src,
    "brand": {
      "@type": "Brand",
      "name": "TRAC"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": firstTestimonial ? (firstTestimonial.rating || 5).toFixed(1) : "5.0", // Use first testimonial's rating or default
      "reviewCount": REVIEW_COUNT // Use the manually set review count
    },
    "review": firstTestimonial ? {
      "@type": "Review",
      "reviewBody": firstTestimonial.quote,
      "author": {
        "@type": "Person",
        "name": firstTestimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": firstTestimonial.rating || 5,
        "bestRating": "5",
        "worstRating": "1"
      }
    } : undefined // Only include review if a testimonial exists
  };

    const heroVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${cityData.cityName} SEO Agency: Our Proven Approach`,
    "description": `Learn how Trac, a leading ${cityData.cityName} SEO agency, helps businesses achieve top search rankings and sustainable organic growth with proven strategies.`,
    "uploadDate": "2025-08-25T00:00:00Z",
    "thumbnailUrl": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/home/Our-Team.webp`,
    "embedUrl": cityData.heroData.heroVideoUrl,
  };

  const farahLawFirmTestimonialSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `Client Success Story: Farah Law Firm - ${cityData.cityName} SEO Agency Testimonial`,
    "description": `Hear how Farah Law Firm partnered with Trac to achieve significant SEO results and increased online visibility in ${cityData.cityName}.`,
    "uploadDate": "2025-08-25T00:00:00Z",
    "thumbnailUrl": "/home/Client-Farah-Law-Firm.webp",
    "embedUrl": "https://www.youtube.com/embed/--5lHRSfLZg",
  };

  const nationwideConstructionTestimonialSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `Nationwide Construction: ${cityData.cityName} SEO Agency Testimonial`,
    "description": `Discover how Trac's tailored SEO strategies helped Nationwide Construction drive more qualified leads and improve search performance in ${cityData.cityName}.`,
    "uploadDate": "2025-08-25T00:00:00Z",
    "thumbnailUrl": "/home/Client-Natiowide-Construction.webp",
    "embedUrl": "https://www.youtube.com/embed/0cWlf1BmUMw",
  };

  



  const whyChooseUsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${cityData.whyChooseSectionHeadline} - ${cityData.cityName}`,
    "description": cityData.whyChooseIntro,
    "itemListElement": cityData.whyChoosePoints.map((point, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": point.title,
      "description": point.description,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "name": `${cityData.cityName} SEO Service Agency`,
    "url": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "TRAC seo agency",
        "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${cityData.cityName} SEO Service Agency`,
        "item": `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/${cityData.slug}-seo-service-agency`
      }
    ]
  };

  const localSeoVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `TRAC SEO Agency, ${cityData.cityName}`,
    "description": `Learn how TRAC, a leading local SEO agency, helps businesses in ${cityData.cityName} achieve top search rankings and sustainable organic growth with proven local strategies.`,
    "uploadDate": "2025-05-02T01:24:00Z",
    "thumbnailUrl": typeof cityData.heroData.heroImage === 'string' ? cityData.heroData.heroImage : cityData.heroData.heroImage.src,
    "embedUrl": cityData.heroData.heroVideoUrl
  };

  const combinedSchemas = [localBusinessSchema, productSchema, heroVideoSchema, farahLawFirmTestimonialSchema, nationwideConstructionTestimonialSchema, localSeoVideoSchema, whyChooseUsSchema, breadcrumbSchema];

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchemas) }}
      />
      <CityHeroSection cityData={cityData.heroData} cityName={cityData.cityName} />
      <CityResultsHighlights headline={cityData.resultsHeadline} />
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
      <CityRoadmap cityName={cityData.cityName} roadmapSteps={cityData.roadmapSteps} />
            <CityTeam
        cityName={cityData.cityName}
        teamSectionHeadline={cityData.teamSectionHeadline}
        teamSectionDescription={cityData.teamSectionDescription}
        founderBio={cityData.founderBio}
      />
      <CityBlogSection />
      <CityROICalculator cityName={cityData.cityName} />
      <CityAwards
        clutchAward={cityData.awards.clutch}
        upcityAward={cityData.awards.upcity}
        cityName={cityData.cityName}
      />
      <CityLocation locationData={cityData.location} cityName={cityData.cityName} />
      <CityFAQSection
        faqData={cityData.faqData}
        cityName={cityData.cityName}
        headline={cityData.faqSectionHeadline}
      />
      <section className="py-12 md:py-16 bg-white"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CityBottomForm cityName={cityData.cityName} formTitle={cityData.bottomFormTitle} />
        </div>
      </section>
    </div>
  );
}
