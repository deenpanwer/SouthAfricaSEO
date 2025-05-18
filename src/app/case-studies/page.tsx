import { Metadata } from 'next';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { CASE_STUDIES, APP_NAME } from '@/lib/constants.tsx';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'SEO Case Studies',
  description: `See real-world examples of how ${APP_NAME} has helped South African businesses achieve significant SEO results. Explore our success stories.`,
};

export default function CaseStudiesPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16 md:mb-20">
          <Award className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Our Success Stories
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across South Africa achieve remarkable growth through strategic SEO. These case studies highlight our commitment to delivering measurable results.
          </p>
        </section>

        {CASE_STUDIES.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} id={cs.id} className="scroll-mt-20"> {/* Added id for potential deep linking */}
                 {/* This is a simplified display. Ideally, each case study would have its own page. */}
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-64">
                     <Image
                      src={cs.imageUrl}
                      alt={`Visual for ${cs.clientName} case study`}
                      data-ai-hint={cs.dataAiHint || "business graph"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{cs.industry}</Badge>
                    <CardTitle className="text-2xl font-semibold">{cs.clientName}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">The Challenge</h3>
                      <p className="text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Our Solution</h3>
                      <p className="text-muted-foreground">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Measurable Results</h3>
                      <ul className="list-none space-y-2 mt-1">
                        {cs.results.map((result, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <result.icon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{result.metric}: <strong>{result.value}</strong></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {cs.testimonial && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-4 py-2 bg-secondary/30 rounded-r-md">
                        "{cs.testimonial}"
                      </blockquote>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </section>
        ) : (
          <section className="text-center py-16 text-muted-foreground">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <p className="text-xl">We're currently compiling our latest success stories. Check back soon!</p>
          </section>
        )}

        <section className="text-center bg-muted p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Could Your Business Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Partner with {APP_NAME} and let us help you achieve your SEO goals in the South African market.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
