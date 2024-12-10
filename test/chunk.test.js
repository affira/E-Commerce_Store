import chunk from '../src/chunk.js';

describe('chunk', () => {
  test('should create chunks when array length equals chunk size', () => {
    expect(chunk(['a', 'b'], 2)).toEqual([['a', 'b']]);
    expect(chunk(['a'], 1)).toEqual([['a']]);
  });

  test('should handle incomplete chunks', () => {
    expect(chunk(['a', 'b', 'c'], 2)).toEqual([['c', undefined]]);
  });

  test('should handle empty arrays', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle null/undefined arrays', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('should handle invalid sizes', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('should use size of 1 when no size specified', () => {
    expect(chunk([1])).toEqual([[1]]);
  });

  test('should handle non-integer sizes', () => {
    expect(chunk([1, 2, 3], 2.9)).toEqual([[3, undefined]]);
    expect(chunk([1, 2, 3], 2.1)).toEqual([[3, undefined]]);
  });

  test('should handle larger arrays', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[5, undefined]]);
  });
});