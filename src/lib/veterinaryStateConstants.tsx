
import type { VeterinaryStatePageData } from '@/types';
import { californiaVeterinaryData } from './veterinaryStateData/california';
import { floridaVeterinaryData } from './veterinaryStateData/florida';
// Import other state data files for veterinary here

export const VETERINARY_STATES_DATA: VeterinaryStatePageData[] = [
  californiaVeterinaryData,
  floridaVeterinaryData,
  // Add other imported state data here
];

export const getVeterinaryStateData = (slug: string): VeterinaryStatePageData | undefined => {
  return VETERINARY_STATES_DATA.find(state => state.slug === slug);
};

export const formatVeterinaryStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
