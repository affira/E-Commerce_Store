import map from '../src/map.js';

describe('map', () => {
  test('should map values using iteratee', () => {
    const square = n => n * n;
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  test('should provide correct arguments to iteratee', () => {
    const spy = jest.fn();
    map(['a', 'b'], spy);
    expect(spy).toHaveBeenCalledWith('a', 0, ['a', 'b']);
    expect(spy).toHaveBeenCalledWith('b', 1, ['a', 'b']);
  });

  test('should handle null/undefined arrays', () => {
    expect(map(null, x => x)).toEqual([]);
    expect(map(undefined, x => x)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(map([], x => x)).toEqual([]);
  });

  test('should handle array holes', () => {
    // eslint-disable-next-line no-sparse-arrays
    const result = map([1,, 3], x => x);
    expect(result).toEqual([1, undefined, 3]);
  });

  test('should handle complex transformations', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }];
    expect(map(objects, x => x.n)).toEqual([1, 2]);
  });
});