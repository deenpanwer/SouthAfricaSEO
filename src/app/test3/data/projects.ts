
export interface Project {
  imageUrl: string;
  dataAiHint: string;
  category: string;
  title: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    imageUrl: 'https://static.wixstatic.com/media/3ec430_3c8a6d8556494434b51fd11478dec708~mv2.jpeg/v1/fill/w_440,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ec430_3c8a6d8556494434b51fd11478dec708~mv2.jpeg',
    dataAiHint: 'modern kitchen interior',
    category: 'Interior Painting',
    title: 'Modern Kitchen Transformation',
    description: 'A complete refresh for a family kitchen, featuring clean white cabinets and a soft gray wall color for a bright, open feel.'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/3ec430_b5a5e2247ed243ebb2bca917dff23821~mv2.webp/v1/fill/w_440,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ec430_b5a5e2247ed243ebb2bca917dff23821~mv2.webp',
    dataAiHint: 'suburban house exterior',
    category: 'Exterior Painting',
    title: 'Classic Suburban Home Exterior',
    description: 'We updated this home with a durable, long-lasting exterior paint in a classic navy and crisp white trim, enhancing its curb appeal.'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/3ec430_015d62e3cd35462fb6e636ba23b98469~mv2.jpg/v1/fill/w_440,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ec430_015d62e3cd35462fb6e636ba23b98469~mv2.jpg',
    dataAiHint: 'office reception area',
    category: 'Commercial Painting',
    title: 'Bright & Welcoming Office Space',
    description: 'A neutral, professional color scheme was used to create a welcoming and productive environment for this local tech startup.'
  },
  {
    imageUrl: 'https://static.wixstatic.com/media/3ec430_fdf5e49f0c6642cdaa68ce0d23af89b1~mv2.jpg/v1/fill/w_440,h_357,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ec430_fdf5e49f0c6642cdaa68ce0d23af89b1~mv2.jpg',
    dataAiHint: 'bedroom accent wall',
    category: 'Wallpaper Installation',
    title: 'Elegant Bedroom Accent Wall',
    description: 'A beautiful botanical wallpaper was expertly installed to create a stunning and serene feature wall in the master bedroom.'
  },
];
