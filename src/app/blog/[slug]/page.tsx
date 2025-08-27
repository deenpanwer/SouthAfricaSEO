import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants.tsx'; // Assuming APP_NAME is defined here
import { getAllBlogPosts, getBlogPostBySlug } from '../../../lib/blogService';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns'; // date-fns is used here
import { Share2 } from 'lucide-react'; // For social sharing
import { Breadcrumb } from '@/components/layout/Breadcrumb';

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: `Post Not Found | ${APP_NAME}`,
      description: 'The blog post you are looking for could not be found.',
    };
  }
  return {
    title: `${post.title} | ${APP_NAME} Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

// This function generates the static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <article className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 **max-w-3xl lg:max-w-4xl xl:max-w-5xl**"> {/* Adjusted max-width for desktop */}
        <header className="mb-8 **lg:mb-12**"> {/* Increased header bottom margin for desktop */}
          <Breadcrumb items={breadcrumbItems} />
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            {post.title}
          </h1>
          {/* Metadata: Ensured good wrapping and spacing for mobile, maintained for desktop */}
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <span>{format(parseISO(post.date), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1.5" />
              <span>{post.category}</span>
            </div>
          </div>
          {post.imageUrl && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6 **lg:mb-8**"> {/* Adjusted image bottom margin for desktop */}
              <Image
                src={post.imageUrl}
                alt={post.title}
                data-ai-hint={post.dataAiHint || "blog feature image"}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 600px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
        </header>

        {/* Render the main blog content */}
        <div className="overflow-x-auto"> {/* Added this wrapper for horizontal scrolling on tables/code blocks */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-semibold
                         prose-a:text-primary hover:prose-a:text-primary/80
                         prose-strong:text-foreground/90
                         prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>

        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            {/* Add more social share buttons here if desired */}
          </div>
        </footer>
      </div>
    </article>
  );
}