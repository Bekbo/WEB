import { For } from './For';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  category: number;
  orderCount: number;
  available: boolean;
  for: For;
}
