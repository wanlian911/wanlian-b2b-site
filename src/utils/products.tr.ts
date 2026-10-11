// Turkish (tr, Türkçe) product data
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; TR pages consume this file.
import type { Product } from './products';
import { productsTrPart1 } from './tr-parts/part1';
import { productsTrPart2 } from './tr-parts/part2';
import { productsTrPart3 } from './tr-parts/part3';
import { productsTrPart4 } from './tr-parts/part4';

export const productsTrBySlug: Record<string, Product> = {
  ...productsTrPart1,
  ...productsTrPart2,
  ...productsTrPart3,
  ...productsTrPart4,
};

export const productsTr: Product[] = Object.values(productsTrBySlug);
