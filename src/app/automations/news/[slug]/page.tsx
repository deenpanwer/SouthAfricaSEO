import { getContentfulNewsArticleBySlug, getContentfulNewsArticles } from '@/app/automations/lib/news/contentfulService';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticleClient from '@/components/automations/news/NewsArticleClient';
import { marked } from 'marked'; // Import marked

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const newsData = await getContentfulNewsArticleBySlug(awaitedParams.slug);
  if (!newsData) {
    return notFound();
  }
  return {
    title: newsData.title,
    description: newsData.description,
    openGraph: {
      title: newsData.title,
      description: newsData.description,
      images: [
        {
          url: newsData.featuredImage.url,
          alt: newsData.featuredImage.title,
        },
      ],
    },
  };
}

export default async function NewsArticle({ params }: Props) {
  const awaitedParams = await params;
  const newsData = await getContentfulNewsArticleBySlug(awaitedParams.slug);

  if (!newsData) {
    return notFound();
  }

  const contentHtml = newsData.markdown ? marked.parse(newsData.markdown) : '';

  // Fetch related news on the server
  const contentfulNews = await getContentfulNewsArticles();

  const filteredRelated = (contentfulNews || []).filter(n => n.slug !== newsData.slug)
                                  .map(n => ({ ...n, publicationDate: n.publicationDate ? new Date(n.publicationDate).toISOString() : '' })) // Ensure related news also have ISO date
                                  .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
                                  .slice(0, 2); // Get top 2 recent related news

  return (
    <NewsArticleClient initialNewsData={{ ...newsData, contentHtml, publicationDate: newsData.publicationDate ? new Date(newsData.publicationDate).toISOString() : '' }} initialRelatedNews={filteredRelated} />
  );
}
