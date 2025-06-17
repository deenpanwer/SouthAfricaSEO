
import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/constants.tsx';
import { CITIES_DATA } from '@/lib/cityConstants.tsx';
import { LANDSCAPING_STATES_DATA } from '@/lib/landscapingStateConstants';
import { VETERINARY_STATES_DATA } from '@/lib/veterinaryStateConstants';
import { AUTO_DEALER_STATES_DATA } from '@/lib/autoDealerStateConstants';
import { AUTO_REPAIR_STATES_DATA } from '@/lib/autoRepairStateConstants';
import { SALON_STATES_DATA } from '@/lib/salonStateConstants';
import { GYM_STATES_DATA } from '@/lib/gymStateConstants';

const WEBSITE_DOMAIN = process.env.WEBSITE_URL || 'https://www.traconomics.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = WEBSITE_DOMAIN;

  const staticPages = [
    { url: `${domain}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${domain}/about`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/contact`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${domain}/terms-of-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${domain}/site-map`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${domain}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const blogPostEntries = BLOG_POSTS.map(post => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const cityPageEntries = CITIES_DATA.map(city => ({
    url: `${domain}/${city.slug}-seo-service-agency`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const landscapingStateEntries = LANDSCAPING_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-landscaping-seo-company`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const veterinaryStateEntries = VETERINARY_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-veterinary-seo-clinic`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const autoDealerStateEntries = AUTO_DEALER_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-auto-dealer-seo-marketing`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const autoRepairStateEntries = AUTO_REPAIR_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-auto-repair-seo-shop`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const salonStateEntries = SALON_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-salon-seo-services`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const gymStateEntries = GYM_STATES_DATA.map(state => ({
    url: `${domain}/${state.slug}-gym-seo-strategies`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...blogPostEntries,
    ...cityPageEntries,
    ...landscapingStateEntries,
    ...veterinaryStateEntries,
    ...autoDealerStateEntries,
    ...autoRepairStateEntries,
    ...salonStateEntries,
    ...gymStateEntries,
  ];
}
