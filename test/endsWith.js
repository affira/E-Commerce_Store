import endsWith from '../src/endsWith.js';

describe('endsWith', () => {
    test('should check string endings', () => {
      expect(endsWith('abc', 'c')).toBe(true);
      expect(endsWith('abc', 'b')).toBe(false);
      expect(endsWith('abc', 'b', 2)).toBe(true);
    });
  
    test('should handle positions', () => {
      expect(endsWith('abc', 'b', 2)).toBe(true);
      expect(endsWith('abc', 'c', 3)).toBe(true);
      expect(endsWith('abc', 'a', 1)).toBe(true);
    });
  
    test('should handle invalid positions', () => {
      expect(endsWith('abc', 'c', -1)).toBe(false);
      expect(endsWith('abc', 'c', NaN)).toBe(false);
      expect(endsWith('abc', 'c', 5)).toBe(true);
    });
  
    test('should handle empty strings', () => {
      expect(endsWith('', '')).toBe(true);
      expect(endsWith('abc', '')).toBe(true);
      expect(endsWith('', 'abc')).toBe(false);
    });
  });