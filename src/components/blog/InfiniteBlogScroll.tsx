"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { BlogPostCard } from './BlogPostCard';
import { searchBlogPosts } from '@/app/blog/actions'; // Import the server action
import { BlogPost } from '@/lib/contentfulBlogService'; // Assuming BlogPost type is exported
import { useInView } from 'react-intersection-observer';
import { Loader2 } from 'lucide-react';

interface InfiniteBlogScrollProps {
  initialPosts: BlogPost[];
  initialTotalPosts: number;
  searchQuery?: string;
  postsPerPage: number;
}

export function InfiniteBlogScroll({
  initialPosts,
  initialTotalPosts,
  searchQuery,
  postsPerPage,
}: InfiniteBlogScrollProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length < initialTotalPosts);

  const { ref, inView } = useInView({
    threshold: 0, // Trigger when any part of the element is visible
  });

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = page + 1;
    const { paginatedPosts, totalPosts } = await searchBlogPosts(
      searchQuery,
      nextPage,
      postsPerPage
    );

    setPosts((prevPosts) => [...prevPosts, ...paginatedPosts]);
    setPage(nextPage);
    setHasMore(posts.length + paginatedPosts.length < totalPosts);
    setLoading(false);
  }, [loading, hasMore, page, posts.length, postsPerPage, searchQuery]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts();
    }
  }, [inView, hasMore, loadMorePosts]);

  // Reset posts when searchQuery changes
  useEffect(() => {
    setPosts(initialPosts);
    setPage(1);
    setHasMore(initialPosts.length < initialTotalPosts);
  }, [searchQuery, initialPosts, initialTotalPosts]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {hasMore && (
        <div ref={ref} className="flex justify-center py-8">
          {loading && <Loader2 className="h-8 w-8 animate-spin text-primary" />}
        </div>
      )}

      {!hasMore && posts.length > 0 && !loading && (
        <div className="text-center py-8 text-muted-foreground">
          You've reached the end of the posts.
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No blog posts found matching your search criteria.</p>
        </div>
      )}
    </>
  );
}
