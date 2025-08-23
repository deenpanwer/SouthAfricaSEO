import React from 'react';
import { getSortedPostsData } from '@/app/automations/lib/blog/get-mdx-data';
import { getContentfulBlogPosts } from '@/app/automations/lib/contentfulService';
import { BlogCard } from '@/components/automations/blog/BlogCard';

const BlogPage = async () => {
  // 1. Fetch posts from both sources
  const localPosts = getSortedPostsData();
  const contentfulPosts = await getContentfulBlogPosts();

  // 2. Combine and normalize the arrays
  const allPostsData = [
    ...localPosts.map(post => ({ ...post, slug: post.id })), // Ensure local posts have a slug property
    ...contentfulPosts,
  ];

  // 3. Sort all posts by date, ensuring newest are first
  allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Our Blog
        </h1>
        <p className="text-lg text-ph-light-gray text-center mb-16">
          Insights, analysis, and thought leadership on AI, technology, and national development.
        </p>

        {/* Featured Post Hero - Placeholder for now, can be implemented later */}
        {/* <section className="mb-16">
          <div classNameName="bg-card p-8 rounded-lg border border-ph-border">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Post</h2>
            <p className="text-ph-light-gray">Featured blog post will be here.</p>
          </div>
        </section> */}

        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map(({ id, slug, title, description, date, image, author, tags }) => (
              <BlogCard
                key={id}
                post={{
                  id,
                  slug,
                  title,
                  description,
                  date,
                  image,
                  author,
                  tags,
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
