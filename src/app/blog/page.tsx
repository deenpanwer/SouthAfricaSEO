
import { Metadata } from 'next';
// import { AITopicSuggestion } from '@/components/blog/AITopicSuggestion'; // AI component removed
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { BLOG_POSTS, APP_NAME } from '@/lib/constants.tsx';
import { Rss, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Business Insights Blog',
  description: `Stay updated with the latest business insights, tips, and trends from ${APP_NAME}.`,
};

// Mock search functionality for demonstration
async function searchBlogPosts(query: string | undefined) {
  "use server";
  if (!query) return BLOG_POSTS;
  return BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
}


export default async function BlogPage({ searchParams }: { searchParams?: { query?: string }}) {
  const searchQuery = searchParams?.query || undefined;
  const postsToDisplay = await searchBlogPosts(searchQuery);

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16">
          <Rss className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            {APP_NAME} Insights Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your source for expert insights, strategies, and news on business growth and optimization. Helping you navigate the competitive landscape and achieve your business goals.
          </p>
        </section>

        {/* AI Topic Suggestion section removed */}
        {/* 
        <section className="mb-12 md:mb-16">
          <AITopicSuggestion />
        </section> 
        */}
        
        <section className="mb-12">
          <form method="GET" action="/blog" className="flex gap-2 mb-8 max-w-lg mx-auto">
            <Input 
              type="search" 
              name="query" 
              placeholder="Search articles..." 
              className="flex-grow"
              defaultValue={searchQuery}
            />
            <Button type="submit" variant="outline"><Search className="mr-2 h-4 w-4"/> Search</Button>
          </form>
        
          {postsToDisplay.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsToDisplay.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No blog posts found matching your search criteria.</p>
            </div>
          )}
        </section>

        {/* Placeholder for pagination if many posts */}
        {/* 
        <section className="text-center mt-12">
          <Button variant="outline">Load More Posts</Button>
        </section> 
        */}
      </div>
    </div>
  );
}
