
import type { AutoDealerStatePageData } from '@/types';
import { texasAutoDealerData } from './autoDealerStateData/texas';
import { michiganAutoDealerData } from './autoDealerStateData/michigan';
// Import other state data files for auto dealers here

export const AUTO_DEALER_STATES_DATA: AutoDealerStatePageData[] = [
  texasAutoDealerData,
  michiganAutoDealerData,
  // Add other imported state data here
];

export const getAutoDealerStateData = (slug: string): AutoDealerStatePageData | undefined => {
  return AUTO_DEALER_STATES_DATA.find(state => state.slug === slug);
};

export const formatAutoDealerStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
