
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Marketing for SEO Services | TRAC',
  description: 'Expert Content Marketing for SEO services focused on creating and distributing valuable, relevant, and consistent content that attracts and retains your target audience. Improve rankings and establish your brand as a thought leader.',
};

export default function ContentMarketingForSEOServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Marketing for SEO Services",
    "description": "Expert Content Marketing for SEO services focused on creating and distributing valuable, relevant, and consistent content that attracts and retains your target audience. Improve rankings and establish your brand as a thought leader.",
    "provider": {
      "@type": "Organization",
      "name": "TRAC",
      "url": "https://www.traconomics.com"
    },
    "serviceType": "Content Marketing for SEO",
    "url": "https://www.traconomics.com/services/content-marketing-for-seo"
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
        "name": "Content Marketing for SEO Services",
        "item": "https://www.traconomics.com/services/content-marketing-for-seo"
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
      <h1 className="text-4xl font-bold mb-4">Content Marketing for SEO Services</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our content marketing for SEO services focuses on creating and distributing valuable, relevant, and consistent content that attracts and retains a clearly defined audience. We develop content strategies aligned with your SEO goals, ensuring every piece of content is optimized for target keywords and user intent. This approach not only improves rankings but also establishes your brand as a thought leader.
      </p>
      <Link href="/contact" className="text-blue-600 hover:underline">
        Contact us to learn more about our Content Marketing for SEO solutions.
      </Link>
    </div>
  );
}
