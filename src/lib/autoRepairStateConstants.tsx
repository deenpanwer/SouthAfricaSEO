
import type { AutoRepairStatePageData } from '@/types';
import { pennsylvaniaAutoRepairData } from './autoRepairStateData/pennsylvania';
import { ohioAutoRepairData } from './autoRepairStateData/ohio';
// Import other state data files for auto repair shops here

export const AUTO_REPAIR_STATES_DATA: AutoRepairStatePageData[] = [
  pennsylvaniaAutoRepairData,
  ohioAutoRepairData,
  // Add other imported state data here
];

export const getAutoRepairStateData = (slug: string): AutoRepairStatePageData | undefined => {
  return AUTO_REPAIR_STATES_DATA.find(state => state.slug === slug);
};

export const formatAutoRepairStateNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
