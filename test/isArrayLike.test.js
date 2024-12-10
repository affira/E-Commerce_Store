import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike', () => {
    test('should return true for arrays', () => {
      expect(isArrayLike([1, 2, 3])).toBe(true);
      expect(isArrayLike([])).toBe(true);
    });
  
    test('should return true for array-like objects', () => {
      expect(isArrayLike({ length: 3 })).toBe(true);
      expect(isArrayLike('abc')).toBe(true);
    });
  
    test('should return false for functions', () => {
      expect(isArrayLike(Function)).toBe(false);
      expect(isArrayLike(() => {})).toBe(false);
    });
  
    test('should return false for non-array-like values', () => {
      expect(isArrayLike(null)).toBe(false);
      expect(isArrayLike(undefined)).toBe(false);
      expect(isArrayLike({})).toBe(false);
      expect(isArrayLike(true)).toBe(false);
      expect(isArrayLike(1)).toBe(false);
    });
  
    test('should handle objects with invalid length properties', () => {
      expect(isArrayLike({ length: -1 })).toBe(false);
      expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).toBe(false);
      expect(isArrayLike({ length: 3.5 })).toBe(false);
    });
  });