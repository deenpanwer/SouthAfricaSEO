import { Metadata } from 'next';
import { Award } from 'lucide-react';
import { APP_NAME } from '@/lib/constants.tsx';
import { getAllCaseStudies } from '@/lib/caseStudyService';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';

export const metadata: Metadata = {
  title: 'SEO Case Studies',
  description: `See real-world examples of how ${APP_NAME} has helped businesses achieve significant SEO and marketing results. Explore our success stories.`,
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16 md:mb-20">
          <Award className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Our Success Stories
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve remarkable growth through strategic, data-driven marketing.
          </p>
        </section>

        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        ) : (
          <section className="text-center py-16 text-muted-foreground">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <p className="text-xl">We're currently documenting our latest success stories. Please check back soon!</p>
          </section>
        )}
      </div>
    </div>
  );
}
