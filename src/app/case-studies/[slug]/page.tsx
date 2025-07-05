import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/caseStudyService';
import { APP_NAME } from '@/lib/constants.tsx';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { NumberTicker } from '@/components/ui/NumberTicker'; // Reusing this cool component

type CaseStudyPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const post = await getCaseStudyBySlug(params.slug);
  if (!post) {
    return {
      title: `Case Study Not Found | ${APP_NAME}`,
      description: 'The case study you are looking for could not be found.',
    };
  }
  return {
    title: `Case Study: ${post.clientName} | ${APP_NAME}`,
    description: post.challenge,
    openGraph: {
      title: `Case Study: ${post.clientName}`,
      description: post.challenge,
      type: 'article',
      images: [{ url: post.imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Case Study: ${post.clientName}`,
      description: post.challenge,
      images: [post.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getCaseStudyBySlug(params.slug);
  const allCaseStudies = await getAllCaseStudies();

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = allCaseStudies.findIndex(cs => cs.slug === params.slug);
  const nextStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  return (
    <article className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            {caseStudy.logoUrl && (
              <Image src={caseStudy.logoUrl} alt={`${caseStudy.clientName} Logo`} width={120} height={50} className="object-contain" />
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
              {caseStudy.clientName}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">{caseStudy.industry}</p>
          <div className="mt-4 flex justify-center gap-2">
            {caseStudy.services.map(service => <Badge key={service}>{service}</Badge>)}
          </div>
        </header>

        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl font-bold text-center text-primary mb-8">Results at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="pt-6">
                  <result.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-4xl font-bold text-primary">
                    <NumberTicker value={result.value} />
                  </p>
                  <p className="text-sm text-muted-foreground font-medium uppercase mt-1">{result.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold">
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <p>{caseStudy.challenge}</p>

            <h2 className="text-2xl font-bold mt-8">Our Solution</h2>
            <p>{caseStudy.solution}</p>
            
            <h2 className="text-2xl font-bold mt-8">The Outcome</h2>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.content || '' }} />
          </div>

          <aside className="md:col-span-2">
            <div className="sticky top-24 space-y-8">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={caseStudy.imageUrl}
                  alt={caseStudy.clientName}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={caseStudy.dataAiHint}
                />
              </div>
              {caseStudy.testimonial && (
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <p className="mt-4 text-right font-semibold text-foreground">
                      - {caseStudy.testimonial.author}, <span className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</span>
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>

        {nextStudy && (
          <footer className="mt-16 pt-12 border-t text-center">
            <h3 className="text-xl font-semibold text-muted-foreground mb-4">Read another success story</h3>
            <Link href={`/case-studies/${nextStudy.slug}`} className="group inline-block">
              <p className="text-2xl font-bold text-primary group-hover:underline">{nextStudy.clientName}</p>
              <p className="flex items-center justify-center text-muted-foreground group-hover:text-primary">
                View Next Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          </footer>
        )}
      </div>
    </article>
  );
}
