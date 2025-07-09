
import { getAllPosts, getPostBySlug } from '../../lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <Link href="/test3/resources" className="inline-flex items-center gap-2 text-enviro-green font-semibold mb-8 hover:text-enviro-pink transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-enviro-text/70 mb-2">
              <span>{format(parseISO(post.date), 'MMMM d, yyyy')}</span>
              <span>&bull;</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="border-enviro-green/30 text-enviro-green">{tag}</Badge>
              ))}
            </div>
          </header>
          
          {post.imageUrl && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.dataAiHint}
              />
            </div>
          )}
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-enviro-text/90 
                       prose-headings:text-enviro-green prose-h2:font-bold prose-h3:font-bold
                       prose-a:text-enviro-pink hover:prose-a:text-enviro-pink/80
                       prose-strong:text-enviro-text
                       prose-blockquote:border-enviro-pink prose-blockquote:text-enviro-text/70"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </div>
    </div>
  );
}
