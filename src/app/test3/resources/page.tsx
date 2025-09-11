
import type { Metadata } from 'next';
import { BlogPreviewCard } from '../components/BlogPreviewCard';
import type { EnviroPost } from '../lib/blog';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore tips, trends, and advice on eco-friendly painting, color selection, and home maintenance from the experts at EnviroPainting.',
};

// Hardcoded post data
const posts: EnviroPost[] = [
    {
        slug: 'why-eco-friendly-paint-is-right-for-your-home',
        title: "Why Eco-Friendly Paint is the Right Choice for Your Home",
        date: "2024-07-15",
        excerpt: "Learn about the benefits of low-VOC and zero-VOC paints, from improved air quality to long-lasting durability.",
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.uv-n7uBViMjwHiDk395kYgHaEK?pid=Api&P=0&h=220",
        category: "Sustainability",
        tags: ["Eco-Friendly", "Health", "Painting Tips"],
    },
    {
        slug: 'top-5-interior-color-trends-for-2024',
        title: "Top 5 Interior Color Trends for 2024",
        date: "2024-07-10",
        excerpt: "Ready for a change? Discover the colors that are defining interior design this year, from earthy tones to bold accent hues.",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.VXjq3MHzBgjvNV4KaUpkMwHaFF?pid=Api&P=0&h=220",
        category: "Design Trends",
        tags: ["Color Theory", "Interior Design", "Trends"],
    },
    {
        slug: 'the-secret-to-a-perfect-paint-job',
        title: "The Secret to a Perfect Paint Job: Why Prep Work is Everything",
        date: "2024-07-01",
        excerpt: "A flawless finish doesn't start with the first coat of paint. It starts with meticulous preparation. Learn why we never skip this crucial step.",
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.QBlSVPT_80jZIof0WMfYBQHaF7?pid=Api&P=0&h=220",
        category: "Painting Tips",
        tags: ["DIY", "Professional Painting", "Quality"],
    }
];


export default function ResourcesPage() {
  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green mb-4">Our Resources</h1>
          <p className="text-lg text-enviro-text/80">
            Your guide to making informed decisions about your painting projects. Explore our collection of articles on color trends, sustainable practices, and DIY tips from our team of experts.
          </p>
        </section>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-enviro-text/70">No articles available yet. Please check back soon!</p>
          </div>
        )}

      </div>
    </div>
  );
}
