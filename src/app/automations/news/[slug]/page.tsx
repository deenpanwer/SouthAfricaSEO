import { getNewsData, getAllNewsIds } from '@/app/automations/lib/news/get-mdx-data';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newsData = await getNewsData(params.slug);
  return {
    title: newsData.title,
    description: newsData.description,
    openGraph: {
      images: [newsData.image],
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllNewsIds();
  return paths;
}

export default async function NewsArticle({ params }: Props) {
  const newsData = await getNewsData(params.slug);

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-white mb-4">{newsData.title}</h1>
        <p className="text-ph-light-gray text-lg mb-6">
          By {newsData.author} on {new Date(newsData.date).toLocaleDateString()}
        </p>
        {newsData.image && (
          <div className="mb-8 relative h-64 w-full">
            <Image
              src={newsData.image}
              alt={newsData.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        )}
        <div
          className="prose prose-invert prose-lg mx-auto text-ph-light-gray"
          dangerouslySetInnerHTML={{ __html: newsData.contentHtml }}
        />
      </div>
    </div>
  );
}
