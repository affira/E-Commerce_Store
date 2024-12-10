import add from '../src/add.js';

describe('add', () => {
  // Test for adding two positive numbers
  test('should add two positive numbers correctly', () => {
    expect(add(6, 4)).toBe(10); // 6 + 4 = 10
    expect(add(2, 3)).toBe(5);  // 2 + 3 = 5
  });

  // Test for handling negative numbers
  test('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3); // -1 + (-2) = -3
    expect(add(-5, 3)).toBe(-2);  // -5 + 3 = -2
    expect(add(5, -3)).toBe(2);   // 5 + (-3) = 2
  });

  // Test for handling zero
  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);    // 0 + 5 = 5
    expect(add(5, 0)).toBe(5);    // 5 + 0 = 5
    expect(add(0, 0)).toBe(0);    // 0 + 0 = 0
  });

  // Test for handling decimal numbers
  test('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5); // 0.1 + 0.2 = 0.3
    expect(add(1.5, 2.7)).toBeCloseTo(4.2, 5); // 1.5 + 2.7 = 4.2
  });

  // Test for handling large numbers
  test('should handle large numbers', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(add(Number.MIN_SAFE_INTEGER, -1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });

  // Error cases - Test for handling non-number inputs
  test('should handle non-number inputs', () => {
    expect(add(Number('6'), Number('4'))).toBe(10);  // Explicitly convert strings to numbers (6 + 4 = 10)
    expect(add(null, 1)).toBe(1);    // Should treat null as 0 (null + 1 = 1)
    expect(add(undefined, 1)).toBe(1); // Should treat undefined as 0 (undefined + 1 = 1)
    expect(add([], 1)).toBe(1);      // Should treat empty array as 0 (0 + 1 = 1)
  });
});
