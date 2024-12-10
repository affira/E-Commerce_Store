import ceil from '../src/ceil.js';

describe('ceil', () => {
    test('should round up numbers with no precision', () => {
      expect(ceil(4.006)).toBe(5);
      expect(ceil(4.1)).toBe(5);
      expect(ceil(4.9)).toBe(5);
    });
  
    test('should round up numbers with positive precision', () => {
      expect(ceil(6.004, 2)).toBe(6.01);
      expect(ceil(6.009, 2)).toBe(6.01);
      expect(ceil(6.999, 2)).toBe(7.00);
    });
  
    test('should round up numbers with negative precision', () => {
      expect(ceil(6040, -2)).toBe(6100);
      expect(ceil(6076, -2)).toBe(6100);
      expect(ceil(6999, -2)).toBe(7000);
    });
  
    test('should handle zero precision', () => {
      expect(ceil(4.006, 0)).toBe(5);
      expect(ceil(4.1, 0)).toBe(5);
    });
  
    test('should handle edge cases', () => {
      expect(ceil(0)).toBe(0);
      expect(ceil(-0)).toBe(-0);
      expect(ceil(Infinity)).toBe(Infinity);
      expect(ceil(-Infinity)).toBe(-Infinity);
    });
  });