import eq from '../src/eq.js';

describe('eq', () => {
  test('should perform SameValueZero comparison', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBe(true);
    expect(eq(object, { 'a': 1 })).toBe(false);
  });

  test('should handle primitive values', () => {
    expect(eq('a', 'a')).toBe(true);
    expect(eq('a', Object('a'))).toBe(true);  // == coerces Object('a') to 'a'
    expect(eq(1, 1)).toBe(true);
    expect(eq(1, Object(1))).toBe(true);  // == coerces Object(1) to 1
  });

  test('should handle NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(NaN, undefined)).toBe(false);
    expect(eq(NaN, null)).toBe(false);
    expect(eq(NaN, 0)).toBe(false);
    expect(eq(NaN, '')).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, undefined)).toBe(true);  // == considers null and undefined equal
    expect(eq(undefined, null)).toBe(true);  // == considers null and undefined equal
  });

  test('should handle zero values', () => {
    expect(eq(0, -0)).toBe(true);
    expect(eq(-0, 0)).toBe(true);
    expect(eq(0, '0')).toBe(true);  // loose equality coerces string to number
    expect(eq(-0, '0')).toBe(true);
  });

  test('should handle special numeric comparisons', () => {
    expect(eq(Number(1), 1)).toBe(true);
    expect(eq(new Number(1), 1)).toBe(true);  // == coerces Number object to primitive
    expect(eq(Number(1), Number(1))).toBe(true);
    expect(eq(new Number(1), new Number(1))).toBe(false);  // Different objects are not equal
  });
});