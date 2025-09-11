export interface AiSeoHeroData {
  pageTitle: string;
  metaDescription: string;
}

export interface AiSeoCityPageData {
  slug: string;
  cityName: string;
  heroData: AiSeoHeroData;
}
