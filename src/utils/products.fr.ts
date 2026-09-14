// French (fr) product data - FR locale
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; FR pages consume this file.
import type { Product } from './products';
import { productsFrPart1 } from './fr-parts/part1';
import { productsFrPart2 } from './fr-parts/part2';
import { productsFrPart3 } from './fr-parts/part3';
import { productsFrPart4 } from './fr-parts/part4';
import { productsFrPart5 } from './fr-parts/part5';

export const productsFrBySlug: Record<string, Product> = {
  ...productsFrPart1,
  ...productsFrPart2,
  ...productsFrPart3,
  ...productsFrPart4,
  ...productsFrPart5,
};

export const productsFr: Product[] = Object.values(productsFrBySlug);
