import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { CaseStudy } from '@/types';
import Link from 'next/link';
import { ArrowRight, Award, Link2, Search, Target, TrendingUp, Users } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const iconMap = {
  TrendingUp,
  Target,
  Award,
  Users,
  Link2,
  Search,
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image
            src={caseStudy.imageUrl}
            alt={`Case study for ${caseStudy.clientName}`}
            data-ai-hint={caseStudy.dataAiHint || "business success"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-3">
          {caseStudy.logoUrl ? (
            <div className="h-8 mb-2 flex items-start">
              <Image src={caseStudy.logoUrl} alt={`${caseStudy.clientName} logo`} width={100} height={32} className="object-contain" />
            </div>
          ) : (
            <CardTitle className="text-xl font-semibold">{caseStudy.clientName}</CardTitle>
          )}
          <CardDescription className="text-sm text-muted-foreground h-12 overflow-hidden">
            {caseStudy.challenge ? (caseStudy.challenge.length > 90 ? caseStudy.challenge.substring(0, 90) + '...' : caseStudy.challenge) : ''}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {caseStudy.services?.slice(0,3).map((service) => (
              <Badge key={service} variant="secondary">{service}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-primary font-semibold flex items-center group-hover:underline">
            View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
