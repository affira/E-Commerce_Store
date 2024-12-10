import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
    test('should return true for boolean primitives', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
  
    test('should return true for Boolean objects', () => {
      expect(isBoolean(new Boolean(true))).toBe(true);
      expect(isBoolean(new Boolean(false))).toBe(true);
    });
  
    test('should return false for non-boolean values', () => {
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(0)).toBe(false);
      expect(isBoolean('')).toBe(false);
      expect(isBoolean([])).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean('false')).toBe(false);
      expect(isBoolean(new String('true'))).toBe(false);
    });
  });