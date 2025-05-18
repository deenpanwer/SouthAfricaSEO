import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS, APP_NAME } from '@/lib/constants.tsx';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, parseISO } from 'date-fns';
import { Share2 } from 'lucide-react'; // For social sharing

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
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

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

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
  
  // Placeholder for full content, in a real app this would come from a CMS or markdown file
  const fullContent = post.content || `
    <p>${post.excerpt}</p>
    <p class="my-4">This is a placeholder for the full blog post content. In a real application, this content would be fetched from a CMS or a markdown file. It would include detailed paragraphs, possibly images, code snippets, and other rich text elements.</p>
    <h2 class="text-2xl font-semibold my-4">Key Insights for South African Businesses</h2>
    <p class="my-4">Imagine detailed analysis here, specific to ${post.title.toLowerCase()} and its relevance to the South African market. For instance, how local businesses can apply these SEO techniques effectively.</p>
    <ul class="list-disc list-inside my-4 space-y-2">
      <li>Specific strategy point one tailored for SA.</li>
      <li>Another crucial tip for local optimization.</li>
      <li>How to leverage this for better ROI in ZAR.</li>
    </ul>
    <p class="my-4">Further elaboration on the topic, with examples and actionable advice, would follow. The goal is to provide immense value to the reader, positioning ZA Rank Boost as an authority in South African SEO.</p>
    <div class="my-6 p-4 bg-secondary/50 rounded-md">
      <p class="font-semibold">Pro Tip:</p>
      <p>Always ensure your content is mobile-friendly, as a significant portion of South African internet users access content via mobile devices.</p>
    </div>
  `;


  return (
    <article className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header className="mb-8">
          <Button variant="outline" size="sm" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            {post.title}
          </h1>
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
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.dataAiHint || "blog feature image"}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground/90
                     prose-headings:text-foreground prose-headings:font-semibold
                     prose-a:text-primary hover:prose-a:text-primary/80
                     prose-strong:text-foreground/90
                     prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: fullContent }}
        />

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
