import { getContentfulBriefingArticleBySlug, getContentfulBriefingArticles } from '@/app/automations/lib/briefings/contentfulService';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BriefingArticleClient from '@/components/automations/briefings/BriefingArticleClient';
import { marked } from 'marked'; // Import marked

type Props = {
  params: { slug: string };
};

async function getBriefing(slug: string) {
  const contentfulBriefing = await getContentfulBriefingArticleBySlug(slug);

  if (contentfulBriefing) {
    const contentHtml = contentfulBriefing.markdown ? marked.parse(contentfulBriefing.markdown) : '';
    return {
      ...contentfulBriefing,
      contentHtml,
      publicationDate: contentfulBriefing.publicationDate ? new Date(contentfulBriefing.publicationDate).toISOString() : '',
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const briefing = await getBriefing(params.slug);

  if (!briefing) {
    return notFound();
  }

  return {
    title: briefing.title || 'Untitled Briefing',
    description: briefing.description || '',
    openGraph: {
      title: briefing.title || 'Untitled Briefing',
      description: briefing.description || '',
      images: [
        {
          url: briefing.featuredImage?.url || '',
          alt: briefing.featuredImage?.title || briefing.title || 'Image',
        },
      ],
    },
  };
}

export default async function BriefingArticle({ params }: Props) {
  const briefingData = await getBriefing(params.slug);

  if (!briefingData) {
    notFound();
  }

  // Fetch related briefings on the server
  const contentfulBriefings = await getContentfulBriefingArticles();

  const filteredRelated = (contentfulBriefings || []).filter(b => b.slug !== briefingData.slug)
                                  .map(b => ({ ...b, publicationDate: b.publicationDate ? new Date(b.publicationDate).toISOString() : '' })) // Ensure related briefings also have ISO date
                                  .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
                                  .slice(0, 2); // Get top 2 recent related briefings

  return (
    <BriefingArticleClient initialBriefingData={briefingData} initialRelatedBriefings={filteredRelated} />
  );
}