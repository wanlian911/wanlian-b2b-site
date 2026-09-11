// Arabic (ar) product data - AR locale (RTL)
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; AR pages consume this file.
import type { Product } from './products';
import { productsArPart1 } from './ar-parts/part1';
import { productsArPart2 } from './ar-parts/part2';
import { productsArPart3 } from './ar-parts/part3';
import { productsArPart4 } from './ar-parts/part4';

export const productsArBySlug: Record<string, Product> = {
  ...productsArPart1,
  ...productsArPart2,
  ...productsArPart3,
  ...productsArPart4
};

export const productsAr: Product[] = Object.values(productsArBySlug);
