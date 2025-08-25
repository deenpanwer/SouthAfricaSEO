import { contentfulClient } from '../contentful';
import { EntryCollection } from 'contentful';

export interface ContentfulBriefingArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  publicationDate: string;
  author: string;
  tags: string[];
  featuredImage: {
    url: string;
    title: string;
    description: string;
  };
  content: any; // Contentful Rich Text type
  markdown: string;
}

export const getContentfulBriefingArticles = async (): Promise<ContentfulBriefingArticle[]> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'briefings',
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
        title: fields.title || 'Untitled Briefing',
        description: fields.description || '',
        publicationDate: fields.publicationDate,
        author: fields.author || 'Admin',
        tags: fields.tags || [],
        featuredImage: {
          url: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
          title: imageTitle || '',
          description: imageDescription || '',
        },
        content: fields.content,
        markdown: fields.markdown,
      };
    });
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
};

export const getContentfulBriefingArticleBySlug = async (slug: string): Promise<ContentfulBriefingArticle | null> => {
  try {
    const entries: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'briefings',
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
      title: fields.title || 'Untitled Briefing',
      description: fields.description || '',
      publicationDate: fields.publicationDate,
      author: fields.author || 'Admin',
      tags: fields.tags || [],
      featuredImage: {
        url: imageUrl ? `https:${imageUrl}` : '/placeholder.jpg',
        title: imageTitle || '',
        description: imageDescription || '',
      },
      content: fields.content,
      markdown: fields.markdown,
    };
  } catch (error) {
    console.error(`Error fetching Contentful entry for slug ${slug}:`, error);
    return null;
  }
};
