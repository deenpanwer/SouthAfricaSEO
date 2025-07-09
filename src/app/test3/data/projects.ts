
export interface Project {
  imageUrl: string;
  dataAiHint: string;
  category: string;
  title: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'modern kitchen interior',
    category: 'Interior Painting',
    title: 'Modern Kitchen Transformation',
    description: 'A complete refresh for a family kitchen, featuring clean white cabinets and a soft gray wall color for a bright, open feel.'
  },
  {
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'suburban house exterior',
    category: 'Exterior Painting',
    title: 'Classic Suburban Home Exterior',
    description: 'We updated this home with a durable, long-lasting exterior paint in a classic navy and crisp white trim, enhancing its curb appeal.'
  },
  {
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'office reception area',
    category: 'Commercial Painting',
    title: 'Bright & Welcoming Office Space',
    description: 'A neutral, professional color scheme was used to create a welcoming and productive environment for this local tech startup.'
  },
  {
    imageUrl: 'https://placehold.co/800x600.png',
    dataAiHint: 'bedroom accent wall',
    category: 'Wallpaper Installation',
    title: 'Elegant Bedroom Accent Wall',
    description: 'A beautiful botanical wallpaper was expertly installed to create a stunning and serene feature wall in the master bedroom.'
  },
];
