import { contentfulClient } from '../contentful';
import { EntryCollection } from 'contentful';

export interface ContentfulBlogPost {
  date: string | number | Date;
  id: string;
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  image: string;
  imageTitle: string;
  imageDescription: string;
  author: string;
  tags: string[];
  markdown: string; // Add the new markdown field
}

export const getContentfulBlogPosts = async (): Promise<ContentfulBlogPost[]> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'automationsBlog',
      order: ['-fields.publicationDate'],
    });

    return entries.items.map((item) => {
      const fields = item.fields;
      const imageUrl = fields.featuredImage?.fields?.file?.url;
      const imageTitle = fields.featuredImage?.fields?.title;
      const imageDescription = fields.featuredImage?.fields?.description;

      return {
        id: item.sys.id,
        slug: fields.slug || item.sys.id,
        title: fields.title || 'Untitled Post',
        description: fields.description || '',
        createdAt: new Date(item.sys.createdAt).toISOString(),
        publicationDate: fields.publicationDate,
        image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
        imageTitle: imageTitle || '',
        imageDescription: imageDescription || '',
        author: fields.author || 'Admin',
        tags: fields.tags || [],
        markdown: fields.markdown, // Include the new markdown field
      };
    });
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
};

export const getContentfulBlogPostBySlug = async (slug: string): Promise<ContentfulBlogPost | null> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'automationsBlog',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const item = entries.items[0];
    const fields = item.fields;
    const imageUrl = fields.featuredImage?.fields?.file?.url;
    const imageTitle = fields.featuredImage?.fields?.title;
    const imageDescription = fields.featuredImage?.fields?.description;

    return {
      id: item.sys.id,
      slug: fields.slug || item.sys.id,
      title: fields.title || 'Untitled Post',
      description: fields.description || '',
      createdAt: new Date(item.sys.createdAt).toISOString(),
      publicationDate: fields.publicationDate,
      image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
      imageTitle: imageTitle || '',
      imageDescription: imageDescription || '',
      author: fields.author || 'Admin',
      tags: fields.tags || [],
      markdown: fields.markdown, // Include the new markdown field
    };
  } catch (error) {
    console.error(`Error fetching Contentful entry for slug ${slug}:`, error);
    return null;
  }
};
