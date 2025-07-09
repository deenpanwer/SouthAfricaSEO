
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// This is now a static page demonstrating a single post layout.
// In a real app, this would be dynamic.
const post = {
    slug: 'why-eco-friendly-paint-is-right-for-your-home',
    title: "Why Eco-Friendly Paint is the Right Choice for Your Home",
    date: "2024-07-15",
    excerpt: "Learn about the benefits of low-VOC and zero-VOC paints, from improved air quality to long-lasting durability.",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.uv-n7uBViMjwHiDk395kYgHaEK?pid=Api&P=0&h=220",
    dataAiHint: "paint can with leaf",
    category: "Sustainability",
    tags: ["Eco-Friendly", "Health", "Painting Tips"],
    content: `
        <p>When it's time to repaint your home, the color is often the first thing on your mind. But the type of paint you choose is just as important, especially when it comes to the health of your family and the environment. Traditional paints can release volatile organic compounds (VOCs), which can impact indoor air quality. That's where eco-friendly paints come in.</p>
        <h3>What are VOCs?</h3>
        <p>Volatile Organic Compounds (VOCs) are chemicals that are released into the air as paint dries. They can cause headaches, dizziness, and respiratory issues, especially for those with sensitivities.</p>
        <h3>Benefits of Low-VOC & Zero-VOC Paints</h3>
        <ol>
            <li><strong>Better Indoor Air Quality:</strong> The most significant benefit is the minimal release of harmful chemicals, leading to a healthier living environment right from the first coat.</li>
            <li><strong>Low Odor:</strong> Eco-friendly paints have little to no paint smell, making the painting process much more pleasant.</li>
            <li><strong>Durability and Performance:</strong> Modern eco-friendly paints are engineered for excellent coverage, durability, and washability, matching or even exceeding the performance of traditional paints.</li>
            <li><strong>Environmental Impact:</strong> These paints are made with more sustainable practices and materials, reducing their overall environmental footprint.</li>
        </ol>
        <p>Choosing an eco-friendly paint doesn't mean compromising on quality or color. It's a smart choice that benefits your home, your health, and the planet.</p>
    `,
};


export async function generateMetadata(): Promise<Metadata> {
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


export default function PostPage({ params }: { params: { slug: string }}) {
  // In a real app, you'd use params.slug to fetch the correct post.
  // Here, we just check if the slug matches our single hardcoded post for demonstration.
  if (params.slug !== post.slug) {
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
