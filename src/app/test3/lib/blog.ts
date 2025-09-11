// This file is being simplified as data is now hardcoded.
// We keep the type definition for consistency in components.

export interface EnviroPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  content?: string;
}
