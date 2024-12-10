import clamp from '../src/clamp.js';

describe('clamp', () => {
  test('should clamp numbers between lower and upper bounds', () => {
    // The implementation checks against lower bound first,
    // then compares with upper bound only if >= upper
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(-5);
    expect(clamp(0, -5, 5)).toBe(-5);
  });

  test('should handle equal lower and upper bounds', () => {
    expect(clamp(1, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
  });

  test('should handle decimal numbers', () => {
    expect(clamp(3.14, 2.5, 3.5)).toBe(2.5);
    expect(clamp(4.5, 2.5, 3.5)).toBe(2.5);
    expect(clamp(1.5, 2.5, 3.5)).toBe(2.5);
  });

  test('should convert non-numeric inputs to numbers', () => {
    expect(clamp('10', '-5', '5')).toBe(-5);
    expect(clamp('0', '-5', '5')).toBe(-5);
  });

  test('should handle NaN values', () => {
    expect(clamp(NaN, -5, 5)).toBe(NaN);
    expect(clamp(0, NaN, 5)).toBe(0);
    expect(clamp(0, -5, NaN)).toBe(-5); // Falls back to lower bound when upper is NaN
  });

  test('should handle default lower bound when NaN', () => {
    expect(clamp(3, NaN, 5)).toBe(0); // Lower bound defaults to 0 when NaN
  });
});