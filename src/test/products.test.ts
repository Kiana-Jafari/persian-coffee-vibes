import { describe, expect, it } from 'vitest';
import { products } from '@/data/products';

describe('Cousinroast catalog', () => {
  it('contains four products with 250g, 500g and 1kg options', () => {
    expect(products).toHaveLength(4);
    for (const product of products) {
      expect(product.variants.map(v => v.weight)).toEqual(['250g', '500g', '1kg']);
      expect(product.variants.every(v => v.available)).toBe(true);
    }
  });
  it('uses the requested one-kilogram prices and proportional pack prices', () => {
    expect(products.map(p => p.variants[2]?.price)).toEqual([3900000, 2900000, 3570000, 3350000]);
    for (const product of products) {
      expect(product.variants[1]?.price).toBe(product.variants[2]!.price / 2);
      expect(product.variants[0]?.price).toBe(product.variants[2]!.price / 4);
    }
  });
});
