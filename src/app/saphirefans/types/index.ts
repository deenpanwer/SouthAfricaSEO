
export interface SaphireCategory {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  dataAiHint: string;
  description?: string;
}

export interface SaphireProductSpecification {
  name: string;
  value: string;
}

export interface SaphireProduct {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  longDescription: string;
  price: number; // PKR
  imageUrl: string;
  images?: string[]; // For product gallery
  dataAiHint: string;
  specifications: SaphireProductSpecification[];
  features?: string[];
  availability?: 'In Stock' | 'Out of Stock' | 'Pre-Order';
  sku?: string;
}

export interface CartItem extends SaphireProduct {
  quantity: number;
}
