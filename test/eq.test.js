import eq from '../src/eq.js';

describe('eq', () => {
    test('should perform SameValueZero comparison', () => {
      const object = { 'a': 1 };
      expect(eq(object, object)).toBe(true);
      expect(eq(object, { 'a': 1 })).toBe(false);
    });
  
    test('should handle primitive values', () => {
      expect(eq('a', 'a')).toBe(true);
      expect(eq('a', Object('a'))).toBe(false);
      expect(eq(1, 1)).toBe(true);
      expect(eq(1, Object(1))).toBe(false);
    });
  
    test('should handle NaN', () => {
      expect(eq(NaN, NaN)).toBe(true);
      expect(eq(NaN, undefined)).toBe(false);
    });
  
    test('should handle null and undefined', () => {
      expect(eq(null, null)).toBe(true);
      expect(eq(undefined, undefined)).toBe(true);
      expect(eq(null, undefined)).toBe(false);
    });
  });