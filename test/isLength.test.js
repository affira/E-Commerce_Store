import isLength from '../src/isLength.js';

/** Used as reference for the maximum safe integer */
const MAX_SAFE_INTEGER = 9007199254740991;

describe('isLength', () => {
  test('should return true for valid lengths', () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(3)).toBe(true);
    expect(isLength(MAX_SAFE_INTEGER)).toBe(true);
  });

  test('should return false for invalid lengths', () => {
    expect(isLength(-1)).toBe(false);
    expect(isLength(3.14)).toBe(false);
    expect(isLength(Number.MAX_VALUE)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
  });

  test('should return false for non-numbers', () => {
    expect(isLength('3')).toBe(false);
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);
    expect(isLength({})).toBe(false);
    expect(isLength([])).toBe(false);
    expect(isLength(true)).toBe(false);
  });
});