
import { BlogPreviewCard } from './BlogPreviewCard';
import { getAllPosts } from '../lib/blog';
import { Button } from './ui/Button';
import Link from 'next/link';

export async function ResourcesHighlight() {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.slice(0, 3);

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
            <Link href="/enviropainting/resources">
              Explore All Resources
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
