import React from 'react';
import dynamic from 'next/dynamic';
import { HeroBanner } from '@/components/automations/HeroBanner';
import { AnimatedUseCaseCards } from '@/components/automations/AnimatedUseCaseCards';
import { SectorGrid } from '@/components/automations/SectorGrid';
import { ContentTeaserGrid } from '@/components/automations/ContentTeaserGrid';
import { MissionCTA } from '@/components/automations/MissionCTA';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

// Import Contentful service functions
import { getContentfulBlogPosts, ContentfulBlogPost } from '@/app/automations/lib/blog/contentfulService';
import { getContentfulNewsArticles, ContentfulNewsArticle } from '@/app/automations/lib/news/contentfulService';
import { getContentfulBriefingArticles, ContentfulBriefingArticle } from '@/app/automations/lib/briefings/contentfulService';
import { getContentfulCaseStudies, ContentfulCaseStudy } from '@/app/automations/lib/case-studies/contentfulService';

interface ContentTeaserItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  image: string;
  type: 'Blog' | 'News' | 'Briefing' | 'Case Study';
  link: string;
}

const AutomationsHomePage = async () => {
  const [blogPosts, newsArticles, briefingArticles, caseStudies] = await Promise.all([
    getContentfulBlogPosts(),
    getContentfulNewsArticles(),
    getContentfulBriefingArticles(),
    getContentfulCaseStudies(),
  ]);

  const allContent: ContentTeaserItem[] = [
    ...blogPosts.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      publicationDate: post.publicationDate,
      image: post.image,
      type: 'Blog',
      link: `/automations/blog/${post.slug}`,
    })),
    ...newsArticles.map(article => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
      description: article.description,
      publicationDate: article.publicationDate,
      image: article.featuredImage.url,
      type: 'News',
      link: `/automations/news/${article.slug}`,
    })),
    ...briefingArticles.map(briefing => ({
      id: briefing.id,
      slug: briefing.slug,
      title: briefing.title,
      description: briefing.description,
      publicationDate: briefing.publicationDate,
      image: briefing.featuredImage.url,
      type: 'Briefing',
      link: `/automations/briefings/${briefing.slug}`,
    })),
    ...caseStudies.map(caseStudy => ({
      id: caseStudy.id,
      slug: caseStudy.slug,
      title: caseStudy.title,
      description: caseStudy.description,
      publicationDate: caseStudy.publicationDate,
      image: caseStudy.featuredImage.url,
      type: 'Case Study',
      link: `/automations/case-studies/${caseStudy.slug}`,
    })),
  ];

  const sortedContent = allContent.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());

  const limitedContent = sortedContent.slice(0, 9); // Limit to 9 items for the slider

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroBanner />
      <AnimatedUseCaseCards />
      <SectorGrid />
      <ContentTeaserGrid initialContentItems={limitedContent} />
      <MissionCTA />
      {/* Add more sections and components here as per the plan */}
    </div>
  );
};

export default AutomationsHomePage;
