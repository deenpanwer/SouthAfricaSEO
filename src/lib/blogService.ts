import { BlogPost } from '@/types';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src', 'lib', 'articles');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const filenames = await fs.readdir(articlesDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');

      const { data, content } = matter(fileContents);

      // Convert markdown content to HTML
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      return {
        id: data.id || filename.replace(/\.md$/, ''), // Use ID from frontmatter or filename
        slug: data.slug || filename.replace(/\.md$/, ''), // Use slug from frontmatter or filename
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        imageUrl: data.imageUrl || '',
        dataAiHint: data.dataAiHint || '',
        author: data.author || 'Admin',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        content: contentHtml, // Include full HTML content
      } as BlogPost;
    })
  );

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown content to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      id: data.id || slug,
      slug: data.slug || slug,
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      imageUrl: data.imageUrl || '',
      dataAiHint: data.dataAiHint || '',
      author: data.author || 'Admin',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      content: contentHtml,
    } as BlogPost;

  } catch (error) {
    // Handle file not found or other read errors
    console.error(`Error reading blog post with slug ${slug}:`, error);
    return null;
  }
}