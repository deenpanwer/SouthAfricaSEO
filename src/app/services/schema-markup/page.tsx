
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schema Markup Services | TRAC',
  description: 'Expert Schema Markup services to implement structured data for enhanced search engine understanding and rich results. Boost your visibility with star ratings, product information, and more.',
};

export default function SchemaMarkupServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Schema Markup Services",
    "description": "Expert Schema Markup services to implement structured data for enhanced search engine understanding and rich results. Boost your visibility with star ratings, product information, and more.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "Schema Markup",
    "url": "https://www.traconomics.com/services/schema-markup"
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
        "name": "Schema Markup Services",
        "item": "https://www.traconomics.com/services/schema-markup"
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
      <h1 className="text-4xl font-bold mb-4">Schema Markup Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Implementing structured data, or Schema Markup, is key to enhancing search engine understanding of your content and achieving rich results in SERPs. We meticulously apply relevant schema types to your website, providing search engines with explicit clues about your page’s meaning. This can lead to enhanced listings like star ratings, product information, or event details, significantly boosting click-through rates.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our Schema Markup solutions.
      </Link>
    </div>
  );
}
