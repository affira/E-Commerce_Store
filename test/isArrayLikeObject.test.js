import isArrayLikeObject from '../src/isArrayLikeObject.js';

describe('isArrayLikeObject', () => {
    test('should return true for arrays', () => {
      expect(isArrayLikeObject([1, 2, 3])).toBe(true);
      expect(isArrayLikeObject([])).toBe(true);
    });
  
    test('should return false for strings', () => {
      expect(isArrayLikeObject('abc')).toBe(false);
      expect(isArrayLikeObject('')).toBe(false);
    });
  
    test('should return true for array-like objects', () => {
      expect(isArrayLikeObject({ '0': 'a', '1': 'b', '2': 'c', length: 3 })).toBe(true);
    });
  
    test('should return false for non-object values', () => {
      expect(isArrayLikeObject(null)).toBe(false);
      expect(isArrayLikeObject(undefined)).toBe(false);
      expect(isArrayLikeObject(42)).toBe(false);
      expect(isArrayLikeObject(true)).toBe(false);
    });
  
    test('should return false for functions', () => {
      expect(isArrayLikeObject(Function)).toBe(false);
      expect(isArrayLikeObject(() => {})).toBe(false);
    });
  });