import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            {testimonial.location && <p className="text-xs text-muted-foreground">{testimonial.location}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="text-foreground/80 italic leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
