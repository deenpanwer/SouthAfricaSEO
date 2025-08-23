
import { getPostData, getSortedPostsData } from '@/app/automations/lib/blog/get-mdx-data';
import { getContentfulBlogPostBySlug, getContentfulBlogPosts } from '@/app/automations/lib/contentfulService';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/automations/blog/BlogPostClient'; // Import the new client component

type Props = {
  params: { slug: string };
};

// This function fetches the data for the page (server-side)
async function getPost(slug: string) {
  // First, try to get the post from Contentful
  const contentfulPost = await getContentfulBlogPostBySlug(slug);

  if (contentfulPost) {
    // If found, convert its rich text content to HTML, checking if content exists
    const contentHtml = contentfulPost.content ? documentToHtmlString(contentfulPost.content) : '';
    return {
      ...contentfulPost,
      contentHtml,
    };
  }

  // If not in Contentful, try to get it from local MDX files
  try {
    const localPost = await getPostData(slug);
    return localPost;
  } catch (error) {
    // If it's not in either place, return null
    return null;
  }
}

// For metadata generation (still runs on server)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title || 'Untitled Post',
    description: post.description || '',
    openGraph: {
      images: post.image ? [post.image] : [],
    },
  };
}

// Main component (now a server component)
export default async function Post({ params }: Props) {
  const postData = await getPost(params.slug);

  if (!postData) {
    notFound(); // Redirect if post not found
  }

  // Fetch related posts on the server
  const localPosts = getSortedPostsData(); // Correctly get all local posts
  const contentfulPosts = await getContentfulBlogPosts();

  const allPosts = [
    ...(Array.isArray(localPosts) ? localPosts.map(p => ({ ...p, slug: p.id })) : []), // Ensure local posts are array and have slug
    ...contentfulPosts,
  ];

  const filteredRelated = allPosts.filter(p => p.slug !== postData.slug)
                                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                  .slice(0, 2); // Get top 2 recent related posts

  return (
    <BlogPostClient initialPostData={postData} initialRelatedPosts={filteredRelated} />
  );
}
