
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Audit Services | TRAC',
  description: 'Comprehensive SEO Audit services providing an in-depth analysis of your website's current performance. Identify critical areas for improvement and get actionable recommendations for enhanced search visibility.',
};

export default function SEOAuditServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Audit Services",
    "description": "Comprehensive SEO Audit services providing an in-depth analysis of your website's current performance. Identify critical areas for improvement and get actionable recommendations for enhanced search visibility.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "SEO Audits",
    "url": "https://www.traconomics.com/services/seo-audits"
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
        "name": "SEO Audit Services",
        "item": "https://www.traconomics.com/services/seo-audits"
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
      <h1 className="text-4xl font-bold mb-4">SEO Audit Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our comprehensive SEO audits provide an in-depth analysis of your website's current performance and identify critical areas for improvement. We meticulously examine technical aspects, on-page elements, off-page factors, and content quality. The audit delivers actionable recommendations and a clear roadmap to address deficiencies, capitalize on opportunities, and significantly enhance your overall search engine visibility and organic traffic.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our SEO Audit solutions.
      </Link>
    </div>
  );
}
