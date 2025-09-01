
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technical SEO Services | TRAC',
  description: 'Expert Technical SEO services to optimize your website's infrastructure for search engine crawling, indexing, and ranking. Improve site speed, mobile-friendliness, and structured data.',
};

export default function TechnicalSEOServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical SEO Services",
    "description": "Expert Technical SEO services to optimize your website's infrastructure for search engine crawling, indexing, and ranking. Improve site speed, mobile-friendliness, and structured data.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "Technical SEO",
    "url": "https://www.traconomics.com/services/technical-seo"
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
        "name": "Technical SEO Services",
        "item": "https://www.traconomics.com/services/technical-seo"
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
      <h1 className="text-4xl font-bold mb-4">Technical SEO Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our expert Technical SEO services focus on optimizing your website's infrastructure to ensure seamless crawling and indexing by search engines. We address critical elements like site speed, mobile-friendliness, structured data, and site architecture. A robust technical foundation is crucial for search engine visibility, allowing your content to be discovered and ranked effectively, ultimately improving your organic performance.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our Technical SEO solutions.
      </Link>
    </div>
  );
}
