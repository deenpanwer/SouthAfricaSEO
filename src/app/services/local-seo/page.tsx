
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local SEO Services | TRAC',
  description: 'Expert Local SEO services dedicated to optimizing your online presence to attract more business from local searches. Appear prominently in local map packs and search results.',
};

export default function LocalSEOServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local SEO Services",
    "description": "Expert Local SEO services dedicated to optimizing your online presence to attract more business from local searches. Appear prominently in local map packs and search results.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "Local SEO",
    "url": "https://www.traconomics.com/services/local-seo"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "TRAC",
        "item": "https://www.traconomics.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.traconomics.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Local SEO Services",
        "item": "https://www.traconomics.com/services/local-seo"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="text-4xl font-bold mb-4">Local SEO Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our local SEO services are dedicated to optimizing your online presence to attract more business from local searches. We focus on Google Business Profile optimization, local citation building, and geo-targeted content creation. This ensures your business appears prominently in local map packs and search results, connecting you directly with nearby customers actively seeking your products or services.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our Local SEO solutions.
      </Link>
    </div>
  );
}
