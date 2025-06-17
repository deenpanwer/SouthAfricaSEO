
import type { MetadataRoute } from 'next';
import { saphireCategories, saphireProducts } from '../lib/data'; 

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
      url: `${SAPHIREFANS_DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
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
      priority: 0.4,
    },
    {
      url: `${SAPHIREFANS_DOMAIN}/thank-you`, 
      lastModified: new Date(),
      changeFrequency: 'yearly', // Thank you pages don't change often
      priority: 0.2, // Low priority for SEO
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = saphireCategories.map(category => ({
    url: `${SAPHIREFANS_DOMAIN}/category/${category.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = saphireProducts.map(product => ({
    url: `${SAPHIREFANS_DOMAIN}/product/${product.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'weekly',
    priority: 0.9, 
  }));
  
  const allPages = [...staticPages, ...categoryPages, ...productPages];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => {
        const product = saphireProducts.find(p => `${SAPHIREFANS_DOMAIN}/product/${p.slug}` === page.url);
        let imageSitemapEntry = '';
        if (product) {
          imageSitemapEntry = `
    <image:image>
      <image:loc>${product.imageUrl.startsWith('http') ? product.imageUrl : SAPHIREFANS_DOMAIN + product.imageUrl}</image:loc>
      <image:title>${encodeURIComponent(product.name)}</image:title>
      <image:caption>${encodeURIComponent(product.shortDescription)}</image:caption>
    </image:image>`;
        }
        const category = saphireCategories.find(c => `${SAPHIREFANS_DOMAIN}/category/${c.slug}` === page.url);
         if (category) {
          imageSitemapEntry = `
    <image:image>
      <image:loc>${category.imageUrl.startsWith('http') ? category.imageUrl : SAPHIREFANS_DOMAIN + category.imageUrl}</image:loc>
      <image:title>${encodeURIComponent(category.name)}</image:title>
      ${category.description ? `<image:caption>${encodeURIComponent(category.description)}</image:caption>` : ''}
    </image:image>`;
        }

        return `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified?.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>${imageSitemapEntry}
  </url>
`;
      }
    )
    .join('')}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
