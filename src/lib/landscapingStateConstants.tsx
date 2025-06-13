
import type { LandscapingStatePageData } from '@/types';
// Import data from individual state files
import { californiaLandscapingData } from './landscapingStateData/california';
import { texasLandscapingData } from './landscapingStateData/texas';
import { floridaLandscapingData } from './landscapingStateData/florida';
import { newYorkLandscapingData } from './landscapingStateData/newYork';
import { coloradoLandscapingData } from './landscapingStateData/colorado';
import { pennsylvaniaLandscapingData } from './landscapingStateData/pennsylvania';
import { illinoisLandscapingData } from './landscapingStateData/illinois';
import { ohioLandscapingData } from './landscapingStateData/ohio';
import { georgiaLandscapingData } from './landscapingStateData/georgia';
import { northCarolinaLandscapingData } from './landscapingStateData/northCarolina';

export const LANDSCAPING_STATES_DATA: LandscapingStatePageData[] = [
  californiaLandscapingData,
  texasLandscapingData,
  floridaLandscapingData,
  newYorkLandscapingData,
  coloradoLandscapingData,
  pennsylvaniaLandscapingData,
  illinoisLandscapingData,
  ohioLandscapingData,
  georgiaLandscapingData,
  northCarolinaLandscapingData,
];

export const getLandscapingStateData = (slug: string): LandscapingStatePageData | undefined => {
  return LANDSCAPING_STATES_DATA.find(state => state.slug === slug);
};

// Helper function to format state name from slug if needed
export const formatStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
    