
import type { MetadataRoute } from 'next';
import { getContentfulBlogPosts as getAllBlogPosts } from '@/lib/contentfulBlogService';
import { CITIES_DATA } from '@/lib/cityConstants.tsx';
import { LANDSCAPING_STATES_DATA } from '@/lib/landscapingStateConstants';
import { VETERINARY_STATES_DATA } from '@/lib/veterinaryStateConstants';
import { AUTO_DEALER_STATES_DATA } from '@/lib/autoDealerStateConstants';
import { AUTO_REPAIR_STATES_DATA } from '@/lib/autoRepairStateConstants';
import { SALON_STATES_DATA } from '@/lib/salonStateConstants';
import { GYM_STATES_DATA } from '@/lib/gymStateConstants';
import { AI_SEO_CITIES_DATA } from '@/lib/aiSeoConstants';

// Import automations Contentful services
import { getContentfulBlogPosts as getAutomationsBlogPosts } from '@/app/automations/lib/blog/contentfulService';
import { getContentfulBriefingArticles } from '@/app/automations/lib/briefings/contentfulService';
import { getContentfulCaseStudies } from '@/app/automations/lib/case-studies/contentfulService';
import { getContentfulNewsArticles } from '@/app/automations/lib/news/contentfulService';

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
    { url: `${domain}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/locations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    // Automations static pages
    { url: `${domain}/automations`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${domain}/automations/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/briefings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/contact`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${domain}/automations/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${domain}/automations/terms-of-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const blogPosts = await getAllBlogPosts();

  const blogPostEntries = blogPosts.map(post => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(post.publicationDate),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Automations Blog Posts
  const automationsBlogPosts = await getAutomationsBlogPosts();
  const automationsBlogPostEntries = automationsBlogPosts.map(post => ({
    url: `${domain}/automations/blog/${post.slug}`,
    lastModified: new Date(post.publicationDate),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Automations Briefings
  const automationsBriefings = await getContentfulBriefingArticles();
  const automationsBriefingEntries = automationsBriefings.map(briefing => ({
    url: `${domain}/automations/briefings/${briefing.slug}`,
    lastModified: new Date(briefing.publicationDate),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Automations Case Studies
  const automationsCaseStudies = await getContentfulCaseStudies();
  const automationsCaseStudyEntries = automationsCaseStudies.map(caseStudy => ({
    url: `${domain}/automations/case-studies/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.publicationDate),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Automations News Articles
  const automationsNewsArticles = await getContentfulNewsArticles();
  const automationsNewsEntries = automationsNewsArticles.map(article => ({
    url: `${domain}/automations/news/${article.slug}`,
    lastModified: new Date(article.publicationDate),
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

  const aiSeoCityPageEntries = AI_SEO_CITIES_DATA.map(city => ({
    url: `${domain}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const serviceSlugs = [
    'amazon-marketing',
    'content-writing',
    'ecommerce-optimization',
    'email-marketing',
    'ppc',
    'reputation-management',
    'seo',
    'social-media-marketing',
    'web-design-and-development',
  ];

  const servicePageEntries = serviceSlugs.map(slug => ({
    url: `${domain}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const philosophySlugs = [
    'customer-centric',
    'ethics',
    'expertise',
    'results-driven',
  ];

  const philosophyPageEntries = philosophySlugs.map(slug => ({
    url: `${domain}/philosophy/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPostEntries,
    ...automationsBlogPostEntries,
    ...automationsBriefingEntries,
    ...automationsCaseStudyEntries,
    ...automationsNewsEntries,
    ...cityPageEntries,
    ...landscapingStateEntries,
    ...veterinaryStateEntries,
    ...autoDealerStateEntries,
    ...autoRepairStateEntries,
    ...salonStateEntries,
    ...gymStateEntries,
    ...aiSeoCityPageEntries,
    ...servicePageEntries,
    ...philosophyPageEntries,
  ];
}
