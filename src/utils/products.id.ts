// Indonesian (id, Bahasa Indonesia) product data
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; ID pages consume this file.
import type { Product } from './products';
import { productsIdPart1 } from './id-parts/part1';
import { productsIdPart2 } from './id-parts/part2';
import { productsIdPart3 } from './id-parts/part3';
import { productsIdPart4 } from './id-parts/part4';

export const productsIdBySlug: Record<string, Product> = {
  ...productsIdPart1,
  ...productsIdPart2,
  ...productsIdPart3,
  ...productsIdPart4,
};

export const productsId: Product[] = Object.values(productsIdBySlug);
