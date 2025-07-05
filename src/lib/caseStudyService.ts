import type { CaseStudy } from '@/types';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Award, Link2, Search, Target, TrendingUp, Users } from 'lucide-react';

const caseStudiesDirectory = path.join(process.cwd(), 'src', 'lib', 'case-studies');

// A helper map to convert string icon names from frontmatter to actual Lucide components
const iconMap = {
  TrendingUp,
  Target,
  Award,
  Users,
  Link2,
  Search,
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const filenames = await fs.readdir(caseStudiesDirectory);

  const posts = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.md'))
      .map(async (filename) => {
        const filePath = path.join(caseStudiesDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Map icon names to components for results
        const resultsWithIcons = data.results?.map((result: { metric: string, value: string, icon: string }) => ({
          ...result,
          icon: iconMap[result.icon as keyof typeof iconMap] || Search,
        })) || [];

        return {
          ...data,
          id: data.slug,
          slug: data.slug,
          results: resultsWithIcons,
        } as CaseStudy;
    })
  );

  return posts;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(caseStudiesDirectory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    const resultsWithIcons = data.results?.map((result: { metric: string, value: string, icon: string }) => ({
      ...result,
      icon: iconMap[result.icon as keyof typeof iconMap] || Search,
    })) || [];

    return {
      ...data,
      id: data.slug,
      slug: data.slug,
      results: resultsWithIcons,
      content: contentHtml,
    } as CaseStudy;

  } catch (error) {
    console.error(`Error reading case study with slug ${slug}:`, error);
    return null;
  }
}
