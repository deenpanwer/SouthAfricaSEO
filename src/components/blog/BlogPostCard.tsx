import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/types';
import { CalendarDays, UserCircle, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  console.log('Post Image URL:', post.image);
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full h-48">
          {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            data-ai-hint={post.dataAiHint || "blog article"}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
          ) : <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">No Image</div>} {/* Placeholder */}
        </div>
      </Link>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
          <CalendarDays className="h-4 w-4" />
          <span>{format(parseISO(post.publicationDate), 'PPP')}</span>
          <span className="px-1">|</span>
          <UserCircle className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="block">
          <CardTitle className="text-xl font-semibold hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-3">{post.description}</CardDescription>
        <div className="space-x-2">
          <Badge variant="secondary">{post.category}</Badge>
          {post.tags.slice(0,2).map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="text-primary hover:underline flex items-center text-sm font-medium">
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
