import React from 'react';
import { getSortedCaseStudiesData } from '@/app/automations/lib/case-studies/get-mdx-data';
import { CaseStudyCard } from '@/components/automations/case-studies/CaseStudyCard';

const CaseStudiesPage = () => {
  const allCaseStudiesData = getSortedCaseStudiesData();

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Case Studies
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          In-depth analyses of global AI applications in defense and governance, and their strategic implications.
        </p>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Featured Analyses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCaseStudiesData.map(({ id, title, description, date, image, author, tags }) => (
              <CaseStudyCard
                key={id}
                caseStudy={{
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

export default CaseStudiesPage;
