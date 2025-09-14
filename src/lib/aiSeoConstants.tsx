import { AiSeoCityPageData } from '../types/aiSeo';
import { arlingtonAiSeoData } from './aiSeoData/arlingtonAiSeo';
import { washingtonDCAiSeoData } from './aiSeoData/washingtonDCAiSeo';
import { newYorkCityAiSeoData } from './aiSeoData/newYorkCityAiSeo';
import { losAngelesAiSeoData } from './aiSeoData/losAngelesAiSeo';
import { chicagoAiSeoData } from './aiSeoData/chicagoAiSeo';
import { dallasAiSeoData } from './aiSeoData/dallasAiSeo';
import { seattleAiSeoData } from './aiSeoData/seattleAiSeo';
import { miamiAiSeoData } from './aiSeoData/miamiAiSeo';
import { bostonAiSeoData } from './aiSeoData/bostonAiSeo';
import { houstonAiSeoData } from './aiSeoData/houstonAiSeo';

export const AI_SEO_CITIES_DATA: AiSeoCityPageData[] = [
  arlingtonAiSeoData,
  washingtonDCAiSeoData,
  newYorkCityAiSeoData,
  losAngelesAiSeoData,
  chicagoAiSeoData,
  dallasAiSeoData,
  seattleAiSeoData,
  miamiAiSeoData,
  bostonAiSeoData,
  houstonAiSeoData,
];

export const getAiSeoCityData = (slug: string): AiSeoCityPageData | undefined => {
  return AI_SEO_CITIES_DATA.find(city => city.slug === slug);
};
