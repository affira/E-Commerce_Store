import add from '../src/add.js';

describe('add', () => {
  test('should add two positive numbers correctly', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(2, 3)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-5, 3)).toBe(-2);
    expect(add(5, -3)).toBe(2);
  });

  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  test('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(1.5, 2.7)).toBeCloseTo(4.2);
  });

  test('should handle large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  // Error cases
  test('should handle non-number inputs', () => {
    expect(add('6', '4')).toBe(10); // Should convert strings to numbers
    expect(add(null, 1)).toBe(1); // Should treat null as 0
    expect(add(undefined, 1)).toBe(1); // Should treat undefined as 0
    expect(add([], 1)).toBe(1); // Should treat empty array as 0
  });
});