import React from 'react';
import { SpotlightBackground } from '@/components/ui/spotlight-background';
import { SpotlightBlogCard } from '@/components/blog/spotlight-blog-card';
import { getAllBlogPosts } from '@/lib/blogService';

export async function CityBlogSection() {
  const posts = await getAllBlogPosts();

  return (
    <SpotlightBackground className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Latest Insights & SEO News</h2>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">Stay ahead with our expert articles on local SEO strategies, digital marketing trends, and business growth tips.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <SpotlightBlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </SpotlightBackground>
  );
}

export default CityBlogSection;