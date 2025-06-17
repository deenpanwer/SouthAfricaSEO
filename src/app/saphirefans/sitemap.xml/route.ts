
import type { MetadataRoute } from 'next';

const SAPHIREFANS_DOMAIN = 'https://saphirefans.traconomics.com';

export async function GET(): Promise<Response> {
  // In a real app, you would fetch your dynamic product/category routes here
  // For this test, we'll just include the root page.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SAPHIREFANS_DOMAIN}/`, // Root page for the subdomain
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Example: Add other static saphirefans pages here if any
    // {
    //   url: `${SAPHIREFANS_DOMAIN}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified?.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    )
    .join('')}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
