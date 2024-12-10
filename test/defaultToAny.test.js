import defaultToAny from '../src/defaultToAny.js';

describe('defaultToAny', () => {
    test('should return the first value if it is not null/undefined', () => {
      expect(defaultToAny(1, 10, 20)).toBe(1);
      expect(defaultToAny('string', 10, 20)).toBe('string');
      expect(defaultToAny(false, 10, 20)).toBe(false);
    });
  
    test('should return the first valid default value', () => {
      expect(defaultToAny(undefined, 10, 20)).toBe(10);
      expect(defaultToAny(undefined, null, 20)).toBe(20);
    });
  
    test('should handle all invalid values', () => {
      expect(defaultToAny(undefined, null, undefined)).toBeNull();
      expect(defaultToAny(null, undefined, null)).toBeUndefined();
    });
  
    test('should handle empty default values', () => {
      expect(defaultToAny(undefined)).toBeUndefined();
      expect(defaultToAny(null)).toBeNull();
    });
  });