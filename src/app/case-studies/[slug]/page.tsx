import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/caseStudyService';
import { APP_NAME } from '@/lib/constants.tsx';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { NumberTicker } from '@/components/ui/NumberTicker';
import { Button } from '@/components/ui/button';

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
  const prevStudy = allCaseStudies[(currentIndex - 1 + allCaseStudies.length) % allCaseStudies.length];
  const nextStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  return (
    <article className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.clientName}
          layout="fill"
          objectFit="cover"
          className="brightness-50" // Darken image for text readability
          data-ai-hint={caseStudy.dataAiHint}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black/40">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {caseStudy.clientName}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-6 drop-shadow-md">{caseStudy.industry}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {caseStudy.services.map(service => <Badge key={service} variant="outline" className="text-white border-white/50 bg-white/20 backdrop-blur-sm">{service}</Badge>)}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12 md:py-20">
        {/* Results at a Glance */}
        <section className="mb-12 md:mb-16 bg-muted py-12 rounded-lg shadow-inner">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Results at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {caseStudy.results.map((result, index) => (
                <Card key={index} className="bg-background shadow-lg border-none">
                  <CardContent className="pt-6">
                    <result.icon className="h-12 w-12 text-accent mx-auto mb-3" />
                    <p className="text-5xl font-bold text-primary">
                      <NumberTicker value={result.value} />
                    </p>
                    <p className="text-md text-muted-foreground font-medium uppercase mt-1">{result.metric}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <section className="mb-12 md:mb-16">
            <Card className="bg-gray-800 text-white shadow-xl max-w-3xl mx-auto">
              <CardContent className="pt-8">
                <blockquote className="text-xl md:text-2xl text-center italic border-none p-0">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <p className="mt-6 text-center font-semibold text-lg">
                  - {caseStudy.testimonial.author}, <span className="font-normal text-base text-gray-300">{caseStudy.testimonial.role}</span>
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Challenge, Solution, Outcome */}
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold">
          <h2 className="text-3xl font-bold mt-8">The Challenge</h2>
          <p>{caseStudy.challenge}</p>

          <h2 className="text-3xl font-bold mt-8">Our Solution</h2>
          <p>{caseStudy.solution}</p>
          
          <h2 className="text-3xl font-bold mt-8">The Outcome</h2>
          <div dangerouslySetInnerHTML={{ __html: caseStudy.content || '' }} />
        </div>

        {/* Call to Action */}
        {caseStudy.websiteUrl && (
          <div className="text-center mt-12 md:mt-16">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors">
              <a href={caseStudy.websiteUrl} target="_blank" rel="noopener noreferrer">
                Visit Client Website <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        )}

        {/* Previous/Next Navigation */}
        <footer className="mt-16 pt-12 border-t grid grid-cols-2 gap-8">
          <div className="text-left">
            {prevStudy && (
              <Link href={`/case-studies/${prevStudy.slug}`} className="group inline-block">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">Previous Case Study</h3>
                <p className="text-2xl font-bold text-primary group-hover:underline">{prevStudy.clientName}</p>
                <p className="flex items-center text-muted-foreground group-hover:text-primary">
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" /> View Case Study
                </p>
              </Link>
            )}
          </div>
          <div className="text-right">
            {nextStudy && (
              <Link href={`/case-studies/${nextStudy.slug}`} className="group inline-block">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">Next Case Study</h3>
                <p className="text-2xl font-bold text-primary group-hover:underline">{nextStudy.clientName}</p>
                <p className="flex items-center justify-end text-muted-foreground group-hover:text-primary">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}

