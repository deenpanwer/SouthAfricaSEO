import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/constants.tsx';

// IMPORTANT: Replace this with your actual live website domain.
const WEBSITE_DOMAIN = 'https://www.tracprotect.online';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: `${WEBSITE_DOMAIN}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${WEBSITE_DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_DOMAIN}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_DOMAIN}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${WEBSITE_DOMAIN}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${WEBSITE_DOMAIN}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const blogPostEntries = BLOG_POSTS.map(post => ({
    url: `${WEBSITE_DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Use the actual post date
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPostEntries,
  ];
}
