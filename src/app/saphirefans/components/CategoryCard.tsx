
import Image from 'next/image';
import Link from 'next/link';
import type { SaphireCategory } from '../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Re-use ShadCN Card

interface CategoryCardProps {
  category: SaphireCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/saphirefans/category/${category.slug}`} className="block group">
      <Card className="overflow-hidden shadow-lg hover:shadow-sky-300/50 transition-all duration-300 h-full flex flex-col border-slate-300 hover:border-sky-500">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            data-ai-hint={category.dataAiHint}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-sky-700 group-hover:text-sky-600">{category.name}</CardTitle>
        </CardHeader>
        {category.description && (
          <CardContent className="flex-grow">
            <CardDescription className="text-sm text-slate-600 line-clamp-3">{category.description}</CardDescription>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
