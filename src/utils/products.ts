export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  materials?: Record<string, string>;
  dimensions?: {
    headers: string[];
    rows: string[][];
  };
  image: string;
  gallery?: string[];
  infographic?: string;
  seoTitle: string;
  seoDescription: string;
  faqs?: { question: string; answer: string }[];
  video?: {
    src: string;
    poster?: string;
    duration?: string;
    uploadDate?: string;
    description?: string;
  };
}

export const products: Product[] = [