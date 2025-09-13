import { getContentfulCaseStudyBySlug, getContentfulCaseStudies } from '@/app/automations/lib/case-studies/contentfulService';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyPostClient from '@/components/automations/case-studies/CaseStudyPostClient';
import { marked } from 'marked'; // Import marked

type Props = {
  params: { slug: string };
};

async function getCaseStudy(slug: string) {
  const contentfulCaseStudy = await getContentfulCaseStudyBySlug(slug);

  if (contentfulCaseStudy) {
    const contentHtml = contentfulCaseStudy.markdown ? marked.parse(contentfulCaseStudy.markdown) : '';
    return {
      ...contentfulCaseStudy,
      contentHtml,
      publicationDate: contentfulCaseStudy.publicationDate ? new Date(contentfulCaseStudy.publicationDate).toISOString() : '',
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const caseStudy = await getCaseStudy(awaitedParams.slug);

  if (!caseStudy) {
    return notFound();
  }

  return {
    title: caseStudy.title || 'Untitled Case Study',
    description: caseStudy.description || '',
    openGraph: {
      title: caseStudy.title || 'Untitled Case Study',
      description: caseStudy.description || '',
      images: [
        {
          url: caseStudy.featuredImage?.url || '',
          alt: caseStudy.featuredImage?.title || caseStudy.title || 'Image',
        },
      ],
    },
  };
}

export default async function CaseStudyArticle({ params }: Props) {
  const awaitedParams = await params;
  const caseStudyData = await getCaseStudy(awaitedParams.slug);

  if (!caseStudyData) {
    notFound();
  }

  // Fetch related case studies on the server
  const contentfulCaseStudies = await getContentfulCaseStudies();

  const filteredRelated = (contentfulCaseStudies || []).filter(cs => cs.slug !== caseStudyData.slug)
                                  .map(cs => ({ ...cs, publicationDate: cs.publicationDate ? new Date(cs.publicationDate).toISOString() : '' })) // Ensure related case studies also have ISO date
                                  .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
                                  .slice(0, 2); // Get top 2 recent related case studies

  return (
    <CaseStudyPostClient initialCaseStudyData={caseStudyData} initialRelatedCaseStudies={filteredRelated} />
  );
}
