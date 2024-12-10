import toFinite from '../src/toFinite.js';

describe('toFinite', () => {
    test('should convert basic numbers', () => {
      expect(toFinite(3.2)).toBe(3.2);
      expect(toFinite('3.2')).toBe(3.2);
      expect(toFinite(0)).toBe(0);
      expect(toFinite(-0)).toBe(-0);
    });
  
    test('should handle infinity', () => {
      expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
      expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
    });
  
    test('should handle non-numeric values', () => {
      expect(toFinite(null)).toBe(0);
      expect(toFinite(undefined)).toBe(0);
      expect(toFinite(true)).toBe(1);
      expect(toFinite(false)).toBe(0);
      expect(toFinite([1])).toBe(1);
      expect(toFinite([])).toBe(0);
      expect(toFinite('')).toBe(0);
    });
  
    test('should handle MIN_VALUE', () => {
      expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    });
  });