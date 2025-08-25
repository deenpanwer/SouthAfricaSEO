
import { getContentfulBlogPostBySlug, getContentfulBlogPosts } from '@/app/automations/lib/blog/contentfulService';
import { marked } from 'marked'; // Import marked
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
    const contentHtml = contentfulPost.markdown ? marked.parse(contentfulPost.markdown) : '';
    return {
      ...contentfulPost,
      contentHtml,
      publicationDate: contentfulPost.publicationDate ? new Date(contentfulPost.publicationDate).toISOString() : '',
    };
  }

  return null;
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
      title: post.title || 'Untitled Post',
      description: post.description || '',
      images: [
        {
          url: post.image || '',
          alt: post.imageTitle || post.title || 'Image',
        },
      ],
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
  const contentfulPosts = await getContentfulBlogPosts();

  const filteredRelated = (contentfulPosts || []).filter(p => p.slug !== postData.slug)
                                  .map(p => ({ ...p, publicationDate: p.publicationDate ? new Date(p.publicationDate).toISOString() : '' })) // Ensure related posts also have ISO date
                                  .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
                                  .slice(0, 2); // Get top 2 recent related posts

  return (
    <BlogPostClient initialPostData={postData} initialRelatedPosts={filteredRelated} />
  );
}
