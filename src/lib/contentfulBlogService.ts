import { createClient, EntryCollection } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error('Contentful space ID and access token must be defined in .env.local');
}

const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export interface ContentfulBlogPost {
  id: string;
  slug: string;
  title: string;
  publicationDate: string;
  description: string;
  image: string;
  imageTitle: string;
  imageDescription: string;
  author: string;
  category: string;
  tags: string[];
  markdown: string;
  createdAt: string;
}

export const getContentfulBlogPosts = async (): Promise<ContentfulBlogPost[]> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'blog',
      order: ['-fields.publicationDate'],
    });

    return entries.items.map((item) => {
      const fields: any = item.fields;
      const imageUrl = fields.featuredImage?.fields?.file?.url;
      const imageTitle = fields.featuredImage?.fields?.title;
      const imageDescription = fields.featuredImage?.fields?.description;

      return {
        id: item.sys.id,
        slug: String(fields.slug || item.sys.id),
        title: String(fields.title || 'Untitled Post'),
        publicationDate: String(fields.publicationDate || new Date().toISOString()),
        description: String(fields.description || ''),
        image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
        imageTitle: String(imageTitle || ''),
        imageDescription: String(imageDescription || ''),
        author: String(fields.author || 'Admin'),
        category: String(fields.category || 'Uncategorized'),
        tags: Array.isArray(fields.tags) ? fields.tags.map(String) : [],
        markdown: typeof fields.markdown === 'object' && fields.markdown !== null && 'nodeType' in fields.markdown ? documentToHtmlString(fields.markdown) : String(fields.markdown || ''),
        createdAt: new Date(item.sys.createdAt).toISOString(),
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
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const item = entries.items[0];
    const fields: any = item.fields;
    const imageUrl = fields.featuredImage?.fields?.file?.url;
    const imageTitle = fields.featuredImage?.fields?.title;
    const imageDescription = fields.featuredImage?.fields?.description;

    return {
      id: item.sys.id,
      slug: String(fields.slug || item.sys.id),
      title: String(fields.title || 'Untitled Post'),
      publicationDate: String(fields.publicationDate || new Date().toISOString()),
      description: String(fields.description || ''),
      image: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
      imageTitle: String(imageTitle || ''),
      imageDescription: String(imageDescription || ''),
      author: String(fields.author || 'Admin'),
      category: String(fields.category || 'Uncategorized'),
      tags: Array.isArray(fields.tags) ? fields.tags.map(String) : [],
      markdown: typeof fields.markdown === 'object' && fields.markdown !== null && 'nodeType' in fields.markdown ? documentToHtmlString(fields.markdown) : String(fields.markdown || ''),
      createdAt: new Date(item.sys.createdAt).toISOString(),
    };
  } catch (error) {
    console.error(`Error fetching Contentful entry for slug ${slug}:`, error);
    return null;
  }
};
