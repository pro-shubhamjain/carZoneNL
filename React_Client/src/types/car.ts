export interface Car {
  id: number;
  name: string;
  price: number;
  year: number;
  mileage: string;
  fuel: string;
  transmission: string;
  owner: string;
  seller: string;
  location: string;
  views: number;
  updated: string;
  images: string[];
  specifications: {
    economy: Record<string, string>;
    presentation: Record<string, string>;
    features: Record<string, string>;
    safety: Record<string, string>;
  };
}
