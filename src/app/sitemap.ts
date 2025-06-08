
import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/constants.tsx'; 
import { CITIES_DATA } from '@/lib/cityConstants.tsx'; 

const WEBSITE_DOMAIN = process.env.WEBSITE_URL || 'https://www.tracprotect.online'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = WEBSITE_DOMAIN;

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
      url: `${domain}/pricing`, 
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
     {
      url: `${domain}/site-map`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  const blogPostEntries = BLOG_POSTS.map(post => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(post.date), 
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const cityPageEntries = CITIES_DATA.map(city => ({
    url: `${domain}/${city.slug}-seo-service-agency`, // Use the canonical URL structure
    lastModified: new Date(), 
    changeFrequency: 'weekly',
    priority: 0.9, 
  }));

  return [
    ...staticPages,
    ...blogPostEntries,
    ...cityPageEntries,
  ];
}
