import React from 'react';
import { getContentfulBriefingArticles } from '@/app/automations/lib/briefings/contentfulService';
import { BriefingCard } from '@/components/automations/briefings/BriefingCard';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const BriefingsPage = async () => {
  const contentfulBriefings = await getContentfulBriefingArticles();

  // Sort briefings by publicationDate, newest first
  contentfulBriefings.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Automations', href: '/automations' },
    { name: 'Briefings', href: '/automations/briefings' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Briefings & Reports
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Access our exclusive reports and strategic briefings on AI advancements and their implications.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Briefings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentfulBriefings.map(({ id, slug, title, description, publicationDate, featuredImage, author, tags }) => (
              <BriefingCard
                key={id}
                briefing={{
                  id,
                  slug,
                  title,
                  description,
                  publicationDate: publicationDate ? new Date(publicationDate).toISOString() : '',
                  image: featuredImage.url,
                  category: tags[0] || 'General',
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

export default BriefingsPage;
