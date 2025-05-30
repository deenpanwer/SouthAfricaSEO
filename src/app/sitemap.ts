
import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/constants.tsx'; // .tsx extension
import { CITIES_DATA } from '@/lib/cityConstants.tsx'; // .tsx extension

// IMPORTANT: Replace this with your actual live website domain.
const WEBSITE_DOMAIN = 'https://www.tracprotect.online'; // Default to current, can be overridden by env var

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = process.env.WEBSITE_URL || WEBSITE_DOMAIN;

  const staticPages = [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/pricing`, // Renamed from /services to /pricing
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${domain}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const blogPostEntries = BLOG_POSTS.map(post => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Use the actual post date
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const cityPageEntries = CITIES_DATA.map(city => ({
    url: `${domain}/city/${city.slug}`,
    lastModified: new Date(), // Or a specific lastModified date for city content
    changeFrequency: 'weekly',
    priority: 0.9, // City pages are important
  }));

  return [
    ...staticPages,
    ...blogPostEntries,
    ...cityPageEntries,
  ];
}
