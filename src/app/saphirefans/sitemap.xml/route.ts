
import type { MetadataRoute } from 'next';
import { saphireCategories, saphireProducts } from './lib/data'; // Assuming data is in lib folder

const SAPHIREFANS_DOMAIN = 'https://saphirefans.traconomics.com';

export async function GET(): Promise<Response> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SAPHIREFANS_DOMAIN}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/cart`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/checkout`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Add other static SaphireFans pages here if any (e.g., about, contact for saphirefans)
  ];

  const categoryPages: MetadataRoute.Sitemap = saphireCategories.map(category => ({
    url: `${SAPHIREFANS_DOMAIN}/category/${category.slug}`,
    lastModified: new Date(), // Or a more specific date if available
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = saphireProducts.map(product => ({
    url: `${SAPHIREFANS_DOMAIN}/product/${product.slug}`,
    lastModified: new Date(), // Or a more specific date if available
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  const allPages = [...staticPages, ...categoryPages, ...productPages];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
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
