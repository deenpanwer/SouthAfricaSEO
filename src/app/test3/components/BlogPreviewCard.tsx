
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { EnviroPost } from '../lib/blog';
import { format, parseISO } from 'date-fns';
import { ArrowRight } from 'lucide-react';

interface BlogPreviewCardProps {
  post: EnviroPost;
}

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  return (
    <Link href={`/test3/resources/${post.slug}`} className="block group">
      <Card className="flex flex-col h-full overflow-hidden rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 border-0">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.dataAiHint}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <CardHeader className="p-6 pb-2">
            <p className="text-sm text-enviro-pink font-semibold uppercase tracking-wider">{post.category}</p>
            <h3 className="text-xl font-bold text-enviro-green mt-1 group-hover:text-enviro-pink transition-colors">{post.title}</h3>
        </CardHeader>
        <CardContent className="p-6 pt-2 flex-grow">
          <p className="text-enviro-text/70 line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <div className="p-6 pt-0">
            <div className="text-sm font-semibold text-enviro-green flex items-center gap-2 group-hover:text-enviro-pink transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
            </div>
        </div>
      </Card>
    </Link>
  );
}
