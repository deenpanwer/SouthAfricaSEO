import { getCaseStudyData, getAllCaseStudyIds } from '@/app/automations/lib/case-studies/get-mdx-data';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudyData = await getCaseStudyData(params.slug);
  return {
    title: caseStudyData.title,
    description: caseStudyData.description,
    openGraph: {
      images: [caseStudyData.image],
    },
  };
}

export async function generateStaticParams() {
  const paths = getAllCaseStudyIds();
  return paths;
}

export default async function CaseStudyArticle({ params }: Props) {
  const caseStudyData = await getCaseStudyData(params.slug);

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-white mb-4">{caseStudyData.title}</h1>
        <p className="text-ph-light-gray text-lg mb-6">
          By {caseStudyData.author} on {new Date(caseStudyData.date).toLocaleDateString()}
        </p>
        {caseStudyData.image && (
          <div className="mb-8 relative h-64 w-full">
            <Image
              src={caseStudyData.image}
              alt={caseStudyData.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        )}
        <div
          className="prose prose-invert prose-lg mx-auto text-ph-light-gray"
          dangerouslySetInnerHTML={{ __html: caseStudyData.contentHtml }}
        />
      </div>
    </div>
  );
}
