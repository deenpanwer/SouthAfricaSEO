import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';
import { Rss, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { InfiniteBlogScroll } from '@/components/blog/InfiniteBlogScroll';
import { searchBlogPosts } from './actions'; // Import from the new actions file

export const metadata: Metadata = {
  title: 'Business Insights Blog',
  description: `Stay updated with the latest business insights, tips, and trends from ${APP_NAME}.`,
};

export default async function BlogPage({ searchParams }: { searchParams?: { query?: string }}) {
  const awaitedSearchParams = await searchParams;
  const searchQuery = awaitedSearchParams?.query || undefined;
  const POSTS_PER_PAGE = 6;
  const currentPage = 1; // Always start with page 1 for initial load
  const { paginatedPosts: initialPosts, totalPosts: initialTotalPosts } = await searchBlogPosts(searchQuery, currentPage, POSTS_PER_PAGE);

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <section className="text-center mb-12 md:mb-16">
          <Rss className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            {APP_NAME} Insights Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your source for expert insights, strategies, and news on business growth and optimization. Helping you navigate the competitive landscape and achieve your business goals.
          </p>
        </section>

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
        
          <InfiniteBlogScroll 
            initialPosts={initialPosts}
            initialTotalPosts={initialTotalPosts}
            searchQuery={searchQuery}
            postsPerPage={POSTS_PER_PAGE}
          />
        </section>

        {/* In the future, a user might want to bring back the numbered pagination. */}
      </div>
    </div>
  );
}