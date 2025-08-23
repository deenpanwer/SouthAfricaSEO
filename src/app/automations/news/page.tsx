import React from 'react';
import { getSortedNewsData } from '@/app/automations/lib/news/get-mdx-data';
import { NewsCard } from '@/components/automations/news/NewsCard';

const NewsPage = () => {
  const allNewsData = getSortedNewsData();

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Latest News
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Stay updated with our announcements, industry insights, and speculative analyses.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Recent Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNewsData.map(({ id, title, description, date, image, author, tags }) => (
              <NewsCard
                key={id}
                news={{
                  id,
                  title,
                  description,
                  date,
                  image,
                  author,
                  tags,
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
