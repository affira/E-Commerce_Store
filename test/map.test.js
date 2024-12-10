import map from '../src/map.js';

describe('map', () => {
  test('should map values using iteratee', () => {
    const square = n => n * n;
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  test('should provide correct arguments to iteratee', () => {
    const args = [];
    const iteratee = (value, index, array) => {
      args.push({ value, index, array });
      return value;
    };
    
    const array = ['a', 'b'];
    map(array, iteratee);
    expect(args).toEqual([
      { value: 'a', index: 0, array: array },
      { value: 'b', index: 1, array: array }
    ]);
  });

  test('should handle null/undefined arrays', () => {
    expect(map(null, x => x)).toEqual([]);
    expect(map(undefined, x => x)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(map([], x => x)).toEqual([]);
  });

  test('should handle sparse arrays', () => {
    // eslint-disable-next-line no-sparse-arrays
    const array = [1,, 3];
    const result = map(array, x => x);
    expect(result).toEqual([1, undefined, 3]);
  });

  test('should handle complex transformations', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }];
    expect(map(objects, x => x.n)).toEqual([1, 2]);
  });

  test('should maintain array length', () => {
    const array = new Array(3);
    const result = map(array, x => x);
    expect(result.length).toBe(3);
    expect(result).toEqual([undefined, undefined, undefined]);
  });

  test('should handle array-like objects with length property', () => {
    const arrayLike = { 0: 'a', 1: 'b', length: 2 };
    expect(map(arrayLike, x => x.toUpperCase())).toEqual(['A', 'B']);
  });
});