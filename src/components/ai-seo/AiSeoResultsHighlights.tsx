
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NumberTicker } from '@/components/ui/NumberTicker';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { AiSeoResult, AiSeoTestimonial } from '@/types/aiSeo';

interface AiSeoResultsHighlightsProps {
  headline: string;
  stats: AiSeoResult[];
  testimonials: AiSeoTestimonial[];
}

export function AiSeoResultsHighlights({ headline, stats, testimonials }: AiSeoResultsHighlightsProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{headline}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.metric}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-extrabold text-primary">
                  <NumberTicker value={stat.value} />
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg">
              <CardContent className="pt-6">
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
