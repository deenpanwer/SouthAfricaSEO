import { contentfulClient } from '../contentful';
import { EntryCollection } from 'contentful';

export interface ContentfulNewsArticle {
  id: string;
  slug: string;
  title: string;
  publicationDate: string;
  source: string;
  sourceUrl: string;
  excerpt: string;
  description: string;
  featuredImage: {
    url: string;
    title: string;
    description: string;
  };
  tags: string[];
  author: string;
  content: any;
  markdown: string;
}

export const getContentfulNewsArticles = async (): Promise<ContentfulNewsArticle[]> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'newsArticle',
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
        title: fields.title || 'Untitled Article',
        publicationDate: fields.publicationDate,
        source: fields.source || '',
        sourceUrl: fields.sourceUrl || '',
        excerpt: fields.excerpt || '',
        description: fields.description || '',
        featuredImage: {
          url: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
          title: imageTitle || '',
          description: imageDescription || '',
        },
        tags: fields.tags || [],
        author: fields.author || 'Admin',
        content: fields.content,
        markdown: fields.markdown,
      };
    });
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
};

export const getContentfulNewsArticleBySlug = async (slug: string): Promise<ContentfulNewsArticle | null> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'newsArticle',
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
      title: fields.title || 'Untitled Article',
      publicationDate: fields.publicationDate,
      source: fields.source || '',
      sourceUrl: fields.sourceUrl || '',
      excerpt: fields.excerpt || '',
      description: fields.description || '',
      featuredImage: {
        url: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
        title: imageTitle || '',
        description: imageDescription || '',
      },
      tags: fields.tags || [],
      author: fields.author || 'Admin',
      content: fields.content,
      markdown: fields.markdown,
    };
  } catch (error) {
    console.error(`Error fetching Contentful entry for slug ${slug}:`, error);
    return null;
  }
};
