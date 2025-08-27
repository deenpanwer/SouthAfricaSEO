import React from 'react';
import { getContentfulNewsArticles } from '@/app/automations/lib/news/contentfulService';
import { NewsCard } from '@/components/automations/news/NewsCard';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const NewsPage = async () => {
  const allNewsData = await getContentfulNewsArticles();

  // Sort news articles by publicationDate, newest first
  allNewsData.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Automations', href: '/automations' },
    { name: 'News', href: '/automations/news' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Latest News
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Stay updated with our announcements, industry insights, and speculative analyses.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Recent Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNewsData.map((news) => (
              <NewsCard
                key={news.id}
                news={{
                  ...news,
                  publicationDate: news.publicationDate ? new Date(news.publicationDate).toISOString() : '',
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsPage;
