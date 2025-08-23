import { getBriefingData, getAllBriefingIds } from '@/app/automations/lib/briefings/get-mdx-data';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const briefingData = await getBriefingData(params.slug);
  return {
    title: briefingData.title,
    description: briefingData.description,
    openGraph: {
      images: [briefingData.image],
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllBriefingIds();
  return paths;
}

export default async function BriefingArticle({ params }: Props) {
  const briefingData = await getBriefingData(params.slug);

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-white mb-4">{briefingData.title}</h1>
        <p className="text-ph-light-gray text-lg mb-6">
          Category: {briefingData.category} on {new Date(briefingData.date).toLocaleDateString()}
        </p>
        {briefingData.image && (
          <div className="mb-8 relative h-64 w-full">
            <Image
              src={briefingData.image}
              alt={briefingData.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        )}
        <div
          className="prose prose-invert prose-lg mx-auto text-ph-light-gray"
          dangerouslySetInnerHTML={{ __html: briefingData.contentHtml }}
        />
      </div>
    </div>
  );
}
