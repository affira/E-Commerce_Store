import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {
  test('should identify typed arrays', () => {
    expect(isTypedArray(new Int8Array(2))).toBe(true);
    expect(isTypedArray(new Uint8Array(2))).toBe(true);
    expect(isTypedArray(new Uint8ClampedArray(2))).toBe(true);
    expect(isTypedArray(new Int16Array(2))).toBe(true);
    expect(isTypedArray(new Uint16Array(2))).toBe(true);
    expect(isTypedArray(new Int32Array(2))).toBe(true);
    expect(isTypedArray(new Uint32Array(2))).toBe(true);
    expect(isTypedArray(new Float32Array(2))).toBe(true);
    expect(isTypedArray(new Float64Array(2))).toBe(true);
  });

  test('should return false for non-typed arrays', () => {
    expect(isTypedArray([])).toBe(false);
    expect(isTypedArray({})).toBe(false);
    expect(isTypedArray(null)).toBe(false);
    expect(isTypedArray(undefined)).toBe(false);
    expect(isTypedArray(new Date())).toBe(false);
    expect(isTypedArray(new RegExp(''))).toBe(false);
  });

  // Additional Tests
  test('should return false for array-like objects', () => {
    expect(isTypedArray({ length: 10 })).toBe(false);
    expect(isTypedArray({ length: 0, 0: 'test' })).toBe(false);
  });

  test('should return false for non-array objects with a length property', () => {
    const objWithLength = { length: 10, name: 'non-array' };
    expect(isTypedArray(objWithLength)).toBe(false);
  });

  test('should return false for unusual primitive values', () => {
    expect(isTypedArray(NaN)).toBe(false);
    expect(isTypedArray(Infinity)).toBe(false);
    expect(isTypedArray(true)).toBe(false);
    expect(isTypedArray(false)).toBe(false);
  });
});
