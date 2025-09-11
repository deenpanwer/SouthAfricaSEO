import { AiSeoCityPageData } from '../types/aiSeo';
import { arlingtonAiSeoData } from './aiSeoData/arlingtonAiSeo';
import { washingtonDCAiSeoData } from './aiSeoData/washingtonDCAiSeo';

export const AI_SEO_CITIES_DATA: AiSeoCityPageData[] = [
  arlingtonAiSeoData,
  washingtonDCAiSeoData,
];

export const getAiSeoCityData = (slug: string): AiSeoCityPageData | undefined => {
  return AI_SEO_CITIES_DATA.find(city => city.slug === slug);
};
