// Russian (ru) product data — RU pilot
// Keyed by the same slug as the English source (src/utils/products.ts).
// EN source stays untouched; RU pages consume this file.
import type { Product } from './products';
import { productsRuPart1a } from './ru-parts/part1a';
import { productsRuPart1b } from './ru-parts/part1b';
import { productsRuPart2 } from './ru-parts/part2';
import { productsRuPart3 } from './ru-parts/part3';
import { productsRuPart4 } from './ru-parts/part4';

export const productsRuBySlug: Record<string, Product> = {
  ...productsRuPart1a,
  ...productsRuPart1b,
  ...productsRuPart2,
  ...productsRuPart3,
  ...productsRuPart4,
};

export const productsRu: Product[] = Object.values(productsRuBySlug);
