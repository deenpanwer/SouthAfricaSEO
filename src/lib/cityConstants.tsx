
import type { CityPageData } from '@/types';
// Import data from individual city files
import { portlandCityData } from './cityData/portland';
import { dallasCityData } from './cityData/dallas';
import { newYorkCityData } from './cityData/newYorkCity';
import { losAngelesData } from './cityData/losAngeles';
import { chicagoData } from './cityData/chicago';
import { arlingtonData } from './cityData/arlington';
import { atlantaData } from './cityData/atlanta';
import { austinData } from './cityData/austin';
import { baltimoreData } from './cityData/baltimore';
import { clevelandData } from './cityData/cleveland';
import { denverData } from './cityData/denver';
import { houstonData } from './cityData/houston';
import { jacksonvilleData } from './cityData/jacksonville';
import { kansasCityData } from './cityData/kansasCity';
import { lasVegasData } from './cityData/lasVegas';
import { louisvilleData } from './cityData/louisville';
import { miamiData } from './cityData/miami';
import { minneapolisData } from './cityData/minneapolis';
import { newOrleansData } from './cityData/newOrleans';
import { orlandoData } from './cityData/orlando';
import { philadelphiaData } from './cityData/philadelphia';
import { phoenixData } from './cityData/phoenix';
import { sanAntonioData } from './cityData/sanAntonio';
import { sanDiegoData } from './cityData/sanDiego';
import { seattleData } from './cityData/seattle';


// Generic placeholder images for new cities - hero
export const GENERIC_CITY_HERO_IMAGE_SRC = 'https://placehold.co/800x500.png';
// Generic placeholder image for new cities - office location
export const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://placehold.co/600x400.png';

export const CITIES_DATA: CityPageData[] = [
  portlandCityData,
  dallasCityData,
  newYorkCityData,
  losAngelesData,
  chicagoData,
  arlingtonData,
  atlantaData,
  austinData,
  baltimoreData,
  clevelandData,
  denverData,
  houstonData,
  jacksonvilleData,
  kansasCityData,
  lasVegasData,
  louisvilleData,
  miamiData,
  minneapolisData,
  newOrleansData,
  orlandoData,
  philadelphiaData,
  phoenixData,
  sanAntonioData,
  sanDiegoData,
  seattleData,
];

export const getCityData = (slug: string): CityPageData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};

export const formatCityNameFromSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
