
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Off-Page SEO & Link Building Services | TRAC',
  description: "Expert Off-Page SEO and Link Building services to significantly improve your website's authority and relevance through external signals. Acquire high-quality backlinks and enhance domain authority.",
};

export default function OffPageSEOServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Off-Page SEO & Link Building Services",
    "description": "Expert Off-Page SEO and Link Building services to significantly improve your website's authority and relevance through external signals. Acquire high-quality backlinks and enhance domain authority.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "Off-Page SEO / Link Building",
    "url": "https://www.traconomics.com/services/off-page-seo"
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
        "name": "Off-Page SEO & Link Building Services",
        "item": "https://www.traconomics.com/services/off-page-seo"
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
      <h1 className="text-4xl font-bold mb-4">Off-Page SEO & Link Building Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our off-page SEO and link building strategies are designed to significantly improve your website's authority and relevance through external signals. We focus on acquiring high-quality, natural backlinks from reputable sources, enhancing your domain authority and search engine trust. This crucial aspect of SEO helps your website rank higher for competitive keywords and drives more referral traffic.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our Off-Page SEO & Link Building solutions.
      </Link>
    </div>
  );
}
