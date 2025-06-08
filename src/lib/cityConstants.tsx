
import type { CityPageData } from '@/types';
// Import data from individual city files
import { portlandCityData } from './cityData/portland';
import { dallasCityData } from './cityData/dallas';
// Add imports for other cities as you create their files
// e.g., import { newYorkCityData } from './cityData/newYorkCity';

// Generic placeholder images for new cities - hero
export const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
// Generic placeholder image for new cities - office location
export const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const CITIES_DATA: CityPageData[] = [
  portlandCityData,
  dallasCityData,
  // Add other imported city data objects here
  // e.g., newYorkCityData,
];

export const getCityData = (slug: string): CityPageData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};

// Helper to create a more "proper" city name from a slug if needed elsewhere,
// but CityPageData.cityName should be the source of truth for display.
export const formatCityNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
