
import { MetadataRoute } from 'next';

const SAPHIREFANS_DOMAIN = 'https://saphirefans.traconomics.com';

export async function GET(): Promise<Response> {
  // In a real app, you would fetch your dynamic product routes here
  // For example:
  // const products = await fetch(`${SAPHIREFANS_DOMAIN}/api/products-list`).then(res => res.json());
  // const productEntries = products.map(product => ({
  //   url: `${SAPHIREFANS_DOMAIN}/shop/${product.slug}`, // Assuming products have slugs
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  // }));

  // For this test, we'll just include a couple of example shop paths
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SAPHIREFANS_DOMAIN}/shop/test-product-1`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/shop/another-item`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add other static saphirefans pages here if any, e.g., /about, /contact for saphirefans
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
