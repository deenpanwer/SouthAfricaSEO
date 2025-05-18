import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { CaseStudy } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={caseStudy.imageUrl}
          alt={`Case study for ${caseStudy.clientName}`}
          data-ai-hint={caseStudy.dataAiHint || "business success"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader className="pb-3">
        <Badge variant="secondary" className="w-fit mb-2">{caseStudy.industry}</Badge>
        <CardTitle className="text-xl font-semibold">{caseStudy.clientName}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-12 overflow-hidden">
          <strong>Challenge:</strong> {caseStudy.challenge.length > 80 ? caseStudy.challenge.substring(0, 80) + '...' : caseStudy.challenge}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div>
          <h4 className="font-medium text-foreground/90">Solution Highlights:</h4>
          <p className="text-sm text-muted-foreground">
            {caseStudy.solution.length > 100 ? caseStudy.solution.substring(0, 100) + '...' : caseStudy.solution}
          </p>
        </div>
        <div>
          <h4 className="font-medium text-foreground/90">Key Results:</h4>
          <ul className="list-none space-y-1 mt-1">
            {caseStudy.results.slice(0, 2).map((result, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <result.icon className="h-4 w-4 text-primary mr-2" />
                {result.metric}: <strong>{result.value}</strong>
              </li>
            ))}
          </ul>
        </div>
        {caseStudy.testimonial && (
            <blockquote className="border-l-4 border-primary pl-3 italic text-sm text-muted-foreground">
                "{caseStudy.testimonial.length > 70 ? caseStudy.testimonial.substring(0, 70) + '...' : caseStudy.testimonial}"
            </blockquote>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 h-auto text-primary">
          {/* Placeholder link, ideally to a full case study page /case-studies/[id] */}
          <Link href={`/case-studies#${caseStudy.id}`}>Read Full Case Study</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
