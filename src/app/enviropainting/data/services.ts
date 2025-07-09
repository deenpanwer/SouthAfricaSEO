
import { Home, Building, Brush, PaintRoller, Wallpaper, CheckSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: Home,
    title: 'Interior Painting',
    description: 'Flawless finishes for walls, ceilings, and trim. We bring new life to your living spaces with eco-friendly paints.'
  },
  {
    icon: Building,
    title: 'Exterior Painting',
    description: 'Durable and beautiful exterior coatings that protect your home from the elements and boost its curb appeal.'
  },
  {
    icon: Brush,
    title: 'Cabinet Refinishing',
    description: 'A cost-effective way to modernize your kitchen or bathroom with a professional, factory-like finish.'
  },
  {
    icon: PaintRoller,
    title: 'Commercial Painting',
    description: 'Reliable, efficient painting services for offices, retail spaces, and other commercial properties with minimal disruption.'
  },
  {
    icon: Wallpaper,
    title: 'Wallpaper Installation',
    description: 'Precise and professional wallpaper installation and removal for a perfect feature wall or full room design.'
  },
  {
    icon: CheckSquare,
    title: 'Color Consultation',
    description: 'Our experts help you choose the perfect color palette to match your style, lighting, and vision for the space.'
  }
];
