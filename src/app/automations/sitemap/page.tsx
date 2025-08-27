import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

// Import Contentful service functions
import { getContentfulBlogPosts } from '@/app/automations/lib/blog/contentfulService';
import { getContentfulNewsArticles } from '@/app/automations/lib/news/contentfulService';
import { getContentfulBriefingArticles } from '@/app/automations/lib/briefings/contentfulService';
import { getContentfulCaseStudies } from '@/app/automations/lib/case-studies/contentfulService';

interface SitemapEntry {
  url: string;
  type: string;
  lastModified: string;
}

const SitemapPage = async () => {
  const baseUrl = 'https://www.traconomics.com/automations'; // Adjust base URL as needed

  // Fetch all dynamic content
  const [blogPosts, newsArticles, briefingArticles, caseStudies] = await Promise.all([
    getContentfulBlogPosts(),
    getContentfulNewsArticles(),
    getContentfulBriefingArticles(),
    getContentfulCaseStudies(),
  ]);

  const staticRoutes: SitemapEntry[] = [
    { url: `${baseUrl}`, type: 'Home', lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, type: 'Contact', lastModified: new Date().toISOString() },
    { url: `${baseUrl}/careers`, type: 'Careers', lastModified: new Date().toISOString() },
    { url: `${baseUrl}/privacy-policy`, type: 'Privacy Policy', lastModified: new Date().toISOString() },
    { url: `${baseUrl}/terms-of-service`, type: 'Terms of Service', lastModified: new Date().toISOString() },
  ];

  const dynamicRoutes: SitemapEntry[] = [
    ...blogPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      type: 'Blog Post',
      lastModified: post.publicationDate,
    })),
    ...newsArticles.map(article => ({
      url: `${baseUrl}/news/${article.slug}`,
      type: 'News Article',
      lastModified: article.publicationDate,
    })),
    ...briefingArticles.map(briefing => ({
      url: `${baseUrl}/briefings/${briefing.slug}`,
      type: 'Briefing',
      lastModified: briefing.publicationDate,
    })),
    ...caseStudies.map(caseStudy => ({
      url: `${baseUrl}/case-studies/${caseStudy.slug}`,
      type: 'Case Study',
      lastModified: caseStudy.publicationDate,
    })),
  ];

  const allEntries = [...staticRoutes, ...dynamicRoutes].sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Automations', href: '/automations' },
    { name: 'Sitemap', href: '/automations/sitemap' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Automations Site Map
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-8">
          A comprehensive list of all pages on our automations site.
        </p>

        <div className="overflow-x-auto bg-card rounded-lg shadow-lg border border-ph-border">
          <table className="min-w-full divide-y divide-ph-border">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">URL</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Modified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ph-border">
              {allEntries.map((entry, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    <Link href={entry.url.replace(baseUrl, '').replace('https://www.traconomics.com', '') || '/'}>
                      {entry.url.replace('https://www.traconomics.com', '')}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-ph-light-gray">{entry.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-ph-light-gray">{format(new Date(entry.lastModified), 'MMMM dd, yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
