import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
    test('should handle Buffer objects when available', () => {
      // Since Buffer might not be available in all environments
      if (typeof Buffer !== 'undefined') {
        expect(isBuffer(new Buffer(2))).toBe(true);
        expect(isBuffer(Buffer.alloc(2))).toBe(true);
      }
    });
  
    test('should return false for non-Buffer values', () => {
      expect(isBuffer(new Uint8Array(2))).toBe(false);
      expect(isBuffer(null)).toBe(false);
      expect(isBuffer(undefined)).toBe(false);
      expect(isBuffer([1, 2, 3])).toBe(false);
      expect(isBuffer({})).toBe(false);
    });
  });