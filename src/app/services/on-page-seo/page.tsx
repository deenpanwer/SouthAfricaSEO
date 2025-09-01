
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'On-Page SEO Services | TRAC',
  description: 'Expert On-Page SEO services to optimize individual web pages for higher rankings and more relevant traffic. Improve content, meta tags, and internal linking.',
};

export default function OnPageSEOServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "On-Page SEO Services",
    "description": "Expert On-Page SEO services to optimize individual web pages for higher rankings and more relevant traffic. Improve content, meta tags, and internal linking.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "On-Page SEO",
    "url": "https://www.traconomics.com/services/on-page-seo"
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
        "name": "On-Page SEO Services",
        "item": "https://www.traconomics.com/services/on-page-seo"
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
      <h1 className="text-4xl font-bold mb-4">On-Page SEO Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic from search engines. Our process includes meticulous keyword research, compelling content optimization, strategic internal linking, and meta tag enhancements. By aligning your page content with user intent and search engine best practices, we ensure your pages are highly visible and attractive to both users and algorithms.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our On-Page SEO solutions.
      </Link>
    </div>
  );
}
