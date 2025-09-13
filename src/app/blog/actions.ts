"use server";

import { getContentfulBlogPosts } from '@/lib/contentfulBlogService';
import { BlogPost } from '@/lib/contentfulBlogService';

export async function searchBlogPosts(query: string | undefined, page: number, pageSize: number): Promise<{ paginatedPosts: BlogPost[]; totalPosts: number }> {
  const allPosts = await getContentfulBlogPosts();
  const filteredPosts = allPosts.filter(post =>
    !query ||
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.description.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const totalPosts = filteredPosts.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return { paginatedPosts, totalPosts };
}
