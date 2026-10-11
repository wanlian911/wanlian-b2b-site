// German (de, Deutsch) product data
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; DE pages consume this file.
import type { Product } from './products';
import { productsDePart1 } from './de-parts/part1';
import { productsDePart2 } from './de-parts/part2';
import { productsDePart3 } from './de-parts/part3';
import { productsDePart4 } from './de-parts/part4';

export const productsDeBySlug: Record<string, Product> = {
  ...productsDePart1,
  ...productsDePart2,
  ...productsDePart3,
  ...productsDePart4,
};

export const productsDe: Product[] = Object.values(productsDeBySlug);
