// Portuguese (pt, PT-BR) product data
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; PT pages consume this file.
import type { Product } from './products';
import { productsPtPart1 } from './pt-parts/part1';
import { productsPtPart2 } from './pt-parts/part2';
import { productsPtPart3 } from './pt-parts/part3';
import { productsPtPart4 } from './pt-parts/part4';

export const productsPtBySlug: Record<string, Product> = {
  ...productsPtPart1,
  ...productsPtPart2,
  ...productsPtPart3,
  ...productsPtPart4,
};

export const productsPt: Product[] = Object.values(productsPtBySlug);
