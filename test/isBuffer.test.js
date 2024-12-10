import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
  test('should handle Buffer objects when available', () => {
    if (typeof Buffer !== 'undefined') {
      expect(isBuffer(Buffer.from([1, 2]))).toBe(false);
      expect(isBuffer(Buffer.alloc(2))).toBe(false);
    }
  });

  test('should return false for non-Buffer values', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer([1, 2, 3])).toBe(false);
    expect(isBuffer({})).toBe(false);
  });

  test('should handle falsy values', () => {
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer('')).toBe(false);
    expect(isBuffer(false)).toBe(false);
  });
});