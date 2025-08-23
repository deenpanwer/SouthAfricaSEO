
import { createClient, EntryCollection } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error('Contentful space ID and access token must be defined in .env.local');
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// This is the shape of the blog post data we expect from Contentful
export interface ContentfulBlogPost {
  id: string;
  slug: string;
  title: string;
  description: string; // Assuming you have a 'description' field in Contentful
  date: string;
  image: string; // Assuming you have an 'image' field in Contentful
  author: string; // Assuming you have an 'author' field in Contentful
  tags: string[]; // Assuming you have a 'tags' field in Contentful
  content: any; // Add this line for the rich text content
}

// This function fetches and normalizes blog posts from Contentful
export const getContentfulBlogPosts = async (): Promise<ContentfulBlogPost[]> => {
  try {
    const entries: EntryCollection<any> = await client.getEntries({
      content_type: 'automationsBlog', // The API ID of your Content Model
      order: ['-sys.createdAt'],
    });

    return entries.items.map((item) => {
      // Normalize the Contentful entry to match the structure of your existing posts
      const fields = item.fields;
      const imageUrl = fields.featuredImage?.fields?.file?.url;

      return {
        id: item.sys.id,
        slug: fields.slug || item.sys.id, // Fallback to ID if slug is missing
        title: fields.title || 'Untitled Post',
        description: fields.description || '', // Make sure your model has this
        date: new Date(item.sys.createdAt).toISOString(),
        image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg', // Handle missing image
        author: fields.author || 'Admin', // Make sure your model has this
        tags: fields.tags || [], // Make sure your model has this
      };
    });
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return []; // Return an empty array on error to prevent site crashes
  }
};

// This function gets a single blog post by its slug
export const getContentfulBlogPostBySlug = async (slug: string): Promise<ContentfulBlogPost | null> => {
  try {
    const entries: EntryCollection<any> = await client.getEntries({
      content_type: 'automationsBlog',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null; // No post found with that slug
    }

    const item = entries.items[0];
    const fields = item.fields;
    const imageUrl = fields.featuredImage?.fields?.file?.url;

    return {
      id: item.sys.id,
      title: fields.title || 'Untitled Post',
      description: fields.description || '',
      date: new Date(item.sys.createdAt).toISOString(),
      image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
      author: fields.author || 'Admin',
      tags: fields.tags || [],
      // Note: We need to handle Rich Text to HTML conversion here
      // For now, we'll pass the raw content.
      content: fields.content,
    };
  } catch (error) {
    console.error(`Error fetching Contentful entry for slug ${slug}:`, error);
    return null;
  }
};
