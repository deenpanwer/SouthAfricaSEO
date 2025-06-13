
import type { GymStatePageData } from '@/types';
import { coloradoGymData } from './gymStateData/colorado';
import { arizonaGymData } from './gymStateData/arizona';
// Import other state data files for gyms here

export const GYM_STATES_DATA: GymStatePageData[] = [
  coloradoGymData,
  arizonaGymData,
  // Add other imported state data here
];

export const getGymStateData = (slug: string): GymStatePageData | undefined => {
  return GYM_STATES_DATA.find(state => state.slug === slug);
};

export const formatGymStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
