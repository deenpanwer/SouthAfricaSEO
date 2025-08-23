import React from 'react';
import { getSortedBriefingsData } from '@/app/automations/lib/briefings/get-mdx-data';
import { BriefingCard } from '@/components/automations/briefings/BriefingCard';

const BriefingsPage = () => {
  const allBriefingsData = getSortedBriefingsData();

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Briefings & Reports
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Access our exclusive reports and strategic briefings on AI advancements and their implications.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Briefings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBriefingsData.map(({ id, title, description, date, image, category }) => (
              <BriefingCard
                key={id}
                briefing={{
                  id,
                  title,
                  description,
                  date,
                  image,
                  category,
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
