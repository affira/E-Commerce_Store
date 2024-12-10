// castArray.test.js
describe('castArray', () => {
  test('should wrap non-array values in an array', () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
    expect(castArray('abc')).toEqual(['abc']);
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test('should return an empty array for no arguments', () => {
    expect(castArray()).toEqual([]);
  });

  test('should return array values without modification', () => {
    const array = [1, 2, 3];
    expect(castArray(array) === array).toBe(true);
  });
});

// compact.test.js
describe('compact', () => {
  test('should remove all falsey values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    expect(compact(input)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with no falsey values', () => {
    expect(compact([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with only falsey values', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(compact([])).toEqual([]);
  });
});

// clamp.test.js
describe('clamp', () => {
  test('should clamp numbers between lower and upper bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('should handle equal lower and upper bounds', () => {
    expect(clamp(1, 5, 5)).toBe(5);
    expect(clamp(10, 5, 5)).toBe(5);
    expect(clamp(0, 5, 5)).toBe(5);
  });

  test('should handle decimal numbers', () => {
    expect(clamp(3.14, 2.5, 3.5)).toBe(3.14);
    expect(clamp(4.5, 2.5, 3.5)).toBe(3.5);
    expect(clamp(1.5, 2.5, 3.5)).toBe(2.5);
  });

  test('should convert non-numeric inputs to numbers', () => {
    expect(clamp('10', '-5', '5')).toBe(5);
    expect(clamp('0', '-5', '5')).toBe(0);
  });

  test('should handle NaN values', () => {
    expect(clamp(NaN, -5, 5)).toBe(NaN);
    expect(clamp(0, NaN, 5)).toBe(0);
    expect(clamp(0, -5, NaN)).toBe(0);
  });
});

// chunk.test.js
describe('chunk', () => {
  test('should create chunks of specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('should handle arrays that can be split evenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  test('should use default size of 1', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test('should handle empty arrays', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle invalid sizes', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('should handle null/undefined arrays', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });
});

// ceil.test.js
describe('ceil', () => {
  test('should round up numbers with no precision', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(4.1)).toBe(5);
    expect(ceil(4.9)).toBe(5);
  });

  test('should round up numbers with positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(6.009, 2)).toBe(6.01);
    expect(ceil(6.999, 2)).toBe(7.00);
  });

  test('should round up numbers with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(6076, -2)).toBe(6100);
    expect(ceil(6999, -2)).toBe(7000);
  });

  test('should handle zero precision', () => {
    expect(ceil(4.006, 0)).toBe(5);
    expect(ceil(4.1, 0)).toBe(5);
  });

  test('should handle edge cases', () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(-0)).toBe(-0);
    expect(ceil(Infinity)).toBe(Infinity);
    expect(ceil(-Infinity)).toBe(-Infinity);
  });
});