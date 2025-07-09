
import type { Metadata } from 'next';
import { getAllPosts } from '../lib/blog';
import { BlogPreviewCard } from '../components/BlogPreviewCard';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore tips, trends, and advice on eco-friendly painting, color selection, and home maintenance from the experts at EnviroPainting.',
};

export default async function ResourcesPage() {
  const posts = await getAllPosts();

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
