
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
import { dublinData } from './cityData/dublin';
import { corkData } from './cityData/cork';
import { galwayData } from './cityData/galway';
import { limerickData } from './cityData/limerick';
import { belfastData } from './cityData/belfast';
import { karachiData } from './cityData/karachi';
import { lahoreData } from './cityData/lahore';
import { islamabadData } from './cityData/islamabad';
import { faisalabadData } from './cityData/faisalabad';
import { gulshanEHadeedData } from './cityData/gulshanEHadeed';


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
  dublinData,
  corkData,
  galwayData,
  limerickData,
  belfastData,
  karachiData,
  lahoreData,
  islamabadData,
  faisalabadData,
  gulshanEHadeedData,
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
