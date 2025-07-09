
import { BlogPreviewCard } from './BlogPreviewCard';
import { Button } from './ui/Button';
import Link from 'next/link';
import type { EnviroPost } from '../lib/blog';

// Hardcoded post data
const featuredPosts: EnviroPost[] = [
  {
    slug: 'why-eco-friendly-paint-is-right-for-your-home',
    title: "Why Eco-Friendly Paint is the Right Choice for Your Home",
    date: "2024-07-15",
    excerpt: "Learn about the benefits of low-VOC and zero-VOC paints, from improved air quality to long-lasting durability.",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.uv-n7uBViMjwHiDk395kYgHaEK?pid=Api&P=0&h=220",
    dataAiHint: "paint can with leaf",
    category: "Sustainability",
    tags: ["Eco-Friendly", "Health", "Painting Tips"],
  },
  {
    slug: 'top-5-interior-color-trends-for-2024',
    title: "Top 5 Interior Color Trends for 2024",
    date: "2024-07-10",
    excerpt: "Ready for a change? Discover the colors that are defining interior design this year, from earthy tones to bold accent hues.",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.VXjq3MHzBgjvNV4KaUpkMwHaFF?pid=Api&P=0&h=220",
    dataAiHint: "paint swatches wall",
    category: "Design Trends",
    tags: ["Color Theory", "Interior Design", "Trends"],
  },
  {
    slug: 'the-secret-to-a-perfect-paint-job',
    title: "The Secret to a Perfect Paint Job: Why Prep Work is Everything",
    date: "2024-07-01",
    excerpt: "A flawless finish doesn't start with the first coat of paint. It starts with meticulous preparation. Learn why we never skip this crucial step.",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.QBlSVPT_80jZIof0WMfYBQHaF7?pid=Api&P=0&h=220",
    dataAiHint: "painter taping wall",
    category: "Painting Tips",
    tags: ["DIY", "Professional Painting", "Quality"],
  }
];

export function ResourcesHighlight() {
  return (
    <section className="bg-enviro-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Tips & Resources</h2>
          <p className="text-lg text-enviro-text/80 mt-4">From color theory to eco-friendly paint care, explore our latest articles.</p>
        </div>
        
        {featuredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
           <div className="text-center py-10">
            <p className="text-enviro-text/70">Our resource center is being updated. Check back soon for fresh content!</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/test3/resources">
              Explore All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
