// Spanish (es) product data - M2
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; ES pages consume this file.
import type { Product } from './products';
import { productsEsPart1 } from './es-parts/part1';
import { productsEsPart2 } from './es-parts/part2';
import { productsEsPart3 } from './es-parts/part3';

export const productsEsBySlug: Record<string, Product> = {
  ...productsEsPart1,
  ...productsEsPart2,
  ...productsEsPart3,
};

export const productsEs: Product[] = Object.values(productsEsBySlug);
