
import type { SalonStatePageData } from '@/types';
import { newYorkSalonData } from './salonStateData/newYork';
import { georgiaSalonData } from './salonStateData/georgia';
// Import other state data files for salons here

export const SALON_STATES_DATA: SalonStatePageData[] = [
  newYorkSalonData,
  georgiaSalonData,
  // Add other imported state data here
];

export const getSalonStateData = (slug: string): SalonStatePageData | undefined => {
  return SALON_STATES_DATA.find(state => state.slug === slug);
};

export const formatSalonStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
