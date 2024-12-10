import chunk from '../src/chunk.js';

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
    expect(chunk([1, 2, 3], 0)).toEqual([]);  // Invalid size, should return an empty array
    expect(chunk([1, 2, 3], -1)).toEqual([]); // Invalid size, should return an empty array
  });

  test('should handle null/undefined arrays', () => {
    expect(chunk(null, 2)).toEqual([]);       // Null array, should return empty
    expect(chunk(undefined, 2)).toEqual([]);  // Undefined array, should return empty
  });
});
