
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export interface EnviroPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  dataAiHint: string;
  category: string;
  tags: string[];
  content?: string;
}

const articlesDirectory = path.join(process.cwd(), 'src/app/test3/articles');

export async function getAllPosts(): Promise<EnviroPost[]> {
  try {
    const filenames = await fs.readdir(articlesDirectory);
    const posts = await Promise.all(
      filenames
        .filter(filename => filename.endsWith('.md'))
        .map(async (filename) => {
          const slug = filename.replace(/\.md$/, '');
          const post = await getPostBySlug(slug);
          return post!;
        })
    );
    return posts.filter(Boolean).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Could not read articles directory:", error);
    return []; // Return empty array if directory doesn't exist
  }
}

export async function getPostBySlug(slug: string): Promise<EnviroPost | null> {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(gfm).use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      imageUrl: data.imageUrl || '',
      dataAiHint: data.dataAiHint || '',
      category: data.category || 'General',
      tags: data.tags || [],
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}
